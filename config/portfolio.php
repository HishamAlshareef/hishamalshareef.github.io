<?php

return [
    'profile' => [
        'name' => 'Hisham Hashem Ali Alshareef',
        'short_name' => 'Hisham Alshareef',
        'role' => [
            'en' => 'Backend Engineer',
            'ar' => 'مهندس برمجيات خلفية',
        ],
        'headline' => [
            'en' => 'I build the systems behind products people trust.',
            'ar' => 'أبني الأنظمة التي تقف خلف المنتجات الموثوقة.',
        ],
        'summary' => [
            'en' => 'Backend engineer focused on secure financial platforms, production APIs, and dependable infrastructure. I turn complex operations into software that is clear, scalable, and ready for real users.',
            'ar' => 'مهندس برمجيات خلفية متخصص في المنصات المالية الآمنة وواجهات البرمجة الجاهزة للإنتاج والبنية التحتية الموثوقة. أحوّل العمليات المعقدة إلى برمجيات واضحة وقابلة للتوسع وجاهزة للمستخدمين.',
        ],
        'location' => [
            'en' => 'Sana’a, Yemen',
            'ar' => 'صنعاء، اليمن',
        ],
        'availability' => [
            'en' => 'Open to part-time, freelance & remote work',
            'ar' => 'متاح للعمل الجزئي والحر والعمل عن بُعد',
        ],
        'email' => 'heshamaIshareef1997@gmail.com',
        'phones' => ['+967 774 200 592', '+967 771 238 005'],
        'linkedin' => 'https://linkedin.com/in/hisham-alshareef-91264a189',
        'github' => 'https://github.com/Hisham164',
    ],

    'stats' => [
        ['value' => '4+', 'label' => ['en' => 'Years in engineering', 'ar' => 'سنوات في هندسة البرمجيات']],
        ['value' => '10+', 'label' => ['en' => 'APIs integrated', 'ar' => 'واجهات برمجية متكاملة']],
        ['value' => '99.8%', 'label' => ['en' => 'Platform uptime', 'ar' => 'جاهزية المنصات']],
    ],

    'projects' => [
        [
            'name' => 'Miyahukum',
            'kicker' => ['en' => 'Featured work · Production platform', 'ar' => 'عمل مميز · منصة إنتاجية'],
            'title' => ['en' => 'Water delivery, coordinated end to end.', 'ar' => 'إدارة توصيل المياه من الطلب حتى التسليم.'],
            'summary' => [
                'en' => 'A full water-delivery ecosystem connecting customers, drivers, and operations teams. I engineered the backend foundation and operational workflows for secure ordering, dispatch, tracking, reporting, and communication.',
                'ar' => 'منظومة متكاملة لتوصيل المياه تربط العملاء والسائقين وفريق العمليات. طوّرت الأساس البرمجي الخلفي وتدفقات العمل لتأمين الطلب والتوزيع والتتبع والتقارير والتواصل.',
            ],
            'highlights' => [
                ['en' => 'Customer and driver APIs with JWT authentication and OTP verification', 'ar' => 'واجهات للعملاء والسائقين مع مصادقة JWT والتحقق برمز OTP'],
                ['en' => 'Operations dashboards, delivery assignment, commissions, and accounting reports', 'ar' => 'لوحات عمليات وتوزيع الطلبات والعمولات والتقارير المحاسبية'],
                ['en' => 'Asynchronous notifications and resilient services with Redis, Celery, and Docker', 'ar' => 'إشعارات غير متزامنة وخدمات موثوقة باستخدام Redis وCelery وDocker'],
            ],
            'tech' => ['Django', 'DRF', 'PostgreSQL', 'Redis', 'Celery', 'Docker'],
            'url' => 'http://169.58.77.160:8030/portfolio/',
            'image' => 'images/miyahukum-preview.png',
            'logo' => 'images/miyahukum-logo.png',
        ],
        [
            'name' => 'Payment Hub Platform',
            'kicker' => ['en' => 'Fintechsys · Financial infrastructure', 'ar' => 'فينتك سيستمز · بنية مالية'],
            'title' => ['en' => 'Reliable payment infrastructure for connected services.', 'ar' => 'بنية دفع موثوقة للخدمات المترابطة.'],
            'summary' => [
                'en' => 'Backend and delivery engineering for a payment platform, with containerized environments, automated release workflows, integration troubleshooting, and continuous performance and security improvements.',
                'ar' => 'هندسة البرمجيات الخلفية والتسليم لمنصة دفع، مع بيئات حاويات ومسارات إصدار آلية ومعالجة مشكلات التكامل وتحسين مستمر للأداء والأمان.',
            ],
            'highlights' => [
                ['en' => 'Docker-based environments for repeatable deployments', 'ar' => 'بيئات Docker لعمليات نشر متكررة وموثوقة'],
                ['en' => 'CI/CD workflows that accelerated testing and releases', 'ar' => 'مسارات CI/CD سرّعت الاختبارات والإصدارات'],
                ['en' => 'Production issue diagnosis, performance tuning, and security hardening', 'ar' => 'تشخيص مشكلات الإنتاج وضبط الأداء وتعزيز الأمان'],
            ],
            'tech' => ['Python', 'Django', 'Docker', 'GitHub Actions', 'CI/CD'],
            'url' => null,
            'image' => null,
            'logo' => null,
        ],
    ],

    'experience' => [
        [
            'period' => ['en' => 'Nov 2023 — Present', 'ar' => 'نوفمبر 2023 — الآن'],
            'company' => 'Tasheel for Financial Technology Solutions',
            'role' => ['en' => 'Backend Developer', 'ar' => 'مطور برمجيات خلفية'],
            'summary' => [
                'en' => 'Develop and operate secure fintech services, design Django REST APIs, integrate financial systems, and improve platform performance, scalability, and reliability.',
                'ar' => 'تطوير وتشغيل خدمات تقنية مالية آمنة، وتصميم واجهات Django REST، وتكامل الأنظمة المالية، وتحسين أداء المنصات وقابليتها للتوسع وموثوقيتها.',
            ],
        ],
        [
            'period' => ['en' => 'Apr 2022 — Present', 'ar' => 'أبريل 2022 — الآن'],
            'company' => 'Fintechsys IT Services & Consulting',
            'role' => ['en' => 'Software Engineer', 'ar' => 'مهندس برمجيات'],
            'summary' => [
                'en' => 'Resolve production issues, deliver software improvements, support business-critical systems, and help teams adopt reliable tools and engineering practices.',
                'ar' => 'معالجة مشكلات الإنتاج، وتسليم تحسينات برمجية، ودعم الأنظمة الحيوية للأعمال، ومساعدة الفرق على تبني أدوات وممارسات هندسية موثوقة.',
            ],
        ],
        [
            'period' => ['en' => 'Jan 2022 — Mar 2022', 'ar' => 'يناير 2022 — مارس 2022'],
            'company' => 'Fintechsys IT Services & Consulting',
            'role' => ['en' => 'Backend Developer', 'ar' => 'مطور برمجيات خلفية'],
            'summary' => [
                'en' => 'Maintained databases and financial systems, resolved technical issues, and partnered with the development team on administrative platform improvements.',
                'ar' => 'صيانة قواعد البيانات والأنظمة المالية، وحل المشكلات التقنية، والتعاون مع فريق التطوير لتحسين المنصات الإدارية.',
            ],
        ],
    ],

    'capabilities' => [
        [
            'number' => '01',
            'title' => ['en' => 'Backend systems', 'ar' => 'الأنظمة الخلفية'],
            'description' => ['en' => 'Well-structured services, business workflows, relational data models, and production-ready APIs.', 'ar' => 'خدمات منظمة وتدفقات أعمال ونماذج بيانات علائقية وواجهات برمجية جاهزة للإنتاج.'],
            'skills' => ['Python', 'Django', 'DRF', 'Laravel', 'REST APIs'],
        ],
        [
            'number' => '02',
            'title' => ['en' => 'Data & integrations', 'ar' => 'البيانات والتكامل'],
            'description' => ['en' => 'Secure authentication, payment integrations, background jobs, caching, and dependable data flows.', 'ar' => 'مصادقة آمنة وتكاملات دفع ومهام خلفية وتخزين مؤقت وتدفقات بيانات موثوقة.'],
            'skills' => ['PostgreSQL', 'Redis', 'Celery', 'JWT', 'Firebase'],
        ],
        [
            'number' => '03',
            'title' => ['en' => 'Delivery & operations', 'ar' => 'التسليم والتشغيل'],
            'description' => ['en' => 'Repeatable deployments, observable services, practical incident response, and safer release pipelines.', 'ar' => 'نشر متكرر وخدمات قابلة للمراقبة واستجابة عملية للحوادث ومسارات إصدار أكثر أماناً.'],
            'skills' => ['Docker', 'CI/CD', 'GitHub Actions', 'Linux', 'Nginx'],
        ],
    ],

    'education' => [
        'degree' => 'BSc in Information Technology',
        'school' => 'Lebanese International University (LIU)',
        'details' => 'GPA 3.87 / 4.00 · Excellent · 2021',
    ],

    'certifications' => [
        'IT Enhancement Program (ITEP) · 2024',
        'Django REST Framework — Advanced · 2022',
        'Django REST Framework — Beginner · 2022',
        'CCNA Routing & Switching · 2019',
        'Advanced Excel · 2019',
        'ICDL · 2016',
    ],
];
