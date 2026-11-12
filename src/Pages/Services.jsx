import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../Components/Icon";
import Reveal from "../Components/Reveal";
import PageHero from "../Components/PageHero";
import SectionHeading from "../Components/SectionHeading";
import CTASection from "../Components/CTASection";
import BirSection from "../Components/BirSection";
import useSeo from "../hooks/useSeo";
import { pillars, process } from "../data/content";

const supportPlans = [
  { name: "Essential", for: "Small offices", points: ["Remote helpdesk (business hours)", "Monthly health check", "Patch & antivirus management", "Asset inventory"] },
  { name: "Business", for: "Growing teams", featured: true, points: ["Everything in Essential", "Scheduled on-site visits", "Backup monitoring", "Network & firewall management", "Priority response SLA"] },
  { name: "Enterprise", for: "Multi-site & critical ops", points: ["Everything in Business", "24/7 monitoring & response", "Dedicated account engineer", "Quarterly IT roadmap review", "Custom SLA"] },
];

export default function Services() {
  useSeo({
    title: "Services – Software Development, IT Infrastructure & Hardware",
    description: "Custom software, BIR CAS & EIS compliance, web & mobile apps, networking, servers, cybersecurity, CCTV, hardware supply and managed IT support from FluXenovia.",
    path: "/services",
  });
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your business needs to"
        highlight="run on technology."
        subtitle="Pick one service or let us handle the whole stack — from the app your customers use to the switch in your server room."
      >
        <div className="mt-10 flex flex-wrap gap-3">
          {[...pillars, { id: "bir", icon: "receipt", title: "BIR Compliance" }, { id: "support", icon: "headset", title: "Support Plans" }].map((p) => (
            <a key={p.id} href={`#${p.id}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-slate-200 hover:border-flux-cyan/50 transition">
              <Icon name={p.icon} size={16} className="text-flux-cyan" />{p.title}
            </a>
          ))}
        </div>
      </PageHero>

      {pillars.map((p, idx) => (
        <div key={p.id}>
        <section id={p.id} className={`scroll-mt-24 py-20 md:py-28 ${idx === 2 ? "band" : ""}`}>
          <div className="container-x">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4 lg:sticky lg:top-28 self-start">
                <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${p.color}`} />
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">0{idx + 1} — {p.eyebrow}</p>
                <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-white">{p.title}</h2>
                <p className="mt-4 text-lg text-slate-400 leading-relaxed">{p.summary}</p>
                <Link to="/contact" className="btn-primary mt-8">Discuss your project <Icon name="arrow" size={18} /></Link>
              </Reveal>
              <div className="lg:col-span-8 grid gap-5 sm:grid-cols-2">
                {p.services.map((s, i) => (
                  <Reveal key={s.name} delay={i * 60} className="card card-hover p-7">
                    <div className="icon-tile"><Icon name={s.icon} /></div>
                    <h3 className="mt-6 font-display text-lg font-semibold text-white">{s.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>
        {p.id === "software" && <div id="bir" className="scroll-mt-20"><BirSection /></div>}
        </div>
      ))}

      <section id="support" className="container-x scroll-mt-24 py-24 md:py-32">
        <SectionHeading
          eyebrow="Managed IT Support"
          title="Support plans that keep you running"
          subtitle="Monthly plans for businesses that want IT handled. Pricing depends on users, devices and sites — ask for a tailored quote."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {supportPlans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 100}>
              <div className={`card relative h-full p-8 ${plan.featured ? "border-flux-cyan/50 shadow-[0_20px_60px_-25px_rgba(34,228,242,.5)]" : ""}`}>
                {plan.featured && <span className="absolute -top-3 left-8 rounded-full bg-flux-cyan px-3 py-1 text-xs font-bold text-ink-950">Most popular</span>}
                <h3 className="font-display text-2xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{plan.for}</p>
                <p className="mt-6 font-display text-3xl font-bold text-white">Custom<span className="text-base font-normal text-slate-500"> / month</span></p>
                <ul className="mt-8 space-y-3">
                  {plan.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-slate-300"><Icon name="check" size={18} strokeWidth={2.5} className="shrink-0 text-flux-cyan" />{pt}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`${plan.featured ? "btn-primary" : "btn-ghost"} mt-10 w-full justify-center`}>Request quote</Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band py-20">
        <div className="container-x grid gap-6 md:grid-cols-4">
          {process.map((p) => (
            <Reveal key={p.step}>
              <p className="font-display text-sm font-bold text-flux-cyan">{p.step}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
