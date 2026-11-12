import { Link } from "react-router-dom";
import Icon from "../Components/Icon";
import Reveal from "../Components/Reveal";
import PageHero from "../Components/PageHero";
import SectionHeading from "../Components/SectionHeading";
import CTASection from "../Components/CTASection";
import useSeo from "../hooks/useSeo";
import { productCategories } from "../data/content";

const perks = [
  { icon: "tag", title: "Competitive pricing", desc: "Project and volume pricing on business-grade equipment." },
  { icon: "truck", title: "Delivery nationwide", desc: "Delivered to your office, branch or site anywhere in the Philippines." },
  { icon: "wrench", title: "Installed & configured", desc: "Imaged, set up and tested — ready to use on day one." },
  { icon: "shield", title: "Warranty handled", desc: "We process warranty claims and replacements on your behalf." },
];

export default function Products() {
  useSeo({
    title: "IT Hardware & Products – Laptops, Servers, Networking, CCTV",
    description: "Buy laptops, desktops, servers, network equipment, CCTV, printers, POS hardware and software licenses from FluXenovia — with delivery, installation and support.",
    path: "/products",
  });
  return (
    <>
      <PageHero
        eyebrow="Products & Hardware Supply"
        title="Your IT vendor that"
        highlight="also installs and supports it."
        subtitle="Source business-grade hardware and licenses through us. We'll recommend the right specs, deliver, set up and stay accountable after the sale."
      >
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link to="/contact" className="btn-primary justify-center">Request a quotation <Icon name="arrow" size={18} /></Link>
          <a href="#catalog" className="btn-ghost">Browse categories</a>
        </div>
      </PageHero>

      <section className="container-x pb-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="card p-6 flex gap-4">
              <div className="icon-tile shrink-0"><Icon name={p.icon} /></div>
              <div>
                <h3 className="font-display font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="catalog" className="container-x scroll-mt-24 py-24">
        <SectionHeading eyebrow="Catalog" title="What we supply" subtitle="Don't see what you need? We source most IT and office technology on request." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {productCategories.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 80}>
              <div className="group card card-hover flex h-full flex-col p-7">
                <div className="icon-tile transition-colors group-hover:bg-flux-cyan group-hover:text-ink-950"><Icon name={c.icon} /></div>
                <h3 className="mt-6 font-display text-lg font-semibold text-white">{c.name}</h3>
                <ul className="mt-4 space-y-2 flex-1">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-slate-400"><span className="h-1 w-1 rounded-full bg-flux-cyan" />{it}</li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-white/5 pt-4 text-xs text-slate-500">{c.brands}</p>
                <Link to="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-flux-cyan">Get a quote <Icon name="arrow" size={14} /></Link>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-slate-600">Brand names are trademarks of their respective owners and are listed as examples of products we can source.</p>
      </section>

      <section className="border-y border-white/5 bg-ink-900/50 py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow mb-4">Bundled projects</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">Hardware + setup + software, in one quotation.</h2>
            <p className="mt-5 text-lg text-slate-400 leading-relaxed">
              Opening a new branch? Upgrading the office? We bundle the equipment, installation, configuration and the
              software it runs — with one timeline and one point of contact.
            </p>
          </Reveal>
          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            {[
              ["New office fit-out", "PCs, network, Wi-Fi, printers, CCTV"],
              ["Retail / branch kit", "POS, inventory system, receipt printers"],
              ["Server room refresh", "Server, NAS, UPS, backup, rack"],
              ["Work-from-anywhere", "Laptops, M365, VPN, endpoint security"],
            ].map(([t, d]) => (
              <div key={t} className="card p-6">
                <h3 className="font-display font-semibold text-white">{t}</h3>
                <p className="mt-1 text-sm text-slate-400">{d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection title="Need a quotation today?" subtitle="Send us your list or tell us the problem — we'll recommend specs and send an itemized quote." />
    </>
  );
}
