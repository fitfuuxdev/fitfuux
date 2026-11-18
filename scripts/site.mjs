import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(import.meta.dirname, '..');
export const SITE = 'https://fitfuuxdev.github.io/fitfuux';
export const TELEGRAM = 'https://t.me/Fitfuux';
export const TELEGRAM_LABEL = '@Fitfuux';
export const PHONE = '+7 995 258-57-87';
export const PHONE_HREF = 'tel:+79952585787';
export const COPYRIGHT = '© Fitfuux · «Создано Fitfuux»';
export const IMAGES = JSON.parse(fs.readFileSync(path.join(ROOT, 'assets', 'img', 'manifest.json'), 'utf8'));

export const NAV = [
  ['home', 'index.html', 'Главная'],
  ['services', 'services.html', 'Услуги'],
  ['portfolio', 'portfolio.html', 'Кейсы'],
  ['about', 'about.html', 'Обо мне'],
  ['pricing', 'pricing.html', 'Цены'],
  ['contacts', 'contacts.html', 'Контакты'],
];

export const CASES = [
  {
    key: 'moka',
    url: 'cases/moka.html',
    name: 'MÓKA',
    type: 'Кофейня',
    category: 'food',
    palette: 'тёплый кофе',
    short: 'Кофейня, в которую хочется вернуться. Тёплая, живая, без пафоса.',
    image: 'moka-hero',
    num: '01',
  },
  {
    key: 'tyaga',
    url: 'cases/tyaga.html',
    name: 'ТЯГА',
    type: 'Спортзал',
    category: 'sport',
    palette: 'чёрный и лайм',
    short: 'Зал, где не кричат. Только железо, свет и дело.',
    image: 'tyaga-hero',
    num: '02',
  },
  {
    key: 'sloy',
    url: 'cases/sloy.html',
    name: 'СЛОЙ',
    type: 'IT-школа',
    category: 'education',
    palette: 'неон и ночь',
    short: 'Школа, после которой появляется первый сайт.',
    image: 'sloy-class',
    num: '03',
  },
  {
    key: 'sole',
    url: 'cases/sole.html',
    name: 'SOLÉ',
    type: 'Косметика',
    category: 'beauty',
    palette: 'крем и терракота',
    short: 'Уход без лишних слов. Спокойно, мягко, по делу.',
    image: 'sole-set',
    num: '04',
  },
  {
    key: 'vecher',
    url: 'cases/vecher.html',
    name: 'ВЕЧЕР',
    type: 'Ресторан',
    category: 'food',
    palette: 'зелень и медь',
    short: 'Ресторан, где ужин важнее телефона.',
    image: 'vecher-dish',
    num: '05',
  },
];

export const FONT_FILES = {
  onest: ['onest-cyr-300-800-normal.woff2', 'onest-lat-300-800-normal.woff2'],
  cormorant: [
    'cormorant-garamond-cyr-400-normal.woff2',
    'cormorant-garamond-lat-400-normal.woff2',
    'cormorant-garamond-cyr-400-italic.woff2',
    'cormorant-garamond-lat-400-italic.woff2',
  ],
  oswald: ['oswald-cyr-400-600-normal.woff2', 'oswald-lat-400-600-normal.woff2'],
  unbounded: ['unbounded-cyr-400-700-normal.woff2', 'unbounded-lat-400-700-normal.woff2'],
  playfair: ['playfair-display-cyr-400-600-normal.woff2', 'playfair-display-lat-400-600-normal.woff2'],
  prata: ['prata-cyr-400-normal.woff2', 'prata-lat-400-normal.woff2'],
};

export function esc(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

export function icon(name, extra = '') {
  const icons = {
    arrowUpRight: '<path d="M7 17 17 7M9 7h8v8"/>',
    arrowRight: '<path d="M4 12h15M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M20 12H5M11 6l-6 6 6 6"/>',
    arrowDown: '<path d="M12 4v15M6 13l6 6 6-6"/>',
    up: '<path d="M12 20V5M6 11l6-6 6 6"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    copy: '<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
    telegram: '<path d="m21 3-3.2 17.1c-.2 1-.8 1.2-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.3-4.7L17.4 6c.5-.4-.1-.6-.8-.2L6.2 12.3l-4.5-1.4c-1-.3-1-1 .2-1.5L19.6 2c.8-.3 1.5.2 1.4 1Z"/>',
    phone: '<path d="M6.6 3.5h3.1l1.2 4.2-2 1.3a13 13 0 0 0 5.1 5.1l1.3-2 4.2 1.2v3.1a2 2 0 0 1-2.2 2A16.8 16.8 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"/>',
    drag: '<path d="M8 11V6.5a1.5 1.5 0 0 1 3 0V10m0-4.5a1.5 1.5 0 0 1 3 0V10m0-3a1.5 1.5 0 0 1 3 0v4m0-2a1.5 1.5 0 0 1 3 0v4.5a6.5 6.5 0 0 1-6.5 6.5h-1a6 6 0 0 1-4.6-2.2L5 14.8a1.5 1.5 0 0 1 2.2-2L8 13.5"/>',
    check: '<path d="m5 12 4.2 4.2L19 6.5"/>',
    spark: '<path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19"/>',
    bean: '<ellipse cx="12" cy="12" rx="7.5" ry="10" transform="rotate(38 12 12)"/><path d="M8.2 18.6c3.8-2.3 4-7.7 7.6-13.2"/>',
    slash: '<path d="M5 20 19 4M5 4h8M11 20h8"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
    star: '<path d="m12 2 2.3 7.2H22l-6.1 4.5 2.3 7.2-6.2-4.6-6.2 4.6 2.3-7.2L2 9.2h7.7L12 2Z"/>',
    code: '<path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
    dumbbell: '<path d="M6 8v8M3 10v4M18 8v8M21 10v4M6 12h12"/>',
    grid: '<rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/>',
  };
  return `<svg ${extra} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icons[name] || ''}</svg>`;
}

export function makeImage(prefix) {
  return function image(slug, alt, options = {}) {
    const item = IMAGES[slug];
    if (!item) throw new Error(`Unknown image: ${slug}`);
    const variants = item.variants;
    const largest = variants[variants.length - 1];
    const srcset = variants.map((v) => `${prefix}assets/img/${v.file} ${v.width}w`).join(', ');
    const sizes = options.sizes || '100vw';
    const loading = options.loading || 'lazy';
    const priority = options.priority ? ' fetchpriority="high"' : '';
    const classes = options.className ? ` class="${options.className}"` : '';
    return `<img src="${prefix}assets/img/${largest.file}" srcset="${srcset}" sizes="${sizes}" width="${largest.width}" height="${largest.height}" alt="${esc(alt)}" loading="${loading}" decoding="async"${priority}${classes}>`;
  };
}

export function brandMark(className = 'brand__mark') {
  return `<svg class="${className}" viewBox="0 0 40 40" fill="none" aria-hidden="true" focusable="false">
    <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="11" stroke="currentColor" stroke-opacity=".28" stroke-width="1.5"/>
    <path d="M11 12h17M11 12v17M11 19.4h10" stroke="currentColor" stroke-width="4.2" stroke-linecap="square"/>
    <path d="M29 12 21.6 29" stroke="#5B64FF" stroke-width="3.4" stroke-linecap="square"/>
  </svg>`;
}

function fontPreloads(prefix, theme) {
  const groups = { main: ['onest', 'cormorant'], moka: ['onest', 'cormorant'], tyaga: ['onest', 'oswald'], sloy: ['onest', 'unbounded'], sole: ['onest', 'playfair'], vecher: ['onest', 'prata'] };
  const files = (groups[theme] || groups.main).flatMap((key) => FONT_FILES[key]);
  return [...new Set(files)]
    .map((file) => `<link rel="preload" href="${prefix}assets/fonts/${file}" as="font" type="font/woff2" crossorigin>`)
    .join('\n  ');
}

export function scene({ prefix, type, label, poster, alt, hint = 'Потяните — покрутится', cover = false, className = '', priority = false }) {
  const generatedPoster = Boolean(IMAGES[`poster-${type}`]);
  const fallbackSlug = generatedPoster ? `poster-${type}` : poster;
  const image = makeImage(prefix)(fallbackSlug, alt || '', {
    sizes: '(max-width: 760px) 100vw, 50vw',
    loading: priority ? 'eager' : 'lazy',
    priority,
  });
  return `<div class="scene ${className}" data-scene="${type}" role="img" tabindex="0" aria-label="${esc(alt || 'Интерактивная 3D-модель. Можно вращать мышью или пальцем.')}">
    <canvas class="scene__canvas" aria-hidden="true"></canvas>
    <div class="scene__fallback${cover && !generatedPoster ? ' scene__fallback--cover' : ''}">${image}</div>
    <div class="scene__hud" aria-hidden="true">
      <span class="scene__hint">${icon('drag')} ${esc(hint)}</span>
      <span class="scene__label">${esc(label || '3D / FITFUUX')}</span>
    </div>
  </div>`;
}

export function header(prefix, active = '') {
  const nav = NAV.map(([key, href, label]) => `<a href="${prefix}${href}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`).join('');
  const menuNav = NAV.map(([, href, label], index) => `<a href="${prefix}${href}"><span>${String(index + 1).padStart(2, '0')}</span>${label}</a>`).join('');
  return `<a class="skip-link" href="#main">К основному содержанию</a>
<span id="top" class="sr-only">Начало страницы</span>
<header class="site-header" data-header>
  <div class="shell header__inner">
    <a class="brand" href="${prefix}index.html">
      ${brandMark()}
      <span class="brand__name"><span class="brand__word">FITFUUX</span><span class="brand__meta">web atelier</span></span>
    </a>
    <nav class="nav" aria-label="Основная навигация">${nav}</nav>
    <div class="header__actions">
      <a class="btn btn--header" href="${prefix}contacts.html">Написать ${icon('arrowUpRight')}</a>
      <button class="menu-toggle" type="button" data-menu-open aria-expanded="false" aria-controls="site-menu">
        <span class="sr-only">Открыть меню</span>
        <span class="menu-toggle__lines" aria-hidden="true"></span>
      </button>
    </div>
  </div>
  <div class="header-line" aria-hidden="true"><span data-progress></span></div>
</header>
<dialog class="menu" id="site-menu" aria-labelledby="menu-title">
  <div class="menu__inner">
    <div class="menu__top">
      <a class="brand" href="${prefix}index.html">
        ${brandMark()}
        <span class="brand__name"><span class="brand__word">FITFUUX</span><span class="brand__meta">web atelier</span></span>
      </a>
      <button class="menu__close" type="button" data-menu-close>
        <span class="sr-only">Закрыть меню</span>
        ${icon('close')}
      </button>
    </div>
    <div class="menu__body">
      <p class="menu__label" id="menu-title">Куда дальше?</p>
      <nav class="menu__nav" aria-label="Мобильная навигация">${menuNav}</nav>
      <div class="menu__foot">
        <div class="menu__contacts">
          <a href="${TELEGRAM}" target="_blank" rel="noopener noreferrer">${TELEGRAM_LABEL}</a>
          <a href="${PHONE_HREF}">${PHONE}</a>
          <span class="menu__note">Первый разговор ни к чему не обязывает. Отвечаю лично.</span>
        </div>
        <a class="btn btn--light btn--small" href="${prefix}contacts.html">Написать ${icon('arrowUpRight')}</a>
      </div>
    </div>
  </div>
</dialog>`;
}

export function footer(prefix) {
  const nav = NAV.map(([, href, label]) => `<a href="${prefix}${href}">${label}</a>`).join('');
  const caseLinks = CASES.map((item) => `<a href="${prefix}${item.url}">${item.name}</a>`).join('');
  return `<footer class="site-footer">
  <div class="shell">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand" href="${prefix}index.html">
          ${brandMark()}
          <span class="brand__name"><span class="brand__word">FITFUUX</span><span class="brand__meta">web atelier</span></span>
        </a>
        <p>Сайты под ключ от 8 000 ₽. Делаю сам, без менеджеров и лишних согласований.</p>
        <a class="btn btn--light btn--small" style="margin-top:20px" href="${TELEGRAM}" target="_blank" rel="noopener noreferrer">Написать в Telegram ${icon('arrowUpRight')}</a>
      </div>
      <div>
        <p class="footer-col__title">Разделы</p>
        <nav class="footer-links" aria-label="Разделы сайта">${nav}</nav>
      </div>
      <div>
        <p class="footer-col__title">Связаться</p>
        <div class="footer-links">
          <a href="${TELEGRAM}" target="_blank" rel="noopener noreferrer">Telegram · ${TELEGRAM_LABEL}</a>
          <a href="${PHONE_HREF}">${PHONE}</a>
          <span style="color:rgba(244,241,234,.64);font-size:12px">СБП · получатель Алексей</span>
          <span style="color:rgba(244,241,234,.64);font-size:12px">Работаю удалённо по всей России</span>
        </div>
        <div style="margin-top:22px">
          <p class="footer-col__title">Кейсы</p>
          <div class="footer-links footer-links--cases">${caseLinks}</div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>${COPYRIGHT}</span>
      <span>Первый разговор ни к чему не обязывает.</span>
      <a href="#top">Наверх ${icon('up')}</a>
    </div>
  </div>
  <div class="footer-wordmark" aria-hidden="true">FITFUUX</div>
</footer>
<a class="mobile-cta" href="${TELEGRAM}" target="_blank" rel="noopener noreferrer">
  <span><span style="display:block;color:#fff;font-size:13px;font-weight:500">Написать Алексею</span><span style="display:block;font-size:9px;margin-top:2px">${TELEGRAM_LABEL}</span></span>
  ${icon('telegram')}
</a>
<noscript><style>.menu-toggle{display:none!important}@media(max-width:580px){.btn--header{display:inline-flex!important}}.mobile-cta{display:none!important}</style></noscript>`;
}

function structuredData({ title, description, pathName, type = 'main', imageUrl, faq = null, breadcrumb = null }) {
  const base = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE}/#studio`,
        name: 'FITFUUX',
        url: `${SITE}/`,
        image: `${SITE}/assets/og/home.jpg`,
        description: 'Лендинги и сайты под ключ от 8 000 ₽. Дизайн, тексты, 3D, запуск.',
        telephone: '+7 995 258-57-87',
        priceRange: '8 000–12 000 ₽',
        founder: { '@type': 'Person', name: 'Алексей', jobTitle: 'Веб-дизайнер и разработчик' },
        sameAs: [TELEGRAM],
        areaServed: 'RU',
        makesOffer: [
          { '@type': 'Offer', name: 'Лендинг «Старт»', price: '8000', priceCurrency: 'RUB' },
          { '@type': 'Offer', name: 'Лендинг под ключ', price: '12000', priceCurrency: 'RUB' },
          { '@type': 'Offer', name: 'Доработка сайта', price: '2000', priceCurrency: 'RUB' },
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE}${pathName}#page`,
        url: `${SITE}${pathName}`,
        name: title,
        description,
        inLanguage: 'ru-RU',
        isPartOf: { '@id': `${SITE}/#studio` },
        primaryImageOfPage: imageUrl,
      },
    ],
  };
  if (type === 'case') {
    base['@graph'].push({
      '@type': 'CreativeWork',
      name: title,
      abstract: description,
      author: { '@type': 'Person', name: 'Алексей (FITFUUX)' },
      genre: 'Авторский проект сайта',
      inLanguage: 'ru-RU',
      url: `${SITE}${pathName}`,
    });
  }
  if (breadcrumb) {
    base['@graph'].push({
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumb.map(([name, url], index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name,
        item: `${SITE}${url}`,
      })),
    });
  }
  if (faq?.length) {
    base['@graph'].push({
      '@type': 'FAQPage',
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a.replace(/<[^>]+>/g, '') },
      })),
    });
  }
  return JSON.stringify(base);
}

export function page({
  file,
  title,
  description,
  pathName,
  active = '',
  bodyClass = '',
  theme = 'main',
  main,
  og,
  type = 'main',
  faq = null,
  breadcrumb = null,
  preloadPhoto = null,
  extraHead = '',
}) {
  const isCase = file.startsWith('cases/');
  const prefix = isCase ? '../' : '';
  const imagePath = `assets/og/${og}.jpg`;
  const imageUrl = `${SITE}/${imagePath}`;
  const cssCase = isCase ? `\n  <link rel="stylesheet" href="${prefix}assets/css/cases.min.css">` : '';
  const canonical = `${SITE}${pathName}`;
  const structured = structuredData({ title, description, pathName, type, imageUrl, faq, breadcrumb });
  const preload = preloadPhoto
    ? (() => {
        const item = IMAGES[preloadPhoto];
        const variants = item.variants;
        const largest = variants[variants.length - 1];
        const srcset = variants.map((v) => `${prefix}assets/img/${v.file} ${v.width}w`).join(', ');
        return `<link rel="preload" as="image" href="${prefix}assets/img/${largest.file}" imagesrcset="${srcset}" imagesizes="100vw" fetchpriority="high">`;
      })()
    : '';

  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="theme-color" content="#0C0C0B">
  <meta name="color-scheme" content="light">
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(description)}">
  <link rel="canonical" href="${canonical}">
  <meta name="robots" content="index, follow, max-image-preview:large">
  <meta property="og:type" content="${isCase ? 'article' : 'website'}">
  <meta property="og:locale" content="ru_RU">
  <meta property="og:site_name" content="FITFUUX">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${imageUrl}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(title)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${imageUrl}">
  <meta name="twitter:image:alt" content="${esc(title)}">
  <link rel="icon" href="${prefix}assets/brand/favicon.ico" sizes="any">
  <link rel="icon" href="${prefix}assets/brand/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="${prefix}assets/brand/favicon-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="${prefix}assets/brand/apple-touch-icon.png">
  <link rel="manifest" href="${prefix}site.webmanifest">
  <link rel="stylesheet" href="${prefix}assets/fonts/fonts.min.css">
  <link rel="stylesheet" href="${prefix}assets/css/site.min.css">${cssCase}
  ${preload}
  ${extraHead}
  <script>document.documentElement.classList.add('js');window.addEventListener('load',function(){setTimeout(function(){if(!document.documentElement.classList.contains('motion-ready'))document.documentElement.classList.add('motion-fallback');},2600);},{once:true});</script>
  <script type="application/ld+json">${structured}</script>
</head>
<body class="${bodyClass}">
${header(prefix, active)}
<main id="main">
${main}
</main>
${footer(prefix)}
<script type="module" src="${prefix}assets/js/app.min.js"></script>
</body>
</html>`;
}

/* Shared small UI pieces used by more than one page. */
export function planCard({ label, price, oldPrice = '', title, desc, features, featured = false, href = 'contacts.html', btn = 'Обсудить', prefix = '' }) {
  return `<article class="plan${featured ? ' plan--featured' : ''}">
    <div class="plan__top">
      <span class="plan__label">${label}</span>
      ${featured ? '<span class="plan__badge">Так берут чаще</span>' : ''}
    </div>
    <div>
      <h3>${title}</h3>
      <p class="plan__desc" style="margin-top:12px">${desc}</p>
    </div>
    <div class="plan__price">${price} <small>₽</small></div>
    <ul class="plan__list">${features.map((item) => `<li>${item}</li>`).join('')}</ul>
    <div class="plan__actions">
      <a class="btn ${featured ? 'btn--light' : 'btn--ghost'}" href="${prefix}${href}">${btn} ${icon('arrowUpRight')}</a>
    </div>
  </article>`;
}

export function workCard(item, prefix = '', attrs = '') {
  const image = makeImage(prefix);
  return `<a ${attrs} class="work-card work-card--${item.key}" href="${prefix}${item.url}">
    <div class="work-card__media">
      ${image(item.image, `${item.name} — ${item.short}`, { sizes: '(max-width: 760px) 84vw, 38vw' })}
      <div class="work-card__top">
        <span class="work-card__num">${item.num}</span>
        <span class="work-card__type">${item.type}</span>
      </div>
    </div>
    <div class="work-card__body">
      <span class="work-card__brand">${item.name}</span>
      <div class="work-card__row">
        <p class="work-card__desc">${item.short}</p>
        <span class="work-card__arrow">${icon('arrowUpRight')}</span>
      </div>
    </div>
  </a>`;
}

export const WORK_CARDS = { item: (key) => CASES.find((c) => c.key === key) };

export function caseCta({ prefix, accent = '#5B64FF' }) {
  return `<section class="case-cta" style="--case-accent:${accent}">
  <div class="case-shell case-cta__inner">
    <div>
      <p class="case-cta__eyebrow">Авторский проект Fitfuux</p>
      <h2>Понравился этот сайт? Сделаю похожий — только для вас.</h2>
    </div>
    <div class="case-cta__side">
      <p>Лендинг под ключ от 8 000 ₽. Обсудим задачу, цену и сроки без обязательств.</p>
      <a class="btn btn--light" href="${prefix}contacts.html">Написать Алексею ${icon('arrowUpRight')}</a>
      <span class="small" style="color:rgba(244,241,234,.66)">Первый разговор ни к чему не обязывает.</span>
    </div>
  </div>
</section>`;
}

export function casePager(prefix, currentKey) {
  const index = CASES.findIndex((item) => item.key === currentKey);
  const prev = CASES[(index - 1 + CASES.length) % CASES.length];
  const next = CASES[(index + 1) % CASES.length];
  return `<nav class="case-pager" aria-label="Другие кейсы">
  <a href="${prefix}${prev.url}" rel="prev">
    <span class="case-pager__label">${icon('arrowLeft')} Предыдущий кейс</span>
    <span class="case-pager__name">${prev.name}</span>
  </a>
  <a href="${prefix}${next.url}" rel="next">
    <span class="case-pager__label">Следующий кейс ${icon('arrowRight')}</span>
    <span class="case-pager__name">${next.name}</span>
  </a>
</nav>`;
}
