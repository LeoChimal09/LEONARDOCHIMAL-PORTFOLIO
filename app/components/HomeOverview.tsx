import Link from 'next/link';
import { FaArrowRight, FaBriefcase, FaCode, FaCog, FaMicrochip, FaRocket } from 'react-icons/fa';
import Reveal from './Reveal';

const proofPillars = [
  {
    title: 'Production Software',
    description: 'John Deere internal tools, enterprise URL shortening, AWS, Terraform, Rust redirect services, Okta SSO, analytics, security controls, and testing.',
    Icon: FaCode,
  },
  {
    title: 'Business Platforms',
    description: 'WebsterLocale, Zacatika, and Cutting Edge: ordering, booking, reservations, CRM workflows, reports, admin dashboards, and deployment.',
    Icon: FaBriefcase,
  },
  {
    title: 'Engineering Prototypes',
    description: 'FTC robotics, autonomous drone systems, Meta Quest attachments, CAD-driven design, mechanical integration, soldering, and embedded electronics.',
    Icon: FaMicrochip,
  },
];

const selectedWork = [
  {
    label: 'Production System',
    title: 'Enterprise URL Shortening Platform',
    description: 'A John Deere internal platform with Next.js, Rust, Okta SSO, MySQL, AWS analytics, Terraform, governance, security checks, and test coverage.',
    href: '/projects/url-shortener',
    tags: ['John Deere', 'Rust', 'AWS', 'Okta SSO'],
  },
  {
    label: 'Engineering Build',
    title: 'Autonomous AI Drone Platform',
    description: 'A modular 5-inch drone platform integrating CAD, embedded electronics, power distribution, vibration-aware mounting, and autonomy planning.',
    href: '/projects/drone',
    tags: ['CAD', 'ESC Soldering', 'ELRS', 'Raspberry Pi'],
  },
  {
    label: 'Founder Work',
    title: 'WebsterLocale',
    description: 'A local website studio and operating platform for client requests, opportunity tracking, outreach workflows, and business delivery.',
    href: '/projects/websterlocale',
    tags: ['Founder', 'Next.js 16', 'CRM', 'Railway'],
  },
  {
    label: 'Restaurant Platform',
    title: 'Zacatika Restaurant Platform',
    description: 'A RestaurantProject case study with ordering, reservations, order tracking, live hours, admin dashboards, reports, gallery, and events.',
    href: '/projects/zacatika',
    tags: ['Ordering', 'Reports', 'Drizzle', 'Admin'],
  },
];

const pathItems = [
  {
    title: 'Apprentice IT at John Deere',
    detail: 'Building production internal tools with AWS, Terraform, APIs, event-driven services, analytics, security constraints, and software delivery practices.',
  },
  {
    title: 'Founder of WebsterLocale',
    detail: 'Turning local-business needs into repeatable website, ordering, booking, CRM, and admin dashboard systems.',
  },
  {
    title: 'Robotics Design Lead',
    detail: 'Led FTC CAD and mechanical integration through championship-level robotics seasons.',
  },
];

export default function HomeOverview() {
  return (
    <main>
      <section id="about" className="bg-slate-950 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-blue-400 font-mono text-xs uppercase tracking-[0.28em]">Portfolio Overview</p>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                  Real systems across software, business operations, and engineering prototypes.
                </h2>
              </div>
              <p className="text-slate-400 leading-relaxed text-lg">
                My strongest work sits in three lanes: production software at John Deere,
                local-business platforms through WebsterLocale, and hardware/software prototypes
                from robotics, drone systems, and CAD-driven product design.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {proofPillars.map(({ title, description, Icon }, index) => (
              <Reveal key={title} delay={index * 90}>
                <div className="h-full rounded-xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-950/20">
                  <Icon className="mb-5 text-blue-400" size={24} />
                  <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 text-blue-400 font-mono text-xs uppercase tracking-[0.28em]">Best Evidence</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">The work that best shows my level.</h2>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                View all projects
                <FaArrowRight size={12} />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {selectedWork.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <Link
                  href={project.href}
                  className="group block h-full rounded-xl border border-slate-800 bg-slate-950 p-6 transition hover:-translate-y-1 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-950/25"
                >
                  <p className="mb-3 text-blue-400 font-mono text-[11px] uppercase tracking-[0.24em]">{project.label}</p>
                  <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{project.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-400">{project.description}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-blue-900/60 bg-blue-950/40 px-2.5 py-1 text-xs font-mono text-blue-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-400">
                    Open case study
                    <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <Reveal>
            <p className="mb-3 text-blue-400 font-mono text-xs uppercase tracking-[0.28em]">Path</p>
            <h2 className="mb-5 text-3xl md:text-4xl font-bold text-white">The background behind the work.</h2>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 rounded-full border border-blue-800/60 bg-blue-950/30 px-5 py-2.5 text-sm font-medium text-blue-300 hover:border-blue-500 hover:text-blue-200 transition-colors"
            >
              View full experience + skills
              <FaArrowRight size={12} />
            </Link>
          </Reveal>

          <div className="space-y-4">
            {pathItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900 p-5">
                  <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-950/70 text-blue-300">
                    {index === 0 ? <FaRocket size={14} /> : <FaCog size={14} />}
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-400">{item.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}