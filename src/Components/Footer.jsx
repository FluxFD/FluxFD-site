import { Link } from "react-router-dom";
import Logo from "./Logo";
import Icon from "./Icon";
import { site } from "../config/site";
import { pillars, solutions } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 bg-ink-950/80 backdrop-blur">
      <div className="container-x py-16 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Logo />
          <p className="mt-6 text-slate-400 leading-relaxed max-w-sm">
            Custom software, IT infrastructure and hardware supply — with the support to keep it all running.
            Formerly <span className="text-slate-300">{site.formerName}</span>.
          </p>
          <div className="mt-6 flex gap-3">
            <a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="social-btn"><Icon name="facebook" size={18} /></a>
            <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-btn"><Icon name="linkedin" size={18} /></a>
            <a href={site.social.messenger} target="_blank" rel="noreferrer" aria-label="Messenger" className="social-btn"><Icon name="chat" size={18} /></a>
          </div>
        </div>

        {pillars.slice(0, 2).map((p) => (
          <div key={p.id} className="lg:col-span-2">
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">{p.title}</h4>
            <ul className="mt-5 space-y-3">
              {p.services.slice(0, 5).map((s) => (
                <li key={s.name}>
                  <Link to={`/services#${p.id}`} className="text-sm text-slate-400 hover:text-flux-cyan transition-colors">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Projects</h4>
          <ul className="mt-5 space-y-3">
            {solutions.filter((s) => s.status !== "service").map((s) => (
              <li key={s.slug}>
                <Link to={`/projects/${s.slug}`} className="text-sm text-slate-400 hover:text-flux-cyan transition-colors">{s.title.replace(" Information System", "").replace("BIR Computerized Accounting System (CAS)", "BIR CAS").replace(" E-Invoicing Compliance", "")}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">Contact</h4>
          <ul className="mt-5 space-y-3 text-sm text-slate-400">
            <li className="flex gap-2"><Icon name="mail" size={18} className="shrink-0 text-flux-cyan" /><a href={`mailto:${site.contact.email}`} className="hover:text-white break-words">{site.contact.email}</a></li>
            <li className="flex gap-2"><Icon name="phone" size={18} className="shrink-0 text-flux-cyan" /><a href={site.contact.phoneHref} className="hover:text-white">{site.contact.phone}</a></li>
            <li className="flex gap-2"><Icon name="pin" size={18} className="shrink-0 text-flux-cyan" />{site.contact.address}</li>
            <li className="flex gap-2"><Icon name="clock" size={18} className="shrink-0 text-flux-cyan" />{site.contact.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5">
        <div className="container-x py-6 flex flex-col sm:flex-row gap-3 justify-between text-xs text-slate-500">
          <p>© {site.founded}–{year} {site.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/services" className="hover:text-slate-300">Services</Link>
            <Link to="/products" className="hover:text-slate-300">Products</Link>
            <Link to="/projects" className="hover:text-slate-300">Projects</Link>
            <Link to="/about" className="hover:text-slate-300">About</Link>
            <Link to="/contact" className="hover:text-slate-300">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
