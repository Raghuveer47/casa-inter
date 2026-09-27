"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Full-screen viewer with keyboard (← → Esc) and swipe support.
function Lightbox({ photos, index, onClose, onIndex }) {
  const photo = photos[index];
  const prev = useCallback(() => onIndex((index - 1 + photos.length) % photos.length), [index, photos.length, onIndex]);
  const next = useCallback(() => onIndex((index + 1) % photos.length), [index, photos.length, onIndex]);

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose, prev, next]);

  const [touchX, setTouchX] = useState(null);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[70] flex flex-col bg-night/95 text-cream"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div className="container-x flex h-16 shrink-0 items-center justify-between">
        <p className="eyebrow text-cream/60">
          {index + 1} / {photos.length}
          {photo.project && <span className="ml-3 hidden normal-case tracking-normal sm:inline">— {photo.project}</span>}
        </p>
        <button type="button" onClick={onClose} autoFocus className="-mr-2 grid size-11 place-items-center" aria-label="Close photo viewer">
          <X strokeWidth={1.25} className="size-6" />
        </button>
      </div>

      <div
        className="relative flex-1"
        onTouchStart={(e) => setTouchX(e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX === null) return;
          const dx = e.changedTouches[0].clientX - touchX;
          if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
          setTouchX(null);
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={photo.src} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
            <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-contain" />
          </motion.div>
        </AnimatePresence>
        <button type="button" onClick={prev} aria-label="Previous photo" className="absolute left-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center border border-cream/25 bg-night/40 hover:bg-night/70 md:left-6">
          <ChevronLeft strokeWidth={1.25} className="size-6" />
        </button>
        <button type="button" onClick={next} aria-label="Next photo" className="absolute right-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center border border-cream/25 bg-night/40 hover:bg-night/70 md:right-6">
          <ChevronRight strokeWidth={1.25} className="size-6" />
        </button>
      </div>

      <div className="container-x flex h-20 shrink-0 items-center justify-center">
        {photo.slug && (
          <Link href={`/projects/${photo.slug}`} onClick={onClose} className="eyebrow border-b border-gold-soft pb-1 text-gold-soft hover:text-cream">
            View project
          </Link>
        )}
      </div>
    </motion.div>
  );
}

// Masonry-style photo grid; each photo opens the lightbox.
// `photos`: [{ src, alt, project?, slug? }]
export default function GalleryGrid({ photos, filters }) {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState(null);
  const shown = filter === "All" || !filters ? photos : photos.filter((p) => p.tags?.includes(filter));

  return (
    <div>
      {filters && (
        <div role="group" aria-label="Filter photos" className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "min-h-11 border px-5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors duration-300",
                filter === f ? "border-gold bg-gold text-on-accent" : "border-cream/20 text-cream/70 hover:border-gold hover:text-cream"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      )}

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>li]:mb-4">
        {shown.map((photo, i) => (
          <li key={photo.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpen(i)}
              className={cn("group relative block w-full overflow-hidden bg-sand", i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square")}
              aria-label={`Open photo: ${photo.alt}`}
            >
              <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.05]" />
              <span className="absolute inset-0 bg-night/0 transition-colors duration-500 group-hover:bg-night/30" />
              <Expand aria-hidden="true" strokeWidth={1.25} className="absolute right-4 top-4 size-5 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              {photo.project && (
                <span className="eyebrow absolute bottom-4 left-4 text-cream opacity-0 transition-opacity duration-500 group-hover:opacity-100">{photo.project}</span>
              )}
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>{open !== null && shown[open] && <Lightbox photos={shown} index={open} onIndex={setOpen} onClose={() => setOpen(null)} />}</AnimatePresence>
    </div>
  );
}
