import { getCollection } from 'astro:content';
import { categories } from '../data/posts';

const SITE_URL = 'https://daodoivn.com';

export async function GET({ site }: { site: URL | undefined }) {
  const base = (site ?? new URL(SITE_URL)).toString().replace(/\/$/, '');
  const staticPages = ['/', '/gioi-thieu', '/huong-dan', '/sitemap', '/quy-dinh', '/lien-he', '/dao-duc-kinh', '/kinh-dich', '/video'];
  const posts = await getCollection('blog');
  const entries = [
    ...staticPages.map((path) => ({ path })),
    ...categories.map((category) => ({ path: `/chuyen-muc/${category.slug}` })),
    ...posts.map((post) => ({ path: `/bai-viet/${post.id}`, lastmod: post.data.date })),
  ];
  const urls = entries
    .map(({ path, lastmod }) => `  <url><loc>${base}${path}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}</url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
