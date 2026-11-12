import { Link } from "react-router-dom";

export default function Logo({ compact = false }) {
  return (
    <Link to="/" className="flex items-center gap-3 group" aria-label="FluXenovia home">
      <img src="/fluxenovia-mark.png" alt="" className="h-9 w-auto transition-transform duration-300 group-hover:scale-105" />
      <span className="leading-none">
        <span className="font-display text-xl font-bold tracking-tight text-white">
          Flu<span className="text-gradient">X</span>enovia
        </span>
        {!compact && (
          <span className="block text-[10px] uppercase tracking-[0.22em] text-slate-400 mt-1">
            Software Development Services
          </span>
        )}
      </span>
    </Link>
  );
}
