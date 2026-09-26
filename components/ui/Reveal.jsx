"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/utils";

// Fade + slight upward movement when the element enters the viewport.
export default function Reveal({ children, className, delay = 0, y = 28, duration = 0.9, onMount = false, as = "div", ...rest }) {
  const Comp = motion[as] ?? motion.div;
  const trigger = onMount
    ? { animate: { opacity: 1, y: 0 } }
    : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "0px 0px -10% 0px" } };
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration, ease: EASE, delay }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
