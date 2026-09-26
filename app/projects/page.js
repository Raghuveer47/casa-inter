import PageHeader from "@/components/ui/PageHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Projects",
  description: "Modular kitchens, wardrobes, bedrooms and living rooms designed, manufactured and installed by CasaArt Interiors.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        lines={["Our", <em key="e" className="text-earth">Portfolio</em>]}
        intro="Real spaces, real transformations. Filter by room or style, then open any project to see its full photo gallery."
      />
      <ProjectsGrid />
      <CTA />
    </>
  );
}
