import { Link } from "react-router-dom";
import Icon from "./Icon";
import Reveal from "./Reveal";
import { site } from "../config/site";

export default function CTASection({
  title = "Let's build what your business runs on.",
  subtitle = "Tell us what you need — software, network, hardware or all three. We'll reply within one business day with next steps.",
}) {
  return (
    <section className="container-x py-24">
      <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800 px-6 py-14 sm:px-12 md:py-20 text-center">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[38rem] rounded-full bg-flux-cyan/25 blur-3xl animate-glow" aria-hidden="true" />
        <div className="absolute -bottom-24 right-0 h-56 w-80 rounded-full bg-flux-red/20 blur-3xl" aria-hidden="true" />
        <div className="relative">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">{title}</h2>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">{subtitle}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">Get a free quote <Icon name="arrow" size={18} /></Link>
            <a href={site.contact.phoneHref} className="btn-ghost"><Icon name="phone" size={18} /> {site.contact.phone}</a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
