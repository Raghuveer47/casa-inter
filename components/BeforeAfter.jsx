"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./ui/Reveal";
import SectionHeading from "./ui/SectionHeading";
import { designToReality } from "@/data/interiors";
import { differentiators } from "@/data/brand";
import { cn, EASE } from "@/lib/utils";

function CompareSlider({ item }) {
  const containerRef = useRef(null);
  const dragging = useRef(false);
  const pos = useMotionValue(50); // percentage of the "before" image that is visible
  const [ariaValue, setAriaValue] = useState(50);
  const inView = useInView(containerRef, { once: true, margin: "0px 0px -25% 0px" });

  const clipPath = useTransform(pos, (p) => `inset(0 ${100 - p}% 0 0)`);
  const left = useTransform(pos, (p) => `${p}%`);
  useMotionValueEvent(pos, "change", (p) => setAriaValue(Math.round(p)));

  // A gentle hint that the image can be dragged, played once on first view.
  useEffect(() => {
    if (!inView) return;
    const controls = animate(pos, [50, 32, 66, 50], { duration: 2.2, ease: "easeInOut", delay: 0.4 });
    return () => controls.stop();
  }, [inView, pos]);

  function setFromClientX(clientX) {
    const rect = containerRef.current.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    pos.stop();
    pos.set(Math.min(100, Math.max(0, p)));
  }

  function onPointerDown(e) {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromClientX(e.clientX);
  }
  function onPointerMove(e) {
    if (dragging.current) setFromClientX(e.clientX);
  }
  function endDrag() {
    dragging.current = false;
  }

  function onKeyDown(e) {
    const step = e.shiftKey ? 10 : 2;
    const current = pos.get();
    let next = null;
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") next = current - step;
    if (e.key === "ArrowRight" || e.key === "ArrowUp") next = current + step;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = 100;
    if (next === null) return;
    e.preventDefault();
    pos.stop();
    animate(pos, Math.min(100, Math.max(0, next)), { duration: 0.25, ease: EASE });
  }

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/5] cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-3xl bg-charcoal sm:aspect-[4/3] md:aspect-[16/9]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <Image
        src={item.after}
        alt={`${item.room} after — finished CasaArt interior`}
        fill
        sizes="(min-width: 1600px) 1500px, 100vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <motion.div className="absolute inset-0" style={{ clipPath }}>
        <Image
          src={item.before}
          alt={`${item.room} before — bare shell`}
          fill
          sizes="(min-width: 1600px) 1500px, 100vw"
          className="pointer-events-none object-cover"
          draggable={false}
        />
      </motion.div>

      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-xs font-semibold text-[#f2ebdf] backdrop-blur-sm md:left-6 md:top-6">Before · Bare Shell</span>
      <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-gold px-4 py-2 text-xs font-semibold text-on-accent backdrop-blur-sm md:bottom-6 md:right-6">After · CasaArt</span>

      <motion.div className="pointer-events-none absolute inset-y-0 -ml-px w-0.5 bg-[#f2ebdf]" style={{ left }} aria-hidden="true" />
      <motion.div
        role="slider"
        tabIndex={0}
        aria-label={`Compare ${item.room} before and after`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={ariaValue}
        aria-valuetext={`${ariaValue}% before`}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#f2ebdf] text-[#060505] shadow-[0_8px_30px_rgba(0,0,0,0.25)] focus-visible:outline-cream md:size-16"
        style={{ left }}
      >
        <span className="flex items-center" aria-hidden="true">
          <ChevronLeft strokeWidth={1.5} className="size-4" />
          <ChevronRight strokeWidth={1.5} className="size-4" />
        </span>
      </motion.div>
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const item = designToReality[active];

  return (
    <section aria-labelledby="transform-title" className="theme-light section-y">
      <div className="container-x">
        <SectionHeading
          id="transform-title"
          eyebrow="The CasaArt difference"
          lines={["Designed Here.", <em key="e" className="text-earth">Built Here.</em>]}
          intro="Because we own the factory, what you approve in 3D is exactly what we build. Drag the handle to see a bare shell become a finished home."
        />
        <ul className="mx-auto mt-12 grid max-w-5xl gap-6 text-center sm:grid-cols-3">
          {differentiators.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 0.08} className="rounded-3xl bg-ivory p-6">
              <h3 className="text-lg font-semibold">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={0.1}>
          <div role="tablist" aria-label="Choose a project" className="mt-10 flex flex-wrap justify-center gap-2">
            {designToReality.map((b, i) => (
              <button
                key={b.room}
                role="tab"
                type="button"
                aria-selected={active === i}
                onClick={() => setActive(i)}
                className={cn(
                  "min-h-11 rounded-full border px-5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors duration-500",
                  active === i ? "border-gold bg-gold text-on-accent" : "border-cream/20 text-cream/70 hover:border-gold hover:text-cream"
                )}
              >
                {b.room}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-6xl" y={40}>
          <CompareSlider key={item.room} item={item} />
          <div className="mt-5 flex justify-between text-sm text-muted">
            <span>{item.room}</span>
            <span>{item.project}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
