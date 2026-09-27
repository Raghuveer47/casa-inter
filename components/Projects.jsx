"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LineReveal from "./ui/LineReveal";
import Reveal from "./ui/Reveal";
import ArrowLink from "./ui/ArrowLink";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

function Heading() {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div>
        <Reveal>
          <p className="eyebrow text-gold">Our work</p>
        </Reveal>
        <LineReveal
          lines={["Recent Interior", <em key="e" className="text-earth">Projects</em>]}
          className="mt-5 font-serif text-headline font-light"
        />
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">Real spaces, real transformations.</p>
      </div>
      <Reveal delay={0.1}>
        <ArrowLink href="/projects">View Full Portfolio</ArrowLink>
      </Reveal>
    </div>
  );
}

// Desktop: vertical scroll drives a horizontal gallery inside a pinned viewport.
function PinnedGallery() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useLayoutEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative hidden lg:block" style={{ height: `calc(100vh + ${distance}px)` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="container-x mb-12">
          <Heading />
        </div>
        <motion.ul ref={trackRef} style={{ x }} className="flex w-max gap-10 pl-[max(3.5rem,calc((100vw-1600px)/2+3.5rem))] pr-14">
          {projects.map((p, i) => (
            <li key={p.slug} className={i % 2 ? "w-[30vw] self-end" : "w-[36vw]"}>
              <ProjectCard project={p} index={i} ratio={i % 2 ? "aspect-[4/5]" : "aspect-[16/11]"} sizes="36vw" />
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

// Mobile & tablet: native horizontal scroll with snap points.
function SwipeGallery() {
  return (
    <div className="lg:hidden">
      <div className="container-x">
        <Heading />
      </div>
      <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-4 px-4 pb-2 sm:scroll-px-8 sm:px-8">
        {projects.map((p, i) => (
          <li key={p.slug} className="w-[82vw] shrink-0 snap-start sm:w-[55vw]">
            <ProjectCard project={p} index={i} sizes="(min-width: 640px) 55vw, 82vw" />
          </li>
        ))}
      </ul>
      <p className="container-x mt-6 text-xs text-muted">Swipe to explore</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section aria-label="Featured projects" className="theme-light bg-ivory py-[clamp(5rem,11vw,10rem)] lg:py-0">
      <SwipeGallery />
      <PinnedGallery />
    </section>
  );
}
