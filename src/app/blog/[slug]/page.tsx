import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} — Diya Sharma`,
    description: post.excerpt,
  };
}

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="pt-20 sm:pt-28 pb-16">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <Link
          href="/blog"
          className="mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
        >
          ← All writing
        </Link>

        <p className="mt-10 mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">
          {formatDate(post.date)}
        </p>

        <h1 className="mt-4 serif text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
          {post.title}
        </h1>

        {post.excerpt && (
          <p className="mt-6 serif text-xl sm:text-2xl italic text-[color:var(--foreground)]/80 max-w-[55ch]">
            {post.excerpt}
          </p>
        )}

        {post.image && (
          <div className="relative w-full aspect-[3/2] mt-10 overflow-hidden bg-[color:var(--rule)]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div
          className="prose-blog mt-12"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        <hr className="border-t rule mt-16 mb-8" />
        <Link
          href="/blog"
          className="mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] hover:text-[color:var(--foreground)] transition-colors"
        >
          ← Back to all writing
        </Link>
      </div>
    </article>
  );
}
