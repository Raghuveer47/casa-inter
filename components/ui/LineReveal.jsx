"use client";

import { motion } from "framer-motion";
import { cn, EASE } from "@/lib/utils";

// Reveals text line-by-line from behind a mask. `lines` may contain JSX.
export default function LineReveal({
  lines,
  as: Tag = "h2",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.1,
  duration = 1.1,
  onMount = false,
  id,
}) {
  const trigger = onMount
    ? { animate: "visible" }
    : { whileInView: "visible", viewport: { once: true, margin: "0px 0px -12% 0px" } };

  return (
    <Tag id={id} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
          <motion.span
            className={cn("block", lineClassName)}
            initial="hidden"
            {...trigger}
            variants={{
              hidden: { y: "110%" },
              visible: { y: "0%", transition: { duration, ease: EASE, delay: delay + i * stagger } },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
