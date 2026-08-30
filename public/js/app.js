const root = document.documentElement;
const header = document.querySelector('[data-header]');
const progress = document.querySelector('.page-progress span');
const languageButton = document.querySelector('[data-language-button]');
const themeButton = document.querySelector('[data-theme-button]');
const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
const navLinks = [...document.querySelectorAll('.site-nav a')];

const getStoredValue = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        return null;
    }
};

const storeValue = (key, value) => {
    try {
        localStorage.setItem(key, value);
    } catch (error) {}
};

const applyLanguage = (language) => {
    const isArabic = language === 'ar';

    root.lang = language;
    root.dir = isArabic ? 'rtl' : 'ltr';

    document.querySelectorAll('[data-copy]').forEach((element) => {
        const value = element.dataset[language];
        if (value) element.textContent = value;
    });

    languageButton.textContent = isArabic ? 'EN' : 'AR';
    languageButton.setAttribute('aria-label', isArabic ? 'Switch to English' : 'Switch to Arabic');
    document.title = isArabic
        ? 'هشام هاشم علي الشريف · مهندس برمجيات خلفية'
        : 'Hisham Hashem Ali Alshareef · Backend Engineer';

    storeValue('portfolio-language', language);
};

applyLanguage(getStoredValue('portfolio-language') === 'ar' ? 'ar' : 'en');

languageButton?.addEventListener('click', () => {
    applyLanguage(root.lang === 'ar' ? 'en' : 'ar');
});

themeButton?.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = nextTheme;
    storeValue('portfolio-theme', nextTheme);
});

const closeMenu = () => {
    menu?.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
};

menuButton?.addEventListener('click', () => {
    const isOpen = menu?.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(Boolean(isOpen)));
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
    });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

document.querySelectorAll('.reveal-item').forEach((element, index) => {
    if (index < 6) element.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
    revealObserver.observe(element);
});

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
            link.classList.toggle('is-active', link.hash === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

let scrollTicking = false;

const updateScrollUI = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const ratio = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;

    if (progress) progress.style.transform = `scaleX(${ratio})`;
    header?.classList.toggle('is-scrolled', window.scrollY > 18);
    scrollTicking = false;
};

window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateScrollUI);
}, { passive: true });

updateScrollUI();
