"use client";

import Image from "next/image";
import { BadgeCheck, ClipboardList, Gem, Hammer, LayoutGrid, LifeBuoy, PenTool, Sparkles } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { useEnquiry } from "./EnquiryProvider";
import { whyCasart } from "@/data/brand";
import { images } from "@/data/images";

const icons = [PenTool, Gem, LayoutGrid, Hammer, ClipboardList, Sparkles, BadgeCheck, LifeBuoy];

export default function WhyCasart() {
  const { openEnquiry } = useEnquiry();
  return (
    <section aria-labelledby="why-title" className="theme-light section-y">
      <div className="container-x">
        <SectionHeading
          id="why-title"
          eyebrow="The CasaArt difference"
          lines={["Why Choose", <em key="e" className="text-earth">CasaArt?</em>]}
          intro="Design and execution under one roof, backed by our own modular factory for complete control over quality."
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 md:mt-16 lg:grid-cols-4 lg:gap-x-10 lg:gap-y-14">
          {whyCasart.map((item, i) => {
            const Icon = icons[i];
            return (
              <Reveal as="li" key={item.title} delay={(i % 4) * 0.06} className="group text-center">
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-gold/10 text-gold-soft ring-1 ring-gold/25 transition-colors duration-500 group-hover:bg-gold group-hover:text-on-accent sm:size-16">
                  <Icon aria-hidden="true" strokeWidth={1.4} className="size-6 sm:size-7" />
                </span>
                <h3 className="mt-4 text-base font-semibold leading-snug sm:mt-5 sm:text-lg">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-64 text-xs leading-relaxed text-muted sm:text-sm">{item.body}</p>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="relative mt-16 overflow-hidden rounded-3xl md:mt-24">
          <Image src={images.cta} alt="" fill sizes="(min-width: 1440px) 1340px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/85 via-black/65 to-black/30" />
          <div className="relative flex flex-col items-start gap-6 px-6 py-10 text-[#f5f1eb] sm:px-12 sm:py-14 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-2xl font-semibold leading-snug sm:text-3xl">Complete control over quality.</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#f5f1eb]/80 sm:text-base">
                We have our own modular factory for better finishes, superior quality and on-time delivery.
              </p>
            </div>
            <Button variant="gold" onClick={openEnquiry} className="shrink-0">Book a Factory-quality Quote</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
