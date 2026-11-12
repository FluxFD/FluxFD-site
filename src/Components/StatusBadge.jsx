import { statusMeta } from "../data/content";

export default function StatusBadge({ status, className = "" }) {
  const m = statusMeta[status] || statusMeta.service;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${m.ring} ${m.text} ${className}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${m.dot} ${status === "live" ? "animate-pulse" : ""}`} />
      {m.label}
    </span>
  );
}
