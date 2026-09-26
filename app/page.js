import Hero from "@/components/Hero";
import BrandIntro from "@/components/BrandIntro";
import Categories from "@/components/Categories";
import FeaturedInteriors from "@/components/FeaturedInteriors";
import IndianHeritage from "@/components/IndianHeritage";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ExploreCollection from "@/components/ExploreCollection";
import Inspiration from "@/components/Inspiration";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandIntro />
      <Categories />
      <FeaturedInteriors />
      <IndianHeritage />
      <BeforeAfter />
      <Services />
      <Projects />
      <ExploreCollection />
      <Inspiration />
      <CTA />
    </>
  );
}
