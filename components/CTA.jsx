"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LineReveal from "./ui/LineReveal";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { useEnquiry } from "./EnquiryProvider";
import { images } from "@/data/images";

export default function CTA() {
  const ref = useRef(null);
  const { openEnquiry } = useEnquiry();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} aria-labelledby="cta-title" className="relative overflow-hidden bg-ink text-paper">
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
        <Image src={images.cta} alt="" fill sizes="100vw" className="object-cover opacity-45" />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-ink/40 via-ink/20 to-ink/60" />

      <div className="container-x relative py-32 text-center md:py-48">
        <Reveal>
          <p className="eyebrow text-paper/70">Start your project</p>
        </Reveal>
        <LineReveal
          id="cta-title"
          lines={["Let's Create", <em key="e" className="text-beige">Something Beautiful</em>, "Together."]}
          className="mx-auto mt-8 max-w-5xl font-serif text-headline font-light"
        />
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-paper/75">
            Tell us about your space and let&apos;s bring your vision to life.
          </p>
          <div className="mt-12 flex justify-center">
            <Button variant="light" onClick={openEnquiry}>Start Your Project</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
