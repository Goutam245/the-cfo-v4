import { Check, Quote } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { PageHero, PageCTA } from "./PageHero";

export type ServicePageData = {
  slug: string;
  overline: string;
  title: string;
  accent?: string;
  subtitle: string;
  whatItIs: string;
  whatWeDo: string[];
  deliverables: string[];
  whoFor: string[];
  pricing: { from: string; note: string };
  testimonial: { quote: string; name: string; role: string };
  ctaTitle: string;
  ctaAccent?: string;
  ctaBody: string;
  extra?: { heading: string; items: { title: string; body: string }[] };
};

export const ServiceTemplate = ({ data }: { data: ServicePageData }) => (
  <>
    <PageHero
      overline={data.overline}
      title={data.title}
      accent={data.accent}
      subtitle={data.subtitle}
      crumbs={[{ label: "Home", to: "/" }, { label: "Services", to: "/services" }, { label: data.title }]}
    />

    {/* What it is */}
    <section className="bg-white section-pad">
      <div className="container-page grid lg:grid-cols-3 gap-10">
        <Reveal><div><p className="overline mb-3">What it is</p><h2 className="h2">The <span className="accent-word">Foundation</span></h2></div></Reveal>
        <div className="lg:col-span-2">
          <Reveal delay={0.05}><p className="lead">{data.whatItIs}</p></Reveal>
        </div>
      </div>
    </section>

    {/* What we do */}
    <section className="bg-canvas section-pad">
      <div className="container-page">
        <Reveal><p className="overline mb-3">What we do</p></Reveal>
        <Reveal delay={0.05}><h2 className="h2 mb-12">Inside the <span className="accent-word">engagement</span></h2></Reveal>
        <Stagger className="grid md:grid-cols-2 gap-5">
          {data.whatWeDo.map((w, i) => (
            <StaggerItem key={i}>
              <div className="card-warm p-6 flex gap-4">
                <div className="w-9 h-9 shrink-0 rounded-lg bg-amber/10 text-amber flex items-center justify-center font-bold">{i + 1}</div>
                <p className="text-sm leading-relaxed">{w}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>

    {/* Optional extra */}
    {data.extra && (
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><h2 className="h2 mb-12">{data.extra.heading}</h2></Reveal>
          <Stagger className="grid md:grid-cols-3 gap-6">
            {data.extra.items.map((it) => (
              <StaggerItem key={it.title}>
                <div className="card-warm card-hover p-6 h-full">
                  <h3 className="h3 mb-2">{it.title}</h3>
                  <p className="text-sm leading-relaxed">{it.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    )}

    {/* Deliverables + Who for */}
    <section className="bg-canvas section-pad">
      <div className="container-page grid lg:grid-cols-2 gap-8">
        <Reveal>
          <div className="card-warm p-8 h-full">
            <p className="overline mb-4">Deliverables</p>
            <h3 className="h2 mb-6">What you'll <span className="accent-word">receive</span></h3>
            <ul className="space-y-3">
              {data.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-amber mt-0.5 shrink-0" /><span>{d}</span></li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div className="card-warm p-8 h-full">
            <p className="overline mb-4">Who it's for</p>
            <h3 className="h2 mb-6">Built <span className="accent-word">for</span></h3>
            <ul className="space-y-3">
              {data.whoFor.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm"><Check className="w-4 h-4 text-amber mt-0.5 shrink-0" /><span>{d}</span></li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>

    {/* Pricing */}
    <section className="bg-white section-pad">
      <div className="container-page max-w-3xl text-center">
        <Reveal><p className="overline mb-3">Pricing</p></Reveal>
        <Reveal delay={0.05}><h2 className="h2 mb-4">Starts at <span className="accent-word">{data.pricing.from}</span></h2></Reveal>
        <Reveal delay={0.1}><p className="lead">{data.pricing.note}</p></Reveal>
      </div>
    </section>

    {/* Testimonial */}
    <section className="bg-canvas section-pad">
      <div className="container-page max-w-3xl">
        <Reveal>
          <div className="card-warm p-10">
            <Quote className="w-10 h-10 text-amber mb-5" />
            <p className="text-lg lg:text-xl leading-relaxed text-navy font-medium">"{data.testimonial.quote}"</p>
            <div className="mt-6 pt-6 border-t border-[hsl(var(--border-warm))]">
              <p className="font-bold text-navy">{data.testimonial.name}</p>
              <p className="text-sm">{data.testimonial.role}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <PageCTA title={data.ctaTitle} accent={data.ctaAccent} body={data.ctaBody} />
  </>
);