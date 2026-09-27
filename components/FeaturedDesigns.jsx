import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";
import GalleryPreview from "./GalleryPreview";
import { allPhotos } from "@/data/projects";

// Homepage mosaic of featured modular designs; "+N more" opens the full /gallery page.
export default function FeaturedDesigns() {
  return (
    <section aria-labelledby="designs-title" className="theme-light section-y">
      <div className="container-x">
        <SectionHeading
          id="designs-title"
          eyebrow="Featured Designs"
          lines={["Spaces We Have", <em key="e" className="text-earth">Crafted</em>]}
          intro="Kitchens, wardrobes, bedrooms and living rooms — a glimpse of our modular work. Tap any photo to see the full collection."
        />
        <Reveal className="mt-14 md:mt-20" y={30}>
          <GalleryPreview photos={allPhotos.map((p) => p.src)} href="/gallery" alt="CasaArt modular interior" />
        </Reveal>
      </div>
    </section>
  );
}
