import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/PageHero";
import { articleList } from "./articleData";

const excerpts: Record<string, string> = {
  "5-financial-metrics": "From gross margin per client to cash conversion cycles — the metrics that actually predict your next stage.",
  "bookkeeper-vs-cfo": "The clear lines between bookkeeping, controllership, and CFO work — and how to know what your firm needs.",
  "13-week-cash-flow": "A step-by-step playbook for the most important short-term planning tool growing firms can build.",
  "kpi-dashboards": "What to track, how to visualize it, and the cadence to review it with your leadership team.",
  "when-to-hire-cfo": "Five inflection points when bringing in CFO-level help unlocks more value than it costs.",
  "repricing-services": "A four-step framework for moving prices up while strengthening — not straining — client relationships.",
};

export default function Blog() {
  return (
    <>
      <PageHero
        overline="Blog / Insights"
        title="Field notes on"
        accent="finance leadership"
        subtitle="Practical articles for founders and operators scaling service firms past $2M."
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Blog" }]}
      />
      <section className="bg-white section-pad">
        <div className="container-page">
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articleList.map((b) => (
              <StaggerItem key={b.slug}>
                <Link to={`/resources/${b.slug}`} className="card-warm card-hover p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-amber/10 text-amber font-semibold uppercase tracking-wider">{b.tag}</span>
                    <span className="text-bodytext flex items-center gap-1"><BookOpen className="w-3 h-3" /> {b.read}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy leading-snug mb-3">{b.title}</h3>
                  <p className="text-sm leading-relaxed flex-1">{excerpts[b.slug]}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-bodytext">{b.date}</span>
                    <span className="amber-link">Read Article <ArrowRight className="w-3.5 h-3.5" /></span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </>
  );
}
