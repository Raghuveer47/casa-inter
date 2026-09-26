"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn, EASE } from "@/lib/utils";

// Image that unmasks upward (clip-path) while settling from a slight zoom.
// Wrap in a `group` element and pass `hover` to get the hover zoom.
// `onMount` skips the clip-path wipe and uses a short transform fade instead.
export default function ImageReveal({
  src,
  alt,
  sizes = "100vw",
  className,
  imgClassName,
  priority = false,
  delay = 0,
  duration = 1.3,
  hover = false,
  onMount = false,
}) {
  const viewport = { once: true, margin: "0px 0px -8% 0px" };
  const frame = onMount
    ? {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: Math.min(duration, 0.55), ease: EASE, delay },
      }
    : {
        initial: { clipPath: "inset(100% 0% 0% 0%)" },
        whileInView: { clipPath: "inset(0% 0% 0% 0%)" },
        viewport,
        transition: { duration, ease: EASE, delay },
      };
  const photo = onMount
    ? {
        initial: { scale: 1.04 },
        animate: { scale: 1 },
        transition: { duration, ease: EASE, delay },
      }
    : {
        initial: { scale: 1.18 },
        whileInView: { scale: 1 },
        viewport,
        transition: { duration: 1.8, ease: EASE, delay },
      };

  return (
    <motion.div className={cn("relative overflow-hidden bg-sand", className)} {...frame}>
      <motion.div className="absolute inset-0" {...photo}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover",
            hover && "transition-transform duration-[1400ms] ease-luxe group-hover:scale-[1.04]",
            imgClassName
          )}
        />
      </motion.div>
    </motion.div>
  );
}
