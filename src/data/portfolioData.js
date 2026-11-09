export const portfolioData = {
  personal: {
    name: "Charan Tej",
    role: "Early-Stage Product Manager",
    headlineBold: "Early-Stage Product Manager",
    headlineMuted: "building at the intersection of AI, consumer apps, and scalable marketplaces.",
    bio: "I turn messy, ambiguous user problems into structured, high-margin software. Working cross-functionally across product strategy, system design, technical execution, and go-to-market operations.",
    location: "Bangalore, India · Available Globally (Remote / Hybrid)",
    availability: "Available for Q1 2026 Roles & Founding PM Projects",
    statusBadge: "Available for new projects",
    firmAward: "Early-Stage Builder of the Year 2025 · Product & Systems",
    email: "charan.product@gmail.com",
    phone: "+91 98765 43210",
    socials: [
      { name: "LinkedIn", url: "https://linkedin.com/in/charantej", handle: "in/charantej" },
      { name: "Twitter / X", url: "https://x.com/charantej", handle: "@charantej" },
      { name: "GitHub", url: "https://github.com/charantej", handle: "github/charantej" },
      { name: "Substack", url: "https://charantej.substack.com", handle: "charantej.substack" },
    ],
    stats: [
      { value: "4+ Years", label: "0-to-1 PM Experience", detail: "From discovery to scaled launch" },
      { value: "$2.4M+", label: "ARR Impact Driven", detail: "Via self-serve & viral growth loops" },
      { value: "18+", label: "Products & Major Releases", detail: "Shipped across AI, Web & Mobile" },
      { value: "99.4%", label: "User Satisfaction (CSAT)", detail: "Across core workflow automations" },
    ]
  },

  trustedBrands: [
    { name: "Antigravity AI", category: "Agent Systems" },
    { name: "SignalFlow", category: "Enterprise Workspaces" },
    { name: "Wayfinder", category: "Marketplace Logistics" },
    { name: "Delizoo Network", category: "Social Commerce" },
    { name: "Codetracker", category: "Dev Productivity" },
    { name: "Yati Platform", category: "Consumer Intelligence" },
    { name: "InterviewPilot", category: "AI Talent Suite" },
    { name: "Polavaram Tech", category: "Supply Chain" }
  ],

  caseStudies: [
    {
      id: "signalflow",
      projectNumber: "Project 01",
      title: "SignalFlow AI",
      subtitle: "Autonomous Operations Workspace",
      category: "AI Agents & Enterprise SaaS",
      year: "2025 – 2026",
      summary: "Transforming opaque, multi-step enterprise customer workflows into transparent, human-supervised AI agent sequences.",
      keyMetrics: [
        { label: "Agent Success Rate", value: "94.6%", change: "+38% vs baseline" },
        { label: "Task Resolution Speed", value: "3.8x", change: "From 46m to 4.2m" },
        { label: "ARR Expansion", value: "134%", change: "Net Retention (NRR)" }
      ],
      tags: ["AI Agents", "Human-in-the-Loop", "Enterprise UX", "B2B SaaS"],
      breakdown: {
        problem: "Enterprise operations teams at fast-growing fintechs were overwhelmed by complex customer exception tickets. Staff spent 18+ hours weekly switching between 6 disparate tools (CRM, Stripe, Postgres logs, Zendesk) to verify data and draft responses, leading to an average resolution time of 46 minutes and an 11% human error rate.",
        process: "Conducted contextual inquiry interviews with 42 operations coordinators and support directors. Mapped a strict 5-tier severity exception taxonomy. Collaborated with engineering to build deterministic validation guardrails and Python/LangChain prompt loops, running dual-run shadow testing against 2,500 real production tickets before rolling out to beta customers.",
        solution: "Engineered a high-confidence dual-pane interface: on the left, an interactive live-streaming agent trace displaying step-by-step reasoning and source citations; on the right, an editable diff review screen allowing human operators to approve, amend, or reject automated actions with a single keystroke.",
        result: "Adopted by 26 mid-market enterprise accounts within 90 days. Reduced ticket handling duration from 46 minutes to 4.2 minutes (3.8x aggregate speedup) with zero hallucination incidents reaching end customers. Unlocked $1.1M in expansion revenue."
      },
      previewMockup: {
        type: "ai-workspace",
        badge: "Live Agent State: Supervised",
        stepCount: "4 Actions Streamed",
        confidence: "99.2% Deterministic Guard"
      }
    },
    {
      id: "wayfinder",
      projectNumber: "Project 02",
      title: "Wayfinder Logistics",
      subtitle: "Predictive Marketplace Command Center",
      category: "Hyperlocal Logistics & Dispatch",
      year: "2024 – 2025",
      summary: "A unified real-time dispatch dashboard and dynamic supply-demand rebalancing engine for high-density delivery networks.",
      keyMetrics: [
        { label: "Driver Idle Time", value: "-31%", change: "Direct fleet efficiency" },
        { label: "On-Time SLA", value: "98.2%", change: "+14.6% improvement" },
        { label: "Annual SLA Savings", value: "$680k", change: "Reduced refunds & idle cost" }
      ],
      tags: ["Dynamic Dispatch", "Marketplace Matching", "Real-Time Telemetry", "Mobile Ops"],
      breakdown: {
        problem: "Unpredictable micro-surges (sudden rain, lunch spikes, road closures) consistently fractured delivery dispatch, causing driver delays above 50 minutes. Driver churn soared to 22% monthly due to unpredictable earnings, while consumer cart abandonment surged during peak hours.",
        process: "Embedded alongside warehouse dispatch controllers for 3 weeks and conducted 30 delivery ride-alongs in heavy traffic corridors. Partnered with the data science team to analyze historical GPS telemetry and identified that static 15-minute dispatch batches were missing volatile order clustering.",
        solution: "Shipped CommandPulse: an automated rolling batching engine that continuously evaluates route density, rider availability, and merchant prep readiness. Paired it with an uncluttered dark-mode operator console and a streamlined 1-tap mobile companion app for riders.",
        result: "Scaled seamlessly across 4 metro hubs processing 14,000+ daily orders. Slashed driver idle time by 31%, boosted on-time delivery from 83.6% to 98.2%, and reduced driver churn by 44% in the first two quarters."
      },
      previewMockup: {
        type: "logistics-radar",
        badge: "Network Status: Optimal",
        stepCount: "14,280 Orders Routed",
        confidence: "31% Idle Reduction"
      }
    },
    {
      id: "delizoo",
      projectNumber: "Project 03",
      title: "Delizoo Social Ordering",
      subtitle: "Viral Food Discovery & Cart Synchronization",
      category: "Consumer Mobile & Social Commerce",
      year: "2024",
      summary: "A consumer group dining platform that replaced messy chat screenshots with real-time shared carts and creator curation.",
      keyMetrics: [
        { label: "Active Monthly Users", value: "450k+", change: "68% organic referral" },
        { label: "Group Checkout Rate", value: "64.2%", change: "+28% vs individual carts" },
        { label: "Average Order Value", value: "2.3x", change: "Higher basket density" }
      ],
      tags: ["Consumer Mobile", "Group Carts", "Viral Loops", "Social Commerce"],
      breakdown: {
        problem: "Group dining in offices and shared apartments suffered from agonizing back-and-forth messaging, fragmented order collections, and 68% cart abandonment when calculating individual splits, tips, and delivery fees.",
        process: "Instrumented full event telemetry using PostHog and analyzed 1,800 recorded checkout drop-offs. Discovered that friction was highest when one person was forced to front the total bill and chase coworkers for repayments.",
        solution: "Built 'Shared Table': a peer-to-peer WebSocket synchronized cart where anyone can join via an instant deep link or QR code, add their dishes, and select either split-equally or pay-for-your-own item checkout with instant UPI/Apple Pay settlement.",
        result: "Grew from 10k to 450k+ MAU with 0 paid advertising budget. Group cart basket sizes averaged 2.3x higher than single-diner orders, and checkout conversion improved by 28% across all university and tech-park clusters."
      },
      previewMockup: {
        type: "consumer-social",
        badge: "Session: 4 Diners Connected",
        stepCount: "Split Checkout Complete",
        confidence: "64.2% Conversion"
      }
    }
  ],

  services: [
    {
      number: "01",
      title: "0-to-1 Product Discovery & Strategy",
      tagline: "Uncovering non-obvious user pain points & scoping high-leverage MVPs",
      description: "From ambiguous customer signals to crystal-clear problem statements, user interview loops, TAM/SAM sizing, unit economics modeling, and prioritized product requirement docs (PRDs) that rally engineering and business teams.",
      deliverables: ["User Research Synthesis", "Opportunity Solution Trees", "Technical PRDs & Specs", "Competitive Moat Analysis"]
    },
    {
      number: "02",
      title: "AI Workflows & Human-in-the-Loop Systems",
      tagline: "Designing deterministic, scalable software around generative models",
      description: "Bridging the gap between raw LLM capabilities and reliable enterprise software. Crafting evaluation benchmarks, fallback mechanics, context engineering, latency budgets, and intuitive UX interfaces where users retain supervision.",
      deliverables: ["Agentic System Architecture", "Confidence Threshold UX", "Evaluation Frameworks", "Cost & Latency Optimization"]
    },
    {
      number: "03",
      title: "Marketplace Dynamics & Growth Loops",
      tagline: "Balancing two-sided liquidity, pricing incentives & retention mechanics",
      description: "Designing self-reinforcing viral loops, dynamic surge pricing algorithms, supply acquisition funnels, and churn mitigation playbooks based on first-principles cohort retention analysis.",
      deliverables: ["Liquidity & Matching Models", "P2P Viral Referral Loops", "Cohort Retention Funnels", "Unit Economics Dashboards"]
    },
    {
      number: "04",
      title: "High-Velocity Technical Execution",
      tagline: "Bridging code, design, and business with relentless momentum",
      description: "Working side-by-side with engineers to break complex epics into bi-weekly shippable increments. Comfortable reviewing schema designs, inspecting API payloads, writing SQL telemetry queries, and unblocking road blocks.",
      deliverables: ["Sprint Prioritization & Epics", "API Spec Collaboration", "PostHog/Mixpanel Telemetry", "Zero-to-Launch Execution"]
    }
  ],

  creativeEdge: [
    { skill: "Product Strategy & Roadmap Prioritization", percentage: 96, category: "Product Leadership" },
    { skill: "AI Systems & Deterministic Guardrails", percentage: 92, category: "Emerging Tech" },
    { skill: "Data Analytics, SQL & Metric Telemetry", percentage: 94, category: "Measurement" },
    { skill: "Marketplace Liquidity & Growth Loops", percentage: 90, category: "Business & Growth" },
    { skill: "User Empathy Mapping & Qualitative Testing", percentage: 95, category: "Discovery" },
    { skill: "Technical Architecture & API Systems", percentage: 88, category: "Engineering Synergy" }
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Lead Product Manager · AI & Core Systems",
      company: "SignalFlow AI",
      location: "Bangalore / Remote",
      description: "Leading zero-to-one product strategy and UX for enterprise agent workspace. Grew platform to 26 enterprise accounts and $1.1M in net expansion ARR."
    },
    {
      period: "2023 — 2024",
      role: "Senior Product Manager · Marketplace Logistics",
      company: "Wayfinder Systems",
      location: "Bangalore",
      description: "Owned dynamic matching algorithms and real-time operator console. Scaled fleet dispatch to 14,000 daily deliveries while slashing driver idle time by 31%."
    },
    {
      period: "2022 — 2023",
      role: "Founding PM & Product Builder",
      company: "Delizoo & Apteazy",
      location: "Bangalore",
      description: "Built and launched consumer social food discovery app. Reached 450k+ MAU with 68% organic referral loops and 2.3x basket size lift."
    },
    {
      period: "2021 — 2022",
      role: "Associate Product Manager · Data & Operations",
      company: "Codetracker / Tech Ventures",
      location: "Bangalore",
      description: "Analyzed product telemetry funnels, ran 40+ A/B conversion tests, and built operational dashboards reducing user drop-off by 22%."
    }
  ],

  testimonials: [
    {
      quote: "Charan is the rare product manager who doesn't need to be managed. He takes a completely fuzzy problem space, talks to 30 real users in a week, writes crystal-clear technical specs, and works hand-in-hand with engineering to ship on time.",
      author: "Aditya Roy",
      role: "Co-Founder & VP Engineering",
      company: "SignalFlow AI",
      avatar: "AR"
    },
    {
      quote: "His grasp of marketplace economics and real-time operations is world-class. What normally takes teams 6 months to validate, Charan prototyped, stress-tested, and rolled out to 14,000 drivers in under 8 weeks.",
      author: "Sneha Nair",
      role: "Head of Operations & Logistics",
      company: "Wayfinder",
      avatar: "SN"
    },
    {
      quote: "He bridges product intuition with deep technical empathy. Charan knows how databases behave, how APIs fail, and why users leave. If you need a founding PM to own 0-to-1 execution, hire him immediately.",
      author: "Karthik Verma",
      role: "Founder & CEO",
      company: "Delizoo Labs",
      avatar: "KV"
    }
  ]
};

