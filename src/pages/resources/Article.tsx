import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

type Section =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "list"; items: { label?: string; text: string }[]; ordered?: boolean };

export type Article = {
  slug: string;
  title: string;
  tag: string;
  read: string;
  date: string;
  heroImage: string;
  keyTakeaways: string[];
  sections: Section[];
};

export default function ArticlePage({ article }: { article: Article }) {
  return (
    <>
      <section className="bg-canvas pt-36 lg:pt-40 pb-10">
        <div className="container-page max-w-3xl">
          <Reveal>
            <Link
              to="/resources"
              className="amber-link mb-6 inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="flex items-center gap-3 mb-4 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-amber/10 text-amber font-semibold uppercase tracking-wider">
                {article.tag}
              </span>
              <span className="text-bodytext">{article.read}</span>
              <span className="text-bodytext">·</span>
              <span className="text-bodytext">{article.date}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="h1">{article.title}</h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 rounded-xl overflow-hidden border border-[hsl(var(--border-warm))] aspect-[16/8]">
              <img
                src={article.heroImage}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white section-pad">
        <article className="container-page max-w-3xl space-y-6">
          {article.sections.map((s, i) => {
            if (s.kind === "p") {
              return (
                <p key={i} className="text-base leading-relaxed text-bodytext">
                  {s.text}
                </p>
              );
            }
            if (s.kind === "h2") {
              return (
                <h2 key={i} className="h3 text-navy mt-4">
                  {s.text}
                </h2>
              );
            }
            const ListTag = s.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={i}
                className={`${
                  s.ordered ? "list-decimal" : "list-disc"
                } pl-6 space-y-3 text-bodytext`}
              >
                {s.items.map((it, j) => (
                  <li key={j} className="leading-relaxed">
                    {it.label && (
                      <span className="font-semibold text-navy">{it.label}: </span>
                    )}
                    {it.text}
                  </li>
                ))}
              </ListTag>
            );
          })}

          <div className="mt-10 rounded-xl border border-amber/30 bg-amber/5 p-6">
            <h3 className="h3 text-navy mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-amber" /> Key Takeaways
            </h3>
            <ul className="space-y-2.5">
              {article.keyTakeaways.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-bodytext">
                  <CheckCircle2 className="w-4 h-4 text-amber mt-1 shrink-0" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link to="/contact" className="btn-primary inline-flex">
              Book a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="pt-8 border-t border-[hsl(var(--border-warm))]">
            <Link to="/resources" className="amber-link inline-flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Resources
            </Link>
          </div>
        </article>
      </section>
    </>
  );
}