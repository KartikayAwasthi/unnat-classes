import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicit allow rules for AI crawlers/assistants, so they can read
      // and cite the site (Google/Bing bots already covered by "*" above).
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
