// lib/blogs.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  content: string;
}

const blogsDirectory = path.join(process.cwd(), "blogs");

export function getAllBlogSlugs(): string[] {
  return fs.readdirSync(blogsDirectory).map(file => file.replace(/\.md$/, ""));
}

export function getBlogBySlug(slug: string): BlogPost {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    image: data.image,
    content, // still raw markdown
  };
}

export async function getBlogContentAsHtml(slug: string): Promise<BlogPost> {
  const blog = getBlogBySlug(slug);
  const contentHtml = await remark().use(html).process(blog.content);
  return { ...blog, content: contentHtml.toString() };
}

export function getAllBlogsMetadata(): BlogPost[] {
  return getAllBlogSlugs().map(slug => getBlogBySlug(slug));
}
