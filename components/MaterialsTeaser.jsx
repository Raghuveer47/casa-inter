import Image from "next/image";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import ArrowLink from "./ui/ArrowLink";
import { materials } from "@/data/brand";

export default function MaterialsTeaser() {
  const shown = materials.slice(0, 6);
  return (
    <section aria-labelledby="materials-title" className="section-y">
      <div className="container-x">
        <SectionHeading
          id="materials-title"
          eyebrow="Materials & Finishes"
          lines={["Finishes That", <em key="e" className="text-earth">Last</em>]}
          intro="Laminates, acrylic, PU, veneer and glass — with branded hardware and a choice of handles and countertops."
        />
        <ul className="mt-14 grid grid-cols-2 gap-4 md:mt-20 md:grid-cols-3 md:gap-6">
          {shown.map((m, i) => (
            <Reveal as="li" key={m.slug} delay={(i % 3) * 0.07}>
              <div className="frame relative aspect-[4/3] overflow-hidden bg-sand">
                <Image src={m.image} alt={`${m.title} finish`} fill sizes="(min-width: 768px) 30vw, 50vw" className="object-cover" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-light md:text-2xl">{m.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted md:text-sm">{m.bestFor}</p>
            </Reveal>
          ))}
        </ul>
        <div className="mt-14 text-center">
          <ArrowLink href="/materials">Explore Materials & Finishes</ArrowLink>
        </div>
      </div>
    </section>
  );
}
