# Hisham Alshareef — Portfolio

A bilingual, single-page portfolio and print-ready CV built with Laravel 13.

## Local development

Requirements: PHP 8.3+ and Composer.

```bash
composer setup
composer dev
```

The portfolio is available at `/`, and the print-friendly CV is at `/cv`.

## Production deployment

Point the web server document root to `public/`, set `APP_ENV=production` and
`APP_DEBUG=false`, then run:

```bash
composer install --no-dev --optimize-autoloader
php artisan optimize
```

This repository was previously hosted as a static GitHub Pages site. GitHub
Pages cannot execute PHP/Laravel, so deploy this version to a PHP-capable host
such as Laravel Cloud, Forge, a VPS, or shared hosting with PHP 8.3+.

## CV PDF

The downloadable file is `public/hisham_cv.pdf`. Its source layout is
`resources/views/cv.blade.php`, and the content shared by the portfolio and CV
lives in `config/portfolio.php`.
