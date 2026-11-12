import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { faqs } from "../data/content";

/* ───────────────────────── FAQ ───────────────────────── */
export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="container-x py-16 md:py-24">
      <SectionHeading eyebrow="FAQ" title="Questions we hear a lot" />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 50} className="card overflow-hidden">
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-6 p-6 text-left"
            >
              <span className="font-display text-lg font-semibold text-white">{f.q}</span>
              <Icon name="plus" size={20} className={`shrink-0 text-flux-cyan transition-transform duration-300 ${open === i ? "rotate-45" : ""}`} />
            </button>
            <div className={`grid transition-all duration-300 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <p className="overflow-hidden px-6 text-slate-400 leading-relaxed">
                <span className="block pb-6">{f.a}</span>
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
