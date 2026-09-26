"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

// Gold dot that tracks the pointer exactly, plus a ring that trails behind it.
// The ring grows over links and buttons, and shows "View" / "Drag" over photos
// and sliders. Only runs on mouse/trackpad devices without reduced motion.
function variantFor(target) {
  if (!(target instanceof Element)) return "default";
  const custom = target.closest("[data-cursor]");
  if (custom) return custom.getAttribute("data-cursor");
  if (target.closest("input, textarea, select, [contenteditable]")) return "text";
  if (target.closest('[role="slider"], .cursor-ew-resize')) return "drag";
  const interactive = target.closest("a, button, [role='tab'], label");
  if (interactive) return interactive.querySelector("img") ? "view" : "link";
  return "default";
}

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default");
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 380, damping: 32, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 380, damping: 32, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !calm.matches);
    update();
    fine.addEventListener("change", update);
    calm.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      calm.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const html = document.documentElement;
    html.classList.add("has-custom-cursor");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const over = (e) => setVariant(variantFor(e.target));
    const leave = () => setVisible(false);
    const down = () => setPressed(true);
    const up = () => setPressed(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    return () => {
      html.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const label = variant === "view" ? "View" : variant === "drag" ? "Drag" : "";
  const ringSize = { default: 36, link: 56, view: 84, drag: 84, text: 24 }[variant] ?? 36;

  return (
    <div aria-hidden="true" className={cn("pointer-events-none fixed inset-0 z-[100] transition-opacity duration-300", visible ? "opacity-100" : "opacity-0")}>
      <motion.div
        className="absolute left-0 top-0 grid place-items-center rounded-full border border-gold-soft/80"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: ringSize,
          height: ringSize,
          scale: pressed ? 0.85 : 1,
          backgroundColor: label ? "rgba(197,161,97,0.92)" : variant === "link" ? "rgba(197,161,97,0.12)" : "rgba(197,161,97,0)",
          opacity: variant === "text" ? 0.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 26 }}
      >
        {label && <span className="eyebrow text-[0.6rem] text-night">{label}</span>}
      </motion.div>
      <motion.div
        className="absolute left-0 top-0 size-1.5 rounded-full bg-gold-soft"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: label || variant === "text" ? 0 : 1 }}
      />
    </div>
  );
}
