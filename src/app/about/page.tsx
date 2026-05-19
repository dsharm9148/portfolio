import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Diya Sharma",
  description:
    "Computer science at Georgia Tech with a biology minor and global engagement certificate.",
};

const facts = [
  [
    "Studying",
    "CS (AI + HCI) · Biology minor · Global Engagement Certificate",
  ],
  ["School", "Georgia Tech (rising 4th year)"],
  ["Based in", "Atlanta, GA"],
  [
    "Recently",
    "Applied Machine Learning co-op · WHOOP (Women's Health team)",
  ],
  [
    "Previously",
    "GT BITN Lab (applied ML research) · UMD Blanpied Lab (data science) · Johns Hopkins APL (mechanical engineering)",
  ],
];

export default function AboutPage() {
  return (
    <article className="pt-20 sm:pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)] mb-6">
            About
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="serif text-5xl sm:text-7xl leading-[1.02] tracking-[-0.02em] max-w-[14ch]">
            A little about me.
          </h1>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
          <aside className="md:col-span-5 order-2 md:order-1">
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/5] w-full max-w-[460px] bg-[color:var(--rule)] overflow-hidden">
                <Image
                  src="/headshot.jpg"
                  alt="Diya Sharma"
                  fill
                  sizes="(max-width: 768px) 90vw, 460px"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <dl className="mt-10 space-y-4 mono text-[11px] uppercase tracking-[0.2em]">
                {facts.map(([k, v]) => (
                  <div key={k} className="border-t rule pt-3">
                    <dt className="text-[color:var(--muted)] mb-1">{k}</dt>
                    <dd className="text-[color:var(--foreground)] normal-case tracking-normal text-sm">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

          </aside>

          <div className="md:col-span-7 order-1 md:order-2 space-y-8">
            <Reveal delay={0.15}>
              <p className="serif text-2xl sm:text-3xl leading-snug text-[color:var(--foreground)]/90">
                I&rsquo;m a rising fourth-year at Georgia Tech studying
                Computer Science, with concentrations in Artificial
                Intelligence and Human-Computer Interaction. I&rsquo;m also
                pursuing a Biology minor and a Global Engagement certificate.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-[color:var(--foreground)]/80">
                I&rsquo;m especially interested in work at the intersection
                of technology and health. Most recently, I was an Applied
                Machine Learning co-op on the Women&rsquo;s Health team at
                WHOOP, where I worked with large-scale health data and got
                to build more user-facing, production-level tools and
                features. Before that, I did applied ML research at Georgia
                Tech, worked in data science at the UMD Blanpied Lab on
                synaptic imaging research, and completed a mechanical
                engineering internship at the Johns Hopkins University
                Applied Physics Laboratory designing an electronic sensor
                for mass casualty response scenarios.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="text-lg leading-relaxed text-[color:var(--foreground)]/80">
                Outside of work and school, I love anything sports and
                outdoors — from surfing to skydiving. Through my Global
                Engagement certificate, I&rsquo;ve had the chance to study
                and travel across multiple continents, which inspired much
                of the photography featured on this site.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="border-t rule pt-8 mt-4">
                <p className="mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--muted)] mb-3">
                  Get in touch
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="serif text-2xl sm:text-3xl link"
                >
                  {site.email}
                </a>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 mono text-[11px] uppercase tracking-[0.2em]">
                  <a
                    className="link"
                    href={site.links.resume}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Résumé ↗
                  </a>
                  <a
                    className="link"
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn ↗
                  </a>
                  <a
                    className="link"
                    href={site.links.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>
                  <a className="link" href={site.links.photos}>
                    Photography →
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </article>
  );
}
