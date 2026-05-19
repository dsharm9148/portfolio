import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import ProjectGallery from "@/components/ProjectGallery";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects — Diya Sharma",
  description: "Selected software, research, and hardware projects.",
};

export default function ProjectsPage() {
  return (
    <article className="pt-20 sm:pt-28">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)] mb-6">
            Projects · {projects.length} entries
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="serif text-5xl sm:text-7xl leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
            Selected work.
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 text-sm text-[color:var(--muted)] mono uppercase tracking-[0.18em]">
            Ongoing research first · completed work below
          </p>
        </Reveal>
      </div>

      <div className="mt-16 sm:mt-24">
        {projects.map((p) => (
          <section
            key={p.num}
            className="border-t rule"
            id={p.title.toLowerCase().replace(/\s+/g, "-").slice(0, 40)}
          >
            <div className="mx-auto max-w-6xl px-6 sm:px-10 py-14 sm:py-20">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <div className="md:col-span-3">
                  <Reveal>
                    <p className="mono text-xs text-[color:var(--muted)]">
                      {p.num} / {String(projects.length).padStart(2, "0")}
                    </p>
                    <p className="mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] mt-4">
                      {p.year}
                    </p>
                    <p className="mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--muted)] mt-2">
                      {p.role}
                    </p>
                  </Reveal>
                </div>

                <div className="md:col-span-9">
                  <Reveal delay={0.05}>
                    <h2 className="serif text-3xl sm:text-5xl leading-[1.02] tracking-[-0.02em]">
                      {p.title}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.1}>
                    <p className="mt-5 text-lg sm:text-xl text-[color:var(--foreground)]/80 max-w-[58ch]">
                      {p.tagline}
                    </p>
                  </Reveal>

                  <ul className="mt-6 space-y-2.5 max-w-[62ch]">
                    {p.description.map((bullet, idx) => (
                      <Reveal key={idx} delay={0.15 + idx * 0.04}>
                        <li className="relative pl-5 text-base leading-relaxed text-[color:var(--foreground)]/80 before:content-['—'] before:absolute before:left-0 before:top-0 before:text-[color:var(--muted)]">
                          {bullet}
                        </li>
                      </Reveal>
                    ))}
                  </ul>

                  <Reveal delay={0.3}>
                    <ul className="mt-8 flex flex-wrap gap-x-2 gap-y-2 mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--muted)]">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="px-2 py-1 border rule rounded-sm"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </Reveal>

                  {p.links.length > 0 && (
                    <Reveal delay={0.35}>
                      <div className="mt-8 flex flex-wrap gap-6 mono text-[11px] uppercase tracking-[0.2em]">
                        {p.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="link"
                          >
                            {l.label} ↗
                          </a>
                        ))}
                      </div>
                    </Reveal>
                  )}

                  {p.images && p.images.length > 0 && (
                    <ProjectGallery
                      images={p.images}
                      layout={p.imageLayout ?? "gallery"}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}
        <div className="border-t rule" />
      </div>
    </article>
  );
}
