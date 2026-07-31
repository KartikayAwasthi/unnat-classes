import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

export function renderMarkdown(paragraphs: string[]): string {
  const raw = marked.parse(paragraphs.join("\n\n"), { breaks: true, async: false }) as string;
  return sanitizeHtml(raw, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title", "width", "height"],
    },
  });
}
