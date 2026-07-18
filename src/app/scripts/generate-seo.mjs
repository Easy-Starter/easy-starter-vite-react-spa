import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const distDir = resolve(rootDir, 'dist');
const routesPath = resolve(rootDir, 'src/config/routes.json');

const siteUrl = (process.env.VITE_SITE_URL || 'https://example.com').replace(/\/+$/, '');
const basePath = process.env.VITE_BASE_PATH || '/';
const today = new Date().toISOString().slice(0, 10);

function normalizeBasePath(path) {
  if (!path || path === '/') return '';
  return `/${path.replace(/^\/+|\/+$/g, '')}`;
}

function buildLocation(routePath) {
  const normalizedBase = normalizeBasePath(basePath);
  const normalizedRoute = routePath === '/' ? '' : `/${routePath.replace(/^\/+/, '')}`;
  return `${siteUrl}${normalizedBase}${normalizedRoute || '/'}`;
}

const routes = JSON.parse(await readFile(routesPath, 'utf8'));
const publicRoutes = routes.filter((route) => route.includeInSitemap !== false);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${publicRoutes
  .map(
    (route) => `  <url>
    <loc>${buildLocation(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq || 'monthly'}</changefreq>
    <priority>${route.priority || '0.7'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}${normalizeBasePath(basePath)}/sitemap.xml
`;

await mkdir(distDir, { recursive: true });
await writeFile(resolve(distDir, 'sitemap.xml'), sitemap);
await writeFile(resolve(distDir, 'robots.txt'), robots);

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
