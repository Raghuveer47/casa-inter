import Image from "next/image";
import Reveal from "./ui/Reveal";
import { Ornament } from "./ui/SectionHeading";
import { images } from "@/data/images";
import { site } from "@/lib/site";

// lucide-react v1 has no brand icons, so the Instagram glyph is inline.
function Instagram({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

// Links to CasaArt's Instagram. Swap the tiles for real posts when available.
const tiles = [images.kitchenGallery, images.bedroomDark, images.livingArched, images.storageWall, images.kitchenIsland, images.livingWarm];
const instagram = site.socials.find((s) => s.label === "Instagram");

export default function SocialProof() {
  return (
    <section aria-labelledby="social-title" className="theme-light section-y">
      <div className="container-x text-center">
        <Reveal>
          <p className="eyebrow text-gold">Follow our work</p>
          <h2 id="social-title" className="mt-5 font-serif text-title font-light">
            {site.instagramHandle}
          </h2>
          <Ornament className="mt-5" />
        </Reveal>
        <ul className="mt-12 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
          {tiles.map((src, i) => (
            <li key={src} className="relative aspect-square overflow-hidden bg-sand">
              <a href={instagram.href} target="_blank" rel="noopener noreferrer" className="group block size-full" aria-label={`CasaArt on Instagram — post ${i + 1} (opens in a new tab)`}>
                <Image src={src} alt="" fill sizes="(min-width: 768px) 16vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <span className="absolute inset-0 grid place-items-center bg-night/0 text-cream opacity-0 transition-all duration-500 group-hover:bg-night/40 group-hover:opacity-100">
                  <Instagram className="size-6" />
                </span>
              </a>
            </li>
          ))}
        </ul>
        <a href={instagram.href} target="_blank" rel="noopener noreferrer" className="eyebrow mt-10 inline-flex items-center gap-2 border-b border-cream/30 pb-1.5 hover:border-gold">
          <Instagram className="size-4" /> Follow on Instagram
        </a>
      </div>
    </section>
  );
}
