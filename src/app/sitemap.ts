import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";
import { getCurrentAffairs, getPosts } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: Array<{
    path: string;
    priority: number;
    changeFrequency: "daily" | "weekly" | "monthly";
  }> = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/courses", priority: 0.8, changeFrequency: "monthly" },
    { path: "/teacher", priority: 0.6, changeFrequency: "monthly" },
    { path: "/gallery", priority: 0.5, changeFrequency: "monthly" },
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

  const postRoutes = posts.map((post) => ({
    path: `/resources/posts/${post.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
  }));

  const currentAffairRoutes = currentAffairs.map((item) => ({
    path: `/resources/current-affairs/${item.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...postRoutes, ...currentAffairRoutes].map(
    (route) => ({
      url: `${SITE.url}${route.path}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })
  );
}
