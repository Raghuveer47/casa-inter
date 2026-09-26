import { site } from "@/lib/site";
import { articles } from "@/data/articles";

export default function sitemap() {
  const pages = ["", "/about", "/services", "/projects", "/contact"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
  const posts = articles.map((a) => ({
    url: `${site.url}/journal/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));
  return [...pages, ...posts];
}
