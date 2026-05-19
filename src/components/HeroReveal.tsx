"use client";

import { motion } from "framer-motion";
import MagneticHeadshot from "@/components/MagneticHeadshot";

export default function HeroReveal() {
  return (
    <section className="relative pt-20 sm:pt-28 pb-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="md:col-span-7"
        >
          <h1 className="serif text-[32px] sm:text-[44px] md:text-[54px] leading-[1.05] tracking-[-0.02em] max-w-[20ch]">
            Hi, I&rsquo;m Diya and welcome to my website.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-base sm:text-lg leading-relaxed text-[color:var(--foreground)]/75 max-w-[58ch]"
          >
            I&rsquo;m a rising fourth-year at Georgia Tech studying Computer
            Science. This is a place for my projects, my résumé, and a bit
            of my photography.
          </motion.p>
        </motion.div>

        <MagneticHeadshot />
      </div>
    </section>
  );
}
