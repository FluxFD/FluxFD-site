import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "../Components/Icon";
import Reveal from "../Components/Reveal";
import PageHero from "../Components/PageHero";
import SolutionCard from "../Components/SolutionCard";
import CTASection from "../Components/CTASection";
import useSeo from "../hooks/useSeo";
import { solutions } from "../data/content";

const groups = [
  { id: "live", eyebrow: "Proven track record", title: "Live in production", desc: "Systems we designed and built that are running today." },
  { id: "development", eyebrow: "In development", title: "Currently building", desc: "Platforms in active development — early-access partners welcome." },
  { id: "soon", eyebrow: "Coming soon", title: "On the roadmap", desc: "Products we're cooking next." },
  { id: "service", eyebrow: "Solutions", title: "What else we build", desc: "Solutions we deliver and customize for each client." },
];

const filters = [
  { id: "all", label: "All" },
  { id: "compliance", label: "BIR Compliance" },
  { id: "enterprise", label: "Enterprise" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "infrastructure", label: "Infrastructure" },
];

export default function Project() {
  useSeo({
    title: "Projects – Live Systems, Products & Solutions",
    description: "Live systems by FluXenovia: finance & administration system, volunteer portal, loyalty app, BIR CAS and BIR EIS e-invoicing. Plus our Asset Management and Document Management platforms.",
    path: "/projects",
  });
  const [filter, setFilter] = useState("all");
  const liveCount = solutions.filter((s) => s.status === "live").length;

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Real systems,"
        highlight="really running."
        subtitle="From government-workflow finance systems to BIR e-invoicing and a coffee-brand loyalty app — here's what we've shipped, what we're building, and what's next."
      >
        <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
          {[[liveCount, "Live systems"], [2, "BIR compliance builds"], [2, "Own products in the works"]].map(([n, l]) => (
            <div key={l} className="card p-4 bg-ink-950/50">
              <p className="font-display text-3xl font-bold text-white">{n}</p>
              <p className="mt-1 text-xs text-slate-500">{l}</p>
            </div>
          ))}
        </div>
      </PageHero>

      <div className="sticky top-20 z-30 border-y border-white/5 bg-ink-950/80 backdrop-blur-xl">
        <div className="container-x flex gap-2 overflow-x-auto py-3 no-scrollbar">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f.id ? "bg-flux-cyan text-ink-950" : "border border-white/10 text-slate-300 hover:border-white/30"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {groups.map((g) => {
        const list = solutions.filter((s) => s.status === g.id && (filter === "all" || s.category === filter));
        if (!list.length) return null;
        return (
          <section key={g.id} className="container-x py-16">
            <Reveal className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow mb-3">{g.eyebrow}</p>
                <h2 className="font-display text-3xl font-bold text-white">{g.title}</h2>
              </div>
              <p className="text-slate-400 md:max-w-sm md:text-right">{g.desc}</p>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) * 80}><SolutionCard s={s} /></Reveal>
              ))}
            </div>
          </section>
        );
      })}

      {filter !== "all" && !solutions.some((s) => s.category === filter) && (
        <p className="container-x py-16 text-center text-slate-500">Nothing here yet. <Link to="/contact" className="text-flux-cyan">Tell us about your project.</Link></p>
      )}

      <section className="container-x pt-8">
        <Reveal className="card flex flex-col items-center gap-4 p-8 text-center md:flex-row md:text-left">
          <Icon name="shield" size={28} className="shrink-0 text-flux-cyan" />
          <p className="flex-1 text-sm text-slate-400">
            Several of our clients are under non-disclosure agreements, so names and screenshots are withheld. Visuals on this page are
            illustrations. Detailed references are available on request during a consultation.
          </p>
        </Reveal>
      </section>

      <CTASection title="Have a project in mind?" />
    </>
  );
}
