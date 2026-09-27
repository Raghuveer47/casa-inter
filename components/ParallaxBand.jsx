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

// Full-bleed photo band in the middle of the homepage: a slow parallax
// background behind a single statement and one call to action.
export default function ParallaxBand() {
  const ref = useRef(null);
  const { openEnquiry } = useEnquiry();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} aria-labelledby="band-title" className="relative overflow-hidden bg-night text-cream">
      <motion.div style={{ y }} className="absolute -inset-y-[18%] inset-x-0">
        <Image src={images.livingArched} alt="" fill sizes="100vw" className="object-cover" />
      </motion.div>
      <div className="absolute inset-0 bg-night/65" />

      <div className="container-x relative py-28 text-center md:py-44">
        <Reveal>
          <p className="eyebrow text-gold-soft">CasaArt</p>
        </Reveal>
        <LineReveal
          id="band-title"
          lines={["Ready to design", <em key="e" className="text-gold-soft">your dream home?</em>]}
          className="mx-auto mt-6 max-w-4xl font-serif text-headline font-light"
        />
        <Reveal delay={0.2}>
          <Ornament light className="mt-7" />
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-cream/75">
            Book a free consultation with CasaArt today and get a transparent quote within your budget.
          </p>
          <div className="mt-10 flex justify-center">
            <Button variant="gold" onClick={openEnquiry}>Book Free Consultation</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
