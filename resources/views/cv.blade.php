<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $portfolio['profile']['name'] }} · CV</title>
    <meta name="robots" content="noindex">
    <style>
        @page { size: A4; margin: 0; }
        * { box-sizing: border-box; }
        :root { --ink: #172016; --muted: #5f685d; --line: #d9ddd4; --accent: #b8df3e; --paper: #fff; }
        body { margin: 0; color: var(--ink); background: #dfe2dc; font-family: Arial, Helvetica, sans-serif; font-size: 9.3pt; line-height: 1.45; }
        a { color: inherit; text-decoration: none; }
        .toolbar { position: sticky; top: 0; z-index: 5; display: flex; justify-content: center; gap: 12px; padding: 12px; background: #172016; }
        .toolbar a, .toolbar button { padding: 9px 14px; color: #fff; border: 1px solid rgba(255,255,255,.3); border-radius: 99px; background: transparent; font: 700 12px Arial, sans-serif; cursor: pointer; }
        .toolbar button { color: #172016; border-color: var(--accent); background: var(--accent); }
        .page { position: relative; width: 210mm; min-height: 297mm; margin: 12mm auto; padding: 14mm 15mm 13mm; background: var(--paper); box-shadow: 0 12px 40px rgba(20,30,18,.18); page-break-after: always; overflow: hidden; }
        .page:last-child { page-break-after: auto; }
        .page::before { position: absolute; top: 0; right: 0; width: 60mm; height: 5mm; background: var(--accent); content: ""; }
        .top { display: grid; grid-template-columns: 1.45fr .55fr; align-items: end; gap: 12mm; padding-bottom: 9mm; border-bottom: 1px solid var(--ink); }
        .name { max-width: 125mm; margin: 0; font-size: 28pt; letter-spacing: -1.4px; line-height: .98; }
        .title { margin: 4mm 0 0; color: var(--muted); font-size: 10pt; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase; }
        .contact { display: grid; gap: 1.8mm; color: var(--muted); font-size: 8.2pt; text-align: right; overflow-wrap: anywhere; }
        .contact strong { color: var(--ink); }
        .intro { display: grid; grid-template-columns: 1.2fr .8fr; gap: 12mm; margin: 9mm 0; }
        .intro p { margin: 0; color: var(--muted); font-size: 10.3pt; line-height: 1.6; }
        .quick-facts { display: grid; grid-template-columns: repeat(2, 1fr); gap: 4mm; }
        .fact { padding-top: 2.5mm; border-top: 2px solid var(--accent); }
        .fact strong { display: block; font-size: 15pt; line-height: 1; }
        .fact span { display: block; margin-top: 1.3mm; color: var(--muted); font-size: 7.3pt; text-transform: uppercase; }
        .section { margin-top: 8mm; }
        .section-title { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 4mm; margin: 0 0 5mm; font-size: 9pt; letter-spacing: 1.8px; text-transform: uppercase; }
        .section-title::after { height: 1px; background: var(--line); content: ""; }
        .job { display: grid; grid-template-columns: 37mm 1fr; gap: 7mm; padding: 0 0 6.5mm; }
        .job + .job { padding-top: 6.5mm; border-top: 1px solid var(--line); }
        .job-meta { color: var(--muted); font-size: 8pt; }
        .job-meta strong { display: block; margin-bottom: 1.3mm; color: var(--ink); font-size: 8.6pt; }
        .job h3 { margin: 0 0 1.2mm; font-size: 12pt; line-height: 1.2; }
        .job .role { margin: 0 0 2.2mm; color: var(--muted); font-size: 8.4pt; font-weight: 700; }
        .job ul, .project ul { margin: 0; padding-left: 4.5mm; color: var(--muted); }
        .job li, .project li { margin: 0 0 1.4mm; padding-left: 1mm; }
        .page-number { position: absolute; right: 15mm; bottom: 8mm; color: var(--muted); font-size: 7.5pt; }
        .page-two-header { display: flex; align-items: center; justify-content: space-between; padding-bottom: 5mm; border-bottom: 1px solid var(--ink); }
        .page-two-header strong { font-size: 13pt; }
        .page-two-header span { color: var(--muted); font-size: 8pt; letter-spacing: 1px; text-transform: uppercase; }
        .project { display: grid; grid-template-columns: 42mm 1fr; gap: 8mm; padding: 0 0 6mm; }
        .project + .project { padding-top: 6mm; border-top: 1px solid var(--line); }
        .project-label { font-size: 8pt; }
        .project-label strong { display: block; margin-bottom: 1.3mm; font-size: 11pt; }
        .project-label span { color: var(--muted); }
        .project h3 { margin: 0 0 2mm; font-size: 13pt; }
        .project > div > p { margin: 0 0 2.5mm; color: var(--muted); }
        .tags { display: flex; flex-wrap: wrap; gap: 1.5mm; margin-top: 3mm; }
        .tag { padding: 1.1mm 2mm; border: 1px solid var(--line); border-radius: 9mm; font-size: 7pt; }
        .columns { display: grid; grid-template-columns: 1fr 1fr; gap: 10mm; }
        .skill-group { margin-bottom: 5mm; }
        .skill-group h3 { margin: 0 0 1.5mm; font-size: 9.3pt; }
        .skill-group p { margin: 0; color: var(--muted); font-size: 8.6pt; }
        .education { padding: 4mm; border-left: 3px solid var(--accent); background: #f7f8f4; }
        .education strong { display: block; margin-bottom: 1.3mm; font-size: 10pt; }
        .education p { margin: 0; color: var(--muted); }
        .compact-list { display: grid; gap: 1.5mm; margin: 0; padding-left: 4mm; color: var(--muted); font-size: 8.3pt; }
        .language-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3mm; }
        .language { padding-top: 2mm; border-top: 2px solid var(--accent); }
        .language strong { display: block; }
        .language span { color: var(--muted); font-size: 8pt; }
        .footer-note { position: absolute; bottom: 8mm; left: 15mm; color: var(--muted); font-size: 7.5pt; }

        @media print {
            body { background: #fff; }
            .toolbar { display: none; }
            .page { margin: 0; box-shadow: none; }
        }
        @media screen and (max-width: 820px) {
            .page { width: 100%; min-height: auto; margin: 0; padding: 28px 22px 45px; }
            .top, .intro, .columns { grid-template-columns: 1fr; gap: 20px; }
            .contact { text-align: left; }
            .job, .project { grid-template-columns: 1fr; gap: 12px; }
            .page-number, .footer-note { position: static; display: block; margin-top: 30px; }
        }
    </style>
</head>
<body>
    <div class="toolbar">
        <a href="{{ route('portfolio') }}">← Portfolio</a>
        <button type="button" onclick="window.print()">Print / Save PDF</button>
    </div>

    <article class="page">
        <header class="top">
            <div>
                <h1 class="name">{{ $portfolio['profile']['name'] }}</h1>
                <p class="title">Backend Engineer · Fintech & Production Systems</p>
            </div>
            <div class="contact">
                <span><strong>{{ $portfolio['profile']['location']['en'] }}</strong></span>
                <a href="mailto:{{ $portfolio['profile']['email'] }}">{{ $portfolio['profile']['email'] }}</a>
                <span>{{ implode(' · ', $portfolio['profile']['phones']) }}</span>
                <a href="{{ $portfolio['profile']['linkedin'] }}">linkedin.com/in/hisham-alshareef-91264a189</a>
                <a href="{{ $portfolio['profile']['github'] }}">github.com/Hisham164</a>
            </div>
        </header>

        <section class="intro">
            <p>{{ $portfolio['profile']['summary']['en'] }} Experienced across fintech, delivery operations, API integrations, production support, and technical enablement.</p>
            <div class="quick-facts">
                <div class="fact"><strong>4+</strong><span>Years in engineering</span></div>
                <div class="fact"><strong>10+</strong><span>APIs integrated</span></div>
                <div class="fact"><strong>3</strong><span>Languages</span></div>
                <div class="fact"><strong>3.87</strong><span>University GPA</span></div>
            </div>
        </section>

        <section class="section">
            <h2 class="section-title">Professional experience</h2>

            <article class="job">
                <div class="job-meta"><strong>Nov 2023 — Present</strong>Sana’a, Yemen</div>
                <div>
                    <h3>Tasheel for Financial Technology Solutions</h3>
                    <p class="role">Backend Developer</p>
                    <ul>
                        <li>Develop and maintain backend services supporting financial technology products and high-volume transaction workflows.</li>
                        <li>Design, implement, document, and optimize REST APIs using Django and Django REST Framework.</li>
                        <li>Integrate financial systems while protecting data consistency, authentication boundaries, and sensitive information.</li>
                        <li>Monitor and troubleshoot production services, improving operational reliability, response time, and scalability.</li>
                    </ul>
                </div>
            </article>

            <article class="job">
                <div class="job-meta"><strong>Apr 2022 — Present</strong>Sana’a, Yemen</div>
                <div>
                    <h3>Fintechsys IT Services & Consulting</h3>
                    <p class="role">Software Engineer</p>
                    <ul>
                        <li>Resolve time-sensitive production issues to protect business continuity and service availability.</li>
                        <li>Deliver software improvements with cross-functional teams and support critical administrative and financial systems.</li>
                        <li>Share technical guidance and training that helps teams use systems and engineering tools effectively.</li>
                    </ul>
                </div>
            </article>

            <article class="job">
                <div class="job-meta"><strong>Jan 2022 — Mar 2022</strong>Sana’a, Yemen</div>
                <div>
                    <h3>Fintechsys IT Services & Consulting</h3>
                    <p class="role">Backend Developer</p>
                    <ul>
                        <li>Maintained databases and data flows supporting accurate access to financial and operational information.</li>
                        <li>Diagnosed system issues and collaborated on improvements to administrative modules and backend services.</li>
                    </ul>
                </div>
            </article>
        </section>

        <span class="page-number">01 / 02</span>
    </article>

    <article class="page">
        <header class="page-two-header">
            <strong>{{ $portfolio['profile']['short_name'] }}</strong>
            <span>Selected projects · Skills · Education</span>
        </header>

        <section class="section">
            <h2 class="section-title">Selected work projects</h2>

            <article class="project">
                <div class="project-label">
                    <strong>Miyahukum</strong>
                    <span>Production work project<br>Water-delivery platform</span>
                </div>
                <div>
                    <h3>End-to-end water delivery ecosystem</h3>
                    <p>Engineered backend services and operational workflows connecting customers, drivers, and operations teams through secure ordering, dispatch, tracking, reporting, and communication.</p>
                    <ul>
                        <li>Built customer and driver APIs with JWT authentication, role-aware access, and WhatsApp OTP verification.</li>
                        <li>Delivered dashboards for orders, assignments, customers, drivers, commissions, donations, accounting, and PDF reporting.</li>
                        <li>Implemented asynchronous processing and notification flows with Redis, Celery, Firebase Cloud Messaging, and WhatsApp services.</li>
                        <li>Containerized the production stack with Docker, PostgreSQL, Gunicorn, and Nginx.</li>
                    </ul>
                    <div class="tags">@foreach($portfolio['projects'][0]['tech'] as $technology)<span class="tag">{{ $technology }}</span>@endforeach</div>
                </div>
            </article>

            <article class="project">
                <div class="project-label">
                    <strong>Payment Hub</strong>
                    <span>Fintechsys<br>Payment infrastructure</span>
                </div>
                <div>
                    <h3>Reliable payment platform delivery</h3>
                    <ul>
                        <li>Configured and managed Docker environments for consistent application delivery.</li>
                        <li>Maintained GitHub workflows and CI/CD pipelines that automated testing and releases.</li>
                        <li>Diagnosed integration issues, tuned application performance, and strengthened production security.</li>
                    </ul>
                    <div class="tags">@foreach($portfolio['projects'][1]['tech'] as $technology)<span class="tag">{{ $technology }}</span>@endforeach</div>
                </div>
            </article>
        </section>

        <div class="columns">
            <div>
                <section class="section">
                    <h2 class="section-title">Technical skills</h2>
                    <div class="skill-group"><h3>Backend & APIs</h3><p>Python, Django, Django REST Framework, Laravel, REST APIs, OpenAPI, JWT, OTP</p></div>
                    <div class="skill-group"><h3>Data & asynchronous systems</h3><p>PostgreSQL, Redis, Celery, Firebase, relational data modelling, caching</p></div>
                    <div class="skill-group"><h3>Infrastructure & delivery</h3><p>Docker, Docker Compose, CI/CD, GitHub Actions, Git, Linux, Nginx, Gunicorn</p></div>
                    <div class="skill-group"><h3>Engineering strengths</h3><p>Production support, troubleshooting, security hardening, performance tuning, integrations, technical training</p></div>
                </section>

                <section class="section">
                    <h2 class="section-title">Languages</h2>
                    <div class="language-row">
                        <div class="language"><strong>Arabic</strong><span>Native</span></div>
                        <div class="language"><strong>English</strong><span>Advanced</span></div>
                        <div class="language"><strong>German</strong><span>Intermediate</span></div>
                    </div>
                </section>
            </div>

            <div>
                <section class="section">
                    <h2 class="section-title">Education</h2>
                    <div class="education">
                        <strong>{{ $portfolio['education']['degree'] }}</strong>
                        <p>{{ $portfolio['education']['school'] }}<br>{{ $portfolio['education']['details'] }} · Sana’a, Yemen</p>
                    </div>
                </section>

                <section class="section">
                    <h2 class="section-title">Courses & certifications</h2>
                    <ul class="compact-list">
                        @foreach($portfolio['certifications'] as $certification)<li>{{ $certification }}</li>@endforeach
                        <li>TOEFL iBT Preparation · YALI · 2017</li>
                        <li>English Language Courses · 2022</li>
                    </ul>
                </section>
            </div>
        </div>

        <span class="footer-note">References available upon request · Open to part-time, freelance, and remote opportunities</span>
        <span class="page-number">02 / 02</span>
    </article>
</body>
</html>
