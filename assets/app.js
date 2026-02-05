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
  metricFavCard: document.getElementById("metricFavCard"),
  heroTitle: document.getElementById("heroTitle"),
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
  searchCloseButton: document.getElementById("searchCloseButton"),
  favoritesModal: document.getElementById("favoritesModal"),
  favoritesForm: document.getElementById("favoritesForm"),
  favoritesCount: document.getElementById("favoritesCount"),
  favoritesResults: document.getElementById("favoritesResults"),
  favoritesCloseButton: document.getElementById("favoritesCloseButton"),
  schoolMenuButton: document.getElementById("schoolMenuButton"),
  schoolMenuPanel: document.getElementById("schoolMenuPanel"),
  schoolMenuList: document.getElementById("schoolMenuList")
};

ensureDialogPolyfill(els.searchModal);
ensureDialogPolyfill(els.favoritesModal);

const now = Date.now();
function upgradeState(raw) {
  const base = {
    currentSchoolId: "",
    lastIndexBySchool: {},
    favoritesBySchool: {},
    legacyFavorites: null,
    legacyLastIndex: 0,
    updatedAt: now
  };
  if (!raw || typeof raw !== "object") return base;
  const legacyFavorites = raw.favorites && typeof raw.favorites === "object" ? raw.favorites : null;
  const legacyLastIndex = Number.isFinite(raw.lastIndex) ? raw.lastIndex : 0;
  const currentSchoolId = typeof raw.currentSchoolId === "string" ? raw.currentSchoolId : "";
  const lastIndexBySchool = raw.lastIndexBySchool && typeof raw.lastIndexBySchool === "object" ? raw.lastIndexBySchool : {};
  const favoritesBySchool =
    raw.favoritesBySchool && typeof raw.favoritesBySchool === "object" ? raw.favoritesBySchool : {};
  return { ...base, currentSchoolId, lastIndexBySchool, favoritesBySchool, legacyFavorites, legacyLastIndex };
}

const state = upgradeState(readState());

let schools = [];
let currentSchoolId = "";
let currentQuestions = [];
let currentIndex = 0;

function getSchoolById(id) {
  return schools.find((school) => school.id === id);
}

function getFavoritesMap() {
  if (!state.favoritesBySchool[currentSchoolId]) state.favoritesBySchool[currentSchoolId] = {};
  return state.favoritesBySchool[currentSchoolId];
}

function setCurrentSchool(id, nextIndex) {
  const nextSchool = getSchoolById(id);
  if (!nextSchool) return;
  currentSchoolId = nextSchool.id;
  currentQuestions = nextSchool.questions ?? [];
  state.currentSchoolId = currentSchoolId;
  if (!state.lastIndexBySchool[currentSchoolId]) state.lastIndexBySchool[currentSchoolId] = 0;
  currentIndex = clampIndex(
    Number.isFinite(nextIndex) ? nextIndex : state.lastIndexBySchool[currentSchoolId],
    currentQuestions.length
  );
  state.updatedAt = Date.now();
  writeState(state);
  renderSchoolMenu();
  render();
}

function setCurrentIndex(idx) {
  currentIndex = clampIndex(idx, currentQuestions.length);
  state.lastIndexBySchool[currentSchoolId] = currentIndex;
  state.updatedAt = Date.now();
  writeState(state);
}

function toggleFav() {
  const q = currentQuestions[currentIndex];
  if (!q) return;
  const id = q.id;
  const favorites = getFavoritesMap();
  if (favorites[id]) delete favorites[id];
  else favorites[id] = true;
  state.updatedAt = Date.now();
  writeState(state);
  render();
}

function renderMetrics() {
  els.metricCount.textContent = currentQuestions.length ? String(currentQuestions.length) : "—";
  els.metricFav.textContent = String(Object.keys(getFavoritesMap()).length);
}

function renderHeaderBadges() {
  const q = currentQuestions[currentIndex];
  if (!q) return;
  els.badgeFav.classList.toggle("subtle", !getFavoritesMap()[q.id]);
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  if (!q) {
    els.questionText.textContent = "题库为空";
    els.answerText.textContent = "";
    els.progress.textContent = "";
    return;
  }

  els.progress.textContent = `第 ${currentIndex + 1} / ${currentQuestions.length} 题`;
  els.questionText.textContent = q.question ?? "";

  const favActive = !!getFavoritesMap()[q.id];

  els.favButton.classList.toggle("active", favActive);
  els.favButton.textContent = favActive ? "已收藏" : "收藏";
}

function renderAnswer() {
  const q = currentQuestions[currentIndex];
  if (!q) return;
  els.answerText.textContent = q.answer ?? "";
}

function render() {
  const currentSchool = getSchoolById(currentSchoolId);
  els.heroTitle.textContent = currentSchool ? `${currentSchool.name}` : "某某学校";
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

function openFavoritesModal() {
  renderFavoritesList();
  els.favoritesModal.showModal();
}

function closeFavoritesModal() {
  els.favoritesModal.close();
}

function openSchoolMenu() {
  els.schoolMenuPanel.classList.remove("hidden");
}

function closeSchoolMenu() {
  els.schoolMenuPanel.classList.add("hidden");
}

function toggleSchoolMenu() {
  if (els.schoolMenuPanel.classList.contains("hidden")) openSchoolMenu();
  else closeSchoolMenu();
}

function renderSchoolMenu() {
  if (!els.schoolMenuList) return;
  els.schoolMenuList.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (const school of schools) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "menu-item";
    if (school.id === currentSchoolId) btn.classList.add("active");
    btn.textContent = school.menuName || school.name;
    btn.addEventListener("click", () => {
      setCurrentSchool(school.id);
      closeSchoolMenu();
    });
    frag.appendChild(btn);
  }
  els.schoolMenuList.appendChild(frag);
}

function renderFavoritesList() {
  const favorites = getFavoritesMap();
  const favoriteIds = new Set(Object.keys(favorites).filter((id) => favorites[id]));
  const results = currentQuestions
    .map((q, index) => ({ q, index }))
    .filter(({ q }) => favoriteIds.has(q.id));

  const currentSchool = getSchoolById(currentSchoolId);
  els.favoritesCount.textContent = currentSchool ? `${currentSchool.name} · 共 ${results.length} 题` : `共 ${results.length} 题`;

  if (!results.length) {
    els.favoritesResults.innerHTML =
      '<div class="result"><div class="result-title">暂无收藏</div><div class="result-meta">点击“收藏”即可加入列表</div></div>';
    return;
  }

  const frag = document.createDocumentFragment();
  for (const item of results) {
    const el = document.createElement("div");
    el.className = "result";
    el.dataset.index = String(item.index);
    const title = document.createElement("div");
    title.className = "result-title";
    title.textContent = item.q?.question ?? "";
    const meta = document.createElement("div");
    meta.className = "result-meta";
    meta.textContent = `第 ${item.index + 1} 题`;
    el.append(title, meta);
    el.addEventListener("click", () => {
      setCurrentIndex(item.index);
      closeFavoritesModal();
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    frag.appendChild(el);
  }

  els.favoritesResults.innerHTML = "";
  els.favoritesResults.appendChild(frag);
}

function buildSearchIndex() {
  return schools.flatMap((school) =>
    (school.questions ?? []).map((q, index) => ({
      id: q.id,
      schoolId: school.id,
      schoolName: school.name,
      index,
      haystack: normalizeText(`${q.question ?? ""}`)
    }))
  );
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
    const school = getSchoolById(r.schoolId);
    const q = school?.questions?.[r.index];
    const el = document.createElement("div");
    el.className = "result";
    el.dataset.index = String(r.index);
    const title = document.createElement("div");
    title.className = "result-title";
    title.textContent = q?.question ?? "";
    const meta = document.createElement("div");
    meta.className = "result-meta";
    meta.textContent = `${r.schoolName ?? "学校"} · 第 ${r.index + 1} 题`;
    el.append(title, meta);
    el.addEventListener("click", () => {
      setCurrentSchool(r.schoolId, r.index);
      closeSearchModal();
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
els.metricFavCard.addEventListener("click", openFavoritesModal);
els.schoolMenuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleSchoolMenu();
});

els.searchButton.addEventListener("click", openSearchModal);
els.searchCloseButton.addEventListener("click", closeSearchModal);
els.favoritesCloseButton.addEventListener("click", closeFavoritesModal);

els.searchInput.addEventListener("input", () => doSearch(els.searchInput.value));

document.addEventListener("click", (event) => {
  if (els.schoolMenuPanel.classList.contains("hidden")) return;
  const target = event.target;
  if (els.schoolMenuPanel.contains(target) || els.schoolMenuButton.contains(target)) return;
  closeSchoolMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeSchoolMenu();
});

async function init() {
  const qData = await fetchJson("./data/questions.json");
  if (Array.isArray(qData?.schools)) {
    schools = qData.schools
      .map((school, schoolIndex) => ({
        id: String(school?.id ?? `school-${schoolIndex + 1}`),
        name: String(school?.name ?? `学校${schoolIndex + 1}`),
        menuName: String(school?.menuName ?? school?.name ?? `学校${schoolIndex + 1}`),
        questions: Array.isArray(school?.questions)
          ? school.questions
              .map((q, i) => ({
                id: String(q?.id ?? `q-${String(i + 1).padStart(3, "0")}`),
                question: String(q?.question ?? "").trim(),
                answer: String(q?.answer ?? "").trim()
              }))
              .filter((q) => q.question.length > 0)
          : []
      }))
      .filter((school) => school.questions.length > 0 || school.name.length > 0);
  } else {
    const qList = Array.isArray(qData?.questions) ? qData.questions : [];
    const normalizedQuestions = qList
      .map((q, i) => ({
        id: String(q?.id ?? `q-${String(i + 1).padStart(3, "0")}`),
        question: String(q?.question ?? "").trim(),
        answer: String(q?.answer ?? "").trim()
      }))
      .filter((q) => q.question.length > 0);
    schools = [
      {
        id: "school-1",
        name: "某某学校",
        menuName: "某某学校",
        questions: normalizedQuestions
      }
    ];
  }

  if (state.legacyFavorites && schools.length) {
    const firstId = schools[0].id;
    if (!state.favoritesBySchool[firstId]) state.favoritesBySchool[firstId] = {};
    state.favoritesBySchool[firstId] = { ...state.legacyFavorites };
    state.lastIndexBySchool[firstId] = Number.isFinite(state.legacyLastIndex) ? state.legacyLastIndex : 0;
    state.legacyFavorites = null;
    state.legacyLastIndex = 0;
    writeState(state);
  }

  const defaultSchoolId = schools[0]?.id ?? "";
  const preferredSchoolId = state.currentSchoolId && getSchoolById(state.currentSchoolId) ? state.currentSchoolId : "";
  currentSchoolId = preferredSchoolId || defaultSchoolId;
  currentQuestions = getSchoolById(currentSchoolId)?.questions ?? [];
  currentIndex = clampIndex(state.lastIndexBySchool[currentSchoolId] ?? 0, currentQuestions.length);
  renderSchoolMenu();
  searchIndex = buildSearchIndex();
  render();
}

init().catch(() => {
  els.questionText.textContent = "加载失败，请检查文件是否完整。";
});
