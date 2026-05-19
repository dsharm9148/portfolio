"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t rule mt-32">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-6xl px-6 sm:px-10 pt-10 pb-6 text-center"
      >
        <p className="serif text-base sm:text-lg leading-snug tracking-tight text-[color:var(--foreground)]/80">
          Thanks for scrolling all the way down{" "}
          <span className="text-[color:var(--accent)]">:)</span>
        </p>
      </motion.div>

      <div className="border-t rule">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row gap-6 sm:items-end sm:justify-between">
          <div>
            <p className="serif text-xl">{site.name}</p>
            <p className="mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] mt-2">
              {site.location} · {year}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mono text-[11px] uppercase tracking-[0.2em]">
            <a className="link" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="link" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="link" href={site.links.resume} target="_blank" rel="noreferrer">
              Résumé
            </a>
            <a className="link" href={site.links.photos}>
              Photos
            </a>
            <a className="link" href={`mailto:${site.email}`}>
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
