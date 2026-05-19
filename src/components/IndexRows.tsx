"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

type Row = {
  num: string;
  label: string;
  meta: string;
  href: string;
  external?: boolean;
};

const rows: Row[] = [
  { num: "01", label: "About", meta: "The long version", href: "/about" },
  {
    num: "02",
    label: "Projects",
    meta: "Selected work, 2024 – present",
    href: "/projects",
  },
  {
    num: "03",
    label: "Résumé",
    meta: "PDF · download",
    href: site.links.resume,
    external: true,
  },
  {
    num: "04",
    label: "Blog",
    meta: "Essays + Technique stories",
    href: "/blog",
  },
  {
    num: "05",
    label: "Photography & Travel",
    meta: "From the road",
    href: "/photos",
  },
];

export default function IndexRows() {
  return (
    <section className="border-t rule">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-6">
        <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)] py-3">
          Explore
        </p>
      </div>
      <ul>
        {rows.map((row, i) => {
          const inner = (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: i * 0.04,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border-t rule"
            >
              <div className="mx-auto max-w-6xl px-6 sm:px-10 py-5 sm:py-6 flex items-baseline gap-6 sm:gap-10 transition-colors group-hover:bg-[color:var(--foreground)] group-hover:text-[color:var(--background)]">
                <span className="mono text-xs text-[color:var(--muted)] group-hover:text-[color:var(--background)]/60 w-10 shrink-0">
                  {row.num}
                </span>
                <span className="serif text-2xl sm:text-3xl md:text-4xl leading-none flex-1">
                  {row.label}
                </span>
                <span className="hidden sm:block mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] group-hover:text-[color:var(--background)]/70">
                  {row.meta}
                </span>
                <span className="mono text-base translate-x-0 group-hover:translate-x-2 transition-transform">
                  {row.external ? "↗" : "→"}
                </span>
              </div>
            </motion.div>
          );

          return (
            <li key={row.num}>
              {row.external ? (
                <a href={row.href} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <Link href={row.href}>{inner}</Link>
              )}
            </li>
          );
        })}
        <li className="border-t rule" />
      </ul>
    </section>
  );
}
