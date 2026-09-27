"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import Button from "./ui/Button";
import EnquiryForm from "./EnquiryForm";
import { useEnquiry } from "./EnquiryProvider";
import { EASE } from "@/lib/utils";
import { images } from "@/data/images";

const SLIDES = [
  { src: images.hero, alt: "Contemporary living room with warm timber panelling", title: "Beautifully Designed.", accent: "Expertly Crafted." },
  { src: images.kitchen, alt: "Modular kitchen with handle-less cabinets", title: "Kitchens That Work.", accent: "Made To Measure." },
  { src: images.bedroomSuite, alt: "Calm bedroom with a panelled headboard wall", title: "Rooms To Unwind In.", accent: "Built In Our Factory." },
];
const INTERVAL = 6000;

// Full-screen crossfading slider. A strong left-to-right and top/bottom dark
// gradient keeps the white text readable on every photo. On large screens a
// "request a callback" card sits beside the headline.
export default function Hero() {
  const ref = useRef(null);
  const { openEnquiry } = useEnquiry();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  const go = useCallback((dir) => setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, paused, go]);

  const slide = SLIDES[index];

  return (
    <section
      ref={ref}
      aria-roledescription="carousel"
      aria-label="Featured interiors"
      className="relative h-[100svh] min-h-[600px] overflow-hidden bg-night text-[#f1f2f4]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
        {/* All slides stay mounted (and loaded) so switching never flashes black. */}
        {SLIDES.map((s, i) => (
          <motion.div
            key={s.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.06 }}
            transition={{ opacity: { duration: 1.1, ease: "easeInOut" }, scale: { duration: i === index ? 6.5 : 1.1, ease: "linear" } }}
            aria-hidden={i !== index}
          >
            <Image src={s.src} alt={s.alt} fill priority={i === 0} loading={i === 0 ? undefined : "eager"} sizes="100vw" className="object-cover" />
          </motion.div>
        ))}
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.78)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0.2)_100%),linear-gradient(180deg,rgba(0,0,0,0.55)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.65)_100%)]"
      />

      <div className="container-x relative z-10 grid h-full items-end pb-24 md:items-center md:pb-0 lg:grid-cols-12 lg:gap-10">
       <div className="lg:col-span-7">
        <motion.p
          className="eyebrow mb-5 text-[#f1f2f4]/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Luxury Interiors · Own Modular Factory · Hyderabad
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.h1
            key={slide.title}
            className="max-w-3xl font-serif text-display lg:text-[clamp(3rem,4.4vw,4.4rem)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
            initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {slide.title}
            <br />
            <em className="text-gold-soft">{slide.accent}</em>
          </motion.h1>
        </AnimatePresence>

        <motion.p
          className="mt-6 max-w-md text-base leading-relaxed text-[#f1f2f4]/85 md:text-lg"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
        >
          Bespoke interiors, designed around your life and built in our own factory in Neopolis–Kokapet.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
        >
          <Button variant="gold" onClick={openEnquiry}>Get a Free Quote</Button>
          <Button href="/projects" variant="outlineLight">View Our Projects</Button>
        </motion.div>
        <motion.p
          className="mt-8 flex items-center gap-2 text-sm text-[#f1f2f4]/85"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          <BadgeCheck aria-hidden="true" strokeWidth={1.75} className="size-5 text-gold-soft" />
          200+ homes completed across Hyderabad
        </motion.p>
       </div>

        <motion.div
          className="hidden rounded-3xl border border-white/12 bg-black/55 p-7 text-[#f1f2f4] shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-md lg:col-span-5 lg:block xl:col-span-4 xl:col-start-9"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.8 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-soft">Free design consultation</p>
          <h2 className="mt-2 text-2xl font-bold">Request a callback</h2>
          <p className="mt-1 text-sm text-[#f1f2f4]/70">Our designer calls you within one working day.</p>
          <div className="mt-5">
            <EnquiryForm compact dark source="Hero callback card" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-0 right-0 z-10">
        <div className="container-x flex items-center justify-between gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Choose slide">
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className="grid h-6 place-items-center"
              >
                <span className={i === index ? "block h-1 w-8 rounded-full bg-gold" : "block h-1 w-4 rounded-full bg-white/45"} />
              </button>
            ))}
          </div>
          <div className="hidden gap-3 sm:flex">
            {[
              { dir: -1, Icon: ChevronLeft, label: "Previous slide" },
              { dir: 1, Icon: ChevronRight, label: "Next slide" },
            ].map(({ dir, Icon, label }) => (
              <button
                key={dir}
                type="button"
                onClick={() => go(dir)}
                aria-label={label}
                className="grid size-12 place-items-center rounded-full border border-white/30 bg-black/30 text-white backdrop-blur-sm transition-colors hover:border-gold hover:bg-gold"
              >
                <Icon aria-hidden="true" strokeWidth={1.75} className="size-5" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
