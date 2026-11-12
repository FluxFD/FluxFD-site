import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { birCompliance } from "../data/content";

/* ───────────────────────── BIR compliance ───────────────────────── */
export default function BirSection() {
  return (
    <section className="band relative overflow-hidden py-24 md:py-32">
      <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden="true" />
      <div className="container-x relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="eyebrow mb-4">BIR compliance</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            CAS & e-invoicing, <span className="text-gradient">already done for real clients.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">{birCompliance.intro}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {birCompliance.flow.map((f, i) => (
              <span key={f} className="inline-flex items-center gap-2 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5">{f}</span>
                {i < birCompliance.flow.length - 1 && <Icon name="arrow" size={14} className="text-flux-cyan" />}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary justify-center">Check your BIR readiness <Icon name="arrow" size={18} /></Link>
            <Link to="/projects/bir-eis" className="btn-ghost">See our EIS project</Link>
          </div>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {birCompliance.offers.map((o, i) => (
            <Reveal key={o.title} delay={i * 80} className="card p-7 bg-ink-950/50">
              <div className="icon-tile"><Icon name={o.icon} /></div>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{o.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{o.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

