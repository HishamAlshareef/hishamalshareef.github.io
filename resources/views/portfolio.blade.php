<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#f2f0e9">
    <title>{{ $portfolio['profile']['name'] }} · Backend Engineer</title>
    <meta name="description" content="Backend engineer building secure fintech systems, production APIs, and reliable infrastructure with Django, Laravel, PostgreSQL, and Docker.">
    <meta name="author" content="{{ $portfolio['profile']['name'] }}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="{{ url('/') }}">

    <meta property="og:type" content="profile">
    <meta property="og:title" content="{{ $portfolio['profile']['name'] }} · Backend Engineer">
    <meta property="og:description" content="Secure systems. Clear APIs. Reliable delivery.">
    <meta property="og:url" content="{{ url('/') }}">
    <meta property="og:image" content="{{ asset('images/hisham-alshareef.jpeg') }}">
    <meta name="twitter:card" content="summary_large_image">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&family=Noto+Sans+Arabic:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <script>
        document.documentElement.classList.add('js');
        try {
            const savedTheme = localStorage.getItem('portfolio-theme');
            if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.dataset.theme = 'dark';
            }
        } catch (error) {}
    </script>

    @php
        $schema = [
            '@context' => 'https://schema.org',
            '@type' => 'Person',
            'name' => $portfolio['profile']['name'],
            'jobTitle' => 'Backend Engineer',
            'url' => url('/'),
            'image' => asset('images/hisham-alshareef.jpeg'),
            'email' => 'mailto:'.$portfolio['profile']['email'],
            'sameAs' => [$portfolio['profile']['linkedin'], $portfolio['profile']['github']],
            'knowsAbout' => ['Python', 'Django', 'Django REST Framework', 'Laravel', 'PostgreSQL', 'Docker', 'Fintech'],
        ];
    @endphp
    <script type="application/ld+json">{!! json_encode($schema, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) !!}</script>

    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <script type="module" src="{{ asset('js/app.js') }}"></script>
</head>
<body>
    <a class="skip-link" href="#main-content">Skip to content</a>
    <div class="page-progress" aria-hidden="true"><span></span></div>

    <header class="site-header" data-header>
        <div class="shell header-inner">
            <a class="brand" href="#top" aria-label="Hisham Alshareef — home">
                <span class="brand-mark">H</span>
                <span class="brand-name">Hisham<small>Backend engineer</small></span>
            </a>

            <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="site-nav" data-menu-button>
                <span></span><span></span>
            </button>

            <nav class="site-nav" id="site-nav" aria-label="Main navigation" data-menu>
                <a href="#work" data-copy data-en="Work" data-ar="الأعمال">Work</a>
                <a href="#experience" data-copy data-en="Experience" data-ar="الخبرة">Experience</a>
                <a href="#capabilities" data-copy data-en="Capabilities" data-ar="المهارات">Capabilities</a>
                <a href="#about" data-copy data-en="About" data-ar="نبذة">About</a>
                <a href="#contact" data-copy data-en="Contact" data-ar="تواصل">Contact</a>
            </nav>

            <div class="header-actions">
                <button class="icon-button" type="button" aria-label="Switch color theme" data-theme-button>
                    <svg class="sun-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.41M17.66 6.34l1.41-1.41"></path></svg>
                    <svg class="moon-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path></svg>
                </button>
                <button class="language-button" type="button" data-language-button aria-label="Switch to Arabic">AR</button>
                <a class="header-cta" href="{{ asset('hisham_cv.pdf') }}" target="_blank" rel="noopener">
                    <span data-copy data-en="My CV" data-ar="السيرة">My CV</span>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"></path></svg>
                </a>
            </div>
        </div>
    </header>

    <main id="main-content">
        <section class="hero" id="top">
            <div class="hero-grid" aria-hidden="true"></div>
            <div class="hero-glow hero-glow-one" aria-hidden="true"></div>
            <div class="hero-glow hero-glow-two" aria-hidden="true"></div>

            <div class="shell hero-layout">
                <div class="hero-copy">
                    <div class="status-pill reveal-item">
                        <span class="status-dot"></span>
                        <span data-copy data-en="{{ $portfolio['profile']['availability']['en'] }}" data-ar="{{ $portfolio['profile']['availability']['ar'] }}">{{ $portfolio['profile']['availability']['en'] }}</span>
                    </div>

                    <p class="hero-kicker reveal-item">{{ $portfolio['profile']['name'] }} <span>—</span> <span data-copy data-en="Backend Engineer" data-ar="مهندس برمجيات خلفية">Backend Engineer</span></p>
                    <h1 class="hero-title reveal-item" data-copy data-en="{{ $portfolio['profile']['headline']['en'] }}" data-ar="{{ $portfolio['profile']['headline']['ar'] }}">{{ $portfolio['profile']['headline']['en'] }}</h1>
                    <p class="hero-summary reveal-item" data-copy data-en="{{ $portfolio['profile']['summary']['en'] }}" data-ar="{{ $portfolio['profile']['summary']['ar'] }}">{{ $portfolio['profile']['summary']['en'] }}</p>

                    <div class="hero-actions reveal-item">
                        <a class="button button-dark" href="#work">
                            <span data-copy data-en="View selected work" data-ar="شاهد أعمالي">View selected work</span>
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M19 12l-7 7-7-7"></path></svg>
                        </a>
                        <a class="text-link" href="mailto:{{ $portfolio['profile']['email'] }}">
                            <span data-copy data-en="Start a conversation" data-ar="ابدأ محادثة">Start a conversation</span>
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"></path></svg>
                        </a>
                    </div>
                </div>

                <aside class="hero-profile reveal-item" aria-label="Profile summary">
                    <div class="portrait-wrap">
                        <div class="portrait-ring"></div>
                        <img src="{{ asset('images/hisham-alshareef.jpeg') }}" alt="Hisham Hashem Ali Alshareef" width="460" height="460">
                        <div class="portrait-label"><span>Based in</span><strong>Sana’a</strong></div>
                    </div>
                    <div class="profile-meta">
                        <span data-copy data-en="Backend · APIs · DevOps" data-ar="برمجة خلفية · واجهات · تشغيل">Backend · APIs · DevOps</span>
                        <span class="profile-number">01 / 04</span>
                    </div>
                </aside>
            </div>

            <div class="shell stats-row reveal-item">
                @foreach($portfolio['stats'] as $stat)
                    <div class="stat">
                        <strong>{{ $stat['value'] }}</strong>
                        <span data-copy data-en="{{ $stat['label']['en'] }}" data-ar="{{ $stat['label']['ar'] }}">{{ $stat['label']['en'] }}</span>
                    </div>
                @endforeach
                <div class="scroll-note">
                    <span data-copy data-en="Scroll to explore" data-ar="مرر للاستكشاف">Scroll to explore</span>
                    <span class="scroll-line"></span>
                </div>
            </div>
        </section>

        <div class="stack-band" aria-label="Technology stack">
            <div class="stack-track">
                @foreach(array_merge(['Python', 'Django', 'Laravel', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs'], ['Python', 'Django', 'Laravel', 'PostgreSQL', 'Redis', 'Docker', 'REST APIs']) as $technology)
                    <span>{{ $technology }}</span><i>✦</i>
                @endforeach
            </div>
        </div>

        <section class="section work-section" id="work">
            <div class="shell">
                <div class="section-heading reveal-item">
                    <div>
                        <span class="section-index">01</span>
                        <p class="eyebrow" data-copy data-en="Selected work" data-ar="أعمال مختارة">Selected work</p>
                    </div>
                    <h2 data-copy data-en="Built for real operations, not just demos." data-ar="أنظمة بُنيت للتشغيل الحقيقي، لا للعروض فقط.">Built for real operations, not just demos.</h2>
                </div>

                @php($miyahukum = $portfolio['projects'][0])
                <article class="featured-project reveal-item">
                    <a class="project-visual" href="{{ $miyahukum['url'] }}" target="_blank" rel="noopener" aria-label="Open Miyahukum live website">
                        <img class="project-screenshot" src="{{ asset($miyahukum['image']) }}" alt="Miyahukum public website preview" width="1440" height="1000" loading="lazy">
                        <span class="project-browser-bar"><i></i><i></i><i></i><em>miyahukum / portfolio</em></span>
                        <span class="view-project">
                            <span data-copy data-en="View live" data-ar="عرض مباشر">View live</span>
                            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"></path></svg>
                        </span>
                    </a>

                    <div class="project-content">
                        <div class="project-identity">
                            <img src="{{ asset($miyahukum['logo']) }}" alt="" width="54" height="54">
                            <div><span data-copy data-en="{{ $miyahukum['kicker']['en'] }}" data-ar="{{ $miyahukum['kicker']['ar'] }}">{{ $miyahukum['kicker']['en'] }}</span><strong>{{ $miyahukum['name'] }}</strong></div>
                        </div>
                        <h3 data-copy data-en="{{ $miyahukum['title']['en'] }}" data-ar="{{ $miyahukum['title']['ar'] }}">{{ $miyahukum['title']['en'] }}</h3>
                        <p data-copy data-en="{{ $miyahukum['summary']['en'] }}" data-ar="{{ $miyahukum['summary']['ar'] }}">{{ $miyahukum['summary']['en'] }}</p>
                        <ul class="project-highlights">
                            @foreach($miyahukum['highlights'] as $highlight)
                                <li><span></span><span data-copy data-en="{{ $highlight['en'] }}" data-ar="{{ $highlight['ar'] }}">{{ $highlight['en'] }}</span></li>
                            @endforeach
                        </ul>
                        <div class="tech-list">
                            @foreach($miyahukum['tech'] as $technology)<span>{{ $technology }}</span>@endforeach
                        </div>
                    </div>
                </article>

                @php($paymentHub = $portfolio['projects'][1])
                <article class="secondary-project reveal-item">
                    <div class="secondary-number">02</div>
                    <div class="secondary-copy">
                        <p class="eyebrow" data-copy data-en="{{ $paymentHub['kicker']['en'] }}" data-ar="{{ $paymentHub['kicker']['ar'] }}">{{ $paymentHub['kicker']['en'] }}</p>
                        <h3>{{ $paymentHub['name'] }}</h3>
                        <p data-copy data-en="{{ $paymentHub['summary']['en'] }}" data-ar="{{ $paymentHub['summary']['ar'] }}">{{ $paymentHub['summary']['en'] }}</p>
                    </div>
                    <div class="secondary-details">
                        <ul>
                            @foreach($paymentHub['highlights'] as $highlight)
                                <li data-copy data-en="{{ $highlight['en'] }}" data-ar="{{ $highlight['ar'] }}">{{ $highlight['en'] }}</li>
                            @endforeach
                        </ul>
                        <div class="tech-list">
                            @foreach($paymentHub['tech'] as $technology)<span>{{ $technology }}</span>@endforeach
                        </div>
                    </div>
                </article>
            </div>
        </section>

        <section class="section experience-section" id="experience">
            <div class="shell split-layout">
                <div class="sticky-heading reveal-item">
                    <span class="section-index">02</span>
                    <p class="eyebrow" data-copy data-en="Experience" data-ar="الخبرة">Experience</p>
                    <h2 data-copy data-en="Engineering where reliability matters." data-ar="هندسة برمجيات عندما تكون الموثوقية أساسية.">Engineering where reliability matters.</h2>
                    <p data-copy data-en="From financial platforms to operational products, I work across the complete backend lifecycle: discovery, architecture, delivery, and production support." data-ar="من المنصات المالية إلى المنتجات التشغيلية، أعمل عبر دورة حياة البرمجيات الخلفية كاملة: التحليل والتصميم والتسليم ودعم الإنتاج.">From financial platforms to operational products, I work across the complete backend lifecycle: discovery, architecture, delivery, and production support.</p>
                </div>

                <div class="timeline">
                    @foreach($portfolio['experience'] as $job)
                        <article class="timeline-item reveal-item">
                            <div class="timeline-topline">
                                <span data-copy data-en="{{ $job['period']['en'] }}" data-ar="{{ $job['period']['ar'] }}">{{ $job['period']['en'] }}</span>
                                <span>{{ str_pad($loop->iteration, 2, '0', STR_PAD_LEFT) }}</span>
                            </div>
                            <h3>{{ $job['company'] }}</h3>
                            <p class="timeline-role" data-copy data-en="{{ $job['role']['en'] }}" data-ar="{{ $job['role']['ar'] }}">{{ $job['role']['en'] }}</p>
                            <p data-copy data-en="{{ $job['summary']['en'] }}" data-ar="{{ $job['summary']['ar'] }}">{{ $job['summary']['en'] }}</p>
                        </article>
                    @endforeach
                </div>
            </div>
        </section>

        <section class="section capabilities-section" id="capabilities">
            <div class="shell">
                <div class="section-heading reveal-item">
                    <div>
                        <span class="section-index">03</span>
                        <p class="eyebrow" data-copy data-en="Capabilities" data-ar="المهارات">Capabilities</p>
                    </div>
                    <h2 data-copy data-en="The practical skills to ship and sustain." data-ar="مهارات عملية للبناء والتسليم والاستمرارية.">The practical skills to ship and sustain.</h2>
                </div>

                <div class="capability-list">
                    @foreach($portfolio['capabilities'] as $capability)
                        <article class="capability-card reveal-item">
                            <span class="capability-number">{{ $capability['number'] }}</span>
                            <div>
                                <h3 data-copy data-en="{{ $capability['title']['en'] }}" data-ar="{{ $capability['title']['ar'] }}">{{ $capability['title']['en'] }}</h3>
                                <p data-copy data-en="{{ $capability['description']['en'] }}" data-ar="{{ $capability['description']['ar'] }}">{{ $capability['description']['en'] }}</p>
                            </div>
                            <div class="skill-stack">
                                @foreach($capability['skills'] as $skill)<span>{{ $skill }}</span>@endforeach
                            </div>
                        </article>
                    @endforeach
                </div>
            </div>
        </section>

        <section class="section about-section" id="about">
            <div class="shell about-grid">
                <div class="about-portrait reveal-item">
                    <img src="{{ asset('images/hisham-alshareef.jpeg') }}" alt="Portrait of Hisham Alshareef" width="460" height="460" loading="lazy">
                    <span class="about-caption">Sana’a · Yemen · GMT+3</span>
                </div>

                <div class="about-copy reveal-item">
                    <span class="section-index">04</span>
                    <p class="eyebrow" data-copy data-en="About" data-ar="نبذة">About</p>
                    <h2 data-copy data-en="Technical depth, explained simply." data-ar="عمق تقني، بلغة واضحة.">Technical depth, explained simply.</h2>
                    <p data-copy data-en="I’m an IT engineer who enjoys making complicated systems easier to operate. My work combines backend development, technical support, security thinking, and team enablement—because good software is as much about people and operations as it is about code." data-ar="أنا مهندس تقنية معلومات أستمتع بجعل الأنظمة المعقدة أسهل في التشغيل. يجمع عملي بين تطوير البرمجيات الخلفية والدعم الفني والتفكير الأمني وتمكين الفرق، لأن البرمجيات الجيدة تتعلق بالأشخاص والعمليات بقدر ما تتعلق بالكود.">I’m an IT engineer who enjoys making complicated systems easier to operate. My work combines backend development, technical support, security thinking, and team enablement—because good software is as much about people and operations as it is about code.</p>

                    <div class="education-card">
                        <div><span data-copy data-en="Education" data-ar="التعليم">Education</span><strong>{{ $portfolio['education']['degree'] }}</strong></div>
                        <p>{{ $portfolio['education']['school'] }}<br>{{ $portfolio['education']['details'] }}</p>
                    </div>

                    <details class="certifications">
                        <summary><span data-copy data-en="Courses & certifications" data-ar="الدورات والشهادات">Courses & certifications</span><span>+</span></summary>
                        <ul>@foreach($portfolio['certifications'] as $certification)<li>{{ $certification }}</li>@endforeach</ul>
                    </details>
                </div>
            </div>
        </section>

        <section class="contact-section" id="contact">
            <div class="contact-orbit" aria-hidden="true"></div>
            <div class="shell contact-inner reveal-item">
                <p class="eyebrow" data-copy data-en="Have a backend challenge?" data-ar="هل لديك تحدٍ برمجي؟">Have a backend challenge?</p>
                <h2 data-copy data-en="Let’s make it reliable." data-ar="لنبنه بشكل موثوق.">Let’s make it reliable.</h2>
                <p data-copy data-en="Tell me what you’re building, what is slowing it down, or where reliability matters most." data-ar="أخبرني ماذا تبني، وما الذي يبطئه، وأين تكون الموثوقية أكثر أهمية.">Tell me what you’re building, what is slowing it down, or where reliability matters most.</p>
                <a class="contact-email" href="mailto:{{ $portfolio['profile']['email'] }}">{{ $portfolio['profile']['email'] }}<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10"></path></svg></a>

                <div class="contact-links">
                    <a href="{{ $portfolio['profile']['linkedin'] }}" target="_blank" rel="noopener">LinkedIn <span>↗</span></a>
                    <a href="{{ $portfolio['profile']['github'] }}" target="_blank" rel="noopener">GitHub <span>↗</span></a>
                    <a href="tel:{{ preg_replace('/\s+/', '', $portfolio['profile']['phones'][0]) }}">{{ $portfolio['profile']['phones'][0] }} <span>↗</span></a>
                    <a href="{{ asset('hisham_cv.pdf') }}" target="_blank" rel="noopener"><span data-copy data-en="Download CV" data-ar="تحميل السيرة">Download CV</span> <span>↓</span></a>
                </div>
            </div>
        </section>
    </main>

    <footer class="site-footer">
        <div class="shell">
            <div class="brand"><span class="brand-mark">H</span><span class="brand-name">Hisham<small>Backend engineer</small></span></div>
            <p>© {{ date('Y') }} Hisham Alshareef. <span data-copy data-en="Built with Laravel." data-ar="بُني باستخدام Laravel.">Built with Laravel.</span></p>
            <a href="#top"><span data-copy data-en="Back to top" data-ar="إلى الأعلى">Back to top</span> ↑</a>
        </div>
    </footer>
</body>
</html>
