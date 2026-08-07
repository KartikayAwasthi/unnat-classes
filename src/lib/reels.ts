import type { InstagramPost, Video } from "@/lib/api";

export type ReelItem =
  | {
      source: "instagram";
      kind: "reel" | "post";
      id: string;
      title: string;
      caption: string | null;
      thumbnailUrl: string;
      permalink: string;
      date: string;
    }
  | {
      source: "youtube";
      kind: "short";
      id: string;
      title: string;
      description: string;
      thumbnailUrl: string;
      videoId: string;
      permalink: string;
      date: string;
    };

export function isYoutubeShort(video: Video): boolean {
  return video.youtubeUrl.includes("/shorts/");
}

export function buildReelFeed(instagramPosts: InstagramPost[], videos: Video[]): ReelItem[] {
  const instagramItems: ReelItem[] = instagramPosts.map((post) => ({
    source: "instagram",
    kind: post.mediaType === "REEL" ? "reel" : "post",
    id: `instagram-${post.id}`,
    title: post.title,
    caption: post.caption,
    thumbnailUrl: post.thumbnailUrl,
    permalink: post.permalink,
    date: post.date,
  }));

  const shortItems: ReelItem[] = videos
    .filter(isYoutubeShort)
    .map((video) => ({
      source: "youtube",
      kind: "short",
      id: `youtube-${video.id}`,
      title: video.title,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      videoId: video.videoId,
      permalink: video.youtubeUrl,
      date: video.date,
    }));

  return [...instagramItems, ...shortItems].sort((a, b) => (a.date < b.date ? 1 : -1));
}
