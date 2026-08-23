import videoSources from './videos.json';

export type Video = {
  id: string;
  url: string;
  embedUrl: string;
  thumbnailUrl: string;
  title: string;
  date: string;
};

type VideoSource = { url: string; date?: string };

function getVideoId(url: string) {
  const parsed = new URL(url);
  const id = parsed.hostname.includes('youtu.be') ? parsed.pathname.slice(1) : parsed.searchParams.get('v');
  if (!id || !/^[\w-]{11}$/.test(id)) throw new Error(`Link YouTube không hợp lệ: ${url}`);
  return id;
}

async function getVideoTitle(url: string, id: string) {
  try {
    const response = await fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`);
    if (response.ok) {
      const data = await response.json() as { title?: string };
      if (data.title) return data.title;
    }
  } catch {
    // Vẫn tạo trang khi YouTube tạm thời không phản hồi.
  }
  return `Video YouTube · ${id}`;
}

export async function getVideos() {
  const sources = videoSources as VideoSource[];
  const videos = await Promise.all(sources.map(async (source) => {
    const id = getVideoId(source.url);
    return { id, url: source.url, embedUrl: `https://www.youtube-nocookie.com/embed/${id}`, thumbnailUrl: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, title: await getVideoTitle(source.url, id), date: source.date ?? '1970-01-01' };
  }));
  return videos.sort((a, b) => b.date.localeCompare(a.date));
}
