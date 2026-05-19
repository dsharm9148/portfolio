import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "blogs");

export type BlogFrontmatter = {
  title: string;
  date: string;
  image?: string;
  excerpt?: string;
};

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
  raw: string;
};

function listFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
}

export function getAllPostsMeta(): BlogPostMeta[] {
  const posts = listFiles().map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      image: data.image as string | undefined,
      excerpt: data.excerpt as string | undefined,
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(html, { sanitize: false })
    .process(content);

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    image: data.image as string | undefined,
    excerpt: data.excerpt as string | undefined,
    contentHtml: processed.toString(),
    raw: content,
  };
}

export function getAllSlugs(): string[] {
  return listFiles().map((f) => f.replace(/\.md$/, ""));
}
