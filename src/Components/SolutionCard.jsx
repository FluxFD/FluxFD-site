import { Link } from "react-router-dom";
import Icon from "./Icon";
import ProjectVisual from "./ProjectVisual";
import StatusBadge from "./StatusBadge";

export default function SolutionCard({ s }) {
  return (
    <Link to={`/projects/${s.slug}`} className="group card card-hover flex h-full flex-col overflow-hidden">
      <div className="relative">
        <ProjectVisual variant={s.visual} />
        <StatusBadge status={s.status} className="absolute left-4 top-4 backdrop-blur" />
        <span className="absolute right-4 top-4 chip backdrop-blur">{s.tag}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        {s.client && <p className="text-xs text-slate-500">{s.client}</p>}
        <h3 className="mt-1 font-display text-xl font-semibold text-white">{s.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{s.summary}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-flux-cyan">
          View details <Icon name="arrowUpRight" size={16} />
        </span>
      </div>
    </Link>
  );
}
