"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export default function MagneticHeadshot() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring for buttery follow.
  const sx = useSpring(x, { stiffness: 140, damping: 18 });
  const sy = useSpring(y, { stiffness: 140, damping: 18 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    // pull about 8% of distance from center, capped subtle
    x.set(dx * 0.08);
    y.set(dy * 0.08);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="md:col-span-5"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative aspect-[4/5] w-full max-w-[420px] mx-auto overflow-hidden bg-[color:var(--rule)]"
      >
        <motion.div
          style={{ x: sx, y: sy }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/headshot.jpg"
            alt="Diya Sharma"
            fill
            priority
            sizes="(max-width: 768px) 80vw, 420px"
            className="object-cover scale-[1.06]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
