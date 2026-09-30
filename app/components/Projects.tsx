import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCog, FaCode, FaWrench } from 'react-icons/fa';
import Reveal from './Reveal';

const projects = [
  {
    title: 'Discord AI Dungeon Master & NPC Bot',
    category: 'software',
    description:
      'AI-powered Discord tabletop system with persistent campaigns, character sheets, combat state, and multi-server memory.',
    techGroups: {
      engineering: [],
      cs: ['Python', 'discord.py', 'OpenAI API', 'MySQL', 'Docker'],
    },
    github: '',
    live: '',
    detailPage: '/projects/discord-npc',
    featured: true,
  },
  {
    title: 'Discord Soundboard Admin',
    category: 'software',
    description:
      'Web admin and Discord voice bot for uploading, trimming, organizing, and playing custom audio clips.',
    techGroups: {
      engineering: [],
      cs: ['Next.js 16', 'TypeScript', 'Discord.js', 'MySQL', 'ffmpeg'],
    },
    github: '',
    live: 'https://djsoundboard.up.railway.app/',
    detailPage: '/projects/discord-soundboard',
    featured: true,
  },
  {
    title: 'Autonomous AI Drone Platform',
    category: 'engineering',
    description:
      'Modular 5-inch drone developed from CAD through bench integration, including power distribution, ESC soldering, and future autonomy planning.',
    techGroups: {
      engineering: ['Onshape', '3D Printing', 'ESC Soldering', 'Embedded Systems'],
      cs: ['Raspberry Pi'],
    },
    github: '',
    live: '',
    detailPage: '/projects/drone',
    featured: true,
  },
  {
    title: 'Meta Quest Dual Controller Slide-Lock Attachment',
    category: 'engineering',
    description:
      'Iterative CAD and 3D-printed controller attachment designed for stable two-handed use, reliable alignment, and ergonomic handling.',
    techGroups: {
      engineering: ['Onshape', '3D Printing', 'Product Design', 'Ergonomics'],
      cs: [],
    },
    github: '',
    live: 'https://makerworld.com/en/models/2835479-meta-quest-3-controller-gun-attachment',
    detailPage: '/projects/meta-quest',
    featured: true,
  },
  {
    title: 'Cutting Edge Appointments',
    category: 'product',
    description:
      'Barbershop booking platform with live availability, customer scheduling, and a protected operations dashboard.',
    techGroups: {
      engineering: [],
      cs: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'MySQL', 'NextAuth'],
    },
    github: 'https://github.com/LeoChimal09/APPOINTMENT_PROJECT',
    live: '',
    detailPage: '/projects/cutting-edge',
    featured: true,
  },
  {
    title: 'Zacatika Restaurant Platform',
    category: 'product',
    description:
      'Restaurant platform combining menus, ordering, reservations, events, live business hours, and admin operations.',
    techGroups: {
      engineering: [],
      cs: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'MySQL', 'Resend'],
    },
    github: '',
    live: 'https://restaurantproject-production-630b.up.railway.app/',
    detailPage: '/projects/zacatika',
    featured: true,
  },
  {
    title: 'WebsterLocale',
    category: 'product',
    description:
      'Local website studio platform with client intake, lead tracking, employee assignments, and outreach workflows.',
    techGroups: {
      engineering: [],
      cs: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'MySQL', 'Railway'],
    },
    github: '',
    live: 'https://websterlocale-production.up.railway.app/',
    detailPage: '/projects/websterlocale',
    featured: true,
  },
  {
    title: 'Enterprise URL Shortening Platform',
    category: 'software',
    description:
      'Enterprise redirect platform with four URL types, a Rust service, Okta governance, AWS analytics, and infrastructure as code.',
    techGroups: {
      engineering: [],
      cs: ['Next.js 16', 'Rust', 'Okta SSO', 'AWS Fargate', 'Terraform'],
    },
    github: '',
    live: '',
    detailPage: '/projects/url-shortener',
    featured: true,
  },
];

const projectSections = [
  {
    id: 'software',
    eyebrow: 'Software + AI',
    title: 'Technical Systems',
  },
  {
    id: 'engineering',
    eyebrow: 'Applied Engineering',
    title: 'Physical Systems & Design',
  },
  {
    id: 'product',
    eyebrow: 'Full-Stack Products',
    title: 'Business Platforms',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="page-section pt-0">
      <div className="page-container">
        <nav aria-label="Project sections" className="mb-8 flex gap-2 overflow-x-auto pb-2 lg:hidden">
          {projectSections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="shrink-0 border-b border-slate-700 px-1 py-2 text-sm text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-200"
            >
              {section.title}
            </a>
          ))}
          <a href="#contact" className="shrink-0 border-b border-slate-700 px-1 py-2 text-sm text-slate-300 transition-colors hover:border-sky-400 hover:text-sky-200">
            Contact
          </a>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[13rem_minmax(0,1fr)] lg:items-start">
          <aside className="sticky top-24 hidden lg:block">
            <nav aria-label="Project sections" className="border-l border-sky-400 p-4">
              <p className="page-eyebrow mb-4 text-[10px]">Jump to</p>
              <div className="space-y-1">
                {projectSections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-start gap-3 border-b border-slate-800 px-2 py-3 text-sm text-slate-400 transition-colors hover:border-sky-500/50 hover:text-white"
                  >
                    <span className="font-mono text-xs text-sky-400/70">0{index + 1}</span>
                    <span>{section.title}</span>
                  </a>
                ))}
              </div>
              <a href="#contact" className="group flex items-start gap-3 border-b border-slate-800 px-2 py-3 text-sm text-slate-400 transition-colors hover:border-sky-500/50 hover:text-white">
                <span className="font-mono text-xs text-sky-400/70">04</span>
                <span>Contact</span>
              </a>
            </nav>
          </aside>

          <div className="min-w-0 space-y-16">
          {projectSections.map((section) => {
            const sectionProjects = projects.filter((project) => project.category === section.id);

            return (
              <div key={section.id} id={section.id} className="scroll-mt-28">
                <Reveal>
                  <div className="mb-6">
                    <p className="page-eyebrow mb-2">{section.eyebrow}</p>
                    <h2 className="text-3xl font-bold text-white tracking-tight">{section.title}</h2>
                  </div>
                </Reveal>

                <div className="grid gap-5 lg:grid-cols-2">
                  {sectionProjects.map((project, index) => (
                    <Reveal key={project.title} delay={index * 70}>
                      <article className="dossier-row group h-full py-6 transition-colors">
                        <div className="mb-4 flex items-start justify-between gap-5">
                          <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-sky-200 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex gap-4 pt-1">
                            {project.github && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label={`${project.title} on GitHub`}>
                                <FaGithub size={20} />
                              </a>
                            )}
                            {project.live && (
                              <a href={project.live} target="_blank" rel="noopener noreferrer" className={`transition-colors ${project.techGroups.engineering.length > 0 ? 'text-amber-400/75 hover:text-amber-300' : 'text-slate-400 hover:text-sky-300'}`} aria-label={`${project.title} live site`}>
                                {project.techGroups.engineering.length > 0 ? <FaWrench size={17} /> : <FaExternalLinkAlt size={18} />}
                              </a>
                            )}
                          </div>
                        </div>

                        <p className="page-copy text-sm mb-5">{project.description}</p>
                        <div className="mb-5 flex flex-col gap-2">
                          {project.techGroups.engineering.length > 0 && (
                            <div className="flex items-start gap-2 border-l border-amber-500/40 pl-3">
                              <FaCog size={10} className="text-amber-500 shrink-0" />
                              <p className="font-mono text-xs leading-relaxed text-amber-200">
                                {project.techGroups.engineering.join(' / ')}
                              </p>
                            </div>
                          )}
                          {project.techGroups.cs.length > 0 && (
                            <div className="flex items-start gap-2 border-l border-sky-500/40 pl-3">
                              <FaCode size={10} className="text-blue-400 shrink-0" />
                              <p className="font-mono text-xs leading-relaxed text-sky-200">
                                {project.techGroups.cs.join(' / ')}
                              </p>
                            </div>
                          )}
                        </div>

                        {'detailPage' in project && project.detailPage && (
                          <Link href={project.detailPage as string} className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white text-sm font-medium transition-colors">
                            View case study
                            <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                          </Link>
                        )}
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
