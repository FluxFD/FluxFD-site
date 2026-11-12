import { Link } from "react-router-dom";
import Icon from "../Components/Icon";
import Reveal from "../Components/Reveal";
import SectionHeading from "../Components/SectionHeading";
import CTASection from "../Components/CTASection";
import Faq from "../Components/Faq";
import FluxLines from "../Components/FluxLines";
import ProjectVisual from "../Components/ProjectVisual";
import StatusBadge from "../Components/StatusBadge";
import BirSection from "../Components/BirSection";
import useSeo from "../hooks/useSeo";
import { site } from "../config/site";
import { pillars, differentiators, process, solutions, technologies, industries } from "../data/content";

const live = solutions.filter((s) => s.status === "live");
const ams = solutions.find((s) => s.slug === "asset-management-system");
const dms = solutions.find((s) => s.slug === "document-management-system");

export default function Home() {
  useSeo({
    description:
      "FluXenovia Software Development Services — custom software, BIR CAS & EIS compliance, web & mobile apps, IT infrastructure, networking, servers, hardware supply and managed IT support in the Philippines.",
    path: "/",
  });

  return (
    <>
      <Hero />
      <TechMarquee />
      <Pillars />
      <TrackRecord />
      <Cooking />
      <BirSection />
      <WhyUs />
      <Process />
      <Industries />
      <Faq />
      <CTASection />
    </>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 lg:pb-28">
      <FluxLines className="translate-y-[22%] opacity-60" />
      <div className="hero-bg" aria-hidden="true" />
      <div className="container-x relative grid items-center gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-1.5 pr-4 text-sm text-slate-300 backdrop-blur hover:border-flux-cyan/40 transition">
            <span className="whitespace-nowrap rounded-full bg-flux-cyan/15 px-2.5 py-0.5 text-xs font-semibold text-flux-cyan">New name</span>
            <span>{site.formerName} is now FluXenovia</span>
            <Icon name="arrow" size={14} className="shrink-0" />
          </Link>
          <h1 className="mt-8 font-display text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl font-bold tracking-tight text-white">
            Software, networks <br className="hidden sm:block" />& hardware —{" "}
            <span className="text-gradient">one partner.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-slate-400">
            We build the systems your business runs on — including BIR-compliant ones — set up the infrastructure
            underneath them, supply the equipment, and stay on to support all of it.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn-primary justify-center">Get a free consultation <Icon name="arrow" size={18} /></Link>
            <Link to="/projects" className="btn-ghost">See our live systems</Link>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            {["Registered PH business", `Building since ${site.founded}`, "BIR CAS & EIS experience", "Supply + install + support"].map((t) => (
              <li key={t} className="flex items-center gap-2"><Icon name="check" size={16} className="text-flux-cyan" strokeWidth={2.5} />{t}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-5">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  const layers = [
    { icon: "code", label: "Software", sub: "Web · Mobile · Enterprise · BIR", tone: "text-flux-cyan", ring: "border-flux-cyan/30" },
    { icon: "network", label: "Infrastructure", sub: "Network · Servers · Security", tone: "text-flux-violet", ring: "border-flux-violet/30" },
    { icon: "box", label: "Hardware & Support", sub: "Supply · Install · Maintain", tone: "text-flux-red", ring: "border-flux-red/30" },
  ];
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-flux-cyan/20 via-flux-violet/15 to-flux-red/20 blur-3xl animate-glow" aria-hidden="true" />
      <div className="relative card p-6 sm:p-8 bg-ink-950/60">
        <div className="flex items-center justify-between">
          <img src="/fluxenovia-mark.png" alt="FluXenovia mark" className="h-10 w-auto animate-float" />
          <span className="chip"><span className="mr-2 h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />{live.length} systems live</span>
        </div>
        <div className="mt-8 space-y-3">
          {layers.map((l, i) => (
            <div key={l.label} className={`flex items-center gap-4 rounded-xl border ${l.ring} bg-ink-950/70 p-4`} style={{ marginLeft: `${i * 14}px` }}>
              <div className={`icon-tile ${l.tone}`}><Icon name={l.icon} /></div>
              <div className="min-w-0">
                <p className="font-display font-semibold text-white">{l.label}</p>
                <p className="truncate text-sm text-slate-500">{l.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border border-white/5 bg-white/[0.02] p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Running in production</p>
          <ul className="mt-3 space-y-2">
            {live.slice(0, 4).map((s) => (
              <li key={s.slug} className="flex items-center gap-2.5 text-sm text-slate-300">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                <span className="truncate">{s.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

/* ───────────────────────── Tech marquee ───────────────────────── */
function TechMarquee() {
  const row = [...technologies, ...technologies];
  return (
    <section aria-label="Technologies we work with" className="band py-6 overflow-hidden">
      <div className="flex w-max animate-marquee gap-10 pr-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-lg text-slate-500">
            {t}<span className="h-1.5 w-1.5 rounded-full bg-flux-cyan/50" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Pillars ───────────────────────── */
function Pillars() {
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeading
        eyebrow="What we do"
        title={<>Three services. <span className="text-gradient">One accountable team.</span></>}
        subtitle="Most businesses juggle a developer, a network guy and a hardware supplier. We bring all three together — so projects move faster and someone owns the result."
      />
      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.id} delay={i * 100}>
            <Link to={`/services#${p.id}`} className="group card card-hover relative flex h-full flex-col overflow-hidden p-8">
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.color}`} />
              <div className="flex items-center justify-between">
                <div className="icon-tile"><Icon name={p.icon} /></div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{p.eyebrow}</span>
              </div>
              <h3 className="mt-8 font-display text-2xl font-bold text-white">{p.title}</h3>
              <p className="mt-3 text-slate-400 leading-relaxed">{p.summary}</p>
              <ul className="mt-6 space-y-2.5 flex-1">
                {p.services.slice(0, 4).map((s) => (
                  <li key={s.name} className="flex items-center gap-3 text-sm text-slate-300">
                    <Icon name="check" size={16} strokeWidth={2.5} className="text-flux-cyan" />{s.name}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-flux-cyan transition-colors">
                Learn more <Icon name="arrow" size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Proven track record ───────────────────────── */
function TrackRecord() {
  return (
    <section className="band relative overflow-hidden py-24 md:py-32">
      <div className="container-x relative">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">Proven track record</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Live systems <span className="text-gradient">in production.</span>
            </h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              Systems we designed and built that are running today — our proof of delivery integrity.
            </p>
          </Reveal>
          <Reveal><Link to="/projects" className="btn-ghost">All projects <Icon name="arrow" size={18} /></Link></Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
          {live.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Link to={`/projects/${s.slug}`} className="group card card-hover flex h-full flex-col overflow-hidden">
                <div className="relative">
                  <ProjectVisual variant={s.visual} />
                  <StatusBadge status="live" className="absolute left-4 top-4 backdrop-blur" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-slate-500"><Icon name={s.icon} size={14} className="text-flux-cyan" />{s.client}</div>
                  <h3 className="mt-2 font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-flux-cyan">
                    View project <Icon name="arrowUpRight" size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── What's cooking ───────────────────────── */
function Cooking() {
  return (
    <section className="container-x py-24 md:py-32">
      <SectionHeading
        eyebrow="What we're cooking"
        title={<>Our own products, <span className="text-gradient">in the works.</span></>}
        subtitle="Beyond client projects, we're building ready-to-deploy platforms for Philippine businesses. Want early access? Talk to us."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        {/* Asset Management — in development */}
        <Reveal className="lg:col-span-3">
          <div className="card relative h-full overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-amber-400 via-flux-cyan to-transparent" />
            <ProjectVisual variant="dashboard" size="hero" />
            <div className="p-8">
              <div className="flex flex-wrap items-center gap-3">
                <StatusBadge status="development" />
                <span className="chip">Enterprise platform</span>
              </div>
              <h3 className="mt-5 font-display text-2xl md:text-3xl font-bold text-white">{ams.title}</h3>
              <p className="mt-3 text-slate-400 leading-relaxed">{ams.summary}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {ams.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-slate-300">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-flux-cyan/15 text-flux-cyan"><Icon name="check" size={12} strokeWidth={3} /></span>{f}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to={`/projects/${ams.slug}`} className="btn-primary justify-center">Explore the platform <Icon name="arrow" size={18} /></Link>
                <Link to="/contact" className="btn-ghost">Request early access</Link>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Document Management — coming soon */}
        <Reveal delay={120} className="lg:col-span-2">
          <div className="card relative flex h-full flex-col overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-flux-violet via-flux-red to-transparent" />
            <ProjectVisual variant="docs" size="hero" />
            <div className="flex flex-1 flex-col p-8">
              <div className="flex items-center gap-3">
                <StatusBadge status="soon" />
                <span className="inline-flex items-center gap-1 text-xs text-flux-red"><Icon name="flame" size={14} /> Cooking</span>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">{dms.title}</h3>
              <p className="mt-3 flex-1 text-slate-400 leading-relaxed">{dms.summary}</p>
              <ul className="mt-6 space-y-2.5">
                {dms.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-slate-300"><Icon name="archive" size={16} className="shrink-0 text-flux-violet" />{f}</li>
                ))}
              </ul>
              <Link to="/contact" className="btn-ghost mt-8 w-full">Get notified at launch</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────────────────── Why us ───────────────────────── */
function WhyUs() {
  return (
    <section className="container-x py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            center={false}
            eyebrow="Why FluXenovia"
            title="From freelance devs to your full-stack IT partner."
            subtitle="We started in 2021 as FluxFusion Devs — a small team shipping software for clients. Today we're a registered company that also designs networks, deploys servers, supplies hardware and supports it all."
          />
          <Reveal><Link to="/about" className="btn-ghost">Our story <Icon name="arrow" size={18} /></Link></Reveal>
        </div>
        <div className="lg:col-span-7 grid gap-5 sm:grid-cols-2">
          {differentiators.map((d, i) => (
            <Reveal key={d.title} delay={i * 80} className="card p-7">
              <div className="icon-tile"><Icon name={d.icon} /></div>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{d.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Process ───────────────────────── */
function Process() {
  return (
    <section className="band py-24 md:py-32">
      <div className="container-x">
        <SectionHeading eyebrow="How we work" title="A clear process, start to finish." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 100} className="relative">
              <p className="font-display text-6xl font-bold text-white/[0.07]">{p.step}</p>
              <div className="mt-2 h-px w-full bg-gradient-to-r from-flux-cyan/60 to-transparent" />
              <h3 className="mt-6 font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-400 leading-relaxed">{p.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Industries ───────────────────────── */
function Industries() {
  return (
    <section className="container-x py-24">
      <Reveal className="card p-8 md:p-12">
        <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
          <div>
            <p className="eyebrow mb-3">Industries</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">Built for businesses of every kind</h3>
          </div>
          <div className="lg:col-span-2 flex flex-wrap gap-3">
            {industries.map((x) => (
              <span key={x} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300">{x}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
