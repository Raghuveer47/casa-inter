import PageHeader from "@/components/ui/PageHeader";
import ProjectsGrid from "@/components/ProjectsGrid";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Projects",
  description: "Real spaces, real transformations. Recent interior projects by CasaArt in Hyderabad.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        label="Projects"
        lines={["Our", <em key="e" className="text-earth">Portfolio</em>]}
        intro="Real spaces, real transformations. Filter by room type to explore."
      />
      <ProjectsGrid />
      <CTA />
    </>
  );
}
