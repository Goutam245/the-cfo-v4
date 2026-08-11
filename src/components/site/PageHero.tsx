import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

type Crumb = { label: string; to?: string };

export const PageHero = ({
  overline,
  title,
  accent,
  subtitle,
  crumbs,
}: {
  overline: string;
  title: string;
  accent?: string;
  subtitle: string;
  crumbs: Crumb[];
}) => (
  <section className="bg-canvas pt-32 lg:pt-36 pb-16 lg:pb-20">
    <div className="container-page max-w-4xl">
      <Reveal>
        <nav className="flex items-center gap-1.5 text-xs text-[hsl(var(--body-text))] mb-6">
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {c.to ? (
                <Link to={c.to} className="hover:text-[hsl(var(--amber))]">{c.label}</Link>
              ) : (
                <span className="text-[hsl(var(--navy))] font-semibold">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="w-3 h-3 opacity-50" />}
            </span>
          ))}
        </nav>
      </Reveal>
      <Reveal delay={0.05}><p className="overline mb-4">{overline}</p></Reveal>
      <Reveal delay={0.1}>
        <h1 className="h1">
          {title} {accent && <span className="accent-word">{accent}</span>}
        </h1>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="lead mt-6 max-w-2xl">{subtitle}</p>
      </Reveal>
    </div>
  </section>
);

export const PageCTA = ({
  title,
  accent,
  body,
  cta = "Book a Free Call",
}: {
  title: string;
  accent?: string;
  body: string;
  cta?: string;
}) => (
  <section className="bg-white section-pad">
    <div className="container-page">
      <div className="bg-navy rounded-2xl p-10 lg:p-14 text-center">
        <Reveal><p className="overline mb-3 !text-amber">Next Step</p></Reveal>
        <Reveal delay={0.05}>
          <h2 className="h2 text-white max-w-2xl mx-auto">
            {title} {accent && <span className="accent-word">{accent}</span>}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-white/75 max-w-xl mx-auto leading-relaxed">{body}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <Link to="/contact" className="btn-on-dark mt-8">{cta}</Link>
        </Reveal>
      </div>
    </div>
  </section>
);