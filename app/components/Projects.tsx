import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCog, FaCode, FaWrench } from 'react-icons/fa';
import Reveal from './Reveal';

const projects = [
  {
    title: 'Autonomous AI Drone Platform',
    description:
      'Designed and prototyped a modular 5-inch autonomous drone platform in Onshape integrating embedded electronics, power distribution, vibration-aware mounting, maintainable mechanical design, and future autonomous system integration. Moved from CAD into bench assembly by soldering motor leads to the ESC, routing power, and learning the transmitter-to-receiver-to-flight-controller-to-ESC communication path.',
    techGroups: {
      engineering: ['Onshape', 'CAD', '3D Printing', 'ESC Soldering', 'Power Distribution', 'Mechanical Design'],
      cs: ['ELRS', 'Python', 'Raspberry Pi'],
    },
    github: '',
    live: '',
    detailPage: '/projects/drone',
    featured: true,
  },
  {
    title: 'Meta Quest Dual Controller Slide-Lock Attachment',
    description:
      'Designed and prototyped a custom Meta Quest dual-controller slide-lock attachment focused on improving two-handed stability, ergonomic handling, and mechanical locking functionality through iterative CAD development and physical testing. Developed multiple Onshape and 3D printing iterations to refine usability, structural durability, and controller alignment accuracy.',
    techGroups: {
      engineering: ['Onshape', 'CAD', '3D Printing', 'Product Design', 'Ergonomics'],
      cs: [],
    },
    github: '',
    live: 'https://makerworld.com/en/models/2835479-meta-quest-3-controller-gun-attachment',
    detailPage: '/projects/meta-quest',
    featured: true,
  },
  {
    title: 'Cutting Edge Appointments',
    description:
      'A full-stack barber shop booking system built for real local business use. Customers pick a service, choose a barber, and book a time slot from live availability driven by staff schedules and building hours. Admins manage requests, staff rosters, weekly schedules, and building hours from a protected dashboard.',
    techGroups: {
      engineering: [],
      cs: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'MySQL', 'NextAuth', 'Google OAuth', 'Tailwind CSS'],
    },
    github: 'https://github.com/LeoChimal09/APPOINTMENT_PROJECT',
    live: '',
    detailPage: '/projects/cutting-edge',
    featured: true,
  },
  {
    title: 'Zacatika Restaurant Platform',
    description:
      'A full-stack restaurant web platform with a polished public experience, menu and ordering flows, reservations, gallery, events, live business hours, admin dashboards, reports, and production data workflows. Built as a reusable local-business pattern for restaurant clients.',
    techGroups: {
      engineering: [],
      cs: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'MySQL', 'NextAuth', 'Resend', 'Admin Dashboards'],
    },
    github: '',
    live: 'https://restaurantproject-production-630b.up.railway.app/',
    detailPage: '/projects/zacatika',
    featured: true,
  },
  {
    title: 'WebsterLocale',
    description:
      'Founded and built a local website studio platform for restaurants, barbershops, salons, and service businesses. The product combines a public request site with internal operations tooling: client request intake, business opportunity tracking, admin lead management, employee assignments, outreach status workflows, email notifications, and Railway deployment.',
    techGroups: {
      engineering: [],
      cs: ['Next.js 16', 'TypeScript', 'Drizzle ORM', 'MySQL', 'NextAuth', 'Nodemailer', 'Railway'],
    },
    github: '',
    live: 'https://websterlocale-production.up.railway.app/',
    detailPage: '/projects/websterlocale',
    featured: true,
  },
  {
    title: 'Enterprise URL Shortening Platform',
    description:
      'Production-grade internal URL shortener built at John Deere. Supports 4 URL types (tiny, vanity, regex-pattern, mobile app-store redirect), a Rust/Tokio redirect service with async Kinesis analytics, Okta SSO, group ownership, admin approval workflow, audit log, QR generator, campaign tracking URL builder, command palette, and ~750 Vitest tests. Deployed on AWS ECS Fargate + Aurora RDS via Terraform.',
    techGroups: {
      engineering: [],
      cs: ['Next.js 16', 'TypeScript', 'tRPC', 'Rust', 'Drizzle ORM', 'MySQL', 'NextAuth/Okta', 'AWS Fargate', 'Terraform', 'Kinesis', 'Vitest'],
    },
    github: '',
    live: '',
    detailPage: '/projects/url-shortener',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description:
      'This portfolio — built with Next.js 16 App Router, TypeScript, and Tailwind CSS. Clean, responsive, dark-themed.',
    techGroups: {
      engineering: [],
      cs: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React'],
    },
    github: 'https://github.com/LeoChimal09/LEONARDOCHIMAL-PORTFOLIO',
    live: '',
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="page-section pt-0">
      <div className="page-container">
        <div className="grid gap-5 lg:grid-cols-2 mb-16">
          {featured.map((project, index) => (
            <Reveal key={project.title} delay={index * 70}>
              <article className="panel-card group h-full rounded-2xl p-6 md:p-8 transition hover:-translate-y-1 hover:border-sky-400/50">
                <div className="mb-5 flex items-start justify-between gap-5">
                  <div>
                    <p className="page-eyebrow mb-3 text-[10px]">Featured Project</p>
                    <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-sky-200 transition-colors">
                      {project.title}
                    </h2>
                  </div>
                  <div className="flex gap-4 pt-1">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`transition-colors ${project.techGroups.engineering.length > 0 ? 'text-amber-400/75 hover:text-amber-300' : 'text-slate-400 hover:text-sky-300'}`}
                        aria-label="Live demo"
                      >
                        {project.techGroups.engineering.length > 0
                          ? <FaWrench size={17} />
                          : <FaExternalLinkAlt size={18} />}
                      </a>
                    )}
                  </div>
                </div>
                <p className="page-copy text-sm mb-6">{project.description}</p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.techGroups.engineering.map((t) => (
                    <span key={t} className="pill-tag border-amber-500/30 bg-amber-950/30 text-amber-200">{t}</span>
                  ))}
                  {project.techGroups.cs.map((t) => (
                    <span key={t} className="pill-tag">{t}</span>
                  ))}
                </div>
                {'detailPage' in project && project.detailPage && (
                  <Link
                    href={project.detailPage as string}
                    className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    View case study
                    <FaArrowRight size={11} className="transition-transform group-hover:translate-x-1" />
                  </Link>
                )}
              </article>
            </Reveal>
          ))}
        </div>

        <div className="accent-line mb-10" />
        <h2 className="page-eyebrow mb-8">Other Noteworthy Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((project) => (
            <div
              key={project.title}
              className="panel-card-soft rounded-xl p-5 flex flex-col hover:border-sky-400/45 transition-all hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-blue-400 text-2xl">◈</span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`transition-colors ${project.techGroups.engineering.length > 0 ? 'text-amber-500/60 hover:text-amber-400' : 'text-slate-400 hover:text-blue-400'}`}
                    >
                      {project.techGroups.engineering.length > 0
                        ? <FaWrench size={16} />
                        : <FaExternalLinkAlt size={16} />}
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-white font-semibold mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>
              <div className="flex flex-col gap-1.5 mt-4">
                {project.techGroups.engineering.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    <FaCog size={10} className="text-amber-500 shrink-0" />
                    {project.techGroups.engineering.map((t) => <span key={t} className="pill-tag border-amber-500/30 bg-amber-950/30 text-amber-200">{t}</span>)}
                  </div>
                )}
                {project.techGroups.cs.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    <FaCode size={10} className="text-blue-400 shrink-0" />
                    {project.techGroups.cs.map((t) => <span key={t} className="pill-tag">{t}</span>)}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
