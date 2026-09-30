import type { ReactNode } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

type SnapshotItem = {
  label: string;
  value: string;
  note: string;
};

type CaseStudyHeaderProps = {
  eyebrow: string;
  title: string;
  lead: string;
  summary?: string;
  tags?: string[];
  snapshot?: SnapshotItem[];
  actions?: ReactNode;
};

export default function CaseStudyHeader({
  eyebrow,
  title,
  lead,
  summary,
  tags = [],
  snapshot = [],
  actions,
}: CaseStudyHeaderProps) {
  return (
    <header className="page-section pt-8 pb-16">
      <div className="page-container">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-300 transition-colors text-sm font-mono mb-12"
        >
          <FaArrowLeft size={12} />
          Back to projects
        </Link>

        <p className="page-eyebrow mb-4">{eyebrow}</p>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-start">
          <h1 className="page-title text-5xl md:text-7xl">{title}</h1>
          <div className="lg:pt-2">
            <p className="text-xl leading-relaxed text-slate-200">{lead}</p>
            {summary ? <p className="page-copy mt-5">{summary}</p> : null}
            {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
          </div>
        </div>

        {snapshot.length > 0 ? (
          <dl className="mt-12 grid border-y border-slate-700/70 sm:grid-cols-2 lg:grid-cols-4">
            {snapshot.map((item, index) => (
              <div key={item.label} className="border-b border-slate-800 p-4 sm:border-r lg:border-b-0 lg:last:border-r-0">
                <dt className="dossier-index mb-3">0{index + 1} / {item.label}</dt>
                <dd className="font-bold text-white">{item.value}</dd>
                <dd className="mt-1 text-xs leading-relaxed text-slate-500">{item.note}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        {tags.length > 0 ? (
          <p className="mt-8 max-w-4xl font-mono text-xs leading-7 text-slate-400">
            <span className="mr-3 text-sky-400">STACK /</span>
            {tags.join('  /  ')}
          </p>
        ) : null}

        <div className="accent-line mt-12" />
      </div>
    </header>
  );
}