(function() {
  function buildMetaItems(items) {
    return items.map(function(item) {
      return '<span>' + item + '</span>';
    }).join('');
  }

  function buildCta(data) {
    return '' +
      '<section class="section section--warm">' +
        '<div class="container container--narrow reveal" style="text-align:center;">' +
          '<div class="section-kicker en" style="margin-bottom:12px;">' + data.kicker + '</div>' +
          '<h2 class="section-title" style="font-size:clamp(1.4rem,3vw,1.9rem);">' + data.title + '</h2>' +
          '<p class="section-desc" style="margin-bottom:28px;">' + data.desc + '</p>' +
          '<a class="btn btn-primary" href="contact.html">' + data.button + '</a>' +
        '</div>' +
      '</section>';
  }

  function buildArticleInner(data) {
    return '' +
      '<section class="page-hero">' +
        '<div class="container container--narrow">' +
          '<a class="article-back-link" href="articles.html">' +
            '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>' +
            data.backLabel +
          '</a>' +
          '<div class="section-kicker en">' + data.kicker + '</div>' +
          '<h1 class="section-title" style="font-size:clamp(1.5rem,4vw,2.1rem);line-height:1.3;">' + data.title + '</h1>' +
          '<p style="font-size:1.05rem;color:var(--muted);font-style:italic;margin-top:12px;line-height:1.7;">' + data.subtitle + '</p>' +
          '<div class="article-page-meta">' + buildMetaItems(data.metaItems) + '</div>' +
        '</div>' +
      '</section>' +
      '<div class="article-cover">' +
        '<img loading="eager" fetchpriority="high" decoding="async" src="' + data.cover.src + '" alt="' + data.cover.alt + '"' + (data.cover.style ? ' style="' + data.cover.style + '"' : '') + ' />' +
      '</div>' +
      data.body +
      buildCta(data.cta);
  }

  var pages = {
    'article-shinagawa.html': {
      en: {
        title: 'Shinagawa International School Visit | KISSHO',
        description: 'A candid visit review of Shinagawa International School, from campus feel and academics to MAP testing and admissions pace.',
        html: buildArticleInner({
          backLabel: 'Back to Insights',
          kicker: 'School Visit · No.10',
          title: 'Shinagawa International School: <br>An In-Depth Visit',
          subtitle: 'Compact in scale, but thoughtfully built. Among the 15 Tokyo schools I visited, this was one of the most memorable.',
          metaItems: ['Betty · KISSHO', 'Visited January 2023', 'School Visit · Admissions Journey'],
          cover: { src: '品川/日本国际学校系列10-品川国际（中）_4_贝蒂星妈_来自小红书网页版.jpg', alt: 'Entrance to Shinagawa International School', style: 'object-position:center 78%;' },
          body: '' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<p>Before visiting, SIS did not look like the loudest name on the Tokyo school list. On paper it felt more like a practical option than a “dream” school.</p>' +
              '<p>That impression changed quickly on campus. The visit reminded me again that online reputation is only a rough signal. What matters is the fit between a family and a school.</p>' +
              '<p>If possible, visit with your child. One real visit often reveals more than dozens of rankings or parent threads.</p>' +
              '<h2>School Snapshot</h2>' +
              '<div class="school-facts-grid">' +
                '<div class="school-fact-item"><div class="school-fact-label">School</div><div class="school-fact-value">Shinagawa International School (SIS)</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">Curriculum</div><div class="school-fact-value">IB PYP / MYP, with high school opened in 2024 and DP in progress</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">Grades</div><div class="school-fact-value">Preschool to Grade 11</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">Enrollment</div><div class="school-fact-value">Around 400 students as of September 2023</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">International Ratio</div><div class="school-fact-value">Roughly 25%</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">Founded</div><div class="school-fact-value">1991</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">Campuses</div><div class="school-fact-value">Seaside Campus for Preschool-G2<br>Main Campus for G3-11</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">Admissions</div><div class="school-fact-value">Written assessment + interview</div></div>' +
              '</div>' +
              '<h2>What Stood Out</h2>' +
              '<p>SIS has been around since 1991, making it one of the earlier IB schools in Tokyo. The launch of the high school in 2024 is meaningful because a complete K-12 story changes how families evaluate continuity.</p>' +
              '<p>The two-campus arrangement also works better in reality than it sounds on paper: younger children stay at Seaside, while upper elementary through high school move to the Main Campus.</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="品川/日本国际学校系列10-品川国际（上）_1_贝蒂星妈_来自小红书网页版.jpg" alt="Students at SIS" /><p class="article-img-caption">SIS feels energetic and lived-in. The campus never felt staged for visitors.</p></div>' +
              '<h2>Admissions Team: Fast and Responsive</h2>' +
              '<p>The admissions officer who hosted me was quick, warm, and highly professional. That same speed showed up in school communication too: messages often received replies early the next morning.</p>' +
              '<p>In Tokyo parent circles, SIS has a reputation for moving fast. After visiting, I understood why.</p>' +
              '<div class="article-pullquote">“The right school is not just about fame. It is about whether the school and your family create the right chemistry.”</div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>Campus Tour: Compact, But Thought Through</h2>' +
              '<p>The elementary building is small, and the upper grades are housed nearby. Even so, SIS has clearly invested in making each space functional rather than decorative.</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="品川/日本国际学校系列10-品川国际（下）_6_贝蒂星妈_来自小红书网页版.jpg" alt="Classroom corridor at SIS" /><p class="article-img-caption">Student work fills the corridors. Learning is visible here.</p></div>' +
              '<p>One thing I liked immediately was the writing displayed outside classrooms. Even younger children were being asked to express an opinion and support it with reasons. It felt like real thinking, not template memorization.</p>' +
              '<p>The science room, music room, library, and project spaces all felt genuinely used. For a city school with limited footprint, SIS does a very good job of turning space into learning value.</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="品川/日本国际学校系列10-品川国际（下）_10_贝蒂星妈_来自小红书网页版.jpg" alt="Library at SIS" /><p class="article-img-caption">The library and project areas reinforce the school’s inquiry-based direction.</p></div>' +
              '<h2>Two Practical Strengths for Families</h2>' +
              '<p>First, SIS offers Chinese language learning. For Chinese-speaking families, this is a real advantage in a city where very few schools support mother-tongue maintenance in any formal way.</p>' +
              '<p>Second, the location across from Konami Sports Club is simply smart. SIS uses nearby infrastructure to solve a common city-campus problem: limited in-house sports space.</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="品川/日本国际学校系列10-品川国际（下）_3_贝蒂星妈_来自小红书网页版.jpg" alt="Chinese class at SIS" /><p class="article-img-caption">Chinese support and practical sports access both matter more than many families first realize.</p></div>' +
            '</div></div></section>' +
            '<section class="section section--warm"><div class="container container--narrow"><div class="article-content">' +
              '<h2>Admissions Rhythm</h2>' +
              '<p>SIS runs a fast process. In our case, only about two days passed from assessment and interview to the offer. The decision window was also short, so families need to be ready to move quickly.</p>' +
              '<p>The child interview and parent interview are separate. Parents should prepare seriously by reading the school website closely and understanding its inquiry language, values, and academic direction.</p>' +
              '<p>The written assessment uses MAP. The hardest part for many first-time candidates is not the questions themselves, but the unfamiliar adaptive-testing format.</p>' +
              '<div class="article-pullquote">“A first MAP score often reflects testing familiarity almost as much as academic level.”</div>' +
              '<h2>My Overall View</h2>' +
              '<p>SIS remains one of my personal favorites in Tokyo. It feels warm, practical, and operationally sharp. The school makes more of its footprint than many larger campuses do.</p>' +
              '<p>Its next big question is long-term high-school delivery. If the DP pathway lands well and university outcomes become stronger, SIS will be even more competitive.</p>' +
              '<p>Our family ultimately chose Seisen, but SIS stayed in my mind as the school that almost became our school. That says a great deal.</p>' +
            '</div></div></section>',
          cta: { kicker: 'Need Guidance?', title: 'Thinking About SIS or Other Tokyo Schools?', desc: 'We can help you compare fit, prepare school visits, and make sense of MAP, interviews, and admissions timing.', button: 'Talk With Us' }
        })
      },
      ja: {
        title: '品川インターナショナルスクール訪問記 | KISSHO',
        description: '品川インターナショナルスクールを、校風・設備・MAP・出願スピードまで保護者目線でまとめた訪問レポートです。',
        html: buildArticleInner({
          backLabel: '記事一覧へ戻る',
          kicker: '学校訪問 · 第10回',
          title: '品川インターナショナルスクール: <br>訪問レポート',
          subtitle: '規模は大きくなくても、設計がとても実務的。東京で見た学校の中でも印象に残る一校でした。',
          metaItems: ['Betty · KISSHO', '2023年1月訪問', '学校訪問 · 出願プロセス'],
          cover: { src: '品川/日本国际学校系列10-品川国际（中）_4_贝蒂星妈_来自小红书网页版.jpg', alt: '品川インターナショナルスクールの入口', style: 'object-position:center 78%;' },
          body: '' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<p>訪問前の SIS は、いわゆる「話題校」という印象ではありませんでした。実務的な候補の一つ、という位置づけに近かったです。</p>' +
              '<p>ただ、実際に足を運ぶと印象は大きく変わりました。学校選びはネット上の評判だけでは決まりません。家族との相性は現地でしか見えない部分があります。</p>' +
              '<p>可能なら、お子さまと一緒に訪問してください。一度の現地見学で見えることは想像以上に多いです。</p>' +
              '<h2>学校概要</h2>' +
              '<div class="school-facts-grid">' +
                '<div class="school-fact-item"><div class="school-fact-label">School</div><div class="school-fact-value">Shinagawa International School (SIS)</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">カリキュラム</div><div class="school-fact-value">IB PYP / MYP、高校部は 2024 年開設、DP 進行中</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">学年</div><div class="school-fact-value">Preschool 〜 Grade 11</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">在籍数</div><div class="school-fact-value">2023年9月時点で約400名</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">国際生比率</div><div class="school-fact-value">約25%</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">創立</div><div class="school-fact-value">1991年</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">キャンパス</div><div class="school-fact-value">Seaside Campus: Preschool-G2<br>Main Campus: G3-11</div></div>' +
                '<div class="school-fact-item"><div class="school-fact-label">選考</div><div class="school-fact-value">筆記試験 + 面接</div></div>' +
              '</div>' +
              '<h2>印象に残った点</h2>' +
              '<p>SIS は 1991 年創立で、東京では比較的早い時期から IB を取り入れてきた学校です。2024 年の高校部開設は、学校を長期で見る家庭にとって大きなポイントです。</p>' +
              '<p>Seaside と Main の二拠点体制も、実際に見るとよく機能しているように感じました。紙の上で見るより、移行の流れが自然です。</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="品川/日本国际学校系列10-品川国际（上）_1_贝蒂星妈_来自小红书网页版.jpg" alt="SIS の生徒" /><p class="article-img-caption">見学用に整えられた学校というより、日常が動いている学校という印象でした。</p></div>' +
              '<h2>入試チームのスピード感</h2>' +
              '<p>案内してくれた入試担当の先生は、とてもテンポがよく、対応も明るく的確でした。その印象はメール対応にも表れていて、返信の速さはかなり際立っていました。</p>' +
              '<div class="article-pullquote">「有名かどうかより、学校と家族の相性が合うかどうかのほうが重要です。」</div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>校内見学: 小さいけれどよく考えられている</h2>' +
              '<p>キャンパス規模は大きくありませんが、各スペースがきちんと目的を持って使われています。飾りではなく、日常の学びに結びついている印象でした。</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="品川/日本国际学校系列10-品川国际（下）_6_贝蒂星妈_来自小红书网页版.jpg" alt="SIS の廊下" /><p class="article-img-caption">廊下には生徒作品が並び、学びが自然に可視化されていました。</p></div>' +
              '<p>特に印象に残ったのは子どもたちの英作文です。テンプレート暗記ではなく、自分の意見と理由を書く練習が入っていました。</p>' +
              '<p>理科室、音楽室、図書・プロジェクトスペースも、実際に機能している空気がありました。都心型キャンパスとしてはかなり上手に運用していると思います。</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="品川/日本国际学校系列10-品川国际（下）_10_贝蒂星妈_来自小红书网页版.jpg" alt="SIS の図書スペース" /><p class="article-img-caption">Inquiry 型の学びを支える空間づくりが見えました。</p></div>' +
              '<h2>家庭にとって実務的な強み</h2>' +
              '<p>まず、中国語学習の機会があること。中国語家庭にとって、母語維持は後から困るテーマなので、これは実用的な利点です。</p>' +
              '<p>次に、向かいの Konami Sports Club を活用できること。校内に巨大な運動施設がなくても、運動環境をしっかり確保できています。</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="品川/日本国际学校系列10-品川国际（下）_3_贝蒂星妈_来自小红书网页版.jpg" alt="SIS の中国語授業" /><p class="article-img-caption">言語維持と運動環境は、どちらも入学後に効いてくるポイントです。</p></div>' +
            '</div></div></section>' +
            '<section class="section section--warm"><div class="container container--narrow"><div class="article-content">' +
              '<h2>出願テンポはかなり速い</h2>' +
              '<p>SIS の出願プロセスは速く、試験と面接からオファーまでが短いです。そのぶん、家庭にも短い判断時間で動く準備が求められます。</p>' +
              '<p>保護者面接はきちんと準備したほうが良いです。学校サイトを読み込み、教育理念や inquiry の考え方を自分の言葉で話せるようにしておくと安心です。</p>' +
              '<p>筆記は MAP ベースで、初回の子どもには adaptive testing の形式そのものが難しさになりやすいです。</p>' +
              '<div class="article-pullquote">「初回の MAP は、学力だけでなく試験形式への慣れも強く影響します。」</div>' +
              '<h2>総合評価</h2>' +
              '<p>SIS は、温度感があり、実務的で、かなり好印象だった学校です。限られた空間をうまく価値に変えていると感じました。</p>' +
              '<p>今後の見どころは、高校部と DP がどう仕上がるかです。そこが強くなれば、さらに評価が上がる学校だと思います。</p>' +
              '<p>わが家は最終的に Seisen を選びましたが、SIS は最後まで強く印象に残った一校でした。</p>' +
            '</div></div></section>',
          cta: { kicker: 'Need Guidance?', title: 'SIS を検討していますか？', desc: '学校訪問の見方、MAP や面接準備、ほかの候補校との比較まで一緒に整理できます。', button: '相談する' }
        })
      }
    },
    'article-school-selection.html': {
      en: {
        title: 'How to Choose a Tokyo International School | KISSHO',
        description: 'A practical framework for choosing among 100+ international schools in Tokyo, from curriculum and English level to commuting and budget.',
        html: buildArticleInner({
          backLabel: 'Back to Insights',
          kicker: 'Methodology',
          title: 'How to Choose a Tokyo International School',
          subtitle: 'A framework built from our own family’s path and years of accompanying other families through the same decisions.',
          metaItems: ['Betty & Jerry · KISSHO', 'Admissions Methodology', 'March 2026'],
          cover: { src: '图片/选校 走进校园.jpg', alt: 'Walking into a school campus' },
          body: '' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<p>Tokyo has more than 100 international schools, spread across very different neighborhoods and operating under very different curriculum systems. For families who have just arrived, the natural first question is: where do we begin?</p>' +
              '<p>This article is not a ranking. It is a decision framework built from our own family’s move from Shanghai to Tokyo, and from years of supporting other families making the same choices.</p>' +
              '<div class="article-pullquote">“There is no universally best school. There is only the school that best fits your child.”</div>' +
              '<h2>Understand the Landscape First</h2>' +
              '<p>Our current database covers 115 schools in and around Tokyo. They range from century-old institutions to very new campuses, from full K-12 schools to preschool-only programs.</p>' +
              '<p>Geography matters more than many families expect. Minato remains the densest cluster, followed by Setagaya and Shibuya, while Kanagawa and the Tama area matter for schools with larger campuses.</p>' +
              '<ul><li>37 schools offer a full K-12 path</li><li>33 are preschool-only</li><li>The rest cover mixed ranges such as elementary to middle or middle to high school</li></ul>' +
              '<p>We usually advise families to pay close attention to international accreditation such as CIS, WASC, or NEASC. It is not the whole story, but it is one of the clearest quality signals.</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="图片/选校 风格3.jpg" alt="School interior" style="width:100%;display:block;border-radius:var(--radius);" /><p class="article-img-caption">How a school uses space often tells you a great deal about its priorities and educational philosophy.</p></div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>Curriculum Is the First Strategic Decision</h2>' +
              '<p>The three most important pathways in Tokyo are IB, British (IGCSE / A-Level), and American (AP). Each implies a different learning style, assessment logic, and university route.</p>' +
              '<h3>IB</h3><p>Broad, demanding, and internationally portable. Best for students who are relatively balanced across subjects and can manage sustained workload.</p>' +
              '<h3>A-Level</h3><p>More specialized and exam-driven. Best for students with clear strengths in a few academic areas, especially if the family is leaning toward the UK route.</p>' +
              '<h3>AP</h3><p>Most flexible. Strong for students who want room for both academics and extracurricular profile-building, particularly for North American applications.</p>' +
              '<div style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;line-height:1.6;"><thead><tr style="border-bottom:2px solid var(--border-light);"><th style="text-align:left;padding:10px 12px;font-weight:600;"></th><th style="text-align:left;padding:10px 12px;font-weight:600;">IB</th><th style="text-align:left;padding:10px 12px;font-weight:600;">A-Level</th><th style="text-align:left;padding:10px 12px;font-weight:600;">AP</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;font-weight:600;">Breadth</td><td style="padding:10px 12px;">Wide and compulsory</td><td style="padding:10px 12px;">Narrow but deep</td><td style="padding:10px 12px;">Flexible mix</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;font-weight:600;">Assessment</td><td style="padding:10px 12px;">Exams + writing + coursework</td><td style="padding:10px 12px;">Mainly final exams</td><td style="padding:10px 12px;">AP exams + GPA</td></tr><tr><td style="padding:10px 12px;font-weight:600;">Best Fit</td><td style="padding:10px 12px;">Balanced learners</td><td style="padding:10px 12px;">Strength-focused learners</td><td style="padding:10px 12px;">Flexible all-rounders</td></tr></tbody></table></div>' +
              '<div class="article-pullquote">“Curriculum is not just a school feature. It shapes how your child studies every day and how future options stay open or narrow.”</div>' +
            '</div></div></section>' +
            '<section class="section section--warm"><div class="container container--narrow"><div class="article-content">' +
              '<h2>The Six Dimensions Families Should Evaluate</h2>' +
              '<h3>1. Your Child’s English Level</h3><p>Some schools expect near-native academic English and provide little EAL support. Others can carry a child through a much longer transition period.</p>' +
              '<h3>2. Parents’ English</h3><p>Top schools may evaluate whether parents can discuss educational philosophy and participate in interviews in English.</p>' +
              '<h3>3. Commute</h3><p>Especially for younger children, long daily commutes can become a quality-of-life problem. In Tokyo, school choice and housing choice are often linked.</p>' +
              '<h3>4. Budget</h3><p>Year one is usually much more expensive than the headline tuition once enrollment, facilities, transport, uniforms, materials, and activities are included.</p>' +
              '<h3>5. School Culture</h3><p>Nationality mix, newcomer support, buddy systems, and even religious background affect whether a child feels they belong.</p>' +
              '<h3>6. Maintaining Chinese</h3><p>Very few Tokyo schools offer structured Chinese. If mother-tongue maintenance matters, build it into the decision early.</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="图片/选校 风格1.jpg" alt="Student life" style="width:100%;display:block;border-radius:var(--radius);" /><p class="article-img-caption">School choice is not only about curriculum. It is about the full environment your child will inhabit for years.</p></div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>When Should You Start?</h2>' +
              '<p>The ideal planning cycle is usually 9 to 12 months before entry.</p>' +
              '<ul><li>9-12 months out: study the market, shortlist schools, attend tours, and start language prep</li><li>6-9 months out: visit in person and prepare transcripts, recommendations, and statements</li><li>3-6 months out: submit applications, prepare MAP / CAT4 / SSAT, and practice interviews</li><li>1-3 months out: test, interview, compare offers, and complete enrollment</li></ul>' +
              '<p>If you only have a few months, do not panic. Some schools admit on a rolling basis when seats are open. The key is to narrow quickly and avoid wasting time on low-fit options.</p>' +
              '<div style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;line-height:1.6;"><thead><tr style="border-bottom:2px solid var(--border-light);"><th style="text-align:left;padding:10px 12px;font-weight:600;">Assessment</th><th style="text-align:left;padding:10px 12px;font-weight:600;">What It Measures</th><th style="text-align:left;padding:10px 12px;font-weight:600;">Typical Schools</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;"><strong>MAP</strong></td><td style="padding:10px 12px;">Reading, language usage, math</td><td style="padding:10px 12px;">Many US-style schools</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;"><strong>CAT4</strong></td><td style="padding:10px 12px;">Verbal, non-verbal, quantitative, spatial reasoning</td><td style="padding:10px 12px;">Many British-style schools</td></tr><tr><td style="padding:10px 12px;"><strong>SSAT / School Test</strong></td><td style="padding:10px 12px;">Academic readiness and writing</td><td style="padding:10px 12px;">Selective pathways and internal assessments</td></tr></tbody></table></div>' +
              '<h2>Practical Advice</h2>' +
              '<p>Visit at least two schools, do not choose by reputation alone, confirm real seat availability, and take parent interviews seriously. Schools evaluate the family, not only the child.</p>' +
              '<div class="article-pullquote">“School choice becomes easier once you stop asking which school is the best, and start asking which environment will help this child grow.”</div>' +
            '</div></div></section>',
          cta: { kicker: 'Need Guidance?', title: 'Need Help Narrowing the List?', desc: 'We can help you translate your child’s profile into a realistic shortlist, a visit strategy, and an admissions timeline.', button: 'Contact Us' }
        })
      },
      ja: {
        title: '東京のインターナショナルスクールの選び方 | KISSHO',
        description: 'カリキュラム、英語力、通学、予算まで、東京のインターナショナルスクール選びを整理するための実務的なフレームです。',
        html: buildArticleInner({
          backLabel: '記事一覧へ戻る',
          kicker: '選校方法論',
          title: '東京のインターナショナルスクール: <br>どう選ぶか',
          subtitle: 'わが家の経験と、多くのご家庭を伴走してきた実務の中から整理した判断フレームです。',
          metaItems: ['Betty & Jerry · KISSHO', '選校方法論', '2026年3月'],
          cover: { src: '图片/选校 走进校园.jpg', alt: '学校キャンパスを歩く' },
          body: '' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<p>東京には 100 校を超えるインターナショナルスクールがあり、立地もカリキュラムもかなり異なります。来日したばかりのご家庭にとっては、何から考えればよいかが最初の壁になります。</p>' +
              '<p>この文章はランキングではなく、判断の枠組みです。わが家の経験と、多くのご家庭を支えてきた実務から整理しています。</p>' +
              '<div class="article-pullquote">「一番良い学校を探すより、わが子に合う学校を見つけることのほうが大切です。」</div>' +
              '<h2>まずは全体像をつかむ</h2>' +
              '<p>現在のデータベースには、東京と周辺の 115 校を収録しています。歴史ある学校から新設校まで、K-12 一貫校から preschool のみの学校まで幅があります。</p>' +
              '<p>港区、世田谷区、渋谷区は依然として重要ですが、神奈川や多摩エリアも候補になり得ます。東京では、住む場所と学校選びが同時に決まることがよくあります。</p>' +
              '<ul><li>K-12 の一貫校は 37 校</li><li>幼児部のみは 33 校</li><li>そのほかは混合学年構成です</li></ul>' +
              '<p>CIS、WASC、NEASC などの国際認証は、学校の質を見るうえで有効な外部指標です。</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="图片/选校 风格3.jpg" alt="学校の空間" style="width:100%;display:block;border-radius:var(--radius);" /><p class="article-img-caption">空間の使い方を見ると、その学校が何を重視しているかがよく見えます。</p></div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>最初の戦略判断はカリキュラム</h2>' +
              '<p>東京で主要なのは IB、英国式（IGCSE / A-Level）、アメリカ式（AP）です。学び方も評価も進学導線もかなり変わります。</p>' +
              '<h3>IB</h3><p>幅広く、負荷も高く、国際的な汎用性が強いルートです。</p>' +
              '<h3>A-Level</h3><p>より専門化しやすく、試験中心です。英国進学との相性も良いです。</p>' +
              '<h3>AP</h3><p>最も柔軟で、課外活動も含めたプロフィール形成に向いています。</p>' +
              '<div style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;line-height:1.6;"><thead><tr style="border-bottom:2px solid var(--border-light);"><th style="text-align:left;padding:10px 12px;font-weight:600;"></th><th style="text-align:left;padding:10px 12px;font-weight:600;">IB</th><th style="text-align:left;padding:10px 12px;font-weight:600;">A-Level</th><th style="text-align:left;padding:10px 12px;font-weight:600;">AP</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;font-weight:600;">学びの幅</td><td style="padding:10px 12px;">広い</td><td style="padding:10px 12px;">狭いが深い</td><td style="padding:10px 12px;">柔軟</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;font-weight:600;">評価方法</td><td style="padding:10px 12px;">試験 + 課題 + 論述</td><td style="padding:10px 12px;">主に最終試験</td><td style="padding:10px 12px;">AP 試験 + GPA</td></tr><tr><td style="padding:10px 12px;font-weight:600;">向く生徒</td><td style="padding:10px 12px;">バランス型</td><td style="padding:10px 12px;">得意科目集中型</td><td style="padding:10px 12px;">柔軟な総合型</td></tr></tbody></table></div>' +
              '<div class="article-pullquote">「カリキュラムは学校の特徴ではなく、毎日の学び方そのものを決める要素です。」</div>' +
            '</div></div></section>' +
            '<section class="section section--warm"><div class="container container--narrow"><div class="article-content">' +
              '<h2>見落としやすい 6 つの判断軸</h2>' +
              '<h3>1. 子どもの英語力</h3><p>EAL 支援の厚みは学校ごとに大きく違います。今の英語力に合った学校を選ぶことが重要です。</p>' +
              '<h3>2. 保護者の英語</h3><p>トップ校では、保護者が教育理念について英語で会話できるかを見られることがあります。</p>' +
              '<h3>3. 通学</h3><p>特に小学生では、毎日の長距離通学が生活全体に響きます。</p>' +
              '<h3>4. 予算</h3><p>初年度は学費に加え、入学金、施設費、校バス、教材、制服などで大きく増えるのが一般的です。</p>' +
              '<h3>5. 学校文化</h3><p>国籍構成、新入生支援、buddy system、宗教色などは居心地を左右します。</p>' +
              '<h3>6. 中国語維持</h3><p>必要なら学校選びの段階で組み込むべきです。後回しにすると難しくなります。</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="图片/选校 风格1.jpg" alt="学校生活" style="width:100%;display:block;border-radius:var(--radius);" /><p class="article-img-caption">カリキュラムだけでなく、その学校でどんな日常を送るかまで考える必要があります。</p></div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>いつから準備するか</h2>' +
              '<p>理想は入学の 9〜12 か月前から動き始めることです。</p>' +
              '<ul><li>9-12 か月前: 市場把握、候補校選定、tour 参加、英語準備開始</li><li>6-9 か月前: 実地訪問、書類準備</li><li>3-6 か月前: 出願、MAP / CAT4 / SSAT 対策、面接練習</li><li>1-3 か月前: 本試験、面接、オファー比較、入学手続き</li></ul>' +
              '<p>時間が短くても可能性はあります。ただし、最初の絞り込みを間違えないことがより重要です。</p>' +
              '<h2>実務上のアドバイス</h2>' +
              '<p>最低 2 校は訪問すること、評判だけで決めないこと、定員状況を必ず確認すること、そして保護者面接を軽視しないこと。この 4 点は本当に重要です。</p>' +
              '<div class="article-pullquote">「どの学校が一番かではなく、この子がどの環境で伸びるか。そこに問いを変えると選択はかなり明確になります。」</div>' +
            '</div></div></section>',
          cta: { kicker: 'Need Guidance?', title: '候補校の絞り込みを手伝ってほしい方へ', desc: 'お子さまの現在地から、現実的な shortlist と訪問計画、出願順序まで一緒に整理します。', button: 'お問い合わせ' }
        })
      }
    },
    'article-curriculum-guide.html': {
      en: {
        title: 'IB, A-Level, AP Explained | KISSHO',
        description: 'A practical guide to IB, A-Level, and AP for families choosing a Tokyo international school and planning for future university options.',
        html: buildArticleInner({
          backLabel: 'Back to Insights',
          kicker: 'Curriculum',
          title: 'IB, A-Level, AP: <br>A Practical Guide for Tokyo Families',
          subtitle: 'Choosing a school starts with choosing a curriculum. The curriculum determines how a child studies, how they are assessed, and which university routes stay open.',
          metaItems: ['Betty & Jerry · KISSHO', 'Curriculum Guide', 'March 2026'],
          cover: { src: '图片/3 封面.jpg', alt: 'IB, A-Level, and AP', style: 'object-position:center 65%;' },
          body: '' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<p>Many families start by asking which school is better. In practice, the more foundational question is which curriculum system makes sense for this child and this family.</p>' +
              '<p>IB, A-Level, and AP are the three names that appear again and again in Tokyo. They are not interchangeable labels. They reward different strengths and point toward different admissions paths.</p>' +
              '<h2>IB: Broad, Demanding, and Globally Portable</h2>' +
              '<p>IB is the most common international curriculum in Tokyo. Its strength is breadth and coherence across PYP, MYP, and DP. Its challenge is that students cannot hide weak areas very easily.</p>' +
              '<p>At the DP stage, students take six subject groups plus TOK, the Extended Essay, and CAS. That combination develops independence and academic writing, but it also creates sustained pressure.</p>' +
              '<div class="article-pullquote">“IB is not designed to produce test-taking machines. It is designed to produce students who can think, write, connect ideas, and manage themselves.”</div>' +
              '<h3>Who IB Fits Best</h3><p>Students who are relatively balanced across subjects, comfortable with writing, and able to manage a continuous workload.</p>' +
              '<h3>Tokyo Context</h3><p>Academic outcomes vary significantly across IB schools in Tokyo. Being “an IB school” is not enough. The school’s academic culture, teacher quality, and student cohort matter enormously.</p>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>A-Level: Specialization and Depth</h2>' +
              '<p>A-Level is the clearest route for students who already know where their strengths lie. Compared with IB, it lets students go deeper in fewer subjects and removes much of the essay-based cross-disciplinary structure.</p>' +
              '<p>That makes it especially attractive to students with strong mathematics or science profiles, and to families aiming at the UK or Commonwealth pathway.</p>' +
              '<h3>What Families Need to Know</h3><p>The system is more exam-driven, but predicted grades and teacher evaluation still matter. It is efficient for the right student, but it can be restrictive for a child whose interests are still changing.</p>' +
              '<h2>AP: Flexibility Inside the American System</h2>' +
              '<p>AP is not a full stand-alone curriculum. It is best understood as advanced coursework within the American high-school model. The key advantage is flexibility: students can combine academic challenge with sports, arts, leadership, and service.</p>' +
              '<p>That flexibility is powerful, but it also means the family must plan more actively. In the US pathway, GPA, APs, testing, extracurriculars, essays, and recommendations all interact.</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="图片/3.1 三个核心组件.png" alt="Classroom learning" style="width:100%;display:block;border-radius:var(--radius);" /><p class="article-img-caption">The core difference is not just subject names. It is the daily logic of learning and assessment.</p></div>' +
            '</div></div></section>' +
            '<section class="section section--warm"><div class="container container--narrow"><div class="article-content">' +
              '<h2>Quick Comparison</h2>' +
              '<div style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;line-height:1.6;"><thead><tr style="border-bottom:2px solid var(--border-light);"><th style="text-align:left;padding:10px 12px;font-weight:600;"></th><th style="text-align:left;padding:10px 12px;font-weight:600;">IB</th><th style="text-align:left;padding:10px 12px;font-weight:600;">A-Level</th><th style="text-align:left;padding:10px 12px;font-weight:600;">AP</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;font-weight:600;">Subject Structure</td><td style="padding:10px 12px;">6 subjects across disciplines</td><td style="padding:10px 12px;">3-4 specialized subjects</td><td style="padding:10px 12px;">Flexible AP mix</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;font-weight:600;">Assessment</td><td style="padding:10px 12px;">Exams + coursework + writing</td><td style="padding:10px 12px;">Mostly final exams</td><td style="padding:10px 12px;">AP exams + GPA + profile</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;font-weight:600;">Pressure Pattern</td><td style="padding:10px 12px;">Heavy and continuous</td><td style="padding:10px 12px;">Focused and concentrated</td><td style="padding:10px 12px;">Flexible, depends on load</td></tr><tr><td style="padding:10px 12px;font-weight:600;">Best For</td><td style="padding:10px 12px;">Balance and flexibility across countries</td><td style="padding:10px 12px;">Clear academic strengths</td><td style="padding:10px 12px;">Broad profile building</td></tr></tbody></table></div>' +
              '<h2>What This Means for Chinese-Speaking Families</h2>' +
              '<p>Many Chinese students have a natural advantage in math across all three systems, but the way that advantage plays out differs. A-Level often feels most familiar, AP can be strategically flexible, and IB brings the heaviest writing demands.</p>' +
              '<p>Chinese can also become an advantage rather than a liability. IB, A-Level, and AP all offer routes where Chinese can count academically, and in IB it can even contribute to a bilingual diploma.</p>' +
              '<div class="article-pullquote">“The best curriculum is not the most famous one. It is the one that matches how your child learns now and where they may want to go later.”</div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>How We Usually Help Families Decide</h2>' +
              '<p>We usually start with three questions:</p>' +
              '<ul><li>Is the child more balanced across subjects, or clearly stronger in a few?</li><li>Is the future university direction roughly global, UK-focused, or North America-focused?</li><li>How strong is the child’s English academic writing right now?</li></ul>' +
              '<p>If the family still wants maximum flexibility across countries, IB is often the safest. If the student already has clear strengths and the family is leaning UK, A-Level can be more efficient. If the student has a broad extracurricular profile and North America is the target, AP / American can be the most natural route.</p>' +
              '<p>Curriculum is the starting point, not the end point. Once the direction is right, school choice becomes much easier.</p>' +
            '</div></div></section>',
          cta: { kicker: 'Need Guidance?', title: 'Not Sure Which Curriculum Fits Your Child?', desc: 'We can help you compare curriculum fit against English level, learning style, and long-term university direction.', button: 'Contact Us' }
        })
      },
      ja: {
        title: 'IB・A-Level・AP 解説 | KISSHO',
        description: '東京で学校を選ぶ家庭向けに、IB・A-Level・AP の違いと向き不向きを実務的に整理したガイドです。',
        html: buildArticleInner({
          backLabel: '記事一覧へ戻る',
          kicker: 'カリキュラム解説',
          title: 'IB・A-Level・AP: <br>東京の家庭向け実務ガイド',
          subtitle: '学校選びの前に、まずカリキュラムを理解する。学び方、評価、進学導線はここで大きく変わります。',
          metaItems: ['Betty & Jerry · KISSHO', 'カリキュラム解説', '2026年3月'],
          cover: { src: '图片/3 封面.jpg', alt: 'IB・A-Level・AP', style: 'object-position:center 65%;' },
          body: '' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<p>多くの家庭は、まず「どの学校が良いか」と考えます。実際には、その前に「どのカリキュラムがこの子に合うか」を整理したほうが、判断はずっとしやすくなります。</p>' +
              '<p>東京でよく出てくるのは IB、A-Level、AP の 3 つです。これは単なる呼び方の違いではなく、学習のロジック自体がかなり異なります。</p>' +
              '<h2>IB: 幅広く、負荷が高く、汎用性が強い</h2>' +
              '<p>IB は東京で最も一般的な国際カリキュラムです。PYP、MYP、DP と一貫しており、国をまたいだ進学にも強い反面、弱い科目を避けにくいのが特徴です。</p>' +
              '<p>DP では 6 科目に加えて TOK、Extended Essay、CAS があり、学術的な書く力と自己管理力が強く求められます。</p>' +
              '<div class="article-pullquote">「IB は試験の点を取るだけではなく、考える・書く・つなぐ・管理する力を育てる仕組みです。」</div>' +
              '<h2>A-Level: 専門化と深さ</h2>' +
              '<p>A-Level は、得意科目がはっきりしている生徒にとって非常に効率のよいルートです。少ない科目に集中できるので、理数系が強い子や英国志向の家庭には相性が良いです。</p>' +
              '<h2>AP: アメリカ式の柔軟さ</h2>' +
              '<p>AP は独立した一貫カリキュラムというより、アメリカ式高校教育の中で難度の高い科目を取っていく仕組みです。学業と課外活動を並行して組み立てやすいのが強みです。</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="图片/3.1 三个核心组件.png" alt="学習風景" style="width:100%;display:block;border-radius:var(--radius);" /><p class="article-img-caption">違いは科目名ではなく、毎日の学び方と評価のされ方にあります。</p></div>' +
            '</div></div></section>' +
            '<section class="section section--warm"><div class="container container--narrow"><div class="article-content">' +
              '<h2>比較の要点</h2>' +
              '<div style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;line-height:1.6;"><thead><tr style="border-bottom:2px solid var(--border-light);"><th style="text-align:left;padding:10px 12px;font-weight:600;"></th><th style="text-align:left;padding:10px 12px;font-weight:600;">IB</th><th style="text-align:left;padding:10px 12px;font-weight:600;">A-Level</th><th style="text-align:left;padding:10px 12px;font-weight:600;">AP</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;font-weight:600;">科目構成</td><td style="padding:10px 12px;">6科目を横断</td><td style="padding:10px 12px;">3-4科目に集中</td><td style="padding:10px 12px;">柔軟に選択</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;font-weight:600;">評価方法</td><td style="padding:10px 12px;">試験 + 課題 + 論述</td><td style="padding:10px 12px;">主に最終試験</td><td style="padding:10px 12px;">AP + GPA + profile</td></tr><tr><td style="padding:10px 12px;font-weight:600;">向く生徒</td><td style="padding:10px 12px;">バランス型</td><td style="padding:10px 12px;">得意科目集中型</td><td style="padding:10px 12px;">柔軟な総合型</td></tr></tbody></table></div>' +
              '<h2>中国語家庭にとっての意味</h2>' +
              '<p>多くの中国語家庭の子どもは数学に強みがありますが、その活かし方はカリキュラムによって違います。A-Level は最も馴染みやすく、AP は戦略的に柔軟で、IB は writing 負荷が最も高いです。</p>' +
              '<p>一方で、中国語そのものが強みにもなります。IB、A-Level、AP いずれも、中国語を学術的なアドバンテージに変えられるルートがあります。</p>' +
              '<div class="article-pullquote">「一番有名なカリキュラムではなく、今の学び方と将来の方向に合うカリキュラムを選ぶことが大切です。」</div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>どう決めるか</h2>' +
              '<p>私たちは通常、次の 3 問から整理します。</p>' +
              '<ul><li>教科間のバランス型か、得意科目集中型か</li><li>進学方向はグローバル、英国寄り、北米寄りのどこか</li><li>今の英語 academic writing はどの程度か</li></ul>' +
              '<p>国をまだ決め切れていないなら IB、得意科目が明確で英国志向なら A-Level、課外活動も含めて北米志向なら AP / American が自然です。</p>' +
              '<p>カリキュラムの方向が定まると、学校選びはかなり整理しやすくなります。</p>' +
            '</div></div></section>',
          cta: { kicker: 'Need Guidance?', title: 'どのカリキュラムが合うかわからない方へ', desc: '英語力、学習スタイル、将来の進路をもとに、現実的な選択肢を一緒に整理します。', button: 'お問い合わせ' }
        })
      }
    },
    'article-map-guide.html': {
      en: {
        title: 'MAP Test Prep Guide | KISSHO',
        description: 'What MAP Growth is, how to read RIT scores, and how Chinese-speaking families can prepare effectively for admissions and school use in Tokyo.',
        html: buildArticleInner({
          backLabel: 'Back to Insights',
          kicker: 'MAP Prep',
          title: 'MAP Test Prep Guide',
          subtitle: 'MAP is not a test you can cram for overnight, but it is absolutely a test you can prepare for in the right way.',
          metaItems: ['Betty & Jerry · KISSHO', 'MAP Prep', 'March 2026'],
          cover: { src: '图片/4 封面.png', alt: 'MAP Growth test guide', style: 'object-position:center 25%;' },
          body: '' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<p>If your child is applying to an international school in Tokyo, or is already enrolled in one, you will almost certainly encounter MAP.</p>' +
              '<p>MAP is used both for admissions and for academic tracking at many schools such as ASIJ, KIST, St. Mary’s, SIS, Saint Maur, and YIS.</p>' +
              '<div class="article-pullquote">“MAP is not a test you can cram for, but it is absolutely a test you can prepare for. The key is preparing in the right direction.”</div>' +
              '<h2>What MAP Actually Measures</h2>' +
              '<p>MAP Growth, developed by NWEA, is a computer-adaptive test. Questions become harder after correct answers and easier after incorrect ones. The system is trying to locate the student’s real level, not to produce a paper where every child can finish comfortably.</p>' +
              '<p>That is why getting many questions wrong near the middle or end is normal. For first-time families, this is often the single most important thing to understand.</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="图片/4.1.jpg" alt="Student taking MAP" style="width:100%;display:block;border-radius:var(--radius);" /><p class="article-img-caption">The goal of MAP is not a perfect paper. The goal is to find a child’s real academic boundary.</p></div>' +
              '<h3>Core Sections</h3><p>MAP usually tests Reading, Language Usage, and Mathematics. For Chinese-speaking students, reading and language usage are usually harder to raise quickly than math.</p>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>How to Read RIT Scores</h2>' +
              '<p>MAP does not use percentages or A/B/C grades. It uses RIT, a continuous scale roughly from 100 to 300.</p>' +
              '<p>RIT is not tied to grade level. A Grade 4 student and a Grade 8 student with the same reading RIT are performing at a similar reading level.</p>' +
              '<div style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.88rem;line-height:1.6;"><thead><tr style="border-bottom:2px solid var(--border-light);"><th style="text-align:left;padding:8px 10px;font-weight:600;">Grade</th><th style="text-align:center;padding:8px 10px;font-weight:600;">Math<br><span style="font-weight:400;font-size:0.8rem;">50th / 75th / 90th</span></th><th style="text-align:center;padding:8px 10px;font-weight:600;">Reading<br><span style="font-weight:400;font-size:0.8rem;">50th / 75th / 90th</span></th><th style="text-align:center;padding:8px 10px;font-weight:600;">Language<br><span style="font-weight:400;font-size:0.8rem;">50th / 75th / 90th</span></th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:8px 10px;">G2</td><td style="padding:8px 10px;text-align:center;">173 / 183 / 193</td><td style="padding:8px 10px;text-align:center;">170 / 182 / 192</td><td style="padding:8px 10px;text-align:center;">167 / 178 / 188</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:8px 10px;">G5</td><td style="padding:8px 10px;text-align:center;">206 / 217 / 227</td><td style="padding:8px 10px;text-align:center;">204 / 215 / 226</td><td style="padding:8px 10px;text-align:center;">194 / 205 / 216</td></tr><tr><td style="padding:8px 10px;">G9</td><td style="padding:8px 10px;text-align:center;">225 / 237 / 248</td><td style="padding:8px 10px;text-align:center;">216 / 228 / 239</td><td style="padding:8px 10px;text-align:center;">205 / 218 / 230</td></tr></tbody></table></div>' +
              '<p>For Tokyo international schools, average student levels often sit above the US 50th percentile. Families aiming at highly selective schools should usually think in percentile terms, not just absolute RIT.</p>' +
            '</div></div></section>' +
            '<section class="section section--warm"><div class="container container--narrow"><div class="article-content">' +
              '<h2>How to Prepare Effectively</h2>' +
              '<h3>1. Learn the Test Format</h3><p>Many children underperform the first time simply because they are unfamiliar with adaptive testing and the no-going-back rule.</p>' +
              '<h3>2. Build Reading Over Time</h3><p>For many Chinese-speaking students, reading is the biggest bottleneck. Daily nonfiction reading matters far more than short-term drilling.</p>' +
              '<h3>3. Use Math as a Real Strength</h3><p>Math is often the most practical score-raising area, but students still need English math vocabulary. Many “math mistakes” are actually reading mistakes.</p>' +
              '<h3>4. Study Grammar Systematically</h3><p>Language Usage rewards consistent grammar, punctuation, and sentence-structure practice. Short daily writing can be more effective than isolated drills.</p>' +
              '<div style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;line-height:1.6;"><thead><tr style="border-bottom:2px solid var(--border-light);"><th style="text-align:left;padding:10px 12px;font-weight:600;">Timeline</th><th style="text-align:left;padding:10px 12px;font-weight:600;">Focus</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;">6-12 months out</td><td style="padding:10px 12px;">Build reading habits and English math exposure</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;">3-6 months out</td><td style="padding:10px 12px;">Target grammar and vocabulary gaps</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;">1-3 months out</td><td style="padding:10px 12px;">Run practice tests and simulate pacing</td></tr><tr><td style="padding:10px 12px;">Last 1-2 weeks</td><td style="padding:10px 12px;">Light review, sleep, and anxiety control</td></tr></tbody></table></div>' +
              '<div class="article-pullquote">“MAP prep is not about memorizing questions. It is about strengthening the real skills the test is designed to detect.”</div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>Common Challenges for Chinese-Speaking Students</h2>' +
              '<p>Reading is usually the biggest long-term challenge, because academic nonfiction and inference-heavy passages are very different from daily English conversation.</p>' +
              '<p>Math is often strong, but students may still lose points because words like quotient, remainder, numerator, or perpendicular are unfamiliar in English.</p>' +
              '<p>The first testing experience also matters. Many children lose points simply because they panic when the questions become harder and do not realize that this is a good sign in MAP.</p>' +
              '<h2>MAP Compared With Other Tests</h2>' +
              '<p>CAT4 is often easier for Chinese-speaking students because it includes large non-verbal components. SSAT is often the hardest because it is less forgiving and verbally dense. MAP sits in the middle: math-friendly, reading-heavy.</p>' +
              '<h2>Advice for Parents</h2>' +
              '<p>Before test day, prioritize sleep, breakfast, and emotional readiness. After the test, read both RIT and percentile, and focus on growth over time rather than obsessing over one score.</p>' +
            '</div></div></section>',
          cta: { kicker: 'Need Help?', title: 'Want a More Targeted MAP Prep Plan?', desc: 'We can help match resources, timelines, and practice tools to your child’s grade, current level, and target schools.', button: 'Contact Us' }
        })
      },
      ja: {
        title: 'MAP テスト対策ガイド | KISSHO',
        description: 'MAP Growth とは何か、RIT の見方、中国語家庭がどう備えるかを実務的にまとめたガイドです。',
        html: buildArticleInner({
          backLabel: '記事一覧へ戻る',
          kicker: 'MAP対策',
          title: 'MAP テスト対策ガイド',
          subtitle: '短期の詰め込みは効きませんが、正しい方向で準備すれば確実に差が出る試験です。',
          metaItems: ['Betty & Jerry · KISSHO', 'MAP対策', '2026年3月'],
          cover: { src: '图片/4 封面.png', alt: 'MAP Growth ガイド', style: 'object-position:center 25%;' },
          body: '' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<p>東京のインターナショナルスクールを受ける家庭、または在籍中の家庭であれば、MAP という名前には高い確率で出会います。</p>' +
              '<p>MAP は入学評価にも学力推移の確認にも使われており、ASIJ、KIST、St. Mary’s、SIS、Saint Maur、YIS などでも見かけます。</p>' +
              '<div class="article-pullquote">「MAP は一夜漬け向きではありませんが、正しい方向で準備すれば十分に対応できます。」</div>' +
              '<h2>MAP は何を測っているのか</h2>' +
              '<p>MAP Growth は NWEA が開発した adaptive test です。正解すれば難しくなり、不正解なら易しくなります。目的は子どもの本当の学力帯を特定することです。</p>' +
              '<p>つまり、途中から難しく感じるのは正常です。初回受験の家庭にとっては、この点を理解するだけでもかなり意味があります。</p>' +
              '<div class="article-img-wrap reveal"><img loading="lazy" decoding="async" src="图片/4.1.jpg" alt="MAP 受験イメージ" style="width:100%;display:block;border-radius:var(--radius);" /><p class="article-img-caption">MAP の目的は満点ではなく、今の実力帯を正確に測ることです。</p></div>' +
              '<h3>主要セクション</h3><p>通常は Reading、Language Usage、Mathematics の 3 分野です。中国語家庭では、長期的には reading が最も上がりにくいことが多いです。</p>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>RIT スコアの見方</h2>' +
              '<p>MAP は百分率でも評定でもなく、RIT という連続尺度を使います。おおよそ 100〜300 の範囲です。</p>' +
              '<p>RIT は学年固定ではありません。同じ reading RIT なら、異なる学年でも近い reading 力を持つと考えられます。</p>' +
              '<div style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.88rem;line-height:1.6;"><thead><tr style="border-bottom:2px solid var(--border-light);"><th style="text-align:left;padding:8px 10px;font-weight:600;">学年</th><th style="text-align:center;padding:8px 10px;font-weight:600;">Math<br><span style="font-weight:400;font-size:0.8rem;">50th / 75th / 90th</span></th><th style="text-align:center;padding:8px 10px;font-weight:600;">Reading<br><span style="font-weight:400;font-size:0.8rem;">50th / 75th / 90th</span></th><th style="text-align:center;padding:8px 10px;font-weight:600;">Language<br><span style="font-weight:400;font-size:0.8rem;">50th / 75th / 90th</span></th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:8px 10px;">G2</td><td style="padding:8px 10px;text-align:center;">173 / 183 / 193</td><td style="padding:8px 10px;text-align:center;">170 / 182 / 192</td><td style="padding:8px 10px;text-align:center;">167 / 178 / 188</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:8px 10px;">G5</td><td style="padding:8px 10px;text-align:center;">206 / 217 / 227</td><td style="padding:8px 10px;text-align:center;">204 / 215 / 226</td><td style="padding:8px 10px;text-align:center;">194 / 205 / 216</td></tr><tr><td style="padding:8px 10px;">G9</td><td style="padding:8px 10px;text-align:center;">225 / 237 / 248</td><td style="padding:8px 10px;text-align:center;">216 / 228 / 239</td><td style="padding:8px 10px;text-align:center;">205 / 218 / 230</td></tr></tbody></table></div>' +
              '<p>東京の上位校を目指す場合は、単純な RIT だけでなく percentile の位置まで意識したほうが実務的です。</p>' +
            '</div></div></section>' +
            '<section class="section section--warm"><div class="container container--narrow"><div class="article-content">' +
              '<h2>どう備えるか</h2>' +
              '<h3>1. 形式に慣れる</h3><p>初回の失点は、学力よりも adaptive testing に慣れていないことが原因になりやすいです。</p>' +
              '<h3>2. Reading は長期戦</h3><p>非フィクションを含む毎日の英語読書が重要です。短期の問題演習だけでは伸びにくい分野です。</p>' +
              '<h3>3. Math は強みにしやすい</h3><p>ただし、英語の数学用語を理解していないと、計算力があっても失点します。</p>' +
              '<h3>4. Grammar を系統的にやる</h3><p>Language Usage は文法・句読点・文構造の積み上げが効きます。短い英作文の継続も有効です。</p>' +
              '<div style="overflow-x:auto;margin:24px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.9rem;line-height:1.6;"><thead><tr style="border-bottom:2px solid var(--border-light);"><th style="text-align:left;padding:10px 12px;font-weight:600;">時期</th><th style="text-align:left;padding:10px 12px;font-weight:600;">重点</th></tr></thead><tbody><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;">6-12 か月前</td><td style="padding:10px 12px;">読書習慣と英語数学への接触</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;">3-6 か月前</td><td style="padding:10px 12px;">文法・語彙の穴を埋める</td></tr><tr style="border-bottom:1px solid var(--border-light);"><td style="padding:10px 12px;">1-3 か月前</td><td style="padding:10px 12px;">模試とペース配分の練習</td></tr><tr><td style="padding:10px 12px;">直前 1-2 週</td><td style="padding:10px 12px;">軽い復習、睡眠、コンディション調整</td></tr></tbody></table></div>' +
              '<div class="article-pullquote">「MAP 対策は問題暗記ではなく、測られている本当の力を伸ばすことです。」</div>' +
            '</div></div></section>' +
            '<section class="section"><div class="container container--narrow"><div class="article-content">' +
              '<h2>中国語家庭に多い課題</h2>' +
              '<p>Reading は最も長期課題になりやすく、math は用語で落としやすい。そして初回受験では、問題が難しくなること自体に動揺して失点しやすいです。</p>' +
              '<h2>ほかのテストとの比較</h2>' +
              '<p>CAT4 は non-verbal が多く、中国語家庭には比較的取り組みやすいことが多いです。SSAT は verbal 負荷が高く、MAP はその中間で、math は取りやすいが reading が重い試験と言えます。</p>' +
              '<h2>保護者への実務アドバイス</h2>' +
              '<p>試験前は睡眠・朝食・気持ちの準備を優先し、試験後は単発スコアよりも成長推移を見ることが重要です。</p>' +
            '</div></div></section>',
          cta: { kicker: 'Need Help?', title: 'より個別化した MAP 対策が必要ですか？', desc: '学年、現在地、志望校に合わせて、使う教材や練習方針を一緒に組み立てます。', button: 'お問い合わせ' }
        })
      }
    }
  };

  var fileName = location.pathname.split('/').pop();
  var page = pages[fileName];
  if (!page) return;

  var main = document.querySelector('main.article-main');
  if (!main) return;

  var titleEl = document.querySelector('title');
  var descEl = document.querySelector('meta[name="description"]');
  var zhSnapshot = {
    html: main.innerHTML,
    title: document.title,
    description: descEl ? descEl.getAttribute('content') : ''
  };

  window.kisshoApplyPageContent = function(lang) {
    var content = page[lang] || zhSnapshot;
    main.innerHTML = content.html;
    if (titleEl) titleEl.textContent = content.title;
    if (descEl) descEl.setAttribute('content', content.description);
  };
})();
