"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { cn, EASE } from "@/lib/utils";

const filters = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section aria-label="Project list" className="bg-ivory pb-[clamp(5rem,11vw,10rem)] pt-14 md:pt-20">
      <div className="container-x">
        <div role="group" aria-label="Filter projects by type" className="flex flex-wrap gap-2 border-b border-line pb-8">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={cn(
                "min-h-11 border px-5 text-xs font-medium uppercase tracking-[0.16em] transition-colors duration-500",
                filter === f ? "border-ink bg-ink text-paper" : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.ul layout className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
          <AnimatePresence mode="popLayout">
            {shown.map((p, i) => (
              <motion.li
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.7, ease: EASE }}
                className={cn(i % 2 === 1 && "md:mt-32")}
              >
                <ProjectCard
                  project={p}
                  index={projects.indexOf(p)}
                  ratio={i % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/6]"}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  priority={i < 2}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
