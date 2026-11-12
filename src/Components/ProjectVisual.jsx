import Icon from "./Icon";

/**
 * Illustrated product mockups (pure HTML/CSS) — used instead of stock photos.
 * variant: dashboard | phone | invoice | eis | portal | docs | network | finance | chat
 * size: "card" (thumbnail) or "hero" (detail page)
 */
export default function ProjectVisual({ variant = "dashboard", size = "card" }) {
  const big = size === "hero";
  return (
    <div className={`relative overflow-hidden ${big ? "h-80 md:h-[26rem] rounded-2xl" : "h-48"} bg-ink-900`}>
      <div className="absolute inset-0 visual-grid" />
      <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-flux-cyan/25 blur-3xl" />
      <div className="absolute -right-10 -bottom-16 h-48 w-48 rounded-full bg-flux-violet/25 blur-3xl" />
      <div className={`absolute inset-0 flex items-center justify-center ${big ? "p-8" : "p-5"}`}>
        <div className={`w-full ${big ? "max-w-lg scale-100" : "max-w-[17rem]"} transition-transform duration-500 group-hover:scale-[1.04]`}>
          {renderers[variant]?.(big) ?? renderers.dashboard(big)}
        </div>
      </div>
    </div>
  );
}

const Frame = ({ children, url }) => (
  <div className="rounded-xl border border-white/10 bg-ink-950/90 shadow-2xl backdrop-blur">
    <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2">
      <span className="h-2 w-2 rounded-full bg-flux-red/70" /><span className="h-2 w-2 rounded-full bg-amber-400/70" /><span className="h-2 w-2 rounded-full bg-emerald-400/70" />
      {url && <span className="ml-2 truncate text-[9px] text-slate-500">{url}</span>}
    </div>
    <div className="p-3">{children}</div>
  </div>
);
const Bar = ({ w, c = "bg-white/10" }) => <div className={`h-1.5 rounded-full ${c}`} style={{ width: w }} />;

const renderers = {
  dashboard: () => (
    <Frame url="assets · dashboard">
      <div className="grid grid-cols-3 gap-2">
        {[["1,284", "Assets"], ["96%", "Tagged"], ["12", "Alerts"]].map(([n, l], i) => (
          <div key={l} className="rounded-md bg-white/[0.04] p-2">
            <p className="text-[8px] text-slate-500">{l}</p>
            <p className={`text-sm font-bold ${i === 2 ? "text-flux-red" : "text-white"}`}>{n}</p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex h-12 items-end gap-1">
        {[30, 45, 40, 60, 52, 70, 64, 82, 76, 90].map((h, i) => (
          <div key={i} className="flex-1 rounded-t-sm bg-gradient-to-t from-flux-cyan/20 to-flux-cyan" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-2 space-y-1.5">
        {["w-3/4", "w-2/3", "w-4/5"].map((w, i) => (
          <div key={i} className="flex items-center gap-2"><Icon name="qr" size={10} className="text-flux-cyan" /><div className={`h-1.5 rounded-full bg-white/10 ${w}`} /></div>
        ))}
      </div>
    </Frame>
  ),
  finance: () => (
    <Frame url="finance · approvals">
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold text-white">Disbursement requests</p>
        <span className="rounded bg-flux-cyan/15 px-1.5 py-0.5 text-[8px] text-flux-cyan">FY 2026</span>
      </div>
      <div className="mt-2 space-y-1.5">
        {[["DV-0921", "Approved", "text-emerald-400"], ["DV-0922", "For review", "text-amber-400"], ["DV-0923", "Approved", "text-emerald-400"], ["DV-0924", "Returned", "text-flux-red"]].map(([id, st, c]) => (
          <div key={id} className="flex items-center justify-between rounded bg-white/[0.03] px-2 py-1.5">
            <span className="font-mono text-[9px] text-slate-400">{id}</span><Bar w="40%" /><span className={`text-[9px] ${c}`}>{st}</span>
          </div>
        ))}
      </div>
    </Frame>
  ),
  portal: () => (
    <Frame url="portal">
      <div className="flex gap-2">
        <div className="w-1/4 space-y-1.5 border-r border-white/5 pr-2">
          {[1, 2, 3, 4].map((i) => <Bar key={i} w="100%" c={i === 1 ? "bg-flux-cyan/70" : "bg-white/10"} />)}
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-1.5">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex flex-col items-center rounded-md bg-white/[0.04] p-1.5">
                <div className="h-5 w-5 rounded-full bg-gradient-to-br from-flux-cyan/60 to-flux-violet/60" />
                <div className="mt-1 h-1 w-3/4 rounded bg-white/10" />
              </div>
            ))}
          </div>
          <div className="mt-2 rounded bg-flux-cyan/10 px-2 py-1 text-[8px] text-flux-cyan">+ 24 sign-ups this week</div>
        </div>
      </div>
    </Frame>
  ),
  phone: (big) => (
    <div className={`mx-auto ${big ? "w-48" : "w-32"} rounded-[1.6rem] border-4 border-ink-600 bg-ink-950 p-2 shadow-2xl`}>
      <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-ink-600" />
      <div className="rounded-xl bg-gradient-to-br from-amber-700/60 via-flux-red/40 to-flux-violet/50 p-2.5">
        <div className="flex items-center gap-1 text-[8px] text-white/80"><Icon name="coffee" size={10} /> Rewards</div>
        <p className="mt-1 text-sm font-bold text-white">7 / 10</p>
        <div className="mt-1.5 grid grid-cols-5 gap-1">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className={`h-3 rounded-full ${i < 7 ? "bg-white" : "bg-white/25"}`} />
          ))}
        </div>
      </div>
      <div className="mt-2 grid place-items-center rounded-lg bg-white p-1.5"><Icon name="qr" size={big ? 44 : 30} className="text-ink-950" strokeWidth={1.5} /></div>
      <div className="mt-2 space-y-1"><Bar w="80%" /><Bar w="55%" /></div>
    </div>
  ),
  invoice: () => (
    <div className="relative">
      <div className="absolute -right-2 -bottom-2 z-10 rounded-full border border-emerald-400/40 bg-emerald-400/15 px-2 py-0.5 text-[8px] font-semibold text-emerald-300">BIR CAS ✓</div>
      <div className="rounded-lg bg-slate-100 p-3 shadow-2xl">
        <div className="flex justify-between"><div className="h-2 w-16 rounded bg-ink-700" /><div className="h-2 w-8 rounded bg-ink-700/40" /></div>
        <div className="mt-1 h-1 w-24 rounded bg-ink-700/30" />
        <div className="mt-3 space-y-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-between"><div className="h-1.5 w-28 rounded bg-ink-700/25" /><div className="h-1.5 w-8 rounded bg-ink-700/40" /></div>
          ))}
        </div>
        <div className="mt-3 flex justify-between border-t border-ink-700/20 pt-2"><div className="h-2 w-10 rounded bg-ink-700/60" /><div className="h-2 w-12 rounded bg-flux-teal" /></div>
        <div className="mt-2 flex gap-1">{["HO", "BR-1", "BR-2", "BR-3"].map((b) => <span key={b} className="rounded bg-ink-700/10 px-1 text-[7px] text-ink-700">{b}</span>)}</div>
      </div>
    </div>
  ),
  eis: () => (
    <div className="flex items-center justify-between gap-2">
      {[["ERP / CAS", "layers"], ["Middleware", "shield"], ["BIR EIS", "building"]].map(([l, ic], i) => (
        <div key={l} className="flex items-center gap-2">
          <div className="flex flex-col items-center gap-1.5">
            <div className={`grid h-11 w-11 place-items-center rounded-xl border ${i === 1 ? "border-flux-cyan/50 bg-flux-cyan/15 text-flux-cyan" : "border-white/10 bg-ink-950/80 text-slate-300"}`}><Icon name={ic} size={20} /></div>
            <span className="text-[8px] text-slate-400 whitespace-nowrap">{l}</span>
          </div>
          {i < 2 && <div className="mb-4 h-px w-6 sm:w-8 flow-line" />}
        </div>
      ))}
    </div>
  ),
  docs: () => (
    <div className="relative h-36">
      {[0, 1, 2].map((i) => (
        <div key={i} className="absolute left-1/2 top-1/2 h-28 w-24 rounded-lg border border-white/10 bg-ink-800 p-2 shadow-xl"
          style={{ transform: `translate(-50%,-50%) translateX(${(i - 1) * 46}px) rotate(${(i - 1) * 8}deg)`, zIndex: i === 1 ? 2 : 1 }}>
          <Icon name="file" size={16} className={i === 1 ? "text-flux-violet" : "text-slate-500"} />
          <div className="mt-2 space-y-1"><Bar w="90%" /><Bar w="70%" /><Bar w="80%" /><Bar w="50%" /></div>
        </div>
      ))}
      <div className="absolute bottom-0 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/10 bg-ink-950/90 px-3 py-1 text-[9px] text-slate-300">
        <Icon name="search" size={10} className="text-flux-cyan" /> Search archive…
      </div>
    </div>
  ),
  network: () => (
    <svg viewBox="0 0 240 130" className="w-full">
      <defs><linearGradient id="nl" x1="0" x2="1"><stop offset="0" stopColor="#22e4f2" /><stop offset="1" stopColor="#7c5cff" /></linearGradient></defs>
      {[[120, 25, 50, 75], [120, 25, 120, 75], [120, 25, 190, 75], [50, 75, 25, 115], [50, 75, 75, 115], [190, 75, 165, 115], [190, 75, 215, 115]].map(([a, b, c, d], i) => (
        <line key={i} x1={a} y1={b} x2={c} y2={d} stroke="url(#nl)" strokeWidth="1.5" strokeDasharray="4 3" className="dash-flow" />
      ))}
      {[[120, 25, 9], [50, 75, 7], [120, 75, 7], [190, 75, 7], [25, 115, 5], [75, 115, 5], [165, 115, 5], [215, 115, 5]].map(([x, y, r], i) => (
        <g key={i}><circle cx={x} cy={y} r={r + 5} fill="#22e4f2" opacity=".12" /><circle cx={x} cy={y} r={r} fill={i === 0 ? "#22e4f2" : "#0f1420"} stroke="#22e4f2" strokeWidth="1.5" /></g>
      ))}
    </svg>
  ),
  chat: () => (
    <Frame url="assistant">
      <div className="space-y-2">
        <div className="ml-auto w-3/4 rounded-lg rounded-br-sm bg-flux-cyan/20 px-2 py-1.5 text-[9px] text-cyan-100">Can I get a copy of my invoice?</div>
        <div className="w-4/5 rounded-lg rounded-bl-sm bg-white/[0.06] px-2 py-1.5 text-[9px] text-slate-300">Sure! Here’s INV-2041 — sent to your email too. ✓</div>
        <div className="flex gap-1 px-1"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-500" /><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-500 [animation-delay:.2s]" /><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-500 [animation-delay:.4s]" /></div>
      </div>
    </Frame>
  ),
};
