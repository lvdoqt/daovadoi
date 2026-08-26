import { getCollection } from 'astro:content';

const SITE_URL = 'https://daodoivn.com';

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({
    '<': '&lt;',
    '>': '&gt;',
    '&': '&amp;',
    "'": '&apos;',
    '"': '&quot;',
  })[character] ?? character);
}

export async function GET({ site }: { site: URL | undefined }) {
  const base = (site ?? new URL(SITE_URL)).toString().replace(/\/$/, '');

  const posts = await getCollection('blog');
  const sorted = posts.sort((a, b) => b.data.date.localeCompare(a.data.date));

  const items = sorted
    .map((post) => {
      const url = `${base}/bai-viet/${post.id}`;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description>${escapeXml(post.data.excerpt)}</description>
      <pubDate>${new Date(`${post.data.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel>\n  <title>Đạo &amp; Đời</title>\n  <link>${base}</link>\n  <atom:link href="${base}/rss.xml" rel="self" type="application/rss+xml" />\n  <description>Ghi chép về một đời sống tỉnh thức.</description>\n  <language>vi</language>\n${items}\n</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } }
  );
}
