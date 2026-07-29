import { marked } from "marked";
import DOMPurify from "isomorphic-dompurify";

export function renderMarkdown(paragraphs: string[]): string {
  const raw = marked.parse(paragraphs.join("\n\n"), { breaks: true, async: false }) as string;
  return DOMPurify.sanitize(raw);
}
