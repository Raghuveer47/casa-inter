import PageHeader from "@/components/ui/PageHeader";
import GalleryGrid from "@/components/GalleryGrid";
import CTA from "@/components/CTA";
import SocialProof from "@/components/SocialProof";
import { PROJECT_FILTERS, allPhotos } from "@/data/projects";

export const metadata = {
  title: "Design Gallery",
  description: "Browse every CasaArt modular kitchen, wardrobe, bedroom and living room photo in one place.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        label="Gallery"
        lines={["Design", <em key="e" className="text-earth">Gallery</em>]}
        intro={`${allPhotos.length} photographs from our projects. Filter by room or style, and tap any photo to view it full screen.`}
      />
      <section aria-label="All photos" className="bg-ivory pb-[clamp(5rem,11vw,9rem)] pt-10">
        <div className="container-x">
          <GalleryGrid photos={allPhotos} filters={PROJECT_FILTERS} />
        </div>
      </section>
      <SocialProof />
      <CTA />
    </>
  );
}
