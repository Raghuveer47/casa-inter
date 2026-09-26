import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import LineReveal from "@/components/ui/LineReveal";
import Reveal from "@/components/ui/Reveal";
import CTA from "@/components/CTA";
import { articles, formatDate } from "@/data/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt, images: [article.image] },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <>
      <article className="pb-[clamp(5rem,11vw,10rem)] pt-36 md:pt-44">
        <header className="container-x max-w-5xl">
          <Link href="/#inspiration" className="eyebrow inline-flex items-center gap-2 text-muted hover:text-ink">
            <ArrowLeft aria-hidden="true" strokeWidth={1.5} className="size-3.5" /> Journal
          </Link>
          <p className="eyebrow mt-10 text-earth">
            {article.category} · <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readTime}
          </p>
          <LineReveal as="h1" onMount lines={[article.title]} className="mt-6 font-serif text-headline font-light" />
        </header>
        <Reveal className="container-x mt-14 max-w-6xl">
          <div className="relative aspect-[16/10] overflow-hidden bg-sand">
            <Image src={article.image} alt="" fill priority sizes="(min-width: 1200px) 1100px, 100vw" className="object-cover" />
          </div>
        </Reveal>
        <div className="container-x mt-14 max-w-3xl">
          <p className="font-serif text-2xl font-light leading-snug md:text-3xl">{article.excerpt}</p>
          <div className="mt-10 space-y-6 text-lg leading-relaxed text-charcoal">
            {article.body.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>
      </article>
      <CTA />
    </>
  );
}
