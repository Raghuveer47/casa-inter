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
    <section ref={ref} aria-label="Introduction" className="relative h-[100svh] min-h-[600px] overflow-hidden bg-night text-cream">
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
      <div className="absolute inset-0 bg-linear-to-b from-night/60 via-night/35 to-night/85" />

      <motion.div style={{ opacity: fade }} className="container-x relative z-10 flex h-full flex-col justify-end pb-24 md:pb-14">
        <motion.div
          className="eyebrow mb-6 flex items-center justify-between gap-4 text-cream/75 md:mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span>Luxury Interiors · Own Modular Factory</span>
          <span className="hidden sm:inline">Neopolis–Kokapet, Hyderabad</span>
        </motion.div>

        <LineReveal
          as="h1"
          onMount
          delay={0.35}
          stagger={0.14}
          className="font-serif text-display font-light tracking-[-0.01em]"
          lines={["Beautifully Designed.", <em key="i" className="font-light text-gold-soft">Expertly Crafted.</em>]}
        />

        <div className="mt-8 grid gap-6 border-t border-cream/20 pt-6 md:mt-14 md:grid-cols-12 md:items-end md:gap-8 md:pt-8">
          <motion.p
            className="max-w-md text-[0.95rem] leading-relaxed text-cream/80 md:col-span-5 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1 }}
          >
            Bespoke interiors, designed around your life and built in our own factory — so every piece fits perfectly and lasts for years.
          </motion.p>
          <motion.div
            className="flex flex-col gap-3 sm:flex-row md:col-span-7 md:justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: EASE, delay: 1.15 }}
          >
            <Button variant="gold" onClick={openEnquiry}>Get a Free Quote</Button>
            <Button href="/projects" variant="outlineLight">View Our Projects</Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
