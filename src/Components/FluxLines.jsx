/** Animated flowing lines — the "flux" motif used behind hero sections. */
export default function FluxLines({ className = "" }) {
  const paths = [
    "M-50 420 C 250 260, 450 520, 760 330 S 1250 180, 1550 300",
    "M-50 470 C 280 320, 480 570, 780 380 S 1260 230, 1550 350",
    "M-50 520 C 300 380, 520 610, 800 430 S 1270 290, 1550 400",
    "M-50 570 C 320 440, 540 650, 820 480 S 1280 350, 1550 450",
    "M-50 620 C 340 500, 560 690, 840 530 S 1290 410, 1550 500",
  ];
  return (
    <svg className={`flux-lines ${className}`} viewBox="0 0 1500 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="fluxg" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#22e4f2" stopOpacity="0" />
          <stop offset=".3" stopColor="#22e4f2" stopOpacity=".7" />
          <stop offset=".65" stopColor="#7c5cff" stopOpacity=".7" />
          <stop offset="1" stopColor="#ff3d57" stopOpacity=".1" />
        </linearGradient>
      </defs>
      {paths.map((d, i) => (
        <g key={i}>
          <path d={d} fill="none" stroke="url(#fluxg)" strokeWidth={i === 2 ? 1.6 : 1} opacity={0.25 + (i === 2 ? 0.35 : 0.1)} />
          <path d={d} fill="none" stroke="url(#fluxg)" strokeWidth="2.2" className="flux-pulse" style={{ animationDelay: `${i * 1.3}s` }} />
        </g>
      ))}
    </svg>
  );
}
