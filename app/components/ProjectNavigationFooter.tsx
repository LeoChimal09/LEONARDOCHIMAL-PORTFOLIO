'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projectGroups = [
  {
    label: 'Software + AI / Technical Systems',
    projects: [
      { title: 'LowDura', href: '/projects/lowdura' },
      { title: 'Discord AI Dungeon Master & NPC Bot', href: '/projects/discord-npc' },
      { title: 'Discord Soundboard Admin', href: '/projects/discord-soundboard' },
      { title: 'Enterprise URL Shortening Platform', href: '/projects/url-shortener' },
    ],
  },
  {
    label: 'Applied Engineering / Physical Systems & Design',
    projects: [
      { title: 'Autonomous AI Drone Platform', href: '/projects/drone' },
      { title: 'Meta Quest Dual Controller Slide-Lock Attachment', href: '/projects/meta-quest' },
    ],
  },
  {
    label: 'Full-Stack Products / Business Platforms',
    projects: [
      { title: 'Cutting Edge Appointments', href: '/projects/cutting-edge' },
      { title: 'Zacatika Restaurant Platform', href: '/projects/zacatika' },
      { title: 'WebsterLocale', href: '/projects/websterlocale' },
    ],
  },
];

export default function ProjectNavigationFooter() {
  const pathname = usePathname();
  const currentGroup = projectGroups.find((group) =>
    group.projects.some((project) => project.href === pathname)
  );

  if (!currentGroup) return null;

  const currentIndex = currentGroup.projects.findIndex((project) => project.href === pathname);
  const previousProject = currentGroup.projects[(currentIndex - 1 + currentGroup.projects.length) % currentGroup.projects.length];
  const nextProject = currentGroup.projects[(currentIndex + 1) % currentGroup.projects.length];

  return (
    <footer className="page-container px-6 pb-20">
      <p className="page-eyebrow mb-2">{currentGroup.label}</p>
      <nav aria-label={`Project navigation: ${currentGroup.label}`} className="grid grid-cols-2 gap-5 border-y border-slate-800 py-6">
        <Link
          href={previousProject.href}
          className="group flex min-w-0 items-center gap-3 border-l border-slate-700 py-2 pl-4 transition-colors hover:border-sky-400"
        >
          <FaArrowLeft className="shrink-0 text-slate-500 transition-colors group-hover:text-sky-300" size={12} />
          <span className="min-w-0">
            <span className="block font-mono text-[10px] uppercase text-slate-500">Previous project</span>
            <span className="block truncate text-sm text-slate-300 transition-colors group-hover:text-white">{previousProject.title}</span>
          </span>
        </Link>
        <Link
          href={nextProject.href}
          className="group flex min-w-0 items-center justify-end gap-3 border-r border-slate-700 py-2 pr-4 text-right transition-colors hover:border-sky-400"
        >
          <span className="min-w-0">
            <span className="block font-mono text-[10px] uppercase text-slate-500">Next project</span>
            <span className="block truncate text-sm text-slate-300 transition-colors group-hover:text-white">{nextProject.title}</span>
          </span>
          <FaArrowRight className="shrink-0 text-slate-500 transition-colors group-hover:text-sky-300" size={12} />
        </Link>
      </nav>
    </footer>
  );
}