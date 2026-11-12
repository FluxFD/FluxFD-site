import { Link } from "react-router-dom";
import Icon from "../Components/Icon";
import Reveal from "../Components/Reveal";
import PageHero from "../Components/PageHero";
import SectionHeading from "../Components/SectionHeading";
import CTASection from "../Components/CTASection";
import useSeo from "../hooks/useSeo";
import { site } from "../config/site";
import { differentiators } from "../data/content";

const timeline = [
  { year: "2021", title: "FluxFusion Devs is born", desc: "A small team of developers starts taking freelance web and software projects." },
  { year: "Growth", title: "Systems that go live", desc: "We deliver a Finance & Administration system on a government workflow, a Volunteer Portal, and a Loyalty App for Toby’s Estate in BGC." },
  { year: "Compliance", title: "BIR CAS & EIS", desc: "We build a multi-branch BIR Computerized Accounting System and an EIS e-invoicing integration for an exporter — both live." },
  { year: "Beyond code", title: "Infrastructure & hardware", desc: "Clients ask us to handle their networks, servers and equipment too. We say yes." },
  { year: "2026", title: "FluXenovia", desc: "Registered as FluXenovia Software Development Services — with our Asset Management System in development and a Document Management System on the way." },
];

const values = [
  { icon: "shield", title: "Own the outcome", desc: "If we built it, installed it or sold it, we're accountable for it." },
  { icon: "chat", title: "Talk straight", desc: "Clear quotes, honest timelines and plain-language updates." },
  { icon: "layers", title: "Build to last", desc: "Documented, maintainable work that the next person can understand." },
  { icon: "sparkles", title: "Keep learning", desc: "We stay current so our clients don't have to." },
];

const offer = [
  { icon: "search", title: "Requirements & Solution Design", desc: "Business analysis, process mapping, WBS and UI/UX design before a line of code." },
  { icon: "mobile", title: "Web & Mobile Applications", desc: "Custom web portals and mobile apps, including QR scanning and customer-facing apps." },
  { icon: "layers", title: "Enterprise Systems", desc: "Finance, administration, asset and back-office systems built around your workflows." },
  { icon: "receipt", title: "BIR Compliance Solutions", desc: "Computerized Accounting System (CAS) and Electronic Invoicing System (EIS) compliance." },
  { icon: "puzzle", title: "Integrations & APIs", desc: "Connect new systems to existing platforms, government portals and third-party services." },
  { icon: "headset", title: "Deployment, Training & Support", desc: "UAT, go-live, user training, hosting assistance and ongoing maintenance." },
];

export default function About() {
  useSeo({
    title: "About Us – From FluxFusion Devs to FluXenovia",
    description: "FluXenovia Software Development Services, formerly FluxFusion Devs — a Philippine software and IT services company founded in 2021.",
    path: "/about",
  });
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Same team. Bigger mission."
        highlight="New name."
        subtitle={`${site.formerName} began as a freelance development crew. Today we're ${site.legalName} — a registered company delivering software, IT infrastructure and hardware to businesses across the Philippines.`}
      />

      <section className="container-x grid gap-12 pb-24 lg:grid-cols-2 lg:items-center">
        <Reveal className="card relative overflow-hidden p-10 text-center">
          <div className="absolute inset-0 bg-gradient-to-br from-flux-cyan/10 via-transparent to-flux-red/10" />
          <img src="/fluxenovia-mark.png" alt="FluXenovia logo mark" className="relative mx-auto w-56 animate-float" />
          <p className="relative mt-8 font-display text-3xl font-bold text-white glitch">Flu<span className="text-gradient">X</span>enovia</p>
          <p className="relative mt-2 text-sm uppercase tracking-[0.25em] text-slate-500">Flux · Fusion · Innovation</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Why the new name?</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-400">
            <strong className="text-white">FluXenovia</strong> keeps the <em>Flux</em> from our roots and adds <em>Novia</em> — from
            &ldquo;innovation&rdquo; and &ldquo;nova&rdquo;, something new. It reflects who we&rsquo;ve become: no longer just developers
            for hire, but a technology partner that can design, build, equip and support a business end to end.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card p-5"><p className="text-xs uppercase tracking-wider text-slate-500">Mission</p><p className="mt-2 text-sm text-slate-300">To build reliable, secure and compliance-ready software that simplifies how organizations operate, so our clients can focus on growth.</p></div>
            <div className="card p-5"><p className="text-xs uppercase tracking-wider text-slate-500">Vision</p><p className="mt-2 text-sm text-slate-300">To be the most trusted technology partner of growing Philippine businesses, known for systems that run accurately every single day.</p></div>
          </div>
        </Reveal>
      </section>

      <section className="band py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our journey" title="How we got here" />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-flux-cyan via-flux-violet to-flux-red md:left-1/2" />
            {timeline.map((t, i) => (
              <Reveal key={t.year} delay={i * 80} className={`relative mb-12 pl-10 md:w-1/2 md:pl-0 ${i % 2 ? "md:ml-auto md:pl-12" : "md:pr-12 md:text-right"}`}>
                <span className={`absolute top-1.5 h-4 w-4 rounded-full border-2 border-flux-cyan bg-ink-950 left-0 ${i % 2 ? "md:-left-2" : "md:left-auto md:-right-2"}`} />
                <p className="font-display text-sm font-bold text-flux-cyan">{t.year}</p>
                <h3 className="mt-1 font-display text-xl font-semibold text-white">{t.title}</h3>
                <p className="mt-2 text-slate-400">{t.desc}</p>
              </Reveal>
            ))}
          </div>
          
        </div>
      </section>

      <section className="container-x py-24">
        <SectionHeading eyebrow="Our values" title="What we stand for" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="card p-7">
              <div className="icon-tile"><Icon name={v.icon} /></div>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{v.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <SectionHeading eyebrow="What we offer" title="End-to-end delivery" subtitle="From requirements to go-live and beyond, one team owns the whole build." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offer.map((o, i) => (
            <Reveal key={o.title} delay={(i % 3) * 80} className="card card-hover p-7">
              <div className="icon-tile"><Icon name={o.icon} /></div>
              <h3 className="mt-6 font-display text-lg font-semibold text-white">{o.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{o.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-8">
        <div className="grid gap-6 md:grid-cols-2">
          {differentiators.map((d) => (
            <Reveal key={d.title} className="flex gap-5 border-t border-white/10 pt-6">
              <Icon name={d.icon} className="shrink-0 text-flux-cyan" size={28} />
              <div>
                <h3 className="font-display font-semibold text-white">{d.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center">
          <Link to="/contact" className="btn-ghost">Work with us <Icon name="arrow" size={18} /></Link>
        </Reveal>
      </section>

      <CTASection />
    </>
  );
}
