import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ArrowLink from "./ui/ArrowLink";
import { featuredServices } from "@/data/services";

export function ServiceCard({ service }) {
  return (
    <Link href={`/services/${service.slug}`} className="group block h-full border border-line bg-paper transition-colors duration-500 hover:border-gold">
      <div className="frame relative aspect-[4/3] overflow-hidden bg-sand">
        <Image
          src={service.image}
          alt={`${service.title} by CasaArt`}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-luxe group-hover:scale-[1.05]"
        />
      </div>
      <div className="p-6">
        <span className="font-serif text-lg italic text-gold">{service.number}</span>
        <h3 className="mt-2 font-serif text-2xl font-light">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{service.short}</p>
        <span className="eyebrow mt-6 inline-flex items-center gap-2 text-earth">
          Learn more
          <ArrowRight aria-hidden="true" strokeWidth={1.5} className="size-3.5 transition-transform duration-500 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  return (
    <section aria-labelledby="services-title" className="theme-light section-y">
      <div className="container-x">
        <SectionHeading
          id="services-title"
          eyebrow="Featured services"
          lines={["Every Room,", <em key="e" className="text-earth">Thoughtfully Made</em>]}
          intro="From the kitchen to the pooja room, each space is designed for how you live and built to last."
        />
        {/* Swipeable row on phones, grid from tablet up */}
        <ul className="no-scrollbar -mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 md:mt-20 lg:grid-cols-4">
          {featuredServices.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={(i % 4) * 0.06} className="w-[78vw] shrink-0 snap-start sm:w-auto">
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-muted sm:hidden">Swipe to see more</p>
        <div className="mt-14 text-center">
          <ArrowLink href="/services">View All Services</ArrowLink>
        </div>
      </div>
    </section>
  );
}
