"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LineReveal from "./ui/LineReveal";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import { beforeAfter } from "@/data/interiors";
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
      className="relative aspect-[4/5] cursor-ew-resize touch-pan-y select-none overflow-hidden bg-charcoal sm:aspect-[4/3] md:aspect-[16/9]"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <Image
        src={item.after}
        alt={`${item.room} after the CasaArt redesign`}
        fill
        sizes="(min-width: 1600px) 1500px, 100vw"
        className="pointer-events-none object-cover"
        draggable={false}
      />
      <motion.div className="absolute inset-0" style={{ clipPath }}>
        <Image
          src={item.before ?? item.after}
          alt={`${item.room} before the redesign`}
          fill
          sizes="(min-width: 1600px) 1500px, 100vw"
          className={cn("pointer-events-none object-cover", !item.before && "brightness-[0.78] contrast-[0.85] grayscale sepia-[0.25]")}
          draggable={false}
        />
      </motion.div>

      <span className="eyebrow pointer-events-none absolute left-4 top-4 bg-ink/70 px-3 py-2 text-paper backdrop-blur-sm md:left-6 md:top-6">Before</span>
      <span className="eyebrow pointer-events-none absolute right-4 top-4 bg-paper/85 px-3 py-2 text-ink backdrop-blur-sm md:right-6 md:top-6">After</span>

      <motion.div className="pointer-events-none absolute inset-y-0 -ml-px w-0.5 bg-paper" style={{ left }} aria-hidden="true" />
      <motion.div
        role="slider"
        tabIndex={0}
        aria-label={`Compare ${item.room} before and after`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={ariaValue}
        aria-valuetext={`${ariaValue}% before`}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-[0_8px_30px_rgba(0,0,0,0.25)] focus-visible:outline-paper md:size-16"
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
  const item = beforeAfter[active];

  return (
    <section aria-labelledby="transform-title" className="section-y bg-ink text-paper">
      <div className="container-x">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="05" light>Transformations</SectionLabel>
            </Reveal>
            <LineReveal
              id="transform-title"
              lines={["Before &", <em key="e" className="text-beige">After</em>]}
              className="mt-8 font-serif text-headline font-light"
            />
          </div>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="leading-relaxed text-paper/65">
              Drag the handle to see how a considered plan, the right materials and careful styling change the way a room feels.
            </p>
            <div role="tablist" aria-label="Choose a room" className="mt-8 flex flex-wrap gap-2">
              {beforeAfter.map((b, i) => (
                <button
                  key={b.room}
                  role="tab"
                  type="button"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "min-h-11 border px-5 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-500",
                    active === i ? "border-paper bg-paper text-ink" : "border-paper/25 text-paper/70 hover:border-paper/60 hover:text-paper"
                  )}
                >
                  {b.room}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 md:mt-20" y={40}>
          <CompareSlider key={item.room} item={item} />
          <div className="mt-5 flex justify-between text-sm text-paper/55">
            <span>{item.room}</span>
            <span>{item.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
