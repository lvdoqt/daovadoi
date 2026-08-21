import { getCollection } from 'astro:content';

export async function GET({ site }: { site: URL | undefined }) {
  const base = (site ?? new URL('https://daovadoi.vn')).toString().replace(/\/$/, '');

  const posts = await getCollection('blog');
  const sorted = posts.sort((a, b) => b.data.date.localeCompare(a.data.date));

  const items = sorted
    .map((post) => {
      const url = `${base}/bai-viet/${post.id}`;
      return `    <item>
      <title>${post.data.title}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <description>${post.data.excerpt}</description>
      <pubDate>${new Date(`${post.data.date}T00:00:00Z`).toUTCString()}</pubDate>
    </item>`;
    })
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel>\n  <title>Đạo &amp; Đời</title>\n  <link>${base}</link>\n  <description>Ghi chép về một đời sống tỉnh thức.</description>\n  <language>vi</language>\n${items}\n</channel></rss>`,
    { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } }
  );
}
