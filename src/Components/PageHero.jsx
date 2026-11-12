import Reveal from "./Reveal";
import FluxLines from "./FluxLines";

export default function PageHero({ eyebrow, title, highlight, subtitle, children }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <FluxLines className="opacity-70" />
      <div className="hero-bg" aria-hidden="true" />
      <div className="container-x relative">
        <Reveal className="max-w-4xl">
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {title} {highlight && <span className="text-gradient">{highlight}</span>}
          </h1>
          {subtitle && <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">{subtitle}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
