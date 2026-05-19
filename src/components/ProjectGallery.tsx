"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/lib/projects";

type Props = {
  images: ProjectImage[];
  layout?: "gallery" | "feature";
};

export default function ProjectGallery({ images, layout = "gallery" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  const go = useCallback(
    (delta: number) => {
      setOpenIndex((i) => {
        if (i === null) return i;
        const n = images.length;
        return (i + delta + n) % n;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, go]);

  if (!images || images.length === 0) return null;

  const isFeature = layout === "feature" && images.length === 1;

  return (
    <>
      <div className="mt-10">
        <p className="mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--muted)] mb-4">
          Gallery · {images.length} {images.length === 1 ? "image" : "images"} · click to expand
        </p>
        <div
          className={
            isFeature
              ? "max-w-[340px]"
              : "grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
          }
        >
          {images.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setOpenIndex(idx)}
              className={`group relative block w-full bg-[color:var(--rule)] overflow-hidden ${
                isFeature ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
              aria-label={`Open image ${idx + 1}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes={isFeature ? "(max-width: 768px) 90vw, 340px" : "(max-width: 768px) 50vw, 33vw"}
                quality={85}
                className={`${
                  isFeature ? "object-contain" : "object-cover"
                } transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
              <span className="absolute bottom-2 right-2 mono text-[9px] uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                Expand ⤢
              </span>
            </button>
          ))}
        </div>
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
                {openIndex + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  close();
                }}
                className="mono text-[11px] uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                aria-label="Close gallery"
              >
                Close ✕
              </button>
            </div>

            <div
              className="relative flex-1 flex items-center justify-center px-4 sm:px-12 pb-12"
              onClick={(e) => e.stopPropagation()}
            >
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl sm:text-4xl w-10 h-10 flex items-center justify-center"
                  aria-label="Previous image"
                >
                  ←
                </button>
              )}

              <motion.div
                key={openIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full h-full max-w-6xl max-h-full flex items-center justify-center"
              >
                <Image
                  src={images[openIndex].src}
                  alt={images[openIndex].alt}
                  fill
                  sizes="100vw"
                  quality={95}
                  priority
                  className="object-contain"
                />
              </motion.div>

              {images.length > 1 && (
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white text-3xl sm:text-4xl w-10 h-10 flex items-center justify-center"
                  aria-label="Next image"
                >
                  →
                </button>
              )}
            </div>

            <p className="text-white/70 mono text-[11px] uppercase tracking-[0.2em] text-center pb-6 px-6">
              {images[openIndex].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
