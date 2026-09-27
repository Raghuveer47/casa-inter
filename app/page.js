import Hero from "@/components/Hero";
import TrustedStrip from "@/components/TrustedStrip";
import BrandIntro from "@/components/BrandIntro";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyCasart from "@/components/WhyCasart";
import BeforeAfter from "@/components/BeforeAfter";
import PackagePlanner from "@/components/PackagePlanner";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Consultation from "@/components/Consultation";

// Kept deliberately lean: gallery, materials and Instagram live on their own pages.
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedStrip />
      <BrandIntro />
      <WhyCasart />
      <Services />
      <Projects />
      <PackagePlanner />
      <BeforeAfter />
      <ProcessTimeline />
      <Testimonials />
      <FAQ />
      <Consultation />
    </>
  );
}
