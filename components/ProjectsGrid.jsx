"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { PROJECT_FILTERS, projects } from "@/data/projects";
import { cn, EASE } from "@/lib/utils";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section aria-label="Project list" className="bg-ivory pb-[clamp(5rem,11vw,10rem)] pt-10 md:pt-14">
      <div className="container-x">
        <div role="group" aria-label="Filter projects by category" className="flex flex-wrap justify-center gap-2 border-b border-line pb-8">
          {PROJECT_FILTERS.map((f) => (
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

        <motion.ul layout className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2 md:gap-x-12 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <ProjectCard project={p} ratio="aspect-[4/5]" sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw" priority={i < 3} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        {shown.length === 0 && <p className="mt-14 text-center text-muted">New {filter.toLowerCase()} projects are coming soon.</p>}
      </div>
    </section>
  );
}
