"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

// Featured: projects with images, in display order
const featured = projects.filter((p) => p.images && p.images.length > 0).slice(0, 3);

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-").slice(0, 40);
}

export default function ProjectHighlights() {
  return (
    <section className="border-t rule">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 pt-16 sm:pt-24 pb-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)] mb-4">
              Selected work
            </p>
            <h2 className="serif text-3xl sm:text-5xl leading-[1.05] tracking-[-0.02em]">
              My past projects.
            </h2>
          </div>
          <Link
            href="/projects"
            className="mono text-[11px] uppercase tracking-[0.2em] link"
          >
            See all {projects.length} projects →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 pb-20 sm:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/projects#${slugify(p.title)}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--rule)]">
                  <Image
                    src={p.cover ?? p.images![0].src}
                    alt={p.images![0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={82}
                    className="object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/0" />
                  <div className="absolute top-3 left-3 mono text-[10px] uppercase tracking-[0.2em] text-white/85">
                    {p.year}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="serif text-xl sm:text-2xl leading-tight tracking-[-0.01em]">
                      {p.title}
                    </p>
                    <p className="mt-2 text-[13px] leading-snug text-white/85 line-clamp-3">
                      {p.tagline}
                    </p>
                    <span className="inline-block mt-3 mono text-[10px] uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
