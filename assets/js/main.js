const html = document.documentElement;
const root = document.body;
const nav = document.querySelector("header nav");
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".nav-links a");
const themeToggle = document.querySelector(".theme-toggle");
const langToggle = document.querySelector(".lang-toggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

const THEME_STORAGE_KEY = "hisham-theme";
const LANG_STORAGE_KEY = "hisham-lang";
const DEFAULT_LANG = "en";

const translations = {
  en: {
    "meta.title": "Hisham Hashem Ali Alshareef | Backend Developer",
    "meta.description":
      "Backend developer specializing in secure fintech systems, Django REST APIs, and resilient infrastructure.",
    "meta.logo": "Hisham<span>.</span>",
    "nav.highlights": "Highlights",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.services": "Services",
    "nav.skills": "Skills",
    "nav.achievements": "Achievements",
    "nav.projects": "Projects",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.hire": "Hire me",
    "nav.langToggle": "العربية",
    "nav.langToggleLabel": "Switch language",
    "hero.eyebrow": "Backend Developer · FinTech Specialist",
    "hero.title": "Building reliable payment platforms that scale with ambition.",
    "hero.lede":
      "I help teams ship secure, high-availability fintech systems with Django REST, modern DevOps pipelines, and pragmatic engineering practices. Every release aims for measurable uptime, performance, and trust.",
    "hero.ctaPrimary": "Let's build together",
    "hero.ctaCV": "Download CV",
    "hero.highlight1.label": "03+ yrs",
    "hero.highlight1.text": "Designing and operating financial backends",
    "hero.highlight2.label": "Low latency",
    "hero.highlight2.text": "Introduced monitoring that cut API response times by 35%",
    "hero.highlight3.label": "Security-first",
    "hero.highlight3.text": "Proactive hardening of payment APIs and infrastructure",
    "hero.card.title": "At a glance",
    "hero.card.nationality.label": "Nationality:",
    "hero.card.nationality.value": "Yemeni",
    "hero.card.languages.label": "Languages:",
    "hero.card.languages.value": "Arabic (Native), English (Advanced), German (Intermediate)",
    "hero.card.strengths.label": "Strengths:",
    "hero.card.strengths.value": "Technical stewardship, analytical problem-solving, security-first delivery",
    "hero.metrics.1": "CI/CD Advocate",
    "hero.metrics.2": "API Steward",
    "hero.metrics.3": "Incident Responder",
    "hero.stat1": "% Uptime",
    "hero.stat2": "% Faster APIs",
    "hero.stat3": "x Deploy Speed",
    "hero.portraitAlt": "Portrait of Hisham Hashem Ali Alshareef",
    "hero.scrollCue": "Scroll to highlights",
    "highlights.title": "Impact Highlights",
    "highlights.subtitle": "Numbers that reflect the outcomes of resilient infrastructure and thoughtful engineering.",
    "highlights.card1.title": "Up to 99.8% uptime",
    "highlights.card1.text": "Stabilized payment services with proactive monitoring and root-cause remediation.",
    "highlights.card2.title": "10+ integrated APIs",
    "highlights.card2.text": "Delivered integrations for banking, mobile wallets, and partner ecosystems with DRF.",
    "highlights.card3.title": "4x deployment cadence",
    "highlights.card3.text": "Automated pipelines that shrank release cycle times while increasing confidence.",
    "highlights.card4.title": "Zero critical breaches",
    "highlights.card4.text": "Security reviews and hardening plans that kept sensitive financial data protected.",
    "about.title": "About",
    "about.subtitle": "Transforming business goals into resilient backend architecture.",
    "about.body1":
      "I specialize in building and maintaining secure backend services that keep financial operations moving. From diagnosing production incidents to leading the adoption of CI/CD pipelines, I ensure systems stay reliable, scalable, and easy for teams to collaborate on. My background in technical support helps me bridge the gap between engineering and stakeholder needs, translating complex issues into actionable insights.",
    "about.body2":
      "I thrive in environments where reliability, security, and speed all matter. My approach is practical and data-driven: instrument the system, observe the signals, and iterate quickly without sacrificing quality. The goal is always the same—ship features that customers trust and teams love to maintain.",
    "experience.title": "Experience",
    "experience.subtitle": "Leading backend initiatives from concept to production.",
    "experience.role1.dates": "2023 — Present",
    "experience.role1.company": "Tasheel for Financial Technology Solutions",
    "experience.role1.role": "Backend Developer · Sana'a, Yemen",
    "experience.role1.bullet1":
      "Architect and maintain mission-critical services supporting payment solutions used daily by thousands of customers.",
    "experience.role1.bullet2":
      "Design and expose RESTful APIs with Django REST Framework to streamline integrations with partners and internal teams.",
    "experience.role1.bullet3":
      "Introduce performance monitoring and tuning workflows that keep latency low under heavy transaction volume.",
    "experience.role1.bullet4":
      "Own backend security posture, applying best practices to protect sensitive financial data.",
    "experience.role2.dates": "2022 — Present",
    "experience.role2.company": "Fintechsys IT Services & Consulting",
    "experience.role2.role": "Software Engineer · Sana'a, Yemen",
    "experience.role2.bullet1":
      "Resolve time-sensitive technical incidents to keep financial transactions flowing without downtime.",
    "experience.role2.bullet2":
      "Collaborate with cross-functional teams to ship new product capabilities and improve existing workflows.",
    "experience.role2.bullet3":
      "Deliver technical training that raises the team's awareness of security threats and modern tooling.",
    "experience.role3.dates": "Jan — Mar 2022",
    "experience.role3.company": "Fintechsys IT Services & Consulting",
    "experience.role3.role": "Backend Developer · Sana'a, Yemen",
    "experience.role3.bullet1":
      "Maintained critical databases and data pipelines that ensured accurate financial reporting.",
    "experience.role3.bullet2":
      "Provided hands-on technical support to resolve system issues and minimize disruptions.",
    "experience.role3.bullet3":
      "Partnered with product teams to enhance administrative modules and automation coverage.",
    "services.title": "Services & Strengths",
    "services.subtitle": "Strategic backend leadership that keeps financial technology moving forward.",
    "services.card1.title": "API Architecture",
    "services.card1.text": "Design RESTful APIs with precise documentation, versioning strategies, and security baked in.",
    "services.card1.bullet1": "Schema-first design with DRF",
    "services.card1.bullet2": "Automated testing pipelines",
    "services.card1.bullet3": "Partner-friendly documentation",
    "services.card2.title": "DevOps Enablement",
    "services.card2.text": "Stand up Dockerized environments, CI/CD pipelines, and observability so releases stay predictable.",
    "services.card2.bullet1": "Container orchestration",
    "services.card2.bullet2": "Continuous delivery workflows",
    "services.card2.bullet3": "Infrastructure as code foundations",
    "services.card3.title": "Production Reliability",
    "services.card3.text": "Lead incident response, root-cause analysis, and performance tuning with measurable improvements.",
    "services.card3.bullet1": "Latency and throughput profiling",
    "services.card3.bullet2": "Security hardening roadmaps",
    "services.card3.bullet3": "Team enablement & documentation",
    "skills.title": "Core Skills",
    "skills.subtitle": "Tooling and capabilities that accelerate delivery and keep systems steady.",
    "skills.column1.title": "Backend Development",
    "skills.column1.subtitle1": "Frameworks & Languages",
    "skills.column1.subtitle2": "Databases & Storage",
    "skills.column2.title": "DevOps & Infrastructure",
    "skills.column2.subtitle1": "Containerization & Orchestration",
    "skills.column2.subtitle2": "CI/CD & Monitoring",
    "skills.column3.title": "Security & Performance",
    "skills.column3.subtitle1": "Security Practices",
    "skills.column3.subtitle2": "Performance & Testing",
    "skills.tag1": "RPA",
    "skills.tag2": "Git & GitHub",
    "skills.tag3": "Firebase",
    "skills.tag4": "PostgreSQL",
    "skills.tag5": "Advanced Excel",
    "skills.tag6": "Microsoft Office",
    "skills.tag7": "Python Regex",
    "skills.tag8": "Photoshop",
    "projects.title": "Highlighted Project",
    "projects.subtitle": "Driving digital payment transformation at scale.",
    "projects.card.title": "Payment Hub Platform · Fintechsys IT Services",
    "projects.card.bullet1":
      "Built containerized environments with Docker to ensure consistent deployment across teams.",
    "projects.card.bullet2":
      "Maintained GitHub workflows and release practices to streamline collaboration.",
    "projects.card.bullet3":
      "Implemented CI/CD pipelines to automate testing and reduce time-to-production.",
    "projects.card.bullet4":
      "Diagnosed integration issues rapidly, protecting the platform's uptime and credibility.",
    "projects.card.bullet5":
      "Continuously tuned application performance and hardened security posture.",
    "achievements.title": "Key Achievements",
    "achievements.subtitle": "Measurable impact in fintech backend development and system reliability.",
    "achievements.card1.title": "35% API Performance Boost",
    "achievements.card1.text": "Optimized Django REST APIs and database queries, reducing average response time from 450ms to 290ms.",
    "achievements.card1.metric": "Avg Response Time",
    "achievements.card2.title": "Zero Security Breaches",
    "achievements.card2.text": "Implemented comprehensive security measures including OAuth 2.0, JWT tokens, and data encryption.",
    "achievements.card2.metric": "Security Score",
    "achievements.card3.title": "4x Faster Deployments",
    "achievements.card3.text": "Built CI/CD pipelines with Docker and GitHub Actions, reducing deployment time from 2 hours to 30 minutes.",
    "achievements.card3.metric": "Deploy Time",
    "achievements.card4.title": "99.8% System Uptime",
    "achievements.card4.text": "Maintained high availability for payment processing systems serving thousands of daily transactions.",
    "achievements.card4.metric": "Uptime",
    "education.title": "Education",
    "education.subtitle": "Academic foundation in information technology and systems engineering.",
    "education.card1.title": "Lebanese International University (LIU)",
    "education.card1.role": "BSc Information Technology · GPA 3.87 (Excellent)",
    "education.card1.meta": "Sana'a, Yemen · 2021",
    "education.card2.title": "ICDL Certification",
    "education.card2.role": "New Horizons Computer Learning Center",
    "education.card2.meta": "Grade: Excellent · Sana'a, Yemen · 2016",
    "education.card3.title": "TOEFL iBT Preparation",
    "education.card3.role": "Yemen American Language Institute (YALI)",
    "education.card3.meta": "Sana'a, Yemen · 2017",
    "certifications.title": "Courses & Certifications",
    "certifications.subtitle": "Continuous learning to keep skills sharp and relevant.",
    "certifications.item1": "IT Enhancement Program (ITEP) · DJIV · 2024",
    "certifications.item2": "English Language · Exceed Language Center · 2022",
    "certifications.item3": "Django REST Framework (Advanced) · Udemy · 2022",
    "certifications.item4": "Django REST Framework (Beginner) · Udemy · 2022",
    "certifications.item5": "CCNA Routing & Switching · GTI · 2019",
    "certifications.item6": "Advanced Excel · Talal Abu-Ghazaleh Organization · 2019",
    "certifications.item7": "Public Talk Skills · Life Makers Foundation · 2015",
    "testimonials.title": "Testimonials",
    "testimonials.subtitle":
      "Trusted by peers and leadership to handle complex technical challenges under pressure.",
    "testimonials.quote1":
      "“Hisham brings clarity to complex backend problems. He not only fixes critical issues quickly but also coaches the team on how to avoid them in the future.”",
    "testimonials.person1": "Technical Lead · Tasheel",
    "testimonials.quote2":
      "“From Docker pipelines to production security reviews, Hisham elevated our engineering practices across the board. He is the calm in every incident call.”",
    "testimonials.person2": "CTO · Fintechsys",
    "cta.title": "Let's launch your next fintech milestone",
    "cta.subtitle":
      "From greenfield platforms to stabilizing existing systems, I can help architect dependable backend solutions with clean APIs, observability, and automation at the core.",
    "cta.primary": "Book a call",
    "cta.secondary": "Connect on LinkedIn",
    "contact.title": "Contact",
    "contact.subtitle": "Let's collaborate on secure, reliable fintech systems.",
    "contact.direct.title": "Direct Contact",
    "contact.direct.phone1.label": "Phone:",
    "contact.direct.phone1.value": "+967 774 200 592",
    "contact.direct.phone2.label": "Phone:",
    "contact.direct.phone2.value": "+967 771 238 005",
    "contact.direct.email.label": "Email:",
    "contact.direct.email.value": "heshamaIshareef1997@gmail.com",
    "contact.direct.cta": "Send Email",
    "contact.online.title": "Online Presence",
    "contact.online.linkedin.label": "LinkedIn:",
    "contact.online.linkedin.value": "/hisham-alshareef-91264a189",
    "contact.online.github.label": "GitHub:",
    "contact.online.github.value": "@Hisham164",
    "contact.online.cta": "Connect on LinkedIn",
    "contact.availability.title": "Currently Available",
    "contact.availability.text":
      "Open to full-time, contract, and remote opportunities where backend reliability is mission-critical.",
    "contact.availability.types.label": "Opportunity Types:",
    "contact.availability.types.value": "Full-time, Contract, Remote",
    "contact.availability.response.label": "Response Time:",
    "contact.availability.response.value": "Within 24 hours",
    "footer.copy":
      "© <span id=\"year\"></span> Hisham Hashem Ali Alshareef. Built with care and precision.",
    "footer.top": "Back to top ↑"
  },
  ar: {
    "meta.title": "هشام هاشم علي الشريف | مطور خلفية",
    "meta.description":
      "مطور خلفية متخصص في الأنظمة المالية الآمنة، واجهات Django REST، والبنية التحتية الموثوقة.",
    "meta.logo": "هشام<span>.</span>",
    "nav.highlights": "الإنجازات",
    "nav.about": "نبذة",
    "nav.experience": "الخبرات",
    "nav.services": "الخدمات",
    "nav.skills": "المهارات",
    "nav.achievements": "الإنجازات",
    "nav.projects": "المشاريع",
    "nav.testimonials": "الشهادات",
    "nav.contact": "تواصل",
    "nav.hire": "تعاقد معي",
    "nav.langToggle": "English",
    "nav.langToggleLabel": "تبديل اللغة",
    "hero.eyebrow": "مطور خلفية · مختص في التقنية المالية",
    "hero.title": "أبني منصات مدفوعات موثوقة تنمو مع طموحك.",
    "hero.lede":
      "أساعد الفرق على إطلاق أنظمة تقنية مالية آمنة وعالية التوافر باستخدام Django REST وخطوط DevOps الحديثة وممارسات هندسية عملية. كل إصدار يهدف إلى موثوقية وأداء وثقة قابلة للقياس.",
    "hero.ctaPrimary": "لنبنِ معًا",
    "hero.ctaCV": "تحميل السيرة الذاتية",
    "hero.highlight1.label": "أكثر من 3 سنوات",
    "hero.highlight1.text": "تصميم وتشغيل الأنظمة الخلفية المالية",
    "hero.highlight2.label": "زمن استجابة منخفض",
    "hero.highlight2.text": "تطوير المراقبة لخفض زمن استجابة واجهات API بنسبة 35%",
    "hero.highlight3.label": "الأمن أولًا",
    "hero.highlight3.text": "تحصين استباقي لواجهات الدفع والبنية التحتية",
    "hero.card.title": "لمحة سريعة",
    "hero.card.nationality.label": "الجنسية:",
    "hero.card.nationality.value": "يمني",
    "hero.card.languages.label": "اللغات:",
    "hero.card.languages.value": "العربية (أم)، الإنجليزية (متقدم)، الألمانية (متوسط)",
    "hero.card.strengths.label": "نقاط القوة:",
    "hero.card.strengths.value": "قيادة تقنية، حل مشكلات تحليلي، عقلية أمنية في كل خطوة",
    "hero.metrics.1": "داعم لتدفق CI/CD",
    "hero.metrics.2": "قيّم واجهات API",
    "hero.metrics.3": "مستجيب للحوادث",
    "hero.stat1": "% وقت التشغيل",
    "hero.stat2": "% واجهات أسرع",
    "hero.stat3": "x سرعة النشر",
    "hero.portraitAlt": "صورة هشام هاشم علي الشريف",
    "hero.scrollCue": "الانتقال إلى قسم الإنجازات",
    "highlights.title": "أبرز الأثر",
    "highlights.subtitle": "أرقام تعكس نتائج بنية تحتية مرنة وهندسة مدروسة.",
    "highlights.card1.title": "استقرار يصل إلى 99.8%",
    "highlights.card1.text": "استقرار خدمات الدفع عبر المراقبة الاستباقية وتحليل الأسباب الجذرية.",
    "highlights.card2.title": "أكثر من 10 واجهات متكاملة",
    "highlights.card2.text": "تسليم تكاملات للبنوك والمحافظ الإلكترونية وشركاء بيئات العمل باستخدام DRF.",
    "highlights.card3.title": "إصدار أسرع بـ 4 مرات",
    "highlights.card3.text": "أتمتة خطوط النشر لتقليص دورات الإصدار مع زيادة الثقة.",
    "highlights.card4.title": "صفر اختراقات حرجة",
    "highlights.card4.text": "مراجعات أمنية وخطط تحصين تحمي البيانات المالية الحساسة.",
    "about.title": "نبذة",
    "about.subtitle": "تحويل أهداف الأعمال إلى بنية خلفية مرنة.",
    "about.body1":
      "أتخصص في بناء وصيانة خدمات خلفية آمنة تبقي العمليات المالية مستمرة. من تشخيص أعطال الإنتاج إلى قيادة تبني خطوط CI/CD، أضمن أن تظل الأنظمة موثوقة وقابلة للتوسع وسهلة التعاون. خبرتي في الدعم الفني تساعدني على سد الفجوة بين الفرق التقنية وأصحاب المصلحة وتحويل التعقيدات إلى خطوات واضحة.",
    "about.body2":
      "أزدهر في بيئات يتداخل فيها الموثوقية والأمن والسرعة. منهجي عملي قائم على البيانات: أرصد النظام، أراقب المؤشرات، وأكرر التحسين دون المساس بالجودة. الهدف الدائم هو إطلاق ميزات يثق بها العملاء ويستمتع الفريق بصيانتها.",
    "experience.title": "الخبرات",
    "experience.subtitle": "قيادة مبادرات الأنظمة الخلفية من الفكرة إلى الإنتاج.",
    "experience.role1.dates": "2023 — الآن",
    "experience.role1.company": "تسهيل لحلول التكنولوجيا المالية",
    "experience.role1.role": "مطور خلفية · صنعاء، اليمن",
    "experience.role1.bullet1":
      "تصميم وصيانة خدمات أساسية تدعم حلول الدفع المستخدمة يوميًا من قبل آلاف العملاء.",
    "experience.role1.bullet2":
      "بناء وتقديم واجهات REST باستخدام Django REST Framework لتسهيل التكامل مع الشركاء والفرق الداخلية.",
    "experience.role1.bullet3":
      "إطلاق مراقبة للأداء وتحسينات تبقي زمن الاستجابة منخفضًا تحت ضغط المعاملات العالي.",
    "experience.role1.bullet4":
      "إدارة الوضع الأمني للأنظمة الخلفية وتطبيق أفضل الممارسات لحماية البيانات المالية الحساسة.",
    "experience.role2.dates": "2022 — الآن",
    "experience.role2.company": "فينتك سيستيمز لخدمات وتقنيات المعلومات",
    "experience.role2.role": "مهندس برمجيات · صنعاء، اليمن",
    "experience.role2.bullet1":
      "حل أعطال تقنية حساسة للوقت لضمان استمرار تدفق المعاملات المالية دون توقف.",
    "experience.role2.bullet2":
      "التعاون مع فرق متعددة التخصصات لإطلاق قدرات جديدة وتحسين سير العمل القائم.",
    "experience.role2.bullet3":
      "تقديم تدريب تقني يرفع وعي الفريق بالتهديدات الأمنية والأدوات الحديثة.",
    "experience.role3.dates": "يناير — مارس 2022",
    "experience.role3.company": "فينتك سيستيمز لخدمات وتقنيات المعلومات",
    "experience.role3.role": "مطور خلفية · صنعاء، اليمن",
    "experience.role3.bullet1":
      "إدارة قواعد البيانات وخطوط البيانات الحرجة لضمان تقارير مالية دقيقة.",
    "experience.role3.bullet2":
      "تقديم دعم تقني مباشر لحل مشكلات الأنظمة وتقليل الاضطرابات.",
    "experience.role3.bullet3":
      "الشراكة مع فرق المنتج لتعزيز الوحدات الإدارية وزيادة الأتمتة.",
    "services.title": "الخدمات ونقاط القوة",
    "services.subtitle": "قيادة خلفية استراتيجية تحافظ على تقدّم التقنية المالية.",
    "services.card1.title": "هندسة واجهات API",
    "services.card1.text": "تصميم واجهات REST بوثائق دقيقة، واستراتيجيات إصدار، وأمن متكامل.",
    "services.card1.bullet1": "تصميم قائم على المخططات باستخدام DRF",
    "services.card1.bullet2": "خطوط اختبار مؤتمتة",
    "services.card1.bullet3": "توثيق صديق للشركاء",
    "services.card2.title": "تمكين DevOps",
    "services.card2.text":
      "إنشاء بيئات قائمة على Docker، وخطوط CI/CD، ومراقبة شاملة لضمان نشر متوقع.",
    "services.card2.bullet1": "تنظيم الحاويات",
    "services.card2.bullet2": "مسارات تسليم مستمرة",
    "services.card2.bullet3": "أسس للبنية التحتية ككود",
    "services.card3.title": "موثوقية الإنتاج",
    "services.card3.text":
      "قيادة الاستجابة للحوادث، وتحليل الأسباب الجذرية، وتحسين الأداء بنتائج قابلة للقياس.",
    "services.card3.bullet1": "تحليل زمن الاستجابة ومعدل النقل",
    "services.card3.bullet2": "خطط تحصين أمنية",
    "services.card3.bullet3": "تمكين الفريق والتوثيق",
    "skills.title": "المهارات الأساسية",
    "skills.subtitle": "أدوات وقدرات تسرع التسليم وتحافظ على استقرار الأنظمة.",
    "skills.column1.title": "تطوير الأنظمة الخلفية",
    "skills.column1.subtitle1": "الأطر واللغات",
    "skills.column1.subtitle2": "قواعد البيانات والتخزين",
    "skills.column2.title": "DevOps والبنية التحتية",
    "skills.column2.subtitle1": "الحاويات والتنسيق",
    "skills.column2.subtitle2": "CI/CD والمراقبة",
    "skills.column3.title": "الأمان والأداء",
    "skills.column3.subtitle1": "ممارسات الأمان",
    "skills.column3.subtitle2": "الأداء والاختبار",
    "skills.tag1": "أتمتة العمليات (RPA)",
    "skills.tag2": "Git و GitHub",
    "skills.tag3": "Firebase",
    "skills.tag4": "PostgreSQL",
    "skills.tag5": "إكسل متقدم",
    "skills.tag6": "مايكروسوفت أوفيس",
    "skills.tag7": "تعبيرات بايثون النمطية",
    "skills.tag8": "فوتوشوب",
    "projects.title": "مشروع مميز",
    "projects.subtitle": "قيادة تحول المدفوعات الرقمية على نطاق واسع.",
    "projects.card.title": "منصة مركز المدفوعات · فينتك سيستيمز",
    "projects.card.bullet1":
      "بناء بيئات معتمدة على Docker لضمان نشر متسق بين الفرق.",
    "projects.card.bullet2":
      "إدارة مسارات GitHub وممارسات الإصدار لتسهيل التعاون.",
    "projects.card.bullet3":
      "تطبيق خطوط CI/CD لأتمتة الاختبارات وتقليل زمن الوصول إلى الإنتاج.",
    "projects.card.bullet4":
      "تشخيص مشكلات التكامل بسرعة لحماية زمن تشغيل المنصة وموثوقيتها.",
    "projects.card.bullet5":
      "تحسين الأداء باستمرار وتحسين الوضع الأمني للتطبيق.",
    "achievements.title": "الإنجازات الرئيسية",
    "achievements.subtitle": "أثر قابل للقياس في تطوير الأنظمة الخلفية للتقنية المالية وموثوقية الأنظمة.",
    "achievements.card1.title": "تحسين أداء واجهات API بنسبة 35%",
    "achievements.card1.text": "تحسين واجهات Django REST والاستعلامات، تقليل زمن الاستجابة من 450ms إلى 290ms.",
    "achievements.card1.metric": "متوسط زمن الاستجابة",
    "achievements.card2.title": "صفر اختراقات أمنية",
    "achievements.card2.text": "تطبيق إجراءات أمنية شاملة تشمل OAuth 2.0 ورموز JWT وتشفير البيانات.",
    "achievements.card2.metric": "نقاط الأمان",
    "achievements.card3.title": "نشر أسرع بـ 4 مرات",
    "achievements.card3.text": "بناء خطوط CI/CD مع Docker و GitHub Actions، تقليل زمن النشر من ساعتين إلى 30 دقيقة.",
    "achievements.card3.metric": "زمن النشر",
    "achievements.card4.title": "99.8% وقت تشغيل النظام",
    "achievements.card4.text": "الحفاظ على توفر عالي لأنظمة معالجة المدفوعات التي تخدم آلاف المعاملات اليومية.",
    "achievements.card4.metric": "وقت التشغيل",
    "education.title": "التعليم",
    "education.subtitle": "أساس أكاديمي في تكنولوجيا المعلومات وهندسة الأنظمة.",
    "education.card1.title": "الجامعة اللبنانية الدولية (LIU)",
    "education.card1.role": "بكالوريوس تقنية معلومات · معدل 3.87 (امتياز)",
    "education.card1.meta": "صنعاء، اليمن · 2021",
    "education.card2.title": "شهادة ICDL",
    "education.card2.role": "مركز نيو هورايزن للتدريب",
    "education.card2.meta": "تقدير: امتياز · صنعاء، اليمن · 2016",
    "education.card3.title": "دورة إعداد TOEFL iBT",
    "education.card3.role": "معهد اليمن الأمريكي للغات (YALI)",
    "education.card3.meta": "صنعاء، اليمن · 2017",
    "certifications.title": "الدورات والشهادات",
    "certifications.subtitle": "تعلم مستمر للحفاظ على المهارات محدثة وفعالة.",
    "certifications.item1": "برنامج تعزيز تكنولوجيا المعلومات (ITEP) · الجمعية اليمنية الألمانية للمهندسين · 2024",
    "certifications.item2": "اللغة الإنجليزية · معهد إكسيد للغات · 2022",
    "certifications.item3": "Django REST Framework (متقدم) · منصة Udemy · 2022",
    "certifications.item4": "Django REST Framework (مبتدئ) · منصة Udemy · 2022",
    "certifications.item5": "CCNA توجيه وتحويل · المعهد العام للاتصالات · 2019",
    "certifications.item6": "إكسل متقدم · مؤسسة طلال أبو غزالة · 2019",
    "certifications.item7": "مهارات الخطابة العامة · مؤسسة صناع الحياة · 2015",
    "testimonials.title": "الشهادات",
    "testimonials.subtitle":
      "ثقة الزملاء والإدارة في التعامل مع التحديات التقنية المعقدة تحت الضغط.",
    "testimonials.quote1":
      "“يجلب هشام وضوحًا للمشكلات الخلفية المعقدة. لا يكتفي بحل الأعطال الحرجة بسرعة بل يوجه الفريق لتجنبها مستقبلًا.”",
    "testimonials.person1": "القائد التقني · تسهيل",
    "testimonials.quote2":
      "“من خطوط Docker إلى مراجعات الأمن الإنتاجي، رفع هشام معاييرنا الهندسية بالكامل. هو الهدوء في كل مكالمة طوارئ.”",
    "testimonials.person2": "المدير التقني · فينتك سيستيمز",
    "cta.title": "لنطلق إنجازك القادم في التقنية المالية",
    "cta.subtitle":
      "سواء كنت تبني منصة جديدة أو تحسن نظامًا قائمًا، أساعدك في هندسة حلول خلفية موثوقة بواجهات نظيفة ورصد وأتمتة من البداية.",
    "cta.primary": "حدد موعدًا",
    "cta.secondary": "تواصل عبر لينكدإن",
    "contact.title": "تواصل",
    "contact.subtitle": "لننجز معًا أنظمة مالية آمنة وموثوقة.",
    "contact.direct.title": "تواصل مباشر",
    "contact.direct.phone1.label": "هاتف:",
    "contact.direct.phone1.value": "+967 774 200 592",
    "contact.direct.phone2.label": "هاتف:",
    "contact.direct.phone2.value": "+967 771 238 005",
    "contact.direct.email.label": "البريد:",
    "contact.direct.email.value": "heshamaIshareef1997@gmail.com",
    "contact.direct.cta": "إرسال بريد",
    "contact.online.title": "الحضور الرقمي",
    "contact.online.linkedin.label": "لينكدإن:",
    "contact.online.linkedin.value": "/hisham-alshareef-91264a189",
    "contact.online.github.label": "جيتهاب:",
    "contact.online.github.value": "@Hisham164",
    "contact.online.cta": "تواصل عبر لينكدإن",
    "contact.availability.title": "متاح حاليًا",
    "contact.availability.text":
      "متاح لفرص دوام كامل أو جزئي أو عن بعد حيث تكون موثوقية الأنظمة الخلفية ضرورية.",
    "contact.availability.types.label": "أنواع الفرص:",
    "contact.availability.types.value": "دوام كامل، عقد، عن بعد",
    "contact.availability.response.label": "زمن الاستجابة:",
    "contact.availability.response.value": "خلال 24 ساعة",
    "footer.copy":
      "© <span id=\"year\"></span> هشام هاشم علي الشريف. صُممت بعناية ودقة.",
    "footer.top": "العودة للأعلى ↑"
  }
};

const applyTheme = (theme) => {
  if (theme === "dark") {
    root.classList.add("theme-dark");
  } else {
    root.classList.remove("theme-dark");
  }
};

const initTheme = () => {
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "dark" || stored === "light") {
    applyTheme(stored);
    return;
  }
  applyTheme(prefersDark.matches ? "dark" : "light");
};

const toggleTheme = () => {
  const isDark = root.classList.toggle("theme-dark");
  localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
};

const getFallback = (key) => translations[DEFAULT_LANG]?.[key];

const translateAttributes = (lang) => {
  const elements = document.querySelectorAll("[data-i18n-attrs]");
  elements.forEach((el) => {
    const mappings = el.dataset.i18nAttrs;
    if (!mappings) return;
    mappings.split(",").forEach((pair) => {
      const [attr, key] = pair.split(":").map((value) => value.trim());
      if (!attr || !key) return;
      const translation = translations[lang]?.[key] ?? getFallback(key);
      if (translation !== undefined) {
        el.setAttribute(attr, translation);
      }
    });
  });
};

const translateContent = (lang) => {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const translation = translations[lang]?.[key] ?? getFallback(key);
    if (translation !== undefined) {
      element.innerHTML = translation;
    }
  });
};

const applyLanguage = (lang) => {
  const active = translations[lang] ? lang : DEFAULT_LANG;
  html.lang = active;
  html.dir = active === "ar" ? "rtl" : "ltr";
  translateContent(active);
  translateAttributes(active);
  document.title = translations[active]?.["meta.title"] ?? document.title;
  localStorage.setItem(LANG_STORAGE_KEY, active);
  if (langToggle) {
    langToggle.setAttribute(
      "aria-label",
      translations[active]?.["nav.langToggleLabel"] ?? "Switch language"
    );
  }
  collapseNav();
};

const getInitialLanguage = () => {
  const stored = localStorage.getItem(LANG_STORAGE_KEY);
  if (stored && translations[stored]) {
    return stored;
  }
  const browser = navigator.language?.toLowerCase() ?? "";
  if (browser.startsWith("ar")) {
    return "ar";
  }
  return DEFAULT_LANG;
};

const setYear = () => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
};

const collapseNav = () => {
  if (nav) {
    nav.classList.remove("open");
  }
};

const handleNavToggle = () => {
  if (!nav) return;
  nav.classList.toggle("open");
};

const animateCounters = () => {
  const counters = document.querySelectorAll(".stat-number[data-count]");
  
  counters.forEach((counter) => {
    const target = parseFloat(counter.dataset.count);
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    // Start animation when element is in view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
};

const observeAnimations = () => {
  const elements = document.querySelectorAll("[data-animate]");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
};

const bindEvents = () => {
  if (toggle) {
    toggle.addEventListener("click", handleNavToggle);
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      collapseNav();
    });
  });

  document.addEventListener("click", (event) => {
    if (!nav || !nav.classList.contains("open")) return;
    if (event.target.closest("nav") || event.target === toggle) return;
    collapseNav();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      collapseNav();
    }
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleTheme();
    });
  }

  if (langToggle) {
    langToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const current = html.lang === "ar" ? "ar" : "en";
      const next = current === "ar" ? "en" : "ar";
      applyLanguage(next);
      setYear();
    });
  }

  prefersDark.addEventListener("change", (event) => {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored) return;
    applyTheme(event.matches ? "dark" : "light");
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      collapseNav();
    }
  });
};

const initLazyLoading = () => {
  const images = document.querySelectorAll('img[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for browsers without IntersectionObserver
    images.forEach(img => img.classList.add('loaded'));
  }
};

const initLoadingAnimation = () => {
  const loadingContainer = document.getElementById('loadingContainer');
  const progressBar = document.getElementById('loadingProgressBar');
  
  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
    }
    if (progressBar) {
      progressBar.style.width = progress + '%';
    }
  }, 100);
  
  // Hide loading container after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loadingContainer) {
        loadingContainer.style.opacity = '0';
        setTimeout(() => {
          loadingContainer.style.display = 'none';
        }, 800);
      }
    }, 2000);
  });
};

const initParallax = () => {
  const parallaxElements = document.querySelectorAll('.parallax-element');
  
  if (parallaxElements.length === 0) return;
  
  const updateParallax = () => {
    const scrolled = window.pageYOffset;
    
    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + (index * 0.1);
      const yPos = -(scrolled * speed);
      element.style.setProperty('--parallax-offset', `${yPos}px`);
    });
  };
  
  window.addEventListener('scroll', updateParallax);
  updateParallax();
};

const initSkillProgressBars = () => {
  const progressBars = document.querySelectorAll('.skill-progress-fill');
  
  if (progressBars.length === 0) return;
  
  const animateProgressBar = (bar) => {
    const width = bar.dataset.width;
    bar.style.setProperty('--skill-width', width);
    bar.classList.add('animate');
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateProgressBar(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  progressBars.forEach(bar => observer.observe(bar));
};

const initTypingAnimation = () => {
  const typingElement = document.querySelector('.typing-animation');
  if (!typingElement) return;
  
  const text = typingElement.textContent;
  typingElement.textContent = '';
  typingElement.style.borderRight = '2px solid var(--color-accent)';
  
  let i = 0;
  const typeWriter = () => {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      // Remove cursor after typing is complete
      setTimeout(() => {
        typingElement.style.borderRight = 'none';
      }, 1000);
    }
  };
  
  // Start typing animation after a delay
  setTimeout(typeWriter, 1000);
};

const initStaggeredAnimations = () => {
  const animatedElements = document.querySelectorAll('[data-animate]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('in-view');
        }, index * 100); // Stagger animations by 100ms
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  animatedElements.forEach(el => observer.observe(el));
};

const initCustomCursor = () => {
  const cursor = document.getElementById('customCursor');
  const cursorDot = document.getElementById('cursorDot');
  
  if (!cursor || !cursorDot) return;
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  
  const animateCursor = () => {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    cursorDot.style.left = mouseX + 'px';
    cursorDot.style.top = mouseY + 'px';
    
    requestAnimationFrame(animateCursor);
  };
  
  animateCursor();
  
  // Hover effects
  const hoverElements = document.querySelectorAll('a, button, .card, .btn');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      cursor.classList.remove('cursor-hover');
    });
  });
};

const initMouseTrail = () => {
  const trail = [];
  const trailLength = 20;
  
  for (let i = 0; i < trailLength; i++) {
    const trailElement = document.createElement('div');
    trailElement.className = 'mouse-trail';
    trailElement.style.opacity = (trailLength - i) / trailLength;
    document.body.appendChild(trailElement);
    trail.push(trailElement);
  }
  
  let mouseX = 0, mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    trail.forEach((element, index) => {
      setTimeout(() => {
        element.style.left = mouseX + 'px';
        element.style.top = mouseY + 'px';
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = 'trail-fade 0.6s ease-out forwards';
      }, index * 30);
    });
  });
};

const initMagneticElements = () => {
  const magneticElements = document.querySelectorAll('.magnetic');
  
  magneticElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      element.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.transform = 'translate(0, 0)';
    });
  });
};

const initRippleEffect = () => {
  const rippleElements = document.querySelectorAll('.ripple');
  
  rippleElements.forEach(element => {
    element.addEventListener('click', (e) => {
      const ripple = document.createElement('span');
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple-effect');
      
      element.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
};

const initMatrixRain = () => {
  const matrixContainer = document.querySelector('.matrix-rain');
  if (!matrixContainer) return;
  
  const characters = '01';
  const columns = 20;
  
  for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.className = 'matrix-column';
    column.style.left = (i * 5) + '%';
    column.style.animationDelay = Math.random() * 5 + 's';
    column.style.animationDuration = (Math.random() * 3 + 2) + 's';
    
    let text = '';
    for (let j = 0; j < 20; j++) {
      text += characters[Math.floor(Math.random() * characters.length)] + ' ';
    }
    column.textContent = text;
    
    matrixContainer.appendChild(column);
  }
};

const initNeuralNetwork = () => {
  const neuralContainer = document.querySelector('.neural-network');
  if (!neuralContainer) return;
  
  // Add more dynamic connections
  const connections = neuralContainer.querySelectorAll('.neural-connection');
  connections.forEach((connection, index) => {
    connection.style.animationDelay = (index * 0.5) + 's';
  });
};

const initQuantumField = () => {
  const quantumContainer = document.querySelector('.quantum-field');
  if (!quantumContainer) return;
  
  // Add more quantum particles dynamically
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.className = 'quantum-particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    particle.style.animationDuration = (Math.random() * 5 + 8) + 's';
    quantumContainer.appendChild(particle);
  }
};

const initDataStream = () => {
  const dataContainer = document.querySelector('.data-stream');
  if (!dataContainer) return;
  
  // Add more data bits
  for (let i = 0; i < 20; i++) {
    const bit = document.createElement('div');
    bit.className = 'data-bit';
    bit.style.left = Math.random() * 100 + '%';
    bit.style.animationDelay = Math.random() * 3 + 's';
    bit.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
    dataContainer.appendChild(bit);
  }
};

const initEnergyField = () => {
  const energyContainer = document.querySelector('.energy-field');
  if (!energyContainer) return;
  
  // Add more energy pulses
  for (let i = 0; i < 5; i++) {
    const pulse = document.createElement('div');
    pulse.className = 'energy-pulse';
    pulse.style.top = Math.random() * 100 + '%';
    pulse.style.left = Math.random() * 100 + '%';
    pulse.style.animationDelay = Math.random() * 3 + 's';
    energyContainer.appendChild(pulse);
  }
};

const initCyberpunkEffects = () => {
  const cyberpunkElements = document.querySelectorAll('.cyberpunk-glitch');
  
  cyberpunkElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.animation = 'cyberpunk-flicker 0.1s infinite linear';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.animation = 'cyberpunk-flicker 0.15s infinite linear';
    });
  });
};

const initHolographicEffects = () => {
  const holographicElements = document.querySelectorAll('.holographic');
  
  holographicElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      element.style.filter = 'drop-shadow(0 0 30px #00ffff) drop-shadow(0 0 60px #ff00ff)';
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.filter = 'drop-shadow(0 0 10px #00ffff) drop-shadow(0 0 20px #ff00ff)';
    });
  });
};

const init = () => {
  initTheme();
  const initialLang = getInitialLanguage();
  applyLanguage(initialLang);
  setYear();
  bindEvents();
  observeAnimations();
  animateCounters();
  initLazyLoading();
  initLoadingAnimation();
  initParallax();
  initSkillProgressBars();
  initTypingAnimation();
  initStaggeredAnimations();
  initCustomCursor();
  initMouseTrail();
  initMagneticElements();
  initRippleEffect();
  initMatrixRain();
  initNeuralNetwork();
  initQuantumField();
  initDataStream();
  initEnergyField();
  initCyberpunkEffects();
  initHolographicEffects();
};

init();
