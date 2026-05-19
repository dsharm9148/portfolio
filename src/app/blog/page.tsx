import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { getAllPostsMeta } from "@/lib/blog";
import { techniqueArticles } from "@/lib/technique";

export const metadata: Metadata = {
  title: "Blog — Diya Sharma",
  description:
    "Personal essays and reportage — sports, photography, and travel.",
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = getAllPostsMeta();
  const technique = [...techniqueArticles].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    <article className="pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)] mb-6">
            Writing · {posts.length} essays · {technique.length} Technique pieces
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="serif text-5xl sm:text-7xl leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
            Blog.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-[color:var(--foreground)]/80">
            Personal posts about sports, photography, and travel — plus a
            running list of sports stories I&rsquo;ve written for{" "}
            <a
              className="link"
              href="https://nique.net"
              target="_blank"
              rel="noreferrer"
            >
              The Technique
            </a>
            , Georgia Tech&rsquo;s student newspaper.
          </p>
        </Reveal>
      </div>

      {/* Personal posts */}
      <section className="mt-16 sm:mt-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 mb-8">
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">
            Essays
          </p>
        </div>

        <ul>
          {posts.map((post, idx) => (
            <li key={post.slug} className="border-t rule">
              <Link href={`/blog/${post.slug}`} className="group block">
                <Reveal delay={idx * 0.03}>
                  <div className="mx-auto max-w-6xl px-6 sm:px-10 py-8 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-center transition-colors group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)]">
                    <div className="md:col-span-3 mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] group-hover:text-[color:var(--background)]/70">
                      {formatDate(post.date)}
                    </div>
                    <div className="md:col-span-7">
                      <h2 className="serif text-2xl sm:text-3xl leading-tight tracking-[-0.01em]">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="mt-2 text-sm sm:text-base text-[color:var(--foreground)]/70 group-hover:text-[color:var(--background)]/70 max-w-[58ch]">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2 flex items-center justify-end gap-4">
                      {post.image && (
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-sm bg-[color:var(--rule)]">
                          <Image
                            src={post.image}
                            alt=""
                            fill
                            sizes="80px"
                            className="object-cover"
                          />
                        </div>
                      )}
                      <span className="mono text-base group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </Reveal>
              </Link>
            </li>
          ))}
          <li className="border-t rule" />
        </ul>
      </section>

      {/* Technique articles */}
      <section className="mt-20 sm:mt-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 mb-8">
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)]">
            For The Technique
          </p>
        </div>

        <ul>
          {technique.map((article, idx) => (
            <li key={article.url} className="border-t rule">
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <Reveal delay={idx * 0.02}>
                  <div className="mx-auto max-w-6xl px-6 sm:px-10 py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)]">
                    <div className="md:col-span-3 mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] group-hover:text-[color:var(--background)]/70">
                      {formatDate(article.date)}
                    </div>
                    <div className="md:col-span-8">
                      <h3 className="serif text-xl sm:text-2xl leading-snug">
                        {article.title}
                      </h3>
                      <p className="mt-1 text-sm text-[color:var(--foreground)]/65 group-hover:text-[color:var(--background)]/70 max-w-[62ch]">
                        {article.excerpt}
                      </p>
                    </div>
                    <div className="md:col-span-1 flex items-center justify-end">
                      <span className="mono text-base group-hover:translate-x-1 transition-transform">
                        ↗
                      </span>
                    </div>
                  </div>
                </Reveal>
              </a>
            </li>
          ))}
          <li className="border-t rule" />
        </ul>
      </section>
    </article>
  );
}
