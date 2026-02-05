const STORAGE_KEY = "tjis_interview_bank_v1";

function readState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch {
    return null;
  }
}

function writeState(next) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

function normalizeText(s) {
  return String(s ?? "")
    .toLowerCase()
    .replaceAll(/\s+/g, " ")
    .trim();
}

function clampIndex(idx, total) {
  if (!Number.isFinite(idx)) return 0;
  if (total <= 0) return 0;
  const mod = ((Math.trunc(idx) % total) + total) % total;
  return mod;
}

function ensureDialogPolyfill(dialogEl) {
  if (typeof dialogEl.showModal === "function") return;
  dialogEl.setAttribute("open", "");
  dialogEl.showModal = () => dialogEl.setAttribute("open", "");
  dialogEl.close = () => dialogEl.removeAttribute("open");
}

async function fetchJson(path) {
  const res = await fetch(path, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return await res.json();
}

const els = {
  metricCount: document.getElementById("metricCount"),
  metricFav: document.getElementById("metricFav"),
  progress: document.getElementById("progress"),
  badgeFav: document.getElementById("badgeFav"),
  questionText: document.getElementById("questionText"),
  answerText: document.getElementById("answerText"),
  favButton: document.getElementById("favButton"),
  prevButton: document.getElementById("prevButton"),
  nextButton: document.getElementById("nextButton"),
  searchButton: document.getElementById("searchButton"),
  searchModal: document.getElementById("searchModal"),
  searchForm: document.getElementById("searchForm"),
  searchInput: document.getElementById("searchInput"),
  searchResults: document.getElementById("searchResults"),
  searchCloseButton: document.getElementById("searchCloseButton")
};

ensureDialogPolyfill(els.searchModal);

const now = Date.now();
function upgradeState(raw) {
  const base = {
    lastIndex: 0,
    favorites: {},
    updatedAt: now
  };
  if (!raw || typeof raw !== "object") return base;
  const lastIndex = Number.isFinite(raw.lastIndex) ? raw.lastIndex : 0;
  const favorites = raw.favorites && typeof raw.favorites === "object" ? raw.favorites : {};
  return { ...base, lastIndex, favorites };
}

const state = upgradeState(readState());

let questions = [];
let currentIndex = 0;

function setCurrentIndex(idx) {
  currentIndex = clampIndex(idx, questions.length);
  state.lastIndex = currentIndex;
  state.updatedAt = Date.now();
  writeState(state);
}

function toggleFav() {
  const q = questions[currentIndex];
  if (!q) return;
  const id = q.id;
  if (state.favorites[id]) delete state.favorites[id];
  else state.favorites[id] = true;
  state.updatedAt = Date.now();
  writeState(state);
  render();
}

function renderMetrics() {
  els.metricCount.textContent = questions.length ? String(questions.length) : "—";
  els.metricFav.textContent = String(Object.keys(state.favorites ?? {}).length);
}

function renderHeaderBadges() {
  const q = questions[currentIndex];
  if (!q) return;
  els.badgeFav.classList.toggle("subtle", !state.favorites[q.id]);
}

function renderQuestion() {
  const q = questions[currentIndex];
  if (!q) {
    els.questionText.textContent = "题库为空";
    els.answerText.textContent = "";
    els.progress.textContent = "";
    return;
  }

  els.progress.textContent = `第 ${currentIndex + 1} / ${questions.length} 题`;
  els.questionText.textContent = q.question ?? "";

  const favActive = !!state.favorites[q.id];

  els.favButton.classList.toggle("active", favActive);
  els.favButton.textContent = favActive ? "已收藏" : "收藏";
}

function renderAnswer() {
  const q = questions[currentIndex];
  if (!q) return;
  els.answerText.textContent = q.answer ?? "";
}

function render() {
  renderMetrics();
  renderHeaderBadges();
  renderQuestion();
  renderAnswer();
}

function openSearchModal() {
  els.searchInput.value = "";
  els.searchResults.innerHTML = "";
  els.searchModal.showModal();
  setTimeout(() => els.searchInput.focus(), 50);
}

function closeSearchModal() {
  els.searchModal.close();
}

function buildSearchIndex() {
  return questions.map((q, index) => ({
    id: q.id,
    index,
    haystack: normalizeText(`${q.question ?? ""}`)
  }));
}

let searchIndex = [];

function renderSearchResults(results) {
  if (!results.length) {
    els.searchResults.innerHTML =
      '<div class="result"><div class="result-title">没有匹配结果</div><div class="result-meta">试试换个关键词</div></div>';
    return;
  }

  const frag = document.createDocumentFragment();
  for (const r of results.slice(0, 50)) {
    const q = questions[r.index];
    const el = document.createElement("div");
    el.className = "result";
    el.dataset.index = String(r.index);
    const title = document.createElement("div");
    title.className = "result-title";
    title.textContent = q?.question ?? "";
    const meta = document.createElement("div");
    meta.className = "result-meta";
    meta.textContent = `第 ${r.index + 1} 题`;
    el.append(title, meta);
    el.addEventListener("click", () => {
      setCurrentIndex(r.index);
      closeSearchModal();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    frag.appendChild(el);
  }

  els.searchResults.innerHTML = "";
  els.searchResults.appendChild(frag);
}

function doSearch(keyword) {
  const kw = normalizeText(keyword);
  if (!kw) {
    els.searchResults.innerHTML = "";
    return;
  }

  const parts = kw.split(" ").filter(Boolean);
  const matches = [];
  for (const entry of searchIndex) {
    let ok = true;
    for (const p of parts) {
      if (!entry.haystack.includes(p)) {
        ok = false;
        break;
      }
    }
    if (ok) matches.push(entry);
  }
  renderSearchResults(matches);
}

els.nextButton.addEventListener("click", () => {
  setCurrentIndex(currentIndex + 1);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

els.prevButton.addEventListener("click", () => {
  setCurrentIndex(currentIndex - 1);
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

els.favButton.addEventListener("click", toggleFav);

els.searchButton.addEventListener("click", openSearchModal);
els.searchCloseButton.addEventListener("click", closeSearchModal);

els.searchInput.addEventListener("input", () => doSearch(els.searchInput.value));

async function init() {
  const qData = await fetchJson("./data/questions.json");
  const qList = Array.isArray(qData?.questions) ? qData.questions : [];
  questions = qList
    .map((q, i) => ({
      id: String(q?.id ?? `q-${String(i + 1).padStart(3, "0")}`),
      question: String(q?.question ?? "").trim(),
      answer: String(q?.answer ?? "").trim()
    }))
    .filter((q) => q.question.length > 0);

  currentIndex = clampIndex(state.lastIndex ?? 0, questions.length);
  searchIndex = buildSearchIndex();
  render();
}

init().catch(() => {
  els.questionText.textContent = "加载失败，请检查文件是否完整。";
});
