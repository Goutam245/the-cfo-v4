import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Download, X } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/site/Reveal";
import { PageHero, PageCTA } from "@/components/site/PageHero";
import { FormEmbed } from "@/components/site/FormEmbed";

const guides = [
  { emoji: "📄", title: "CFO Readiness Checklist", desc: "12-page PDF", bullets: ["50-point readiness audit", "Roles & responsibilities map", "Stage-by-stage rollout plan"] },
  { emoji: "📊", title: "Cash Flow Forecast Template", desc: "Excel workbook", bullets: ["13-week rolling model", "Scenario toggles", "Bank balance tracker"] },
  { emoji: "📈", title: "KPI Dashboard Template", desc: "Power BI / Excel", bullets: ["Service-firm KPI library", "Drill-down by client/project", "Monthly review template"] },
];

export default function Guides() {
  const [active, setActive] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const handleSubmitted = () => {
    setSent(true);
    window.setTimeout(() => {
      setSent(false);
      setActive(null);
    }, 3000);
  };

  return (
    <>
      <PageHero
        overline="Guides & Templates"
        title="Free downloads built for"
        accent="operators"
        subtitle="Three templates we use with paying clients — yours in exchange for an email."
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "Guides" }]}
      />
      <section className="bg-white section-pad">
        <div className="container-page">
          <Stagger className="grid md:grid-cols-3 gap-6">
            {guides.map((g) => (
              <StaggerItem key={g.title}>
                <div className="card-warm card-hover p-7 h-full flex flex-col">
                  <div className="text-[32px] leading-none mb-4" aria-hidden="true">{g.emoji}</div>
                  <h3 className="h3 mb-1">{g.title}</h3>
                  <p className="text-xs uppercase tracking-wider text-amber font-semibold mb-3">{g.desc}</p>
                  <ul className="space-y-2 mb-5 flex-1">
                    {g.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" /><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setActive(g.title)} className="btn-primary w-full">
                    Download Free <Download className="w-4 h-4" />
                  </button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <PageCTA title="Need something" accent="more tailored?" body="We'll send a templated model adapted to your business model on request." cta="Talk to Us" />

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-navy/70 flex items-center justify-center p-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
              className="bg-white rounded-2xl p-4 pt-12 sm:p-6 sm:pt-12 max-w-lg w-full relative max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`Download ${active}`}
            >
              <button onClick={() => setActive(null)} aria-label="Close" className="absolute top-4 right-4 h-11 w-11 -mt-1 -mr-1 flex items-center justify-center rounded-lg text-navy/60 hover:text-navy"><X className="w-5 h-5" /></button>
              {sent ? (
                <div className="flex flex-col items-center justify-center gap-3 py-16 text-center" style={{ minHeight: 300 }}>
                  <Check className="h-10 w-10 text-amber" aria-hidden="true" />
                  <p className="font-bold text-navy">Check your inbox! We've sent the guide to your email.</p>
                </div>
              ) : (
                <FormEmbed
                  src="https://api.bookingmantra.club/widget/form/Jr3Lcc9xZ2v8Vs48EvJX"
                  id="inline-Jr3Lcc9xZ2v8Vs48EvJX-guides"
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