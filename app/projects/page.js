import PageHeader from "@/components/ui/PageHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Projects",
  description: "Selected residential, villa and commercial interiors designed and delivered by CasaArt Interiors.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        lines={["Selected", <em key="e" className="text-earth">Projects</em>]}
        intro="Homes, villas and workplaces shaped around the people who use them every day."
      />
      <ProjectsGrid />
      <CTA />
    </>
  );
}
