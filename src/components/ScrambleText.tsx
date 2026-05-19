"use client";

import { useEffect, useRef, useState } from "react";

const GLYPHS = "abcdefghijklmnopqrstuvwxyz";

type Props = {
  text: string;
  className?: string;
  trigger?: "hover" | "mount";
  duration?: number;
};

/**
 * Scrambles text characters then settles to the real string.
 * On hover by default — used for the nav brand.
 */
export default function ScrambleText({
  text,
  className,
  trigger = "hover",
  duration = 600,
}: Props) {
  const [display, setDisplay] = useState(text);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number>(0);

  const run = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    startRef.current = performance.now();
    const step = (now: number) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(1, elapsed / duration);
      const revealCount = Math.floor(progress * text.length);
      let out = "";
      for (let i = 0; i < text.length; i++) {
        const ch = text[i];
        if (i < revealCount || ch === " ") {
          out += ch;
        } else {
          out += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }
      setDisplay(out);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(text);
      }
    };
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => {
    if (trigger === "mount") run();
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span
      className={className}
      onMouseEnter={trigger === "hover" ? run : undefined}
    >
      {display}
    </span>
  );
}
