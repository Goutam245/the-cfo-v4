import { Link } from "react-router-dom";
import {
  ArrowRight, ClipboardList, FileBarChart, LineChart, Sparkles,
  ShieldCheck, Briefcase, Check, Minus, Settings, BarChart2, Users,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

const Overline = ({ children }: { children: React.ReactNode }) => (
  <p className="overline mb-4">{children}</p>
);

const steps = [
  { icon: Settings, title: "Onboarding & System Setup", body: "Stack review, process mapping, dashboard build, and team alignment." },
  { icon: BarChart2, title: "Monthly Close & Reporting", body: "Fast, accurate close cycles with management reports and KPI dashboards." },
  { icon: Users, title: "Ongoing CFO Partnership, Quarterly Strategy & Board Prep", body: "Strategic finance partner — forecasting, board materials, and growth planning." },
];

const services = [
  { icon: ClipboardList, title: "Bookkeeping & Month-End Close", body: "A fast, accurate close so leadership has the real numbers within days of month-end.", deliverables: ["Bank & credit card reconciliations", "Journal entries and accruals", "Trial balance review"] },
  { icon: FileBarChart, title: "Financial Reporting", body: "Management reports and Power BI dashboards built around the metrics that matter to your firm.", deliverables: ["Monthly P&L, BS, CF", "Power BI KPI dashboards", "Variance & trend analysis"] },
  { icon: LineChart, title: "FP&A / Budgeting / Forecasting", body: "Build the model that makes every major decision easier — staffing, pricing, capital allocation.", deliverables: ["Annual budgets", "Rolling 12-month forecasts", "13-week cash flow"] },
  { icon: ShieldCheck, title: "Controllership Services", body: "Process controls, audit support, and policy design for businesses scaling beyond the founder.", deliverables: ["Internal controls", "Audit / review prep", "GAAP technical accounting"] },
  { icon: Briefcase, title: "Fractional CFO", body: "Senior CFO leadership at a fraction of the cost — embedded in your weekly operating cadence.", deliverables: ["Capital strategy", "Investor & lender relations", "Quarterly board cycle"] },
  { icon: Sparkles, title: "Strategic Advisory", body: "A partner at the table for the decisions that change the trajectory of your business.", deliverables: ["Board reporting", "Growth & exit strategy", "Pricing & unit economics"] },
];

const comparisonRows: (string | React.ReactNode)[][] = [
  ["Starting from", "Custom-scoped engagement", "Senior salary + benefits", "Hourly / per-engagement"],
  ["Start time", "2–4 weeks", "3–6 months", "2–4 weeks"],
  ["What you get", "Staff + Manager + CFO — full team", "Senior person only — no supporting team", "Staff-level only"],
  ["Technology Approach", "Modern stack + best-practice recommendations", "May lack modern tech knowledge", "Paper-based, limited tech adoption"],
  ["Scalability", "Flexible — scale up or down as needed", "Fixed", "Limited"],
  ["Strategic input", <Check className="w-4 h-4 text-amber" key="1" />, <Check className="w-4 h-4 text-amber" key="2" />, <Minus className="w-4 h-4 text-bodytext/50" key="3" />],
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="bg-canvas pt-36 lg:pt-40 pb-16 lg:pb-20">
        <div className="container-page max-w-4xl">
          <Reveal><Overline>Our Services</Overline></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1">
              Building Financial <span className="accent-word">Infrastructure</span>, Layer by Layer
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-6 max-w-2xl">
              We start with clean data and build upward — through close, reporting, planning, and strategy —
              so every layer of your finance function rests on the one below it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HOW WE WORK — 3 STEPS */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><Overline>How It Works</Overline></Reveal>
          <Reveal delay={0.05}>
            <h2 className="h2 max-w-3xl">A Simple <span className="accent-word">Three-Step</span> Engagement</h2>
          </Reveal>

          <Stagger className="mt-10 grid md:grid-cols-3 gap-5">
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="card-warm p-7 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber/10 text-amber flex items-center justify-center shrink-0">
                      <s.icon className="w-5 h-5" />
                    </div>
                    <p className="overline">Step {i + 1}</p>
                  </div>
                  <h3 className="text-lg font-extrabold text-navy mb-2 leading-snug">{s.title}</h3>
                  <p className="text-sm leading-relaxed">{s.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl">
            <Reveal><Overline>Individual Services</Overline></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">Six Core Services, <span className="accent-word">Mix and Match</span></h2>
            </Reveal>
          </div>
          <Stagger className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="card-warm card-hover p-7 h-full flex flex-col">
                  <div className="icon-tile mb-5"><s.icon className="w-5 h-5" /></div>
                  <h3 className="h3 mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed mb-5">{s.body}</p>
                  <ul className="space-y-2 mb-5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="amber-link mt-auto">Book a Call <ArrowRight className="w-3.5 h-3.5" /></Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* COMPARISON — moved from About */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <Reveal><Overline>Why Us</Overline></Reveal>
          <Reveal delay={0.05}><h2 className="h2 mb-8 max-w-3xl">Compared to the <span className="accent-word">Alternatives</span></h2></Reveal>
          <Reveal delay={0.1}>
            <div className="card-warm overflow-hidden">
              <div className="overflow-x-auto -mx-px">
                <table className="w-full text-[13px] md:text-sm min-w-[640px]">
                  <thead>
                    <tr className="bg-secondarywarm">
                      <th className="text-left p-4 font-bold text-navy min-w-[140px]"></th>
                      <th className="text-left p-4 font-bold text-amber min-w-[180px]">TheCFO.Site</th>
                      <th className="text-left p-4 font-bold text-navy min-w-[180px]">Full-Time</th>
                      <th className="text-left p-4 font-bold text-navy min-w-[180px]">Traditional Firm</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className="border-t border-[hsl(var(--border-warm))] align-top">
                        <td className="p-4 font-semibold text-navy">{row[0]}</td>
                        <td className="p-4 text-navy font-semibold">{row[1]}</td>
                        <td className="p-4">{row[2]}</td>
                        <td className="p-4">{row[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="bg-navy rounded-2xl p-10 lg:p-14 text-center">
            <Reveal><p className="overline mb-3 !text-amber">Not Sure Where to Start?</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2 text-white max-w-2xl mx-auto">
                That's exactly what our <span className="accent-word">free discovery call</span> is for.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-white/75 max-w-xl mx-auto leading-relaxed">
                Tell us where your firm is today and we'll map out the services that move the needle.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link to="/contact" className="btn-on-dark mt-8">Book a Free Call <ArrowRight className="w-4 h-4" /></Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
