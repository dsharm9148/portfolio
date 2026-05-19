"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { nav, site } from "@/lib/site";
import ScrambleText from "@/components/ScrambleText";

export default function Nav() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 backdrop-blur-md bg-[color:var(--background)]/70 border-b rule"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-10 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="serif text-lg tracking-tight"
          aria-label="Home"
        >
          <ScrambleText text={site.name} />
        </Link>

        <nav className="flex items-center gap-6 sm:gap-8 mono text-xs uppercase tracking-[0.18em]">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-1 transition-opacity hover:opacity-100"
                style={{ opacity: active ? 1 : 0.55 }}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-[1px] left-0 right-0 h-[1px] bg-current"
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
