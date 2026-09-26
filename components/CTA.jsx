"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LineReveal from "./ui/LineReveal";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { Ornament } from "./ui/SectionHeading";
import { useEnquiry } from "./EnquiryProvider";
import { images } from "@/data/images";
import { site } from "@/lib/site";

export default function CTA() {
  const ref = useRef(null);
  const { openEnquiry } = useEnquiry();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} aria-labelledby="cta-title" className="relative overflow-hidden bg-night text-cream">
      <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
        <Image src={images.cta} alt="" fill sizes="100vw" className="object-cover opacity-40" />
      </motion.div>
      <div className="absolute inset-0 bg-linear-to-b from-night/50 via-night/30 to-night/70" />

      <div className="container-x relative py-28 text-center md:py-40">
        <Reveal>
          <p className="eyebrow text-gold-soft">Start your transformation</p>
        </Reveal>
        <LineReveal
          id="cta-title"
          lines={["Let's Build the Home", <em key="e" className="text-gold-soft">You Have Imagined</em>]}
          className="mx-auto mt-6 max-w-4xl font-serif text-headline font-light"
        />
        <Reveal delay={0.3}>
          <Ornament light className="mt-7" />
          <p className="mx-auto mt-7 max-w-md text-lg leading-relaxed text-cream/75">
            Share your floor plan with our designers and receive a 3D concept with a factory-direct estimate within 24 hours.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button variant="gold" onClick={openEnquiry}>Get a Free Quote</Button>
            <Button href={site.whatsapp.href} variant="outlineLight" target="_blank" rel="noopener noreferrer">
              WhatsApp CASART
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
