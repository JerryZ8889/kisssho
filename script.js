// ── Translations ──────────────────────────────────────────────────────────
var LANGS = ['zh', 'en', 'ja'];
var T = {
  zh: {
    'nav.home':'首页','nav.schools':'学校探索','nav.articles':'深度文章',
    'nav.tools':'学习工具','nav.services':'咨询服务','nav.about':'关于我们','nav.contact':'联系',
    'footer.brand_desc':'面向东京华人家庭的国际学校咨询、选校工具与教育产品。',
    'footer.nav_schools':'学校探索','footer.nav_articles':'深度文章',
    'footer.nav_tools':'学习工具','footer.nav_services':'咨询服务','footer.nav_about':'关于我们',
    'footer.contact_wechat':'企微号：13732203788',
    'footer.contact_xhs':'小红书：贝蒂星妈 422507043',
    'footer.contact_phone':'（0081）07069875502',
    'footer.contact_email':'betty@kissho.school',
    'index.hero.kicker':'Tokyo International School Consulting',
    'index.hero.title':'为您找到<em>最适合孩子</em>的国际学校',
    'index.hero.desc':'从选校咨询到入学落地，从 MAP 备考到中文保持 —— 我们自己的孩子也在东京的国际学校，深知这条路上的每一个选择有多重要。',
    'index.hero.btn_services':'了解我们的服务','index.hero.btn_schools':'探索学校',
    'index.offer.kicker':'What We Offer','index.offer.title':'围绕国际学校，我们做这些事',
    'index.offer.desc':'从信息到决策，从入学到学习，一步步陪你走通。',
    'index.mod.schools.title':'学校探索','index.mod.schools.desc':'覆盖东京所有国际学校，按区域、课程体系、年级、学费筛选浏览。找到最适合孩子的学校。',
    'index.mod.articles.title':'深度文章','index.mod.articles.desc':'访校手记、选校方法论、课程体系解读、备考经验。来自真实探访和一线经验的深度内容。',
    'index.mod.tools.title':'学习工具','index.mod.tools.desc':'MAP 测试练习、中文读写训练 —— 我们为自己的孩子开发的工具，现在也开放给更多家庭。',
    'index.mod.consulting.title':'咨询服务','index.mod.consulting.desc':'一对一选校评估、访校陪同、材料指导、面试辅导与口译。从信息到执行落地，全程支持。',
    'index.featured.kicker':'Featured Insights','index.featured.title':'深度文章',
    'index.featured.desc':'超过十年的经验总结，帮您在做决定前看清全貌。',
    'index.article1.title':'东京国际学校择校实战指南',
    'index.article1.excerpt':'从课程体系到申请流程，帮你建立清晰的选校框架，找到最适合自己家庭的方向。',
    'index.article2.title':'IB、A-Level、AP — 三大课程体系全解读',
    'index.article2.excerpt':'IB、A-Level、AP 有什么区别？哪个更适合您的孩子？一次讲清楚。',
    'index.article3.title':'MAP 测试备考指南 — 读懂自适应考试，孩子从容应对',
    'index.article3.excerpt':'MAP 是什么？RIT 分数怎么看？中国孩子容易踩哪些坑？从考试机制讲到备考策略。',
    'index.about.kicker':'About Us','index.about.title':'关于吉祥书院',
    'index.about.quote':'"我们陪伴您，走进最适合的国际学校。"',
    'index.about.desc1':'Betty & Jerry 创办了吉祥书院。我们的四个孩子曾就读于上海德威国际学校（Dulwich College Shanghai），现就读于东京清泉国际学校（Seisen International School）——从选校、备考到面试、入学，每一步都亲身走过。',
    'index.about.desc2':'Betty 深耕教育行业超过十年，Jerry 用产品思维和数据能力搭建选校工具与知识库。我们热爱这个行业，全心对待每一个家庭，为您找到最适合孩子的学校。',
    'index.about.btn':'了解更多',
    'about.kicker':'About Us','about.title':'吉祥书院',
    'about.tagline':'陪伴每一个家庭，走进最适合的国际学校。',
    'about.quote':'"我们不是旁观者，而是和您走在同一条路上的家长。"',
    'about.story1':'2019 年，我们带着四个孩子从上海来到东京。孩子们从德威国际学校（Dulwich College Shanghai）转入清泉国际学校（Seisen International School），选校、备考、面试、入学——每一步都亲身走过，也切身体会过其中的迷茫与焦虑。',
    'about.story2':'东京的国际学校信息分散，中文资料极少，华人家庭往往只能靠口口相传做判断。我们想把自己走过的路变成一张清晰的地图，让后来的家庭少走弯路。',
    'about.story3':'Betty 深耕教育行业超过十年，亲自负责每一个家庭的咨询、访校与辅导；Jerry 用产品思维和数据能力搭建了覆盖全东京国际学校的课程知识库与选校工具——一个懂教育，一个懂技术，刚好互补。',
    'about.story4':'我们全心对待每一个家庭，不推荐最贵或最有名的，只帮您找到最适合孩子的那一所。这条路，我们陪您一起走。',
    'about.team.kicker':'Team','about.team.title':'创始团队',
    'about.betty.bio':'英国杜伦大学（英国前五）研究生毕业，回国后在阿里巴巴负责在线教育业务的运营与增长策略，在教育领域深耕超过十年，深刻理解教育产品设计与用户需求。在过往工作经历中建立了与众多学校的招生团队长期稳定的沟通关系，对IB、A-Level、AP等主流课程体系及其入学评估标准有系统深入的研究。<br>目前是四个孩子的妈妈，前上海德威国际学校（Dulwich College Shanghai）、现清泉国际学校（Seisen International School）学生家长，孩子们均一次通过入学考核。<br>每一次咨询我们都会全力以赴，每一个家庭我们都会用心对待。<br>在吉祥负责客户咨询、访校陪同、笔试面试辅导与学校对接等核心服务交付。',
    'about.jerry.bio':'巴黎大学数学与计算机应用科班毕业，回国后深耕移动互联网十余年，经营的企业年营业额超过30亿人民币。<br>2019年回归家庭后选择定居东京，将多年积累的商业经验与对教育的思考相结合。用产品思维打磨每一个服务环节，用数据驱动和系统化能力搭建全东京国际学校的课程体系与知识要点库，为每一个家庭量身定制匹配的方案。<br>在吉祥负责课程体系研发、IT产品设计与企业经营管理。',
    'about.company.kicker':'Company Information','about.company.title':'公司信息',
    'services.kicker':'Consulting Services','services.title':'咨询服务',
    'services.desc':'从信息到执行，您负责孩子和家庭节奏，我们负责学校信息、语言沟通和流程推进。',
    'services.our.kicker':'Services','services.our.title':'我们提供的服务',
    'services.s1.title':'选校方向咨询','services.s2.title':'实地访校陪同',
    'services.s3.title':'入学申请材料制作','services.s4.title':'模拟测试与学力报告',
    'services.s5.title':'笔试面试辅导与现场陪同','services.s6.title':'入学后家校沟通支持',
    'services.s7.title':'全案托管','services.s8.title':'家长英语辅导',
    'services.process.kicker':'Process','services.process.title':'服务流程',
    'services.process.desc':'从第一次沟通到孩子入学的典型路径。',
    'services.step1.title':'初步沟通','services.step2.title':'选校方案',
    'services.step3.title':'实地探校','services.step4.title':'申请与备考',
    'services.step5.title':'面试陪同与翻译','services.step6.title':'入学与持续支持',
    'services.step7.title':'家长英语辅导',
    'services.cta.title':'开始咨询','services.cta.desc':'每个家庭的情况不同，欢迎先和我们聊聊。',
    'services.cta.btn':'联系我们',
    'contact.kicker':'Contact','contact.title':'联系我们',
    'contact.desc':'选择你方便的方式，和我们聊聊孩子的国际学校想法。',
    'contact.wechat.name':'企业微信','contact.wechat.number':'企微号：13732203788',
    'contact.wechat.hint':'请告诉我孩子年级，期待入学的时间奥',
    'contact.xhs.name':'小红书','contact.xhs.number':'贝蒂星妈：422507043',
    'contact.xhs.hint':'关注我们获取东京国际学校的最新资讯和深度内容',
    'contact.phone.name':'电话','contact.phone.hint':'欢迎来电，我们一起找到最合适的东京国际学校',
    'contact.email.name':'邮件','contact.email.hint':'除深夜，都会很快回复',
    'contact.office.kicker':'Office','contact.access.label':'Access',
    'contact.address.value':'KISSHO BLDG. 101, 5-8-19 MEJIRO<br>TOSHIMA-KU, Tokyo 171-0031, Japan',
    'contact.access.value':'山手线（JR） 目白站（Mejiro），西武池袋线（SI） 椎名町站（Shiinamachi），大江户线（E） 落合南长崎站（Ochiai-Minaminagasaki） 皆可到达',
    'tools.kicker':'Learning Tools','tools.title':'学习工具<span style="letter-spacing:normal;">（限时免费中）</span>',
    'tools.desc':'我们为自己在东京国际学校就读的孩子开发的学习工具，现在也开放给更多家庭使用。',
    'tools.map.title':'MAP 测试练习（正在开发中）',
    'tools.map.desc':'针对国际学校入学 MAP 测试，我们正在开发一套面向各年级、各学科的"模拟测试 + 练习"一体化软件：通过模拟测试了解孩子的真实水平，系统可以根据水平动态给出对应难度的习题，并在测试与练习全程中持续自适应，始终调整下一题难度。完整还原 MAP 测试"永远动态匹配学生真实能力"的核心机制，并在此基础上增加了专项练习功能。',
    'tools.map.f1':'功能特点 1：例如"覆盖 Reading、Language Usage、Mathematics 三大科目"；',
    'tools.map.f2':'功能特点 2：例如"自适应难度，模拟真实考试体验"；',
    'tools.map.f3':'功能特点 3：针对考试能力，提供完整练习题库；',
    'tools.map.f4':'功能特点 4：例如"练习后生成水平诊断报告"；',
    'tools.chinese.title':'中文练习',
    'tools.chinese.desc':'国际学校的孩子容易在英语环境中逐渐弱化中文能力。这套工具帮助孩子在日常学习之余，保持和提升中文读写水平。',
    'tools.chinese.btn':'开始练习','tools.japanese.title':'日文假名练习',
    'tools.japanese.desc':'帮助孩子和家长快速掌握日语平假名与片假名的认读与书写，为在日本的日常生活和学校沟通打下基础。',
    'tools.japanese.btn':'开始练习','tools.why.title':'为什么我们做教育软件？',
    'articles.kicker':'Insights','articles.title':'深度文章',
    'articles.desc':'访校手记、选校方法、课程体系解读、MAP 备考指南。来自真实探访和多年经验积累。',
    'articles.filter.all':'全部','articles.filter.visit':'访校记录',
    'articles.filter.method':'选校方法论','articles.filter.curriculum':'课程解读',
    'articles.filter.map':'MAP 备考',
    'articles.card1.title':'品川国际学校深度访校记 — 麻雀虽小，五脏俱全',
    'articles.card1.excerpt':'访遍东京 15 所国际学校，品川国际是让我最意外的惊喜之一。IB 双课程、双校区、马路对面的综合体育馆，加上狼性十足的招生节奏。',
    'articles.card1.date':'Betty · 2023年1月访校',
    'articles.card2.title':'东京国际学校怎么选 — 一份来自过来人的择校指南',
    'articles.card2.excerpt':'从课程体系到申请流程，从孩子的英语基础到家长的面试准备。帮你建立清晰的选校框架，找到最适合自己家庭的方向。',
    'articles.card2.date':'Betty & Jerry · 2026 年 3 月',
    'articles.card3.title':'IB、A-Level、AP — 东京国际学校三大课程体系全解读',
    'articles.card3.excerpt':'IB、A-Level、AP 有什么区别？哪个更适合您的孩子？从日常学习到大学申请，一次讲清楚。',
    'articles.card3.date':'Betty & Jerry · 2026 年 3 月',
    'articles.card4.title':'MAP 测试备考指南 — 读懂自适应考试，让孩子从容应对',
    'articles.card4.excerpt':'MAP 是什么？RIT 分数怎么看？中国孩子容易踩哪些坑？从考试机制详细讲到备考策略。',
    'articles.card4.date':'Betty & Jerry · 2026 年 3 月',
    'schools.kicker':'School Explorer','schools.title':'东京国际学校探索',
    'schools.desc':'涵盖东京及周边 115 所国际学校。23 个区域 · 14 种课程体系 · 学费从 50 万到 300 万日元以上。使用筛选工具缩小范围，找到值得进一步了解的学校。（持续完善中）',
    'schools.filter.region.label':'Region / 区域','schools.filter.region.all':'全部区域',
    'schools.filter.curr.label':'Curriculum / 课程体系','schools.filter.curr.all':'全部课程体系',
    'schools.filter.grade.label':'Grade / 年级段','schools.filter.grade.all':'全部年级',
    'schools.filter.tuition.label':'Tuition / 学费区间','schools.filter.tuition.all':'全部学费',
    'schools.btn.search':'搜索','schools.btn.reset':'重置筛选 · 显示全部',
    'schools.data.note':'数据库收录 <strong>115 所</strong>学校 · 覆盖东京 23 区及神奈川、千叶、埼玉、多摩地区<br>如需获取某所学校的详细信息或选校建议，欢迎<a href="contact.html" style="color:var(--red);">联系我们</a>',
    'schools.cta.title':'不确定哪所学校适合你的孩子？',
    'schools.cta.desc':'115 所学校看起来选择很多，但每个家庭的情况不同。我们帮您找到最适合孩子的学校。',
    'schools.cta.btn':'了解咨询服务',
    'schools.results.all':'共收录 <strong>{n} 所</strong>学校',
    'schools.results.filtered':'符合条件的学校共 <strong>{n} 所</strong>',
    'schools.results.none':'未找到符合条件的学校',
    'schools.no_results.text':'没有符合当前筛选条件的学校。',
    'schools.no_results.hint':'请尝试放宽筛选范围，或<a href="contact.html" style="color:var(--red);">联系我们</a>获取个性化建议。',
    'schools.tuition.contact':'请联系学校',
  },
  en: {
    'nav.home':'Home','nav.schools':'Schools','nav.articles':'Insights',
    'nav.tools':'Tools','nav.services':'Consulting','nav.about':'About','nav.contact':'Contact',
    'footer.brand_desc':'International school consulting, school search tools, and educational products for Chinese families in Tokyo.',
    'footer.nav_schools':'Schools','footer.nav_articles':'Insights',
    'footer.nav_tools':'Tools','footer.nav_services':'Consulting','footer.nav_about':'About',
    'footer.contact_wechat':'WeChat Work: 13732203788',
    'footer.contact_xhs':'Xiaohongshu: 贝蒂星妈 422507043',
    'footer.contact_phone':'(0081) 070-6987-5502',
    'footer.contact_email':'betty@kissho.school',
    'index.hero.kicker':'Tokyo International School Consulting',
    'index.hero.title':'Finding the <em>right international school</em> for your child',
    'index.hero.desc':'From school selection to enrollment, from MAP prep to Chinese language maintenance — our own children attend international schools in Tokyo, and we know firsthand how much every decision matters.',
    'index.hero.btn_services':'Our Services','index.hero.btn_schools':'Explore Schools',
    'index.offer.kicker':'What We Offer','index.offer.title':'What We Do',
    'index.offer.desc':'From information to decision, from enrollment to learning — we guide you every step of the way.',
    'index.mod.schools.title':'Schools','index.mod.schools.desc':'All international schools in Tokyo, searchable by area, curriculum, grade level, and tuition. Find the right school for your child.',
    'index.mod.articles.title':'Insights','index.mod.articles.desc':'School visit notes, selection methodology, curriculum guides, and exam prep — in-depth content from real visits and first-hand experience.',
    'index.mod.tools.title':'Learning Tools','index.mod.tools.desc':'MAP practice, Chinese reading & writing — tools we built for our own children, now open to all families.',
    'index.mod.consulting.title':'Consulting','index.mod.consulting.desc':'One-on-one school assessment, visit accompaniment, application guidance, interview coaching, and interpretation. Full support from research to enrollment.',
    'index.featured.kicker':'Featured Insights','index.featured.title':'Insights',
    'index.featured.desc':'Over a decade of experience — helping you see the full picture before you decide.',
    'index.article1.title':'Tokyo International School Selection Guide',
    'index.article1.excerpt':'From curriculum systems to application processes — a clear framework to help you find the right fit for your family.',
    'index.article2.title':'IB, A-Level, AP — A Complete Guide to Three Curriculum Systems',
    'index.article2.excerpt':'What are the differences between IB, A-Level, and AP? Which is right for your child? All explained in one place.',
    'index.article3.title':'MAP Test Prep Guide — Understanding Adaptive Testing',
    'index.article3.excerpt':'What is MAP? How do you read RIT scores? What traps do Chinese students fall into? From test mechanics to prep strategy.',
    'index.about.kicker':'About Us','index.about.title':'About KISSHO',
    'index.about.quote':'"We walk alongside you, into the right school."',
    'index.about.desc1':'Betty & Jerry founded KISSHO. Our four children attended Dulwich College Shanghai and now attend Seisen International School in Tokyo — we\'ve navigated every step ourselves, from school selection and exam prep to interviews and enrollment.',
    'index.about.desc2':'Betty has over a decade in education. Jerry brings product thinking and data capabilities to our school matching tools and knowledge base. We care deeply about every family and help you find the right school for your child.',
    'index.about.btn':'Learn More',
    'about.kicker':'About Us','about.title':'KISSHO',
    'about.tagline':'Guiding every family to the right international school.',
    'about.quote':'"We are not bystanders — we are parents walking the same path as you."',
    'about.story1':'In 2019, we moved from Shanghai to Tokyo with our four children. They transferred from Dulwich College Shanghai to Seisen International School — we navigated every step: school selection, exam preparation, interviews, and enrollment. We lived through every moment of uncertainty and anxiety.',
    'about.story2':'Information about international schools in Tokyo is scattered and rarely available in Chinese. Chinese-speaking families often rely only on word of mouth. We wanted to turn the path we\'d walked into a clear map — so that families who come after us can find their way more easily.',
    'about.story3':'Betty has over ten years in education and personally handles every family\'s consultation, school visits, and coaching. Jerry applies product thinking and data capabilities to build a curriculum knowledge base and school matching tools covering all international schools in Tokyo. One understands education, the other understands technology — a perfect complement.',
    'about.story4':'We give our full attention to every family. We don\'t recommend the most expensive or most famous school — we help you find the one that\'s right for your child. We\'ll walk this path together.',
    'about.team.kicker':'Team','about.team.title':'Founders',
    'about.betty.bio':'Master\'s graduate from Durham University (top 5 in the UK). After returning to China, she led operations and growth strategy for online education at Alibaba. With over a decade of deep experience in education, she has a thorough understanding of educational product design and user needs. Through her work, she has built long-standing relationships with admissions teams at numerous schools, and has conducted in-depth research into IB, A-Level, AP, and other major curriculum systems and their admission criteria.<br>Currently a mother of four, and a parent at both Dulwich College Shanghai (formerly) and Seisen International School (currently) — all four children passed their entrance assessments on the first attempt.<br>We give our full effort to every consultation and our full heart to every family.<br>At KISSHO, Betty leads client consultations, school visit accompaniment, written test and interview coaching, and all core service delivery.',
    'about.jerry.bio':'Mathematics and Computer Science graduate from the University of Paris. After returning to China, he spent over a decade building businesses in mobile internet, with annual revenues exceeding 3 billion RMB.<br>In 2019, he returned to family life and settled in Tokyo, combining years of business experience with a deep focus on education. He applies product thinking to refine every aspect of the service, and uses data-driven, systematic capabilities to build a curriculum knowledge base covering all international schools in Tokyo — creating tailored solutions for every family.<br>At KISSHO, Jerry leads curriculum system development, IT product design, and business operations.',
    'about.company.kicker':'Company Information','about.company.title':'Company Info',
    'services.kicker':'Consulting Services','services.title':'Consulting',
    'services.desc':'From information to execution — you focus on your child and family rhythm; we handle school information, language, and process.',
    'services.our.kicker':'Services','services.our.title':'What We Offer',
    'services.s1.title':'School Direction Consulting','services.s2.title':'School Visit Accompaniment',
    'services.s3.title':'Application Materials','services.s4.title':'Mock Tests & Academic Assessment',
    'services.s5.title':'Written & Interview Coaching + On-Site Accompaniment',
    'services.s6.title':'Post-Enrollment Communication Support',
    'services.s7.title':'Full-Service Management','services.s8.title':'Parent English Coaching',
    'services.process.kicker':'Process','services.process.title':'How It Works',
    'services.process.desc':'The typical journey from first conversation to enrollment.',
    'services.step1.title':'Initial Consultation','services.step2.title':'School Recommendations',
    'services.step3.title':'School Visits','services.step4.title':'Application & Preparation',
    'services.step5.title':'Interview Accompaniment','services.step6.title':'Enrollment & Ongoing Support',
    'services.step7.title':'Parent English Coaching',
    'services.cta.title':'Get Started','services.cta.desc':'Every family\'s situation is different. Let\'s start with a conversation.',
    'services.cta.btn':'Contact Us',
    'contact.kicker':'Contact','contact.title':'Contact Us',
    'contact.desc':'Choose whichever channel works best for you, and let\'s talk about your child\'s international school journey.',
    'contact.wechat.name':'WeChat Work','contact.wechat.number':'WeChat Work ID: 13732203788',
    'contact.wechat.hint':'Please share your child\'s grade and expected enrollment year',
    'contact.xhs.name':'Xiaohongshu','contact.xhs.number':'贝蒂星妈: 422507043',
    'contact.xhs.hint':'Follow us for the latest news and in-depth content on Tokyo international schools',
    'contact.phone.name':'Phone','contact.phone.hint':'Call us — let\'s find the right Tokyo international school together',
    'contact.email.name':'Email','contact.email.hint':'We reply quickly, except late at night',
    'contact.office.kicker':'Office','contact.access.label':'Access',
    'contact.address.value':'KISSHO BLDG. 101, 5-8-19 MEJIRO<br>TOSHIMA-KU, Tokyo 171-0031, Japan',
    'contact.access.value':'JR Yamanote Line (Mejiro), Seibu Ikebukuro Line (Shiinamachi), Oedo Line (Ochiai-Minaminagasaki)',
    'tools.kicker':'Learning Tools','tools.title':'Learning Tools<span style="letter-spacing:normal;"> (Free for a Limited Time)</span>',
    'tools.desc':'Learning tools we built for our own children at Tokyo international schools — now open to all families.',
    'tools.map.title':'MAP Practice (In Development)',
    'tools.map.desc':'We are developing an all-in-one "mock test + practice" platform for the MAP test used in international school admissions, covering all grade levels and subjects. A mock test first reveals your child\'s true level; the system can then dynamically assign practice questions matched to that level, continuously adapting throughout both testing and practice to always adjust the next question\'s difficulty. It fully replicates MAP\'s core mechanism of "always dynamically matching each student\'s true ability" — and adds dedicated practice on top.',
    'tools.map.f1':'Feature 1: e.g. "Covers Reading, Language Usage, and Mathematics";',
    'tools.map.f2':'Feature 2: e.g. "Adaptive difficulty that simulates a real exam experience";',
    'tools.map.f3':'Feature 3: Comprehensive practice question bank targeting exam skills;',
    'tools.map.f4':'Feature 4: e.g. "Post-practice proficiency diagnostic report";',
    'tools.chinese.title':'Chinese Practice',
    'tools.chinese.desc':'Children at international schools can gradually lose Chinese proficiency in an English-dominant environment. These tools help children maintain and strengthen their Chinese reading and writing skills.',
    'tools.chinese.btn':'Start Practicing','tools.japanese.title':'Japanese Kana Practice',
    'tools.japanese.desc':'Helps children and parents quickly master hiragana and katakana reading and writing — building a foundation for daily life and school communication in Japan.',
    'tools.japanese.btn':'Start Practicing','tools.why.title':'Why We Build Educational Software',
    'articles.kicker':'Insights','articles.title':'Insights',
    'articles.desc':'School visit notes, selection methodology, curriculum guides, and MAP prep — from real visits and years of accumulated experience.',
    'articles.filter.all':'All','articles.filter.visit':'School Visits',
    'articles.filter.method':'Methodology','articles.filter.curriculum':'Curriculum',
    'articles.filter.map':'MAP Prep',
    'articles.card1.title':'Shinagawa International School — Small but Complete',
    'articles.card1.excerpt':'Having visited 15 international schools in Tokyo, Shinagawa International was one of my most surprising finds. Dual IB programs, two campuses, a gym across the street.',
    'articles.card1.date':'Betty · Visited January 2023',
    'articles.card2.title':'How to Choose a Tokyo International School — A Guide from Those Who\'ve Been There',
    'articles.card2.excerpt':'From curriculum systems to application processes, from your child\'s English level to parent interview preparation. A clear framework to find the right direction for your family.',
    'articles.card2.date':'Betty & Jerry · March 2026',
    'articles.card3.title':'IB, A-Level, AP — A Complete Guide to Three Curriculum Systems',
    'articles.card3.excerpt':'What are the differences between IB, A-Level, and AP? Which suits your child? From daily study to university applications — all explained.',
    'articles.card3.date':'Betty & Jerry · March 2026',
    'articles.card4.title':'MAP Test Prep Guide — Understanding Adaptive Testing',
    'articles.card4.excerpt':'What is MAP? How do you read RIT scores? What traps do Chinese students fall into? From test mechanics to detailed prep strategy.',
    'articles.card4.date':'Betty & Jerry · March 2026',
    'schools.kicker':'School Explorer','schools.title':'Tokyo International Schools',
    'schools.desc':'115 international schools in and around Tokyo. 23 areas · 14 curriculum types · tuition from ¥500K to ¥3M+. Use the filters to narrow down your search. (Continuously updated)',
    'schools.filter.region.label':'Region','schools.filter.region.all':'All Areas',
    'schools.filter.curr.label':'Curriculum','schools.filter.curr.all':'All Curricula',
    'schools.filter.grade.label':'Grade Level','schools.filter.grade.all':'All Grades',
    'schools.filter.tuition.label':'Tuition Range','schools.filter.tuition.all':'All Tuition',
    'schools.btn.search':'Search','schools.btn.reset':'Reset Filters · Show All',
    'schools.data.note':'Database covers <strong>115 schools</strong> across Tokyo\'s 23 wards and surrounding areas.<br>For detailed information or personalized recommendations, <a href="contact.html" style="color:var(--red);">contact us</a>.',
    'schools.cta.title':'Not sure which school fits your child?',
    'schools.cta.desc':'115 schools may seem like a lot, but every family\'s situation is different. We\'ll help you find the right school for your child.',
    'schools.cta.btn':'Consulting Services',
    'schools.results.all':'<strong>{n}</strong> schools in database',
    'schools.results.filtered':'<strong>{n}</strong> schools match your filters',
    'schools.results.none':'No schools found matching your criteria',
    'schools.no_results.text':'No schools match the current filters.',
    'schools.no_results.hint':'Try broadening your search, or <a href="contact.html" style="color:var(--red);">contact us</a> for personalized recommendations.',
    'schools.tuition.contact':'Contact school',
  },
  ja: {
    'nav.home':'ホーム','nav.schools':'学校探索','nav.articles':'記事',
    'nav.tools':'学習ツール','nav.services':'相談サービス','nav.about':'私たちについて','nav.contact':'お問い合わせ',
    'footer.brand_desc':'東京の中国語系ご家族のための国際学校コンサルティング・学校選択ツール・教育製品。',
    'footer.nav_schools':'学校探索','footer.nav_articles':'記事',
    'footer.nav_tools':'学習ツール','footer.nav_services':'相談サービス','footer.nav_about':'私たちについて',
    'footer.contact_wechat':'企業WeChat：13732203788',
    'footer.contact_xhs':'小紅書：贝蒂星妈 422507043',
    'footer.contact_phone':'（0081）07069875502',
    'footer.contact_email':'betty@kissho.school',
    'index.hero.kicker':'Tokyo International School Consulting',
    'index.hero.title':'お子様に<em>最適な国際学校</em>を見つけます',
    'index.hero.desc':'学校選択から入学まで、MAP対策から中国語の維持まで — 私たち自身の子供も東京の国際学校に通っており、一つひとつの選択がいかに大切かを身をもって知っています。',
    'index.hero.btn_services':'サービスを見る','index.hero.btn_schools':'学校を探す',
    'index.offer.kicker':'What We Offer','index.offer.title':'私たちができること',
    'index.offer.desc':'情報から決断まで、入学から学習まで、一歩ずつご一緒します。',
    'index.mod.schools.title':'学校探索','index.mod.schools.desc':'東京の全国際学校を網羅。地域・カリキュラム・学年・学費で絞り込み。お子様に最適な学校を見つけましょう。',
    'index.mod.articles.title':'記事','index.mod.articles.desc':'学校訪問記、選校方法論、カリキュラム解説、受験対策 — 実際の訪問と現場経験からの深い内容。',
    'index.mod.tools.title':'学習ツール','index.mod.tools.desc':'MAP練習、中国語読み書き — 私たちの子供のために作ったツールを、より多くのご家族へ。',
    'index.mod.consulting.title':'相談サービス','index.mod.consulting.desc':'マンツーマンの学校選択、訪問同行、書類作成、面接指導、通訳。情報収集から入学まで全面支援。',
    'index.featured.kicker':'Featured Insights','index.featured.title':'注目記事',
    'index.featured.desc':'10年以上の経験をまとめた内容で、決断前に全体像を把握していただけます。',
    'index.article1.title':'東京国際学校 選校実践ガイド',
    'index.article1.excerpt':'カリキュラムから申請プロセスまで、ご家族に合った学校を見つけるための明確なフレームワーク。',
    'index.article2.title':'IB・A-Level・AP — 三大カリキュラム完全ガイド',
    'index.article2.excerpt':'IB・A-Level・APの違いは？お子様に合うのはどれ？一度で全部わかる解説。',
    'index.article3.title':'MAPテスト対策ガイド — 適応型テストを理解する',
    'index.article3.excerpt':'MAPとは？RITスコアの読み方は？中国人生徒がはまりやすい落とし穴は？試験の仕組みから対策まで。',
    'index.about.kicker':'About Us','index.about.title':'KISSHOについて',
    'index.about.quote':'「最適な学校へ、ともに歩みます。」',
    'index.about.desc1':'Betty & Jerry が吉祥書院を設立しました。私たちの4人の子供はかつてDulwich College Shanghaiに通い、現在は東京のSeisen International Schoolに在籍しています — 学校選択、受験準備、面接、入学まで、すべてを自ら経験しました。',
    'index.about.desc2':'Bettyは教育業界10年以上のキャリアを持ち、Jerryはプロダクト思考とデータ能力で学校選択ツールと知識ベースを構築。すべてのご家族に真摯に向き合い、お子様に最適な学校をお探しします。',
    'index.about.btn':'詳しく見る',
    'about.kicker':'About Us','about.title':'吉祥書院',
    'about.tagline':'すべてのご家族に寄り添い、最適な国際学校へ。',
    'about.quote':'「私たちは傍観者ではなく、同じ道を歩む親です。」',
    'about.story1':'2019年、私たちは4人の子供を連れて上海から東京へ移りました。Dulwich College ShanghaiからSeisen International Schoolへの転校 — 学校選択、受験準備、面接、入学まで、すべてを歩み、迷いや不安も肌で感じました。',
    'about.story2':'東京の国際学校情報は分散しており、中国語の資料はごくわずかです。中国語系ご家族は口コミだけで判断せざるを得ないことが多い。私たちが歩んだ道を明確な地図に変え、後から来るご家族の遠回りを減らしたいと思っています。',
    'about.story3':'Bettyは教育業界10年超のベテランで、すべてのご家族のコンサルティング・訪問・指導を直接担当。Jerryはプロダクト思考とデータ能力で、東京全域の国際学校カリキュラム知識ベースと学校選択ツールを構築しました。教育と技術、二人で補い合っています。',
    'about.story4':'私たちはすべてのご家族を大切にし、最も高い学校や有名な学校ではなく、お子様に最も合った学校をご提案します。この道を、ともに歩みます。',
    'about.team.kicker':'Team','about.team.title':'創業チーム',
    'about.betty.bio':'英国ダラム大学（英国トップ5）大学院卒業。帰国後、アリババにてオンライン教育事業の運営と成長戦略を担当。教育分野に10年以上携わり、教育プロダクトの設計とユーザーニーズへの深い理解を持つ。これまでの業務を通じて多くの学校の入試チームと長期的な信頼関係を築き、IB・A-Level・APなど主要カリキュラムとその入学評価基準について体系的・専門的な研究を行っている。<br>現在は4人の子供の母。かつてDulwich College Shanghai、現在はSeisen International Schoolの保護者として、全員が入学試験に一発合格。<br>すべてのご相談に全力で、すべてのご家族に真心を持って対応します。<br>KISSHOでは、クライアントへの相談対応、学校訪問同行、筆記・面接指導、学校連絡などコアサービスの提供を担当。',
    'about.jerry.bio':'パリ大学数学・コンピュータ応用専攻卒業。帰国後、モバイルインターネット業界で10年以上活躍し、年商30億人民元を超える企業を経営。<br>2019年に家族のもとへ戻り東京に定住。長年の事業経験と教育への思考を融合させ、プロダクト思考でサービスのあらゆる側面を磨き上げた。データドリブンかつ体系的な能力で東京全域の国際学校カリキュラム体系と知識要点データベースを構築し、各ご家族に最適なプランを提案。<br>KISSHOでは、カリキュラム体系の研究・開発、ITプロダクト設計、企業経営管理を担当。',
    'about.company.kicker':'Company Information','about.company.title':'会社情報',
    'services.kicker':'Consulting Services','services.title':'相談サービス',
    'services.desc':'情報から実行まで — お子様とご家庭のペースはご自身で、学校情報・言語・手続きは私たちにお任せください。',
    'services.our.kicker':'Services','services.our.title':'提供サービス',
    'services.s1.title':'学校選択コンサルティング','services.s2.title':'学校訪問同行',
    'services.s3.title':'入学申請書類作成','services.s4.title':'模擬試験・学力診断',
    'services.s5.title':'筆記・面接指導＆当日同行',
    'services.s6.title':'入学後の家庭・学校間コミュニケーション支援',
    'services.s7.title':'フルサポートパッケージ','services.s8.title':'保護者英語指導',
    'services.process.kicker':'Process','services.process.title':'サービスの流れ',
    'services.process.desc':'最初のご相談から入学までの典型的なプロセス。',
    'services.step1.title':'初回ご相談','services.step2.title':'学校提案',
    'services.step3.title':'学校訪問','services.step4.title':'申請・受験準備',
    'services.step5.title':'面接同行・通訳','services.step6.title':'入学・継続サポート',
    'services.step7.title':'保護者英語指導',
    'services.cta.title':'相談を始める','services.cta.desc':'ご家庭によって状況はさまざまです。まずお話しください。',
    'services.cta.btn':'お問い合わせ',
    'contact.kicker':'Contact','contact.title':'お問い合わせ',
    'contact.desc':'ご都合のよい方法で、お子様の国際学校についてお話しください。',
    'contact.wechat.name':'企業WeChat','contact.wechat.number':'企業WeChat ID：13732203788',
    'contact.wechat.hint':'お子様の学年と入学希望時期をお知らせください',
    'contact.xhs.name':'小紅書','contact.xhs.number':'贝蒂星妈：422507043',
    'contact.xhs.hint':'フォローして東京国際学校の最新情報と深い内容をチェック',
    'contact.phone.name':'電話','contact.phone.hint':'お気軽にお電話ください。最適な東京国際学校を一緒に見つけましょう',
    'contact.email.name':'メール','contact.email.hint':'深夜以外はすぐにご返信します',
    'contact.office.kicker':'Office','contact.access.label':'アクセス',
    'contact.address.value':'KISSHO BLDG. 101, 5-8-19 MEJIRO<br>TOSHIMA-KU, Tokyo 171-0031, Japan',
    'contact.access.value':'JR山手線（目白駅）、西武池袋線（椎名町駅）、大江戸線（落合南長崎駅）いずれも利用可',
    'tools.kicker':'Learning Tools','tools.title':'学習ツール<span style="letter-spacing:normal;">（期間限定無料）</span>',
    'tools.desc':'東京の国際学校に通う私たちの子供のために作ったツールを、より多くのご家族へ。',
    'tools.map.title':'MAP 練習（開発中）',
    'tools.map.desc':'国際学校入学の MAP テストに向けて、全学年・全教科に対応した「模擬テスト＋練習」一体型ソフトウェアを開発中です。模擬テストでお子様の真の実力を把握した後、システムはその水準に応じて動的に適切な難易度の問題を出題できます。テストと練習の全過程で継続的に自己適応し、常に次の問題の難易度を調整します。MAP テストの「常に生徒の真の実力に動的にマッチする」コアメカニズムを完全に再現し、さらに専門練習機能を追加しています。',
    'tools.map.f1':'機能 1：例えば「Reading・Language Usage・Mathematics の3科目に対応」；',
    'tools.map.f2':'機能 2：例えば「自己適応難易度で本番テストを模擬」；',
    'tools.map.f3':'機能 3：試験能力に特化した完全な練習問題集を提供；',
    'tools.map.f4':'機能 4：例えば「練習後に習熟度診断レポートを生成」；',
    'tools.chinese.title':'中国語練習',
    'tools.chinese.desc':'国際学校の子供たちは英語環境で中国語能力が低下しがちです。このツールで日常学習の傍ら、中国語の読み書き力を維持・向上させましょう。',
    'tools.chinese.btn':'練習を始める','tools.japanese.title':'日本語仮名練習',
    'tools.japanese.desc':'子供と保護者がひらがな・カタカナの読み書きを素早く習得し、日本での生活や学校コミュニケーションの基盤を作ります。',
    'tools.japanese.btn':'練習を始める','tools.why.title':'なぜ私たちは教育ソフトウェアを作るのか',
    'articles.kicker':'Insights','articles.title':'記事',
    'articles.desc':'訪問記、選校方法、カリキュラム解説、MAPガイド — 実際の訪問と長年の経験から。',
    'articles.filter.all':'すべて','articles.filter.visit':'学校訪問',
    'articles.filter.method':'選校方法','articles.filter.curriculum':'カリキュラム',
    'articles.filter.map':'MAP対策',
    'articles.card1.title':'品川インターナショナルスクール徹底訪問記',
    'articles.card1.excerpt':'東京の15校を訪問した中で、品川インターナショナルは最も驚かされた学校の一つです。IBダブルプログラム、二つのキャンパス。',
    'articles.card1.date':'Betty · 2023年1月訪問',
    'articles.card2.title':'東京の国際学校の選び方 — 経験者からのガイド',
    'articles.card2.excerpt':'カリキュラムから申請プロセスまで、お子様の英語力から保護者の面接準備まで。ご家族に合った学校を見つけるための明確なフレームワーク。',
    'articles.card2.date':'Betty & Jerry · 2026年3月',
    'articles.card3.title':'IB・A-Level・AP — 三大カリキュラム完全ガイド',
    'articles.card3.excerpt':'IB・A-Level・APの違いは？お子様に合うのはどれ？日常学習から大学受験まで、一度で全部わかる解説。',
    'articles.card3.date':'Betty & Jerry · 2026年3月',
    'articles.card4.title':'MAPテスト対策ガイド',
    'articles.card4.excerpt':'MAPとは？RITスコアの読み方は？中国人生徒がはまりやすい落とし穴は？試験の仕組みから対策まで。',
    'articles.card4.date':'Betty & Jerry · 2026年3月',
    'schools.kicker':'School Explorer','schools.title':'東京国際学校探索',
    'schools.desc':'東京及び周辺115校。23エリア・14カリキュラム・学費50万円〜300万円以上。フィルターで絞り込み、気になる学校を見つけましょう。（随時更新中）',
    'schools.filter.region.label':'地域','schools.filter.region.all':'すべての地域',
    'schools.filter.curr.label':'カリキュラム','schools.filter.curr.all':'すべて',
    'schools.filter.grade.label':'学年','schools.filter.grade.all':'すべての学年',
    'schools.filter.tuition.label':'学費（年間）','schools.filter.tuition.all':'すべての学費',
    'schools.btn.search':'検索','schools.btn.reset':'リセット · 全件表示',
    'schools.data.note':'データベースに<strong>115校</strong>を収録 · 東京23区および神奈川・千葉・埼玉・多摩地区をカバー<br>特定の学校の詳細情報や選校アドバイスは<a href="contact.html" style="color:var(--red);">お問い合わせ</a>ください',
    'schools.cta.title':'どの学校がお子様に合うか迷っていますか？',
    'schools.cta.desc':'115校あっても、ご家庭の状況はそれぞれ違います。お子様に最適な学校を一緒に見つけましょう。',
    'schools.cta.btn':'相談サービスを見る',
    'schools.results.all':'データベース収録 <strong>{n}校</strong>',
    'schools.results.filtered':'条件に一致する学校 <strong>{n}校</strong>',
    'schools.results.none':'条件に一致する学校が見つかりませんでした',
    'schools.no_results.text':'現在のフィルター条件に合う学校はありません。',
    'schools.no_results.hint':'条件を緩めてお試しいただくか、<a href="contact.html" style="color:var(--red);">お問い合わせ</a>ください。',
    'schools.tuition.contact':'学校にお問い合わせください',
  }
};

// Expose translation lookup globally (used by schools.html inline script)
window.kisshoT = function(key, params) {
  var lang = localStorage.getItem('kissho-lang') || 'zh';
  var t = T[lang] || T.zh;
  var val = t[key] !== undefined ? t[key] : (T.zh[key] !== undefined ? T.zh[key] : key);
  if (params) Object.keys(params).forEach(function(k) { val = val.replace('{' + k + '}', params[k]); });
  return val;
};

function applyI18n(lang) {
  var t = T[lang] || T.zh;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang === 'ja' ? 'ja' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('.lang-switch').forEach(function(group) {
    group.querySelectorAll('.lang-btn').forEach(function(btn, i) {
      btn.classList.toggle('active', LANGS[i] === lang);
    });
  });
  localStorage.setItem('kissho-lang', lang);
}

// ── Shared footer injection ──
(function () {
  var footer = document.querySelector('footer.site-footer');
  if (!footer) return;
  footer.outerHTML = `<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <div class="footer-logo-text"><span style="letter-spacing:0.2em;">吉祥书院</span> <span class="en" style="font-weight:400;font-size:0.85rem;opacity:0.6;margin-left:1.1em;">KISSHO Co., Ltd</span></div>
        <p class="footer-brand-desc" data-i18n="footer.brand_desc">面向东京华人家庭的国际学校咨询、选校工具与教育产品。</p>
        <p class="footer-brand-desc" style="font-size:0.78rem;opacity:0.5;">KISSHO BLDG. 101, 5-8-19 MEJIRO<br>TOSHIMA-KU, Tokyo 171-0031, Japan</p>
      </div>
      <div>
        <div class="footer-heading en">Navigation</div>
        <ul class="footer-links">
          <li><a href="schools.html" data-i18n="footer.nav_schools">学校探索</a></li>
          <li><a href="articles.html" data-i18n="footer.nav_articles">深度文章</a></li>
          <li><a href="tools.html" data-i18n="footer.nav_tools">学习工具</a></li>
          <li><a href="services.html" data-i18n="footer.nav_services">咨询服务</a></li>
          <li><a href="about.html" data-i18n="footer.nav_about">关于我们</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-heading en">Contact</div>
        <ul class="footer-contact-list">
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 12a9 9 0 1 1-9-9 9 9 0 0 1 9 9Z"/><path d="M9 10h.01M15 10h.01M9.5 15a5 5 0 0 0 5 0"/></svg><span data-i18n="footer.contact_wechat">企微号：13732203788</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 20a8 8 0 0 1-8-8V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a8 8 0 0 1-8 8Z"/><path d="M8 10h8M8 14h5"/></svg><span data-i18n="footer.contact_xhs">小红书：贝蒂星妈 422507043</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.74-1.25a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68a2 2 0 0 1 1.72 2.03Z"/></svg><span data-i18n="footer.contact_phone">（0081）07069875502</span></li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><span data-i18n="footer.contact_email">betty@kissho.school</span></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; 2026 KISSHO Co., Ltd &middot; 吉祥株式会社 &middot; All Rights Reserved</span>
      <div class="lang-switch" style="border-left:1px solid rgba(255,255,255,0.15);margin-left:0;padding-left:16px;">
        <button class="lang-btn" style="color:rgba(255,255,255,0.7);">中文</button>
        <button class="lang-btn" style="color:rgba(255,255,255,0.4);">EN</button>
        <button class="lang-btn" style="color:rgba(255,255,255,0.4);">日本語</button>
      </div>
    </div>
  </div>
</footer>`;
})();

// ── Apply saved language ──
(function() {
  var saved = localStorage.getItem('kissho-lang') || 'zh';
  applyI18n(saved);
})();

// ── Lang button click handlers ──
document.addEventListener('click', function(e) {
  var btn = e.target.closest('.lang-btn');
  if (!btn) return;
  var allBtns = Array.from(document.querySelectorAll('.lang-btn'));
  var langBtns = allBtns.filter(function(b) { return b.closest('.lang-switch') !== null; });
  // Find which position this button is among lang buttons in the same switch group
  var switchEl = btn.closest('.lang-switch');
  if (!switchEl) return;
  var switchBtns = Array.from(switchEl.querySelectorAll('.lang-btn'));
  var idx = switchBtns.indexOf(btn);
  if (idx >= 0 && idx < LANGS.length) applyI18n(LANGS[idx]);
});

// ── Mobile nav toggle ──
var navToggle = document.getElementById('navToggle');
var mainNav = document.getElementById('mainNav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', function() {
    mainNav.classList.toggle('open');
    var expanded = mainNav.classList.contains('open');
    navToggle.setAttribute('aria-expanded', expanded);
    navToggle.setAttribute('aria-label', expanded ? '关闭菜单' : '打开菜单');
  });
  document.addEventListener('click', function(e) {
    if (mainNav.classList.contains('open') &&
        !mainNav.contains(e.target) &&
        !navToggle.contains(e.target)) {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', '打开菜单');
    }
  });
}

// ── Scroll reveal ──
var revealElements = document.querySelectorAll('.reveal');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealElements.forEach(function(el) { observer.observe(el); });
