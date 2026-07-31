import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";
import { getCurrentAffairs, getPosts, resolveFileUrl } from "@/lib/api";
import { galleryMedia, type GalleryMedia } from "@/lib/gallery";

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
  images?: string[];
  videos?: MetadataRoute.Sitemap[number]["videos"];
};

const abs = (path: string) => `${SITE.url}${path}`;

const galleryImages = galleryMedia
  .filter((item): item is Extract<GalleryMedia, { type: "image" }> => item.type === "image")
  .map((item) => item.src);

const galleryVideoItems = galleryMedia.filter(
  (item): item is Extract<GalleryMedia, { type: "video" }> => item.type === "video"
);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: StaticRoute[] = [
    {
      path: "/",
      priority: 1,
      changeFrequency: "weekly",
      images: ["/images/logo.png"],
    },
    { path: "/courses", priority: 0.8, changeFrequency: "monthly" },
    {
      path: "/teacher",
      priority: 0.6,
      changeFrequency: "monthly",
      images: ["/images/tanuja-singh.jpg", "/images/teacher-banner.jpg"],
    },
    {
      path: "/gallery",
      priority: 0.5,
      changeFrequency: "monthly",
      images: [...galleryImages, ...galleryVideoItems.map((item) => item.poster)],
      videos: galleryVideoItems.map((item) => ({
        title: item.alt,
        description: item.alt,
        thumbnail_loc: abs(item.poster),
        content_loc: abs(item.src),
      })),
    },
    { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
    { path: "/resources", priority: 0.7, changeFrequency: "weekly" },
    { path: "/resources/notes", priority: 0.7, changeFrequency: "weekly" },
    { path: "/resources/posts", priority: 0.7, changeFrequency: "daily" },
    {
      path: "/resources/current-affairs",
      priority: 0.9,
      changeFrequency: "daily",
    },
  ];

  const [posts, currentAffairs] = await Promise.all([
    getPosts(),
    getCurrentAffairs(),
  ]);

  const postRoutes: StaticRoute[] = posts.map((post) => ({
    path: `/resources/posts/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly",
    images: post.coverImageUrl ? [resolveFileUrl(post.coverImageUrl)] : undefined,
  }));

  const currentAffairRoutes: StaticRoute[] = currentAffairs.map((item) => ({
    path: `/resources/current-affairs/${item.slug}`,
    priority: 0.7,
    changeFrequency: "monthly",
    images: item.coverImageUrl ? [resolveFileUrl(item.coverImageUrl)] : undefined,
  }));

  return [...staticRoutes, ...postRoutes, ...currentAffairRoutes].map(
    (route) => ({
      url: abs(route.path),
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      images: route.images?.map((img) =>
        img.startsWith("http") ? img : abs(img)
      ),
      videos: route.videos,
    })
  );
}
