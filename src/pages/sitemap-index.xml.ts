export async function GET({ site }: { site: URL | undefined }) {
  const base = (site ?? new URL('https://daovadoi.vn')).toString().replace(/\/$/, '');
  const pages = ['/', '/gioi-thieu', '/huong-dan', '/quy-dinh', '/lien-he', '/khoang-lang-giua-nhung-dieu-dang-dien-ra', '/mot-ngay-khong-voi', '/chanh-niem-mot-hoi-tho', '/dao-duc-kinh-vo-vi', '/que-can-suc-manh-khoi-dau', '/nam-phut-ngoi-yen', '/chuyen-muc/cuoc-song', '/chuyen-muc/dao-va-doi', '/chuyen-muc/phat-giao', '/chuyen-muc/dao-duc-kinh', '/chuyen-muc/kinh-dich', '/chuyen-muc/thien-va-thuc-hanh'];
  const urls = pages.map((path) => `  <url><loc>${base}${path}</loc><lastmod>2026-08-21</lastmod></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
