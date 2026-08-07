const API_BASE_URL = process.env.API_BASE_URL ?? "http://localhost:8080";

export type Note = {
  id: number;
  slug: string;
  title: string;
  subject: string;
  classRange: string;
  fileType: string;
  fileSize: string;
  fileUrl: string;
  description: string;
  uploadedAt: string;
  published: boolean;
};

export type CurrentAffair = {
  id: number;
  slug: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  content: string[];
  coverImageUrl: string | null;
  published: boolean;
};

export type DailyCurrentAffair = {
  id: number;
  slug: string;
  caption: string | null;
  date: string;
  images: string[];
  published: boolean;
};

export type Exam = {
  id: number;
  slug: string;
  title: string;
  category: string;
  examDate: string | null;
  summary: string;
  aboutExam: string;
  examPattern: string;
  syllabus: string;
  coverImageUrl: string | null;
  officialLink: string | null;
  published: boolean;
};

export type Post = {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: string;
  tag: string;
  excerpt: string;
  content: string[];
  coverImageUrl: string | null;
  published: boolean;
};

export type Video = {
  id: number;
  slug: string;
  title: string;
  youtubeUrl: string;
  videoId: string;
  thumbnailUrl: string;
  category: string;
  description: string;
  date: string;
  published: boolean;
};

export type InstagramMediaType = "REEL" | "POST";

export type InstagramPost = {
  id: number;
  slug: string;
  title: string;
  permalink: string;
  mediaType: InstagramMediaType;
  thumbnailUrl: string;
  caption: string | null;
  date: string;
  published: boolean;
};

export function resolveFileUrl(path: string): string {
  return path.startsWith("http") ? path : `${API_BASE_URL}${path}`;
}

async function apiGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE_URL}${path}`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

export async function getNotes(): Promise<Note[]> {
  return (await apiGet<Note[]>("/api/notes?published=true")) ?? [];
}

export async function getCurrentAffairs(): Promise<CurrentAffair[]> {
  return (await apiGet<CurrentAffair[]>("/api/current-affairs?published=true")) ?? [];
}

export async function getCurrentAffairBySlug(slug: string): Promise<CurrentAffair | null> {
  const item = await apiGet<CurrentAffair>(`/api/current-affairs/${slug}`);
  return item && item.published ? item : null;
}

export async function getDailyCurrentAffairs(): Promise<DailyCurrentAffair[]> {
  return (await apiGet<DailyCurrentAffair[]>("/api/daily-current-affairs?published=true")) ?? [];
}

export async function getDailyCurrentAffairBySlug(slug: string): Promise<DailyCurrentAffair | null> {
  const item = await apiGet<DailyCurrentAffair>(`/api/daily-current-affairs/${slug}`);
  return item && item.published ? item : null;
}

export async function getExams(): Promise<Exam[]> {
  return (await apiGet<Exam[]>("/api/exams?published=true")) ?? [];
}

export async function getExamBySlug(slug: string): Promise<Exam | null> {
  const item = await apiGet<Exam>(`/api/exams/${slug}`);
  return item && item.published ? item : null;
}

export async function getPosts(): Promise<Post[]> {
  return (await apiGet<Post[]>("/api/posts?published=true")) ?? [];
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const post = await apiGet<Post>(`/api/posts/${slug}`);
  return post && post.published ? post : null;
}

export async function getVideos(): Promise<Video[]> {
  return (await apiGet<Video[]>("/api/videos?published=true")) ?? [];
}

export async function getVideoBySlug(slug: string): Promise<Video | null> {
  const video = await apiGet<Video>(`/api/videos/${slug}`);
  return video && video.published ? video : null;
}

export async function getInstagramPosts(): Promise<InstagramPost[]> {
  return (await apiGet<InstagramPost[]>("/api/instagram-posts?published=true")) ?? [];
}
