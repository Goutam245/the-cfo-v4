import type { Article } from "./Article";

export const articles: Record<string, Article> = {
  "5-financial-metrics": {
    slug: "5-financial-metrics",
    title: "The 5 Financial Metrics Every Service Firm Must Track Past $2M",
    tag: "Metrics",
    read: "6 min read",
    date: "Jul 2026",
    heroImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    keyTakeaways: [
      "Past $2M, top-line revenue is no longer a sufficient measure of business health.",
      "Focus on five forward-looking indicators: gross margin per client, utilization, revenue per employee, pipeline velocity, and cash conversion cycle.",
      "Tracking these metrics lets you forecast bottlenecks and fund growth with confidence instead of reacting after the fact.",
    ],
    sections: [
      {
        kind: "p",
        text: "Hitting $2M in revenue is a massive milestone for a service firm, but the playbook that got you here won't get you to $10M. Past this inflection point, tracking basic top-line revenue isn't enough; you need metrics that predict future health.",
      },
      {
        kind: "p",
        text: "For service organizations, profitability lives and dies by your people and your pipelines. The five non-negotiable metrics to track are:",
      },
      {
        kind: "list",
        items: [
          { label: "Gross Margin per Client", text: "Are your biggest accounts actually your most profitable?" },
          { label: "Utilization Rate", text: "What percentage of your team's total capacity is directly billable?" },
          { label: "Revenue per Employee", text: "A true measure of operational efficiency." },
          { label: "Pipeline Velocity", text: "How quickly are leads moving from pitch to signed contract?" },
          { label: "Cash Conversion Cycle (CCC)", text: "The exact number of days it takes to turn a delivered service into cold cash in the bank." },
        ],
      },
      {
        kind: "p",
        text: "Monitoring these five indicators gives you a clear runway. Instead of reacting to a bad quarter after it happens, you can forecast capacity bottlenecks, identify underpriced accounts, and confidently fund your next hiring surge.",
      },
    ],
  },

  "bookkeeper-vs-cfo": {
    slug: "bookkeeper-vs-cfo",
    title: "Why Your Bookkeeper Can't Replace a CFO",
    tag: "CFO 101",
    read: "5 min read",
    date: "Jun 2026",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    keyTakeaways: [
      "Bookkeeping, controllership, and CFO work are three distinct disciplines — not interchangeable roles.",
      "Bookkeepers look backward; CFOs look forward to model decisions and design strategy.",
      "Scaling past $2M without CFO-level insight leaves you blind to future cash crunches and market shifts.",
    ],
    sections: [
      {
        kind: "p",
        text: "Many service firm owners assume that as long as their books are clean and taxes are filed, their financial strategy is covered. This is a costly misconception. While a talented bookkeeper is foundational to your business, expecting them to guide your growth strategy is like asking a mechanic to win a Formula 1 race.",
      },
      { kind: "p", text: "Financial management is divided into three distinct pillars:" },
      {
        kind: "list",
        items: [
          { label: "Bookkeeping", text: "This is historical recording. Your bookkeeper looks backward to track every dollar entering and leaving the business, ensuring accurate records." },
          { label: "Controllership", text: "This is compliance and control. A controller ensures data integrity, manages cash flow, and creates accurate monthly financial statements." },
          { label: "CFO Work", text: "This is purely forward-looking. A Chief Financial Officer takes the clean data from the bookkeeper and controller to build predictive models, design pricing strategies, and optimize capital structure." },
        ],
      },
      {
        kind: "p",
        text: "If you are trying to scale past $2M, relying solely on historical data leaves you blind to future cash crunches or market shifts. You don't just need to know where your money went—you need to know where it should go next.",
      },
    ],
  },

  "13-week-cash-flow": {
    slug: "13-week-cash-flow",
    title: "How to Build a 13-Week Cash Flow Forecast",
    tag: "Cash Flow",
    read: "8 min read",
    date: "May 2026",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
    keyTakeaways: [
      "Monthly statements move too slowly for growing service firms — weekly visibility is essential.",
      "Model real inflows from actual invoice patterns, then layer in fixed outflows like payroll and rent.",
      "A 13-week view gives you a three-month early-warning system to act before cash gets tight.",
    ],
    sections: [
      {
        kind: "p",
        text: "For a growing agency or consulting firm, standard monthly financial statements simply move too slowly. Payroll hits every two weeks, but client payments can stall for 45 to 60 days. To bridge this gap, you need a 13-week cash flow forecast—the ultimate short-term planning tool.",
      },
      {
        kind: "p",
        text: "A 13-week forecast models your actual cash inflows and outflows on a weekly basis over one full quarter. Here is how to build yours:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          { label: "Start with cash on hand", text: "Your true, available bank balance today." },
          { label: "Map out definitive inflows", text: "Don't rely on wishful thinking; look at actual invoice due dates and historical client payment patterns (e.g., if a client always pays 15 days late, model it that way)." },
          { label: "Layer in definitive outflows", text: "Rent, payroll, software subscriptions, and tax liabilities." },
          { label: "Analyze the net variance", text: "Look for the weeks where the line dips closest to zero." },
        ],
      },
      {
        kind: "p",
        text: "This simple exercise eliminates the anxiety of the unknown. It gives you a three-month warning system to pause discretionary spending, push collections, or draw on a line of credit before a cash crunch arrives.",
      },
    ],
  },

  "kpi-dashboards": {
    slug: "kpi-dashboards",
    title: "KPI Dashboards for Agency Owners: A Complete Guide",
    tag: "Dashboards",
    read: "9 min read",
    date: "Apr 2026",
    heroImage:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=1600&q=80",
    keyTakeaways: [
      "Build a dashboard around three pillars: financial health, delivery and capacity, and sales runway.",
      "Utilization above 85% signals burnout; below 60% signals overstaffing — manage to the middle.",
      "Review weekly with operations and monthly with leadership to drive data-led decisions.",
    ],
    sections: [
      {
        kind: "p",
        text: "As an agency owner, you can't manage what you don't measure. Yet, looking at a 15-page financial packet every month usually leads to data fatigue. To steer your leadership team effectively, you need a clean, visual Key Performance Indicator (KPI) dashboard that highlights core performance at a glance.",
      },
      { kind: "p", text: "A great agency dashboard focuses on three core pillars:" },
      {
        kind: "list",
        items: [
          { label: "Financial Health", text: "Keep your current bank balance, accounts receivable aging, and trailing 12-month net margin front and center." },
          { label: "Delivery & Capacity", text: "Track billable utilization and project margin. If utilization is spiking past 85%, your team is burning out; if it drops below 60%, you are overstaffed." },
          { label: "Sales Runway", text: "Monitor your total pipeline value and your average customer acquisition cost (CAC)." },
        ],
      },
      {
        kind: "p",
        text: "Review this dashboard weekly with your operations head and monthly with your full leadership team. By standardizing this view, you move your meetings away from opinions and toward data-driven decisions that protect your bottom line.",
      },
    ],
  },

  "when-to-hire-cfo": {
    slug: "when-to-hire-cfo",
    title: "When Is It Time to Hire a Fractional CFO?",
    tag: "Hiring",
    read: "4 min read",
    date: "Mar 2026",
    heroImage:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80",
    keyTakeaways: [
      "Most service firms under $10M need CFO insight, not a full-time CFO salary.",
      "Watch for inflection points: stagnant margins, hiring paralysis, pricing transitions, funding events, or guesswork planning.",
      "Fractional CFO support gives you enterprise-level strategy at a fraction of the cost.",
    ],
    sections: [
      {
        kind: "p",
        text: "Most service firms under $10M don't need a full-time, six-figure CFO sitting in the office every day. However, they frequently hit strategic walls where a bookkeeper's insights fall short. This is where a fractional CFO comes in—giving you enterprise-level strategic financial leadership for a fraction of the cost.",
      },
      {
        kind: "p",
        text: "Look out for these five distinct inflection points that signal it's time to bring in fractional help:",
      },
      {
        kind: "list",
        items: [
          { label: "Stagnant Margins", text: "Your revenue is climbing year over year, but your bank balance isn't moving." },
          { label: "Capacity Paralysis", text: "You don't know if you can afford to make your next three strategic hires." },
          { label: "Complex Pricing Decisions", text: "You need to transition from hourly billing to value-based or retainer pricing but don't know how to model the risk." },
          { label: "Funding or M&A Preparation", text: "You are looking to secure a major line of credit, raise capital, or position the firm for an exit." },
          { label: "Blind Planning", text: "You are building your annual budget based on guesswork rather than predictive capacity models." },
        ],
      },
      {
        kind: "p",
        text: "If you find yourself lying awake wondering if you can safely fund next quarter's growth, you've outgrown basic accounting.",
      },
    ],
  },

  "repricing-services": {
    slug: "repricing-services",
    title: "Repricing Your Services Without Losing Clients",
    tag: "Pricing",
    read: "7 min read",
    date: "Feb 2026",
    heroImage:
      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1600&q=80",
    keyTakeaways: [
      "Stagnant pricing in an inflationary market quietly kills margin.",
      "Audit profitability per client, then anchor increases to value delivered — not your costs.",
      "Give 60–90 days notice and consider grandfathering legacy clients into longer commitments.",
    ],
    sections: [
      {
        kind: "p",
        text: "Raising prices is terrifying for service firm owners. The immediate fear is that your best clients will leave, gutting your revenue. But leaving your prices stagnant in an inflationary market is a slow death sentence for your margins.",
      },
      {
        kind: "p",
        text: "You can successfully lift your rates while actually strengthening client relationships by using this four-step framework:",
      },
      {
        kind: "list",
        ordered: true,
        items: [
          { label: "Audit internal profitability", text: "Calculate the exact margin on every client account. You will likely find that 20% of your clients are absorbing 80% of your scope creep." },
          { label: "Anchor to value delivered", text: "Don't frame the increase around your rising costs. Frame it around the increased value, expanded team expertise, or broader results you've delivered over the last year." },
          { label: "Give ample runway", text: "Provide your recurring clients with at least 60 to 90 days' notice before the new rates take effect." },
          { label: "Offer a grandfathering option", text: "For tier-one legacy clients, consider letting them lock in a mid-tier rate if they sign a longer-term commitment." },
        ],
      },
      {
        kind: "p",
        text: "The reality? Clients who value your work expect occasional adjustments. Those who leave over a reasonable price increase were usually your lowest-margin, highest-friction accounts anyway.",
      },
    ],
  },
};

export const articleList = Object.values(articles);