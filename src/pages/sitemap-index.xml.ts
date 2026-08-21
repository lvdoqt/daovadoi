import { getCollection } from 'astro:content';

export async function GET({ site }: { site: URL | undefined }) {
  const base = (site ?? new URL('https://daovadoi.vn')).toString().replace(/\/$/, '');

  // Trang tĩnh cố định
  const staticPages = ['/', '/gioi-thieu', '/huong-dan', '/sitemap', '/quy-dinh', '/lien-he'];
  const categoryPages = [
    '/chuyen-muc/cuoc-song',
    '/chuyen-muc/dao-va-doi',
    '/chuyen-muc/phat-giao',
    '/chuyen-muc/dao-duc-kinh',
    '/chuyen-muc/kinh-dich',
    '/chuyen-muc/thien-va-thuc-hanh',
  ];

  // Bài viết từ Content Collections
  const posts = await getCollection('blog');
  const postPages = posts.map((p) => `/bai-viet/${p.id}`);

  const today = new Date().toISOString().split('T')[0];
  const allPages = [...staticPages, ...categoryPages, ...postPages];
  const urls = allPages
    .map((path) => `  <url><loc>${base}${path}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
