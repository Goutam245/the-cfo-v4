import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero, PageCTA } from "@/components/site/PageHero";

const faqs = [
  { q: "How is TheCFO.Site different from a bookkeeper?", a: "Bookkeepers record what happened. We interpret what it means, build the systems and dashboards your leadership team needs, and partner on what to do next." },
  { q: "What does a fractional CFO actually do day-to-day?", a: "We run your monthly close cycle, deliver management reports, maintain rolling forecasts, prepare board materials, and act as the financial sounding board for major decisions." },
  { q: "How much does it cost?", a: "Engagements typically range from $2,500 to $8,000 per month depending on scope and stage. Most firms save $200K+ annually vs a full-time CFO hire." },
  { q: "How long does an engagement typically last?", a: "Our average engagement is 24+ months. We're built for long-term partnership — most clients grow with us through multiple stages." },
  { q: "What size of business do you work with?", a: "Service-based businesses scaling from $2M to $30M+ in annual revenue. That's our sweet spot." },
  { q: "How quickly can you start?", a: "Onboarding typically begins within one week of signing. Full reporting cadence is live within 30 days." },
  { q: "What accounting software do you support?", a: "QuickBooks Online, QuickBooks Advanced, and Xero. We pair them with Dext, Hubdoc, Plooto, QBO Time, and Power BI." },
  { q: "Do we need to change our current systems?", a: "Not necessarily. We do a stack review during onboarding and only recommend changes if there's clear ROI." },
  { q: "Can you work alongside our existing accountant or tax preparer?", a: "Absolutely. We routinely partner with external tax preparers and audit firms — we own the management accounting and they own the tax filings." },
  { q: "What industries do you specialize in?", a: "Service-based businesses: agencies, consultancies, professional services, technology services, and project-based firms." },
];

const Item = ({ q, a }: { q: string; a: string }) => {
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

export default function FAQ() {
  return (
    <>
      <PageHero
        overline="FAQ"
        title="Answers to the questions we"
        accent="hear most"
        subtitle="Everything from pricing and timing to scope and how we partner with the rest of your team."
        crumbs={[{ label: "Home", to: "/" }, { label: "Resources", to: "/resources" }, { label: "FAQ" }]}
      />
      <section className="bg-white section-pad">
        <div className="container-page max-w-3xl space-y-3">
          {faqs.map((f) => <Reveal key={f.q}><Item {...f} /></Reveal>)}
        </div>
      </section>
      <PageCTA title="Still have a" accent="question?" body="Send it our way — we usually reply same-day during business hours." cta="Contact Us" />
    </>
  );
}