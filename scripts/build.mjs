import fs from 'node:fs';
import path from 'node:path';
import { MAIN_PAGES } from './content-main.mjs';
import { CASE_PAGES } from './content-cases.mjs';
import { CASES, ROOT, SITE } from './site.mjs';

const pages = [];

for (const [key, build] of Object.entries(MAIN_PAGES)) {
  const file = key === 'home' ? 'index.html' : `${key}.html`;
  pages.push({ file, html: build() });
}
for (const [key, build] of Object.entries(CASE_PAGES)) {
  pages.push({ file: `cases/${key}.html`, html: build() });
}

for (const page of pages) {
  const target = path.join(ROOT, page.file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, page.html, 'utf8');
  console.log(`built ${page.file.padEnd(24)} ${(Buffer.byteLength(page.html) / 1024).toFixed(1)} kB`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = [
  ['', 1.0, 'weekly'],
  ['services.html', 0.9, 'monthly'],
  ['portfolio.html', 0.9, 'monthly'],
  ['about.html', 0.7, 'monthly'],
  ['pricing.html', 0.9, 'monthly'],
  ['contacts.html', 0.7, 'monthly'],
  ...CASES.map((item) => [item.url, 0.8, 'monthly']),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([url, priority, changefreq]) => `  <url>
    <loc>${SITE}/${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '', 'utf8');
fs.writeFileSync(
  path.join(ROOT, 'site.webmanifest'),
  JSON.stringify({
    name: 'FITFUUX — сайты под ключ',
    short_name: 'FITFUUX',
    description: 'Лендинги и сайты под ключ от 8 000 ₽.',
    start_url: './',
    display: 'standalone',
    background_color: '#0C0C0B',
    theme_color: '#0C0C0B',
    lang: 'ru',
    icons: [
      { src: 'assets/brand/favicon-192.png', sizes: '192x192', type: 'image/png' },
      { src: 'assets/brand/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: 'assets/brand/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  }, null, 2) + '\n',
  'utf8',
);

console.log(`\nBuilt ${pages.length} pages.`);
