"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

export default function AlbumMasonry({
  photos,
  albumName,
}: {
  photos: string[];
  albumName: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const go = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? i : (i + delta + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close, go]);

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 [column-fill:_balance]">
        {photos.map((src, idx) => (
          <motion.button
            key={src}
            type="button"
            onClick={() => setOpenIndex(idx)}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.6,
              delay: (idx % 9) * 0.03,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative w-full mb-3 sm:mb-4 break-inside-avoid overflow-hidden bg-[color:var(--rule)] block"
            aria-label={`Open photo ${idx + 1}`}
          >
            <Image
              src={src}
              alt=""
              width={1200}
              height={1500}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={80}
              className="w-full h-auto object-cover transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex flex-col"
            onClick={close}
          >
            <div className="flex items-center justify-between px-6 py-4 text-white/90">
              <span className="mono text-[11px] uppercase tracking-[0.2em]">
                {albumName} · {openIndex + 1} / {photos.length}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                className="mono text-[11px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
              >
                Close ✕
              </button>
            </div>

            <div
              className="relative flex-1 flex items-center justify-center px-4 sm:px-12 pb-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl sm:text-4xl w-10 h-10 flex items-center justify-center"
                aria-label="Previous"
              >
                ←
              </button>

              <motion.div
                key={openIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center"
              >
                <Image
                  src={photos[openIndex]}
                  alt=""
                  fill
                  sizes="100vw"
                  quality={92}
                  priority
                  className="object-contain"
                />
              </motion.div>

              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl sm:text-4xl w-10 h-10 flex items-center justify-center"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
