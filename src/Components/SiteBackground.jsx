/** Fixed, site-wide animated background: drifting aurora glows + dot grid + grain. */
export default function SiteBackground() {
  return (
    <div className="site-bg" aria-hidden="true">
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />
      <div className="dots" />
      <div className="grain" />
    </div>
  );
}
