/**
 * All marketing copy lives here so it can be edited without touching layouts.
 */

/* Three business pillars — used on Home, Services and in the footer. */
export const pillars = [
  {
    id: "software",
    icon: "code",
    eyebrow: "Build",
    title: "Software Development",
    summary:
      "Custom web, mobile and enterprise systems designed around how your business actually works.",
    color: "from-flux-cyan to-flux-teal",
    services: [
      { icon: "globe", name: "Web Development", desc: "Corporate websites, portals, e-commerce and web apps that load fast and rank well." },
      { icon: "mobile", name: "Mobile Apps", desc: "Android and iOS apps built cross-platform so you launch on both stores at once." },
      { icon: "layers", name: "Enterprise Systems", desc: "ERP, HR, inventory, POS and asset-management systems tailored to your process." },
      { icon: "brain", name: "AI & Automation", desc: "Chatbots, document processing and workflow automation that save hours every week." },
      { icon: "receipt", name: "BIR Compliance (CAS / EIS)", desc: "Computerized Accounting Systems and e-invoicing integration with BIR EIS — already live for our clients." },
      { icon: "puzzle", name: "Integrations, Cloud & APIs", desc: "Connect existing systems, government portals and third-party services; deploy on AWS, Azure or Google Cloud." },
    ],
  },
  {
    id: "infrastructure",
    icon: "network",
    eyebrow: "Connect",
    title: "IT Infrastructure",
    summary:
      "Networks, servers and security set up properly the first time — and documented so they stay that way.",
    color: "from-flux-violet to-flux-cyan",
    services: [
      { icon: "network", name: "Networking", desc: "Structured cabling, LAN/WAN, Wi-Fi coverage, VLANs, VPN and multi-site links." },
      { icon: "server", name: "Servers & Storage", desc: "Server installation, virtualization, NAS/SAN, backup and disaster recovery." },
      { icon: "shield", name: "Cybersecurity", desc: "Firewalls, endpoint protection, access control and security assessments." },
      { icon: "camera", name: "CCTV & Access Control", desc: "IP cameras, NVRs, biometrics and door access for offices and sites." },
      { icon: "cloud", name: "Microsoft 365 & Google Workspace", desc: "Email, licensing, migration and admin for your whole team." },
      { icon: "wrench", name: "Office IT Setup", desc: "Complete IT fit-out for new offices, branches and relocations." },
    ],
  },
  {
    id: "hardware",
    icon: "box",
    eyebrow: "Supply",
    title: "Hardware & Support",
    summary:
      "We source, deliver, install and support the equipment — so you have one accountable partner, not five vendors.",
    color: "from-flux-red to-flux-violet",
    services: [
      { icon: "laptop", name: "Computers & Laptops", desc: "Business desktops, laptops and workstations configured and ready to use." },
      { icon: "router", name: "Network Equipment", desc: "Routers, switches, access points, firewalls and racks." },
      { icon: "server", name: "Servers & Storage", desc: "Rack and tower servers, NAS, UPS and power protection." },
      { icon: "printer", name: "Printers & Peripherals", desc: "Printers, scanners, monitors, POS hardware and accessories." },
      { icon: "headset", name: "Managed IT Support", desc: "Helpdesk, on-site visits, preventive maintenance and SLA-backed contracts." },
      { icon: "shield", name: "Warranty & After-Sales", desc: "We handle warranty claims, replacements and repairs for you." },
    ],
  },
];

/* Hardware catalog categories (Products page). Brands are examples of what can be sourced. */
export const productCategories = [
  { icon: "laptop", name: "Laptops & Desktops", items: ["Business laptops", "Desktop PCs & all-in-ones", "Workstations", "Monitors & docking"], brands: "Dell · HP · Lenovo · Acer · ASUS · Apple" },
  { icon: "server", name: "Servers & Storage", items: ["Rack & tower servers", "NAS / SAN storage", "Backup appliances", "UPS & power"], brands: "Dell · HPE · Lenovo · Synology · QNAP · APC" },
  { icon: "router", name: "Networking", items: ["Switches & routers", "Wi-Fi access points", "Firewalls", "Cabling & racks"], brands: "Cisco · Ubiquiti · TP-Link · MikroTik · Fortinet · Aruba" },
  { icon: "camera", name: "Security & Surveillance", items: ["IP / CCTV cameras", "NVR / DVR systems", "Biometric attendance", "Door access control"], brands: "Hikvision · Dahua · ZKTeco · Axis" },
  { icon: "printer", name: "Printers & Office Devices", items: ["Laser & inkjet printers", "Multifunction copiers", "Scanners", "Consumables"], brands: "Ricoh · Epson · Brother · Canon · HP" },
  { icon: "tag", name: "POS & Retail Hardware", items: ["POS terminals", "Receipt printers", "Barcode scanners", "Cash drawers"], brands: "Epson · Zebra · Honeywell · Posiflex" },
  { icon: "cloud", name: "Software Licenses", items: ["Microsoft 365 & Windows", "Antivirus / EDR", "Google Workspace", "Design & productivity"], brands: "Microsoft · Google · ESET · Kaspersky · Adobe" },
  { icon: "cpu", name: "Components & Accessories", items: ["RAM, SSD & upgrades", "Keyboards & mice", "Headsets & webcams", "Cables & adapters"], brands: "Kingston · Samsung · Logitech · Jabra" },
];

/* Why-us points (Home + About). */
export const differentiators = [
  { icon: "handshake", title: "One accountable partner", desc: "Software, network, hardware and support under one contract. No finger-pointing between vendors." },
  { icon: "rocket", title: "Startup speed, business discipline", desc: "We started as a lean dev team, so we move fast — now with the processes, documentation and SLAs of a registered company." },
  { icon: "users", title: "Engineers you can talk to", desc: "You work directly with the developers and technicians doing the work, not a call centre." },
  { icon: "chart", title: "Built to scale", desc: "Clean code, documented networks and standard hardware so your systems grow with you." },
];

/* Engagement process. */
export const process = [
  { step: "01", title: "Discover", desc: "A free consultation to understand your goals, budget and current setup." },
  { step: "02", title: "Propose", desc: "A clear scope, timeline and quotation — software, hardware and services itemized." },
  { step: "03", title: "Deliver", desc: "We build, install and configure, with regular demos and progress updates." },
  { step: "04", title: "Support", desc: "Training, handover documents and ongoing maintenance or managed support." },
];

/**
 * Projects & products.
 * status: "live" (in production) · "development" (being built) · "soon" (coming soon) · "service" (offering)
 * visual: which illustrated mockup to show — dashboard | phone | invoice | portal | docs | network | finance | chat
 */
export const solutions = [
  /* ── Live systems in production (from our proven track record) ── */
  {
    slug: "finance-administration-system",
    status: "live",
    category: "enterprise",
    title: "Finance & Administration Information System",
    client: "Government-sector client · under NDA",
    tag: "Enterprise",
    icon: "building",
    visual: "finance",
    summary: "Finance and administrative processes digitized on top of a government workflow — approvals, records and reporting in one system.",
    features: ["Finance and disbursement workflows", "Administrative records and requests", "Role-based approvals and audit trail", "Management reports"],
    stack: ["Web application", "Relational database", "Role-based access"],
  },
  {
    slug: "volunteer-portal",
    status: "live",
    category: "web",
    title: "Volunteer Portal",
    client: "Client under NDA",
    tag: "Web Portal",
    icon: "users",
    visual: "portal",
    summary: "A portal that manages volunteer records, participation and coordination — replacing spreadsheets and group chats.",
    features: ["Volunteer registration and profiles", "Event and participation tracking", "Coordination and announcements", "Admin dashboard and exports"],
    stack: ["Web portal", "Responsive design", "Admin console"],
  },
  {
    slug: "loyalty-application",
    status: "live",
    category: "mobile",
    title: "Loyalty Application",
    client: "Toby’s Estate · BGC, Taguig",
    tag: "Mobile",
    icon: "coffee",
    visual: "phone",
    summary: "Rewards and repeat-visit engagement for a specialty coffee brand — customers earn, track and redeem right from their phone.",
    features: ["Digital stamp / points card", "Rewards redemption", "Customer profiles and visit history", "Promotions for repeat visits"],
    stack: ["Mobile app", "QR", "Cloud backend"],
  },
  {
    slug: "bir-cas",
    status: "live",
    category: "compliance",
    title: "BIR Computerized Accounting System (CAS)",
    client: "Multi-branch company · under NDA",
    tag: "BIR Compliance",
    icon: "receipt",
    visual: "invoice",
    summary: "A BIR-compliant Computerized Accounting System covering a head office and all of its sub-branches.",
    features: ["Head office and multi-branch books", "BIR-required journals, ledgers and reports", "Audit trail and access controls", "Consolidated reporting across branches"],
    stack: ["Accounting system", "Multi-branch", "BIR CAS"],
  },
  {
    slug: "bir-eis",
    status: "live",
    category: "compliance",
    title: "BIR EIS E-Invoicing Compliance",
    client: "Export industry",
    tag: "BIR Compliance",
    icon: "send",
    visual: "eis",
    summary: "Electronic Invoicing System (EIS) compliance for exporters — integrated with the client’s BIR CAS platform.",
    features: ["Invoice payload mapping & validation", "Secure transmission to BIR EIS", "Acknowledgement, error and retry tracking", "Daily reconciliation dashboard"],
    stack: ["Integration middleware", "BIR EIS API", "Queue & audit store"],
    flow: ["Create invoice", "Approve / post", "Build payload", "Validate", "Transmit to BIR", "Reconcile"],
  },

  /* ── In development ── */
  {
    slug: "asset-management-system",
    status: "development",
    category: "enterprise",
    title: "Asset Management System",
    client: "Currently in development",
    tag: "Web + Mobile",
    icon: "database",
    visual: "dashboard",
    summary: "One synchronized web + mobile platform for asset control, QR verification and financial valuation — one trusted record for every asset, from registration to retirement.",
    features: [
      "Central asset register with custody & location",
      "QR tagging and mobile scanning",
      "Immutable movement trail for transfers & disposals",
      "Mobile audits that flag missing, new & duplicate items",
      "Depreciation engine with live book value",
      "Executive dashboard, PDF/Excel reports & alerts",
    ],
    stack: ["Responsive web app", "Mobile QR scanner", "Central API + database", "RBAC & encryption"],
    phases: [
      ["Foundation", "Requirements, roles, architecture, security, data model"],
      ["Core Asset Register", "Repository, registration, documents, status, history"],
      ["QR + Mobile", "QR generation, scan flow, verification and sync"],
      ["Movement + Audit", "Transfers, monitoring, audit planning, discrepancies"],
      ["Financial + Reports", "Depreciation, book value, dashboards and exports"],
      ["Hardening + Launch", "Security testing, UAT, training, deployment, support"],
    ],
    lifecycle: ["Register", "Tag", "Assign", "Monitor", "Move", "Scan", "Audit", "Depreciate", "Report", "Retire"],
  },

  /* ── Coming soon ── */
  {
    slug: "document-management-system",
    status: "soon",
    category: "enterprise",
    title: "Document Management System",
    client: "Coming soon",
    tag: "Archiving",
    icon: "archive",
    visual: "docs",
    summary: "We’re cooking a document management system built for archiving — scan, index, search and retrieve records in seconds, with retention rules and a full audit trail.",
    features: ["Digital archiving of scanned & born-digital files", "Indexing, tagging and full-text search", "Retention schedules and disposal rules", "Access control and audit logs"],
    stack: ["Web app", "OCR", "Secure storage"],
  },

  /* ── What else we build ── */
  {
    slug: "business-websites",
    status: "service",
    category: "web",
    title: "Business Websites & Portals",
    tag: "Web",
    icon: "globe",
    visual: "portal",
    summary: "Conversion-focused company websites with SEO, analytics and lead capture built in from day one.",
    features: ["Mobile-first design", "SEO & Google Business setup", "Lead forms & chat integration", "Content you can edit yourself"],
    stack: ["React", "Next.js", "WordPress", "Tailwind"],
  },
  {
    slug: "inventory-pos",
    status: "service",
    category: "enterprise",
    title: "Inventory & POS Platform",
    tag: "Enterprise",
    icon: "chart",
    visual: "dashboard",
    summary: "Multi-branch inventory, sales and BIR-ready reporting — paired with the POS hardware to run it.",
    features: ["Real-time stock across branches", "Purchase orders & suppliers", "Sales and BIR-ready reports", "Works with receipt printers & scanners"],
    stack: ["React", "Laravel", "MySQL", "POS hardware"],
  },
  {
    slug: "office-network",
    status: "service",
    category: "infrastructure",
    title: "Office Network & Server Deployment",
    tag: "Infrastructure",
    icon: "network",
    visual: "network",
    summary: "End-to-end office IT: cabling, Wi-Fi, firewall, file server, backup and CCTV — delivered as one project.",
    features: ["Site survey & network design", "Structured cabling & rack build", "Server, NAS & backup setup", "As-built documentation"],
    stack: ["Cisco / Ubiquiti", "Windows Server", "Synology", "Fortinet"],
  },
  {
    slug: "ai-automation",
    status: "service",
    category: "web",
    title: "AI Assistants & Automation",
    tag: "AI",
    icon: "brain",
    visual: "chat",
    summary: "Chatbots and automations that answer customer questions, read documents and move data between systems.",
    features: ["Website & Messenger chatbots", "Document / invoice extraction", "Workflow automation", "Private, secure deployment"],
    stack: ["Python", "LLM APIs", "n8n", "Cloud"],
  },
];

export const statusMeta = {
  live: { label: "Live", dot: "bg-emerald-400", text: "text-emerald-300", ring: "border-emerald-400/30 bg-emerald-400/10" },
  development: { label: "In development", dot: "bg-amber-400", text: "text-amber-300", ring: "border-amber-400/30 bg-amber-400/10" },
  soon: { label: "Coming soon", dot: "bg-flux-violet", text: "text-violet-300", ring: "border-flux-violet/40 bg-flux-violet/10" },
  service: { label: "Solution", dot: "bg-flux-cyan", text: "text-cyan-300", ring: "border-flux-cyan/30 bg-flux-cyan/10" },
};

/* BIR compliance offering (Services page + Home). */
export const birCompliance = {
  intro:
    "Philippine businesses are moving to computerized books and electronic invoicing. We’ve already built and deployed BIR CAS and EIS systems that run in production — and we can do the same for you, without replacing the systems you already use.",
  offers: [
    { icon: "receipt", title: "Computerized Accounting System (CAS)", desc: "BIR-compliant books, journals and reports for single or multi-branch companies." },
    { icon: "send", title: "E-Invoicing / EIS Integration", desc: "An integration layer that maps, validates and transmits invoices from your ERP, POS or billing system to BIR EIS." },
    { icon: "shield", title: "Controls & Audit Trail", desc: "Validation before submission, retry queues, acknowledgement storage and immutable logs." },
    { icon: "chart", title: "Reconciliation Dashboard", desc: "Finance sees pending, sent, rejected and fixed invoices — no invoice gets lost." },
  ],
  flow: ["Create invoice", "Approve / post", "Build payload", "Validate", "Transmit to BIR", "Reconcile"],
};

/* Technologies strip. */
export const technologies = [
  "React", "Next.js", "Node.js", "Laravel", "Python", "Flutter", "React Native", "PostgreSQL",
  "MySQL", "Firebase", "AWS", "Azure", "Google Cloud", "Docker", "Windows Server", "Linux",
  "Cisco", "Ubiquiti", "Fortinet", "Microsoft 365",
];

/* Industries served. */
export const industries = [
  "Retail & E-commerce", "Healthcare & Clinics", "Education", "Real Estate", "Logistics",
  "Manufacturing", "Professional Services", "Food & Hospitality", "BPO", "Government & LGUs",
];

/* FAQs (also good for SEO). */
export const faqs = [
  {
    q: "What exactly does FluXenovia do?",
    a: "We are a software development and IT services company. We build custom software (web, mobile, enterprise systems), set up IT infrastructure (networks, servers, security, CCTV), and supply and support the hardware your business runs on.",
  },
  {
    q: "Are you still FluxFusion Devs?",
    a: "Yes — FluxFusion Devs started as a freelance development team. We are now a registered business operating as FluXenovia Software Development Services, with the same core team and a wider range of services.",
  },
  {
    q: "Can you supply hardware even if you are not building our software?",
    a: "Absolutely. You can buy laptops, servers, network equipment, printers, CCTV and licenses from us on their own. We can also deliver, install, configure and support them.",
  },
  {
    q: "Do you offer after-sales support and maintenance?",
    a: "Yes. Every project includes a warranty period, and we offer monthly managed-support plans with helpdesk, remote and on-site support, and preventive maintenance.",
  },
  {
    q: "Can you help us comply with BIR CAS and e-invoicing (EIS)?",
    a: "Yes. We have live BIR CAS and EIS compliance systems in production, including a multi-branch CAS and an EIS integration for an exporter. We can build a compliant system or add an integration layer to your existing ERP, POS or billing system without replacing it.",
  },
  {
    q: "How much does a project cost?",
    a: "It depends on scope. After a free consultation we send an itemized quotation. Hardware is quoted per unit; software is quoted per project or as a monthly retainer.",
  },
  {
    q: "Where do you operate?",
    a: "We are based in Metro Manila and serve clients across the Philippines. Software projects and remote support can be delivered anywhere.",
  },
];
