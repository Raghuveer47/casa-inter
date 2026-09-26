import Hero from "@/components/Hero";
import TrustedStrip from "@/components/TrustedStrip";
import BrandIntro from "@/components/BrandIntro";
import FeaturedDesigns from "@/components/FeaturedDesigns";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyCasart from "@/components/WhyCasart";
import BeforeAfter from "@/components/BeforeAfter";
import ParallaxBand from "@/components/ParallaxBand";
import MaterialsTeaser from "@/components/MaterialsTeaser";
import ProcessTimeline from "@/components/ProcessTimeline";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Consultation from "@/components/Consultation";
import SocialProof from "@/components/SocialProof";

// Section order follows the CASART brief.
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedStrip />
      <BrandIntro />
      <WhyCasart />
      <Services />
      <FeaturedDesigns />
      <Projects />
      <ParallaxBand />
      <BeforeAfter />
      <MaterialsTeaser />
      <ProcessTimeline />
      <Testimonials />
      <FAQ />
      <Consultation />
      <SocialProof />
    </>
  );
}
