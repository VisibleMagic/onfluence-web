export function stripMarkdown(markdown: string): string {
  if (!markdown) return "";
  let text = markdown;
  // Remove code blocks and inline code
  text = text.replace(/```[\s\S]*?```/g, " ");
  text = text.replace(/`[^`]*`/g, " ");
  // Images ![alt](url) -> alt
  text = text.replace(/!\[([^\]]*)\]\([^\)]*\)/g, "$1");
  // Links [text](url) -> text
  text = text.replace(/\[([^\]]+)\]\([^\)]*\)/g, "$1");
  // Headings, blockquotes, lists markers
  text = text.replace(/^\s{0,3}[>#*-]+\s*/gm, "");
  // Emphasis/bold
  text = text.replace(/([*_]{1,3})(\S.*?\S?)\1/g, "$2");
  // Remove remaining markdown artifacts
  text = text.replace(/\!|\*|_|~|\#/g, "");
  // Collapse whitespace
  text = text.replace(/\s+/g, " ").trim();
  return text;
}

export function getExcerpt(text: string, maxLength = 220): string {
  const clean = text.trim();
  if (clean.length <= maxLength) return clean;
  const slice = clean.slice(0, maxLength);
  const lastSpace = slice.lastIndexOf(" ");
  const safe = lastSpace > 140 ? slice.slice(0, lastSpace) : slice;
  return `${safe}\u2026`;
}

export function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}


