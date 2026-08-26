export async function GET({ site }: { site: URL | undefined }) {
  const base = (site ?? new URL('https://daodoivn.com')).toString().replace(/\/$/, '');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <sitemap><loc>${base}/sitemap.xml</loc></sitemap>\n</sitemapindex>`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
}
