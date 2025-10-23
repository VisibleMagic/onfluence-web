import fs from "fs";
import path from "path";
import { stripMarkdown, getExcerpt } from "@/app/blog/utils/markdown";

export type PostMeta = {
  slug: string;
  title: string;
  date: string; // ISO
  author: string;
  image: string;
  excerpt: string;
  categories: string[];
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readFileSafe(p: string): string | null {
  try {
    return fs.readFileSync(p, "utf8");
  } catch {
    return null;
  }
}

function parseFrontmatter(raw: string): {
  data: Record<string, string>;
  content: string;
} {
  if (!raw.startsWith("---")) {
    return { data: {}, content: raw };
  }
  const end = raw.indexOf("\n---", 3);
  if (end === -1) {
    return { data: {}, content: raw };
  }
  const fmBlock = raw.substring(3, end).trim();
  const content = raw.substring(end + 4).replace(/^\s*\n/, "");
  const data: Record<string, string> = {};
  for (const line of fmBlock.split(/\r?\n/)) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line
      .slice(idx + 1)
      .trim()
      .replace(/^"|"$/g, "")
      .replace(/^'|'$/g, "");
    if (key) data[key] = value;
  }
  return { data, content };
}

export async function getAllPostsMeta(): Promise<PostMeta[]> {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const entries = fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));
  const posts: PostMeta[] = [];
  for (const file of entries) {
    const full = path.join(BLOG_DIR, file);
    const raw = readFileSafe(full);
    if (!raw) continue;
    const { data, content } = parseFrontmatter(raw);
    const slug = file.replace(/\.(mdx|md)$/i, "");
    const title = data.title || slug;
    const date = data.date || new Date().toISOString();
    const author = data.author || "Unknown";
    const image = data.image || "/landing/what-we-do-1.jpg";
    const excerpt = data.excerpt || getExcerpt(stripMarkdown(content), 260);
    const categories = parseCategories(data.categories);
    posts.push({ slug, title, date, author, image, excerpt, categories });
  }
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export type Heading = { depth: number; text: string; id: string };

export async function getPostBySlug(
  slug: string
): Promise<{ meta: PostMeta; content: string; headings: Heading[] } | null> {
  const mdxPath = path.join(BLOG_DIR, `${slug}.mdx`);
  const mdPath = path.join(BLOG_DIR, `${slug}.md`);
  const raw = readFileSafe(mdxPath) ?? readFileSafe(mdPath);
  if (!raw) return null;
  const { data, content } = parseFrontmatter(raw);
  const title = data.title || slug;
  const date = data.date || new Date().toISOString();
  const author = data.author || "Unknown";
  const image = data.image || "/landing/what-we-do-1.jpg";
  const excerpt = data.excerpt || getExcerpt(stripMarkdown(content), 260);
  const categories = parseCategories(data.categories);
  const headings: Heading[] = [];
  const lines = content.split(/\r?\n/);
  for (const line of lines) {
    const m = /^(#{1,6})\s+(.*)/.exec(line.trim());
    if (!m) continue;
    const depth = m[1].length;
    const text = m[2].replace(/[#`*_~]/g, "").trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
    headings.push({ depth, text, id });
  }
  return {
    meta: { slug, title, date, author, image, excerpt, categories },
    content,
    headings,
  };
}

function parseCategories(raw: string | undefined): string[] {
  if (!raw) return [];
  const trimmed = raw.trim();
  // JSON array form
  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) return parsed.map((v) => String(v).trim()).filter(Boolean);
    } catch {}
  }
  // CSV form: "A, B, C"
  return trimmed
    .replace(/^\[|\]$/g, "")
    .split(/[,;\|]/)
    .map((s) => s.replace(/^"|"$/g, "").replace(/^'|'$/g, "").trim())
    .filter(Boolean);
}
