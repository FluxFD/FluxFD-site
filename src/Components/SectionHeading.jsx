import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle, center = true }) {
  return (
    <Reveal className={`max-w-3xl ${center ? "mx-auto text-center" : ""} mb-12 md:mb-16`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-slate-400 leading-relaxed">{subtitle}</p>}
    </Reveal>
  );
}
