import { Link, useParams } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import PageHero from "./PageHero";
import CTASection from "./CTASection";
import SolutionCard from "./SolutionCard";
import ProjectVisual from "./ProjectVisual";
import StatusBadge from "./StatusBadge";
import useSeo from "../hooks/useSeo";
import { solutions } from "../data/content";

export default function ProjectDetails() {
  const { slug } = useParams();
  const s = solutions.find((x) => x.slug === slug);
  useSeo({ title: s ? s.title : "Project not found", description: s?.summary, path: `/projects/${slug}` });

  if (!s) {
    return (
      <PageHero title="Project" highlight="not found." subtitle="It may have moved.">
        <Link to="/projects" className="btn-primary mt-8">Back to projects</Link>
      </PageHero>
    );
  }
  const others = solutions.filter((x) => x.slug !== slug && x.status === s.status).concat(solutions.filter((x) => x.slug !== slug && x.status !== s.status)).slice(0, 3);
  const cta = { live: "Want something like this?", development: "Request early access", soon: "Get notified at launch", service: "Talk to us about this" }[s.status];

  return (
    <>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40">
        <div className="hero-bg" aria-hidden="true" />
        <div className="container-x relative">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
            <Icon name="arrow" size={16} className="rotate-180" /> All projects
          </Link>
          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status={s.status} />
                <span className="chip">{s.tag}</span>
              </div>
              <h1 className="mt-6 font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-[1.05]">{s.title}</h1>
              {s.client && <p className="mt-4 flex items-center gap-2 text-slate-400"><Icon name={s.icon} size={18} className="text-flux-cyan" />{s.client}</p>}
              <p className="mt-6 text-lg leading-relaxed text-slate-300">{s.summary}</p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary justify-center">{cta} <Icon name="arrow" size={18} /></Link>
              </div>
            </Reveal>
            <Reveal delay={120}><div className="card overflow-hidden p-2"><ProjectVisual variant={s.visual} size="hero" /></div></Reveal>
          </div>
        </div>
      </section>

      <section className="container-x grid gap-8 py-12 lg:grid-cols-3">
        <Reveal className="card p-8 lg:col-span-2">
          <h2 className="font-display text-2xl font-bold text-white">{s.status === "live" ? "What it does" : "Key capabilities"}</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {s.features.map((f) => (
              <li key={f} className="flex gap-3 text-slate-300">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-flux-cyan/15 text-flux-cyan"><Icon name="check" size={14} strokeWidth={3} /></span>{f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="card p-8">
          <div className="icon-tile"><Icon name={s.icon} /></div>
          <h2 className="mt-6 font-display text-lg font-semibold text-white">Built with</h2>
          <div className="mt-4 flex flex-wrap gap-2">{s.stack.map((t) => <span key={t} className="chip">{t}</span>)}</div>
          <p className="mt-6 text-sm text-slate-400">Every deployment is adapted to the client&rsquo;s existing systems, process and budget.</p>
        </Reveal>
      </section>

      {s.lifecycle && (
        <section className="container-x py-12">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-white">Asset lifecycle</h2>
            <p className="mt-2 text-slate-400">Every stage updates the same continuing asset record — never a disconnected history.</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
            {s.lifecycle.map((step, i) => (
              <Reveal key={step} delay={i * 40} className="card p-4">
                <p className="font-display text-xs font-bold text-flux-cyan">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-1 font-semibold text-white">{step}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {s.flow && (
        <section className="container-x py-12">
          <Reveal><h2 className="font-display text-2xl font-bold text-white">End-to-end invoice flow</h2></Reveal>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {s.flow.map((f, i) => (
              <span key={f} className="inline-flex items-center gap-3">
                <span className="card px-4 py-3 text-sm text-white"><span className="mr-2 text-flux-cyan">{i + 1}</span>{f}</span>
                {i < s.flow.length - 1 && <Icon name="arrow" size={16} className="text-flux-cyan" />}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-500">No invoice gets lost between the ERP and BIR — every record ends with a known status.</p>
        </section>
      )}

      {s.phases && (
        <section className="container-x py-12">
          <Reveal><h2 className="font-display text-2xl font-bold text-white">Delivery roadmap</h2></Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {s.phases.map(([t, d], i) => (
              <Reveal key={t} delay={i * 60} className="card p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phase {i + 1}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{t}</h3>
                <p className="mt-1 text-sm text-slate-400">{d}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="container-x py-16">
        <h2 className="mb-8 font-display text-2xl font-bold text-white">More projects</h2>
        <div className="grid gap-6 md:grid-cols-3">{others.map((o) => <SolutionCard key={o.slug} s={o} />)}</div>
      </section>
      <CTASection />
    </>
  );
}
