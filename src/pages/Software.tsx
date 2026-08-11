import { Link } from "react-router-dom";
import { Check, ArrowRight, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import quickbooksLogo from "@/assets/quickbooks-logo.png";

// CDN URLs for all other logos — no .asset.json needed
const toolLogos: Record<string, string> = {
  quickbooks: quickbooksLogo,
  qbotime: quickbooksLogo,
  xero: "https://cdn.simpleicons.org/xero/13B5EA",
  powerbi: "https://1000logos.net/wp-content/uploads/2022/08/Microsoft-Power-BI-Logo.png",
  plooto: "https://fintechlabs.com/wp-content/uploads/2024/01/Ploto-black-png-logo.png?ref=fintechlabs.com",
  hubdoc: "https://static.wixstatic.com/media/aca154_dafb3b0a49c343dbaaaec8a7e4bfab6a~mv2.png/v1/fill/w_640,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aca154_dafb3b0a49c343dbaaaec8a7e4bfab6a~mv2.png",
  dext: "https://brandlogovector.com/wp-content/uploads/2022/02/Dext-Logo-Small.png",
};

const tools = [
  {
    id: "quickbooks", name: "QuickBooks Online", category: "Accounting & ERP", color: "#2CA01C",
    url: "https://quickbooks.intuit.com/online/advanced/",
    screenshot: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1000&q=80",
    short: "Our core platform for larger clients needing batch invoicing, custom roles, advanced reporting, and multi-location support.",
    desc: [
      "Advanced Reporting\n\nQuickBooks Online Advanced gives growing businesses the scalability, automation, and real-time financial visibility needed to make smarter decisions as they expand. With advanced reporting, customizable workflows, deeper integrations, enhanced user permissions, and automated processes, it helps streamline operations, improve collaboration, and reduce manual work — allowing business owners to focus more on growth, profitability, and long-term strategy.",
      "QuickBooks Time Integration\n\nThe integration between QuickBooks Time and QuickBooks Online Advanced allows growing businesses to seamlessly track employee time, manage projects, and streamline payroll and invoicing processes in one connected system. By automatically syncing timesheets, labour costs, and billable hours into QuickBooks, businesses gain more accurate job costing, improved productivity insights, and reduced manual data entry — helping management make faster, data-driven decisions as the company scales."
    ],
    benefits: ["Batch invoicing & recurring billing", "Custom user roles & approval workflows", "Advanced reporting & multi-location", "Project-level job costing"],
  },
  {
    id: "xero", name: "Xero", category: "Accounting & ERP", color: "#13B5EA",
    url: "https://www.xero.com/",
    screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80",
    short: "Cloud accounting for clients preferring a streamlined interface with strong bank feeds and multi-currency.",
    desc: [
      "Scalable Cloud Accounting for Growing Service Businesses\n\nFor service-based businesses looking to scale efficiently, Xero provides a modern cloud-based accounting platform designed to improve financial visibility, streamline operations, and support growth. With real-time reporting, automated bank reconciliations, customizable dashboards, and seamless collaboration between business owners and advisors, Xero helps management make faster and more informed decisions while reducing time spent on manual administrative tasks.",
      "Advanced Integrations & Workflow Automation\n\nXero's advanced ecosystem of integrated applications makes it especially valuable for growing service-based businesses that require operational flexibility. From project tracking and expense management to payroll, workflow automation, CRM, and reporting integrations, Xero allows businesses to build a scalable financial system tailored to their operations. Its cloud-first design also enables teams to collaborate remotely while maintaining accurate and up-to-date financial information across the organization."
    ],
    benefits: ["Beautiful, fast UX", "Multi-currency built-in", "1,000+ app integrations", "Strong bank feeds"],
  },
  {
    id: "qbotime", name: "QuickBooks Time", category: "Time Tracking", color: "#2CA01C",
    url: "https://quickbooks.intuit.com/time-tracking/",
    screenshot: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1000&q=80",
    short: "Employee time tracking, job costing, and billable hours — critical for service firms tracking utilization.",
    desc: ["Employee time tracking, job costing, and billable hours — critical for service firms tracking utilization.", "Direct sync into QuickBooks means no double entry and clean billable margin reporting.", "Best for: agencies, law firms, and consultancies tracking utilization."],
    benefits: ["Mobile + GPS clock-in", "Project & client allocation", "Direct QuickBooks Online sync", "Approval workflows"],
  },
  {
    id: "dext", name: "Dext", category: "Receipt Capture", color: "#7C3AED",
    url: "https://dext.com/",
    screenshot: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000&q=80",
    short: "Automated receipt capture and categorization, eliminating manual data entry at the source.",
    desc: ["Automated receipt capture and categorization, eliminating manual data entry at the source.", "Snap, email, or scan — Dext extracts and codes transactions before they hit the ledger.", "Best for: any firm with high transaction volume or expense reports."],
    benefits: ["99% accurate OCR", "Auto-categorization rules", "Mobile capture app", "QuickBooks Online/Xero sync"],
  },
  {
    id: "hubdoc", name: "Hubdoc", category: "Receipt Capture", color: "#1E88E5",
    url: "https://www.hubdoc.com/",
    screenshot: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&q=80",
    short: "Fetches bills, statements, and receipts automatically from vendors and financial institutions.",
    desc: ["Fetching bills, statements, and receipts automatically from vendors and financial institutions.", "Hubdoc closes the loop on document collection so month-end isn't a scavenger hunt.", "Best for: firms with many recurring vendors and bank/credit card sources."],
    benefits: ["Auto-fetch from 700+ sources", "Document storage & search", "Native Xero integration", "Audit-ready archive"],
  },
  {
    id: "plooto", name: "Plooto", category: "Payments & AP Automation", color: "#3B82F6",
    url: "https://www.plooto.com/",
    screenshot: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1000&q=80",
    short: "Automates vendor payments, approval workflows, and payment reconciliation — replacing manual cheques.",
    desc: ["Automating vendor payments, approval workflows, and payment reconciliation — replacing manual cheques.", "Plooto turns AP into a controlled, auditable workflow with multi-approver paths.", "Best for: firms moving away from cheques and email-based approvals."],
    benefits: ["Multi-step approvals", "EFT, ACH & cheque", "Automatic 2-way sync", "Audit trail per payment"],
  },
  {
    id: "powerbi", name: "Microsoft Power BI", category: "Business Intelligence", color: "#F2C811",
    url: "https://powerbi.microsoft.com/",
    screenshot: "https://media.whatagraph.com/strapi_blog_files/custom_dashboard_reporting_tool_fa7882182e.png?width=992",
    short: "Custom dashboards turning financial data into actionable insights for leadership.",
    desc: ["Custom dashboards turning financial data into actionable insights for leadership.", "We build dashboards on top of your accounting and operational data so the leadership team sees the same numbers we do.", "Best for: every client — this is where reporting becomes real-time."],
    benefits: ["Real-time refresh", "Drill-down by client/project", "Mobile-friendly views", "Connects to QuickBooks Online, Xero, SQL"],
  },
];

const TOOL_ORDER = ["powerbi", "quickbooks", "xero", "qbotime", "plooto", "hubdoc", "dext"];
const orderedTools = TOOL_ORDER.map((id) => tools.find((t) => t.id === id)!).filter(Boolean);

export default function Software() {
  return (
    <>
      {/* HERO */}
      <section className="bg-canvas pt-32 lg:pt-40 pb-10 lg:pb-12">
        <div className="container-page max-w-4xl">
          <Reveal><p className="overline mb-4">Our Tech Stack</p></Reveal>
          <Reveal delay={0.05}>
            <h1 className="h1">The Tools We've <span className="accent-word">Built Our Practice</span> Around</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-5 max-w-2xl">
              We believe the right tools eliminate busywork and surface insights faster.
            </p>
          </Reveal>
        </div>
      </section>

      {/* INTEGRATED ECOSYSTEM */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="max-w-3xl mb-8">
            <Reveal><p className="overline mb-3">How It All Connects</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">Our Integrated <span className="accent-word">Tech Ecosystem</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-4">
                Every tool connects — so your data flows automatically from source to insight.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="card-warm p-6 lg:p-10">
              <div className="grid md:grid-cols-5 gap-3 md:gap-4 items-center text-center">
                {[
                  { name: "Dext / Hubdoc", sub: "Capture" },
                  { name: "→", sub: "" },
                  { name: "QuickBooks Online / Xero", sub: "Ledger" },
                  { name: "→", sub: "" },
                  { name: "Power BI", sub: "Insights" },
                ].map((n, i) => (
                  <div key={i}>
                    {n.name === "→" ? (
                      <ArrowRight className="w-6 h-6 text-amber mx-auto rotate-90 md:rotate-0" />
                    ) : (
                      <div className="card-warm p-4 bg-white">
                        <p className="font-bold text-navy text-sm md:text-base">{n.name}</p>
                        <p className="text-xs text-amber uppercase tracking-wider font-semibold mt-1">{n.sub}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <p className="text-center text-sm text-bodytext mt-6 max-w-xl mx-auto">
                Plooto handles outflows and QuickBooks Time feeds job costing — every dollar in and out
                is captured, coded, and reportable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ALL TOOLS — always expanded */}
      <section className="bg-canvas section-pad">
        <div className="container-page">
          <div className="max-w-3xl mb-8">
            <Reveal><p className="overline mb-3">The Stack</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="h2">Each <span className="accent-word">Tool</span>, Explained</h2>
            </Reveal>
          </div>

          <div className="space-y-6">
            {orderedTools.map((t) => (
              <div key={t.id} className="card-warm overflow-hidden">

                {/* Card Header */}
                <div className="flex items-center gap-4 p-5 lg:p-6">
                  <div className="w-20 h-20 rounded-xl shrink-0 bg-white border border-[hsl(var(--border-warm))] flex items-center justify-center overflow-hidden"
                    style={{ padding: ["hubdoc", "plooto"].includes(t.id) ? "0px" : "8px" }}>
                    <img
                      src={toolLogos[t.id]}
                      alt={`${t.name} logo`}
                      className="object-contain"
                      style={{
                        width: ["hubdoc", "plooto"].includes(t.id) ? "160%" : "100%",
                        height: ["hubdoc", "plooto"].includes(t.id) ? "160%" : "100%",
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base lg:text-lg font-extrabold text-navy">{t.name}</h3>
                    <p className="text-xs text-bodytext">{t.short}</p>
                  </div>
                  <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-amber font-semibold shrink-0">
                    {t.category}
                  </span>
                </div>

                {/* Card Body — always visible */}
                <div className="px-5 lg:px-6 pb-6 grid lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-5">
                    <img
                      src={t.screenshot}
                      alt={`${t.name} screenshot`}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover rounded-xl border border-[hsl(var(--border-warm))]"
                    />
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="amber-link mt-4"
                    >
                      Visit Official Site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <div className="lg:col-span-7">
                    {t.id === "xero" && (
                      <div className="mb-4 inline-flex items-center gap-2 px-4 h-10 rounded-md text-xs font-semibold text-white" style={{ backgroundColor: '#13B5EA' }}>
                        Xero Platinum Partner
                      </div>
                    )}
                    <div className="space-y-4 mb-5">
                      {t.desc.map((item, i) => {
                        if (typeof item === 'string' && item.includes('\n\n')) {
                          const [heading, body] = item.split('\n\n');
                          return (
                            <div key={i} className="space-y-1">
                              <p className="text-sm font-semibold text-navy">{heading}</p>
                              <p className="text-sm leading-relaxed">{body}</p>
                            </div>
                          );
                        }
                        return <p key={i} className="text-sm leading-relaxed">{item}</p>;
                      })}
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2">
                      {t.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm">
                          <Check className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white section-pad">
        <div className="container-page">
          <div className="text-center">
            <Link to="/contact" className="btn-primary">
              Subscribe to Newsletter <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}