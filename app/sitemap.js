import { site } from "@/lib/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";

export default function sitemap() {
  const pages = ["", "/about", "/services", "/projects", "/gallery", "/materials", "/process", "/contact", "/privacy-policy", "/terms"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  const serviceUrls = services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: "monthly", priority: 0.7 }));
  const projectUrls = projects.flatMap((p) => [
    { url: `${site.url}/projects/${p.slug}`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${site.url}/projects/${p.slug}/gallery`, changeFrequency: "monthly", priority: 0.5 },
  ]);
  return [...pages, ...serviceUrls, ...projectUrls];
}
