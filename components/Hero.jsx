"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LineReveal from "./ui/LineReveal";
import Button from "./ui/Button";
import { useEnquiry } from "./EnquiryProvider";
import { images } from "@/data/images";
import { EASE } from "@/lib/utils";

export default function Hero() {
  const ref = useRef(null);
  const { openEnquiry } = useEnquiry();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} aria-label="Introduction" className="relative h-[100svh] min-h-[620px] overflow-hidden bg-ink text-paper">
      <motion.div style={{ y, scale }} className="absolute inset-0 will-change-transform">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.16, opacity: 0.4 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
        >
          <Image
            src={images.hero}
            alt="Contemporary living room with warm timber panelling and soft neutral furnishings"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-ink/60 via-ink/35 to-ink/85" />

      <motion.div style={{ opacity: fade }} className="container-x relative z-10 flex h-full flex-col justify-end pb-10 md:pb-14">
        <motion.div
          className="eyebrow mb-8 flex items-center justify-between text-paper/75 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span>Interior Design Studio</span>
          <span className="hidden sm:inline">Hyderabad — India</span>
        </motion.div>

        <LineReveal
          as="h1"
          onMount
          delay={0.35}
          stagger={0.14}
          className="font-serif text-display font-light tracking-[-0.01em]"
          lines={["Beautiful Spaces.", <em key="i" className="font-light">Thoughtfully Designed.</em>]}
        />

        <div className="mt-10 grid gap-8 border-t border-paper/20 pt-8 md:mt-14 md:grid-cols-12 md:items-end">
          <motion.p
            className="max-w-md text-base leading-relaxed text-paper/80 md:col-span-5 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1 }}
          >
            CasaArt Interiors creates timeless spaces that feel beautiful, personal and truly yours.
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row md:col-span-7 md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.15 }}
          >
            <Button href="/projects" variant="light">Explore Our Work</Button>
            <Button variant="outlineLight" onClick={openEnquiry}>Start Your Project</Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
