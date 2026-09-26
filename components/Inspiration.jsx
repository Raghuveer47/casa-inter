import Link from "next/link";
import LineReveal from "./ui/LineReveal";
import ImageReveal from "./ui/ImageReveal";
import Reveal from "./ui/Reveal";
import SectionLabel from "./ui/SectionLabel";
import { articles, formatDate } from "@/data/articles";

function Meta({ article }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-earth">
      <span>{article.category}</span>
      <span aria-hidden="true" className="h-px w-5 bg-earth/40" />
      <time dateTime={article.date} className="text-muted">{formatDate(article.date)}</time>
    </p>
  );
}

function ReadMore() {
  return (
    <span className="mt-6 inline-flex items-center gap-3 text-sm font-medium">
      Read more
      <span aria-hidden="true" className="h-px w-8 bg-ink transition-all duration-700 ease-luxe group-hover:w-14" />
    </span>
  );
}

export default function Inspiration() {
  const [lead, ...rest] = articles;

  return (
    <section id="inspiration" aria-labelledby="inspiration-title" className="section-y border-t border-line">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <SectionLabel index="09">Journal</SectionLabel>
            </Reveal>
            <LineReveal
              id="inspiration-title"
              lines={["Ideas &", <em key="e" className="text-earth">Inspiration</em>]}
              className="mt-8 font-serif text-headline font-light"
            />
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm leading-relaxed text-muted">Notes from the studio on light, space, materials and living well.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 md:mt-24 lg:grid-cols-12 lg:gap-16">
          <article className="lg:col-span-7">
            <Link href={`/journal/${lead.slug}`} className="group block">
              <ImageReveal src={lead.image} alt="" className="aspect-[4/3] md:aspect-[16/11]" sizes="(min-width: 1024px) 55vw, 100vw" hover />
              <Reveal className="mt-8">
                <Meta article={lead} />
                <h3 className="mt-4 max-w-2xl font-serif text-[clamp(2rem,3.6vw,3.5rem)] font-light leading-[1.05]">{lead.title}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-muted">{lead.excerpt}</p>
                <ReadMore />
              </Reveal>
            </Link>
          </article>

          <div className="flex flex-col gap-14 lg:col-span-5 lg:pt-24">
            {rest.map((a, i) => (
              <article key={a.slug} className="border-t border-line pt-8">
                <Link href={`/journal/${a.slug}`} className="group grid gap-6 sm:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:grid-cols-1 xl:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                  <ImageReveal src={a.image} alt="" className="aspect-[4/3] sm:aspect-[4/5]" sizes="(min-width: 640px) 20vw, 100vw" hover delay={i * 0.1} />
                  <Reveal delay={0.1 + i * 0.1}>
                    <Meta article={a} />
                    <h3 className="mt-4 font-serif text-2xl font-light leading-tight md:text-[1.9rem]">{a.title}</h3>
                    <ReadMore />
                  </Reveal>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
