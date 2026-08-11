import { Link } from "react-router-dom";
import { ArrowRight, Database, ClipboardList, FileBarChart, LineChart, Sparkles, Star, Scale, Megaphone, BarChart3, Briefcase, CheckCircle2, Quote } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { AnimatedNumber } from "@/components/site/AnimatedNumber";

const HERO_IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85";
const CTA_IMG = "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1400&q=80";

const Overline = ({ children }: { children: React.ReactNode }) => (
  <p className="overline mb-4">{children}</p>
);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-canvas pt-24 lg:pt-28 pb-12 lg:pb-16 overflow-hidden">
        <div className="container-page grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <h1 className="h1">
                Finance Leadership for <span className="accent-word">Service-Based Companies</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead max-w-xl mt-5">
                We partner with service-based businesses generating $2M–$30M in revenue to optimize their
                systems, strategy, and profitability.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
                <Link to="/contact" className="btn-primary w-full sm:w-auto justify-center">
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-outline w-full sm:w-auto justify-center">See How It Works</Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <img
                src={HERO_IMG}
                alt="Modern bright workspace with natural light"
                loading="eager"
                fetchPriority="high"
                width={1200}
                height={900}
                className="w-full aspect-[4/3] object-cover rounded-2xl"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-6 md:py-7 lg:py-8">
        <div className="container-page">
          <Stagger className="grid grid-cols-3 gap-5">
            {[
              { v: 50, suffix: "+", label: "Years Combined Experience" },
              { v: 95, suffix: "%+", label: "Client Satisfaction" },
              { v: 3, suffix: "", label: "Levels of Finance Support" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <p className="text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
                  <AnimatedNumber value={s.v} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm text-bodytext">{s.label}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Who We Serve</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">
                Built for <span className="accent-word">Service-Based Businesses</span> Scaling Past $2M
              </h2>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Scale, title: "Law Firms", body: "Track billable hours, manage trust accounts, and understand profitability by practice area." },
              { icon: Megaphone, title: "PR & Communications Firms", body: "Forecast retainer revenue, manage contractor costs, and understand campaign profitability." },
              { icon: BarChart3, title: "Marketing Agencies", body: "Track project margins, manage burn rate, and forecast growth with confidence." },
              { icon: Briefcase, title: "Consulting Firms", body: "Management and strategy consulting firms that need financial clarity to price, staff, and scale their engagements profitably." },
            ].map((c) => (
              <StaggerItem key={c.title}>
                <div className="card-warm card-hover p-7 h-full">
                  <div className="icon-tile mb-5"><c.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{c.title}</h3>
                  <p className="text-sm leading-relaxed">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* DOES THIS APPLY */}
      <section className="bg-white section-pad">
        <div className="container-page max-w-4xl">
          <Reveal><Overline>Common Challenges</Overline></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 mb-10">Does any of these apply to your <span className="accent-word">business?</span></h2>
          </Reveal>
          <Stagger className="space-y-4">
            {[
              "You track costs and your employees' time by jobs but are always wondering whether the project is profitable?",
              "Do you know how efficiently your employees worked last week? How much revenue did they bring in?",
              "Do you constantly wonder whether your financials have the right amount of WIP (Work-in-Process) and/or Deferred Revenue balance?",
              "Are you sure you've billed your clients back for all your expenses or are you leaving money on the table?",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="card-warm p-5 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-amber shrink-0 mt-0.5" />
                  <p className="text-bodytext leading-relaxed">{item}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="lead mt-10">
              This is where we specialize as a Fractional CFO firm working with service-based businesses.
              Contact us to find out more best practices that can help you manage and grow your business.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-7">
              <Link to="/contact" className="btn-primary">
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>How We Work</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">
                We Build Your Financial <span className="accent-word">Infrastructure</span> from the Ground Up
              </h2>
            </Reveal>
          </div>

          <Stagger className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { icon: Database, title: "Data Capture & Foundation", body: "AR, AP, expense categorization, Dext/Hubdoc, Plooto." },
              { icon: ClipboardList, title: "Monthly Close & Compliance", body: "Bank recs, accruals, journal entries, financial statements." },
              { icon: FileBarChart, title: "Reporting & Insights", body: "Management reports, Power BI dashboards, KPI tracking." },
              { icon: LineChart, title: "FP&A/Forecasting", body: "Annual budgets, rolling forecasts, scenario modeling." },
              { icon: Sparkles, title: "Strategic Advisory", body: "Board guidance, growth strategy, M&A, capital raising." },
            ].map((p, i) => (
              <StaggerItem key={p.title}>
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cardwarm border border-[hsl(var(--border-warm))] flex items-center justify-center text-amber mb-4 shadow-sm">
                    <p.icon className="w-6 h-6" />
                  </div>
                  <p className="overline mb-1">Phase {i + 1}</p>
                  <h3 className="h3 mb-2 leading-snug">{p.title}</h3>
                  <p className="text-sm leading-relaxed">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Client Stories</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">What Our <span className="accent-word">Clients</span> Say</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 max-w-3xl mx-auto">
              <div className="card-warm p-10 relative">
                <Quote className="w-10 h-10 text-amber/30 absolute top-6 left-6" />
                <div className="flex items-center gap-1 mb-5 text-amber justify-center">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg italic text-bodytext leading-relaxed text-center">
                  "Ankit handled all financial and accounting related matters for the company, including quarterly financial reporting to the Ontario Securities Commission and year-end financial statements and audit. He has complete knowledge of IFRS based reporting and has proven to be diligent and very thorough in his approach."
                </p>
                <div className="mt-7 text-center">
                  <p className="text-sm font-semibold text-navy">Prakash D. Naidoo</p>
                  <p className="text-xs text-bodytext mt-1">Vice President, Sales and General Manager</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 bg-navy">
          <img src={CTA_IMG} alt="" loading="lazy" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-navy/85" />
        </div>
        <div className="relative container-page text-white">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal><p className="overline mb-4">Ready to Scale?</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 text-white">Let's Build Your <span className="accent-word">Financial Foundation</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-white/80 leading-relaxed text-lg">
                Book a free 30-minute discovery call. We'll discuss your challenges, where you want to go,
                and whether we're the right fit. No obligation, no pressure.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
                <Link to="/contact" className="btn-on-dark w-full sm:w-auto justify-center">
                  Book a Free Consultation <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="btn-ghost-dark w-full sm:w-auto justify-center">See How We Work</Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
