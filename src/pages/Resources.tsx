import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Download, ChevronDown, Check, X } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { FormEmbed } from "@/components/site/FormEmbed";
import { articleList } from "./resources/articleData";

const excerpts: Record<string, string> = {
  "5-financial-metrics": "From gross margin per client to cash conversion cycles — the metrics that actually predict your next stage.",
  "bookkeeper-vs-cfo": "The clear lines between bookkeeping, controllership, and CFO work — and how to know what your firm needs.",
  "13-week-cash-flow": "A step-by-step playbook for the most important short-term planning tool growing firms can build.",
  "kpi-dashboards": "What to track, how to visualize it, and the cadence to review it with your leadership team.",
  "when-to-hire-cfo": "Five inflection points when bringing in CFO-level help unlocks more value than it costs.",
  "repricing-services": "A four-step framework for lifting rates while strengthening client relationships.",
};
const blogs = articleList.map((a) => ({
  slug: a.slug,
  tag: a.tag,
  title: a.title,
  read: a.read.replace(" read", ""),
  date: a.date,
  excerpt: excerpts[a.slug] ?? "",
}));

const guides = [
  { emoji: "📄", title: "CFO Readiness Checklist", desc: "12-page PDF", bullets: ["50-point readiness audit", "Roles & responsibilities map", "Stage-by-stage rollout plan"] },
  { emoji: "📊", title: "Cash Flow Forecast Template", desc: "Excel workbook", bullets: ["13-week rolling model", "Scenario toggles", "Bank balance tracker"] },
  { emoji: "📈", title: "KPI Dashboard Template", desc: "Power BI / Excel", bullets: ["Service-firm KPI library", "Drill-down by client/project", "Monthly review template"] },
];

const faqs = [
  { q: "How is TheCFO.Site different from a bookkeeper?", a: "Bookkeepers record what happened. We interpret what it means, build the systems and dashboards your leadership team needs, and partner on what to do next." },
  { q: "What does a fractional CFO actually do day-to-day?", a: "We run your monthly close cycle, deliver management reports, maintain rolling forecasts, prepare board materials, and act as the financial sounding board for major decisions." },
  { q: "How long does an engagement typically last?", a: "Our average engagement is 24+ months. We're built for long-term partnership — most clients grow with us through multiple stages." },
  { q: "What size of business do you work with?", a: "Service-based businesses scaling from $2M to $30M+ in annual revenue. That's our sweet spot." },
  { q: "How quickly can you start?", a: "Onboarding typically begins within 2–4 weeks of signing. Full reporting cadence is live shortly after." },
  { q: "What accounting software do you support?", a: "QuickBooks Online, QuickBooks Advanced, and Xero. We pair them with Dext, Hubdoc, Plooto, QBO Time, and Power BI." },
  { q: "Do we need to change our current systems?", a: "Not necessarily. We do a stack review during onboarding and only recommend changes if there's clear ROI." },
  { q: "Do you work with US-based businesses?", a: "Yes. We serve clients across Canada and the United States." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="card-warm">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 p-6 text-left">
        <span className="font-bold text-navy">{q}</span>
        <ChevronDown className={`w-5 h-5 text-amber transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
            <p className="px-6 pb-6 text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Resources() {
  const [downloadOpen, setDownloadOpen] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!downloadOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDownloadOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [downloadOpen]);

  const handleSubmitted = () => {
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      setDownloadOpen(null);
    }, 3000);
  };

  return (
    <>
      <section className="bg-canvas pt-36 lg:pt-40 pb-12 lg:pb-16">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">Resources</p></Reveal>
          <Reveal delay={0.05}><h1 className="h1">Tools and Insights to Help You <span className="accent-word">Scale</span></h1></Reveal>
          <Reveal delay={0.1}><p className="lead mt-6 max-w-2xl">Articles, downloadable templates, and answers to the questions service-firm owners ask us most often.</p></Reveal>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Insights</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-10">Latest <span className="accent-word">Articles</span></h2></Reveal>
          <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {blogs.map((b) => (
              <StaggerItem key={b.title}>
                <Link to={`/resources/${b.slug}`} className="card-warm card-hover p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4 text-xs">
                    <span className="px-2.5 py-1 rounded-md bg-amber/10 text-amber font-semibold uppercase tracking-wider">{b.tag}</span>
                    <span className="text-bodytext flex items-center gap-1"><BookOpen className="w-3 h-3" /> {b.read}</span>
                  </div>
                  <h3 className="text-base font-bold text-navy leading-snug mb-3">{b.title}</h3>
                  <p className="text-sm leading-relaxed flex-1">{b.excerpt}</p>
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

      <section className="bg-canvas section-pad">
        <div className="container-page">
          <Reveal><p className="overline mb-4">Guides & Templates</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-10">Free <span className="accent-word">Downloads</span></h2></Reveal>
          <Stagger className="grid md:grid-cols-3 gap-5">
            {guides.map((g) => (
              <StaggerItem key={g.title}>
                <div className="card-warm card-hover p-7 h-full flex flex-col">
                  <div className="text-[32px] leading-none mb-4" aria-hidden="true">{g.emoji}</div>
                  <h3 className="h3 mb-1">{g.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-amber font-semibold mb-3">{g.desc}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm"><Check className="w-4 h-4 text-amber mt-0.5 shrink-0" /><span>{b}</span></li>
                    ))}
                  </ul>
                  <button onClick={() => setDownloadOpen(g.title)} className="btn-primary w-full">Download Free <Download className="w-4 h-4" /></button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl">
          <Reveal><p className="overline mb-4">FAQ</p></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-8">Common <span className="accent-word">Questions</span></h2></Reveal>
          <div className="space-y-3">
            {faqs.map((f) => <Reveal key={f.q}><FAQItem {...f} /></Reveal>)}
          </div>
          <div className="text-center mt-8">
            <Link to="/resources/faq" className="amber-link">See Full FAQ <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {downloadOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setDownloadOpen(null)}
          >
            <motion.div
              initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 16, opacity: 0 }}
              className="relative bg-white rounded-2xl p-4 pt-12 sm:p-6 sm:pt-12 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Download ${downloadOpen}`}
            >
              <button onClick={() => setDownloadOpen(null)} aria-label="Close" className="absolute top-4 right-4 h-11 w-11 -mt-1 -mr-1 flex items-center justify-center rounded-lg text-navy/60 hover:text-navy"><X className="w-5 h-5" /></button>
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-center" style={{ minHeight: 300 }}>
                  <Check className="h-10 w-10 text-amber" aria-hidden="true" />
                  <p className="font-bold text-navy">Check your inbox! We've sent the guide to your email.</p>
                </div>
              ) : (
                <FormEmbed
                  src="https://api.bookingmantra.club/widget/form/Jr3Lcc9xZ2v8Vs48EvJX"
                  id="inline-Jr3Lcc9xZ2v8Vs48EvJX"
                  formId="Jr3Lcc9xZ2v8Vs48EvJX"
                  title="Guide Download - CFO Site"
                  height={470}
                  onSubmitted={handleSubmitted}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
