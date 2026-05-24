import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCog, FaCode, FaWrench } from 'react-icons/fa';

const projects = [
  {
    title: 'Autonomous AI Drone Platform',
    description:
      'Designed and prototyped a modular 5-inch autonomous drone platform in Onshape integrating embedded electronics, power distribution, vibration-isolated mounting systems, and future autonomous system integration (Raspberry Pi 5, GPS, computer vision). Focused on iterative CAD development, component integration, weight optimization, and maintainable mechanical design. Thrust-to-weight ratio of 4.7:1 with an estimated 8–12 min flight time.',
    techGroups: {
      engineering: ['Onshape', 'CAD', '3D Printing', 'PETG', 'Embedded Systems'],
      cs: ['Python', 'Raspberry Pi'],
    },
    github: '',
    live: '',
    detailPage: '/projects/drone',
    featured: true,
  },
  {
    title: 'Meta Quest Dual Controller SlideLock Attachment',
    description:
      'Designed and prototyped a custom Meta Quest dual-controller slide-lock attachment improving two-handed stability, ergonomic handling, and mechanical locking functionality. Developed multiple design iterations using Onshape and PETG 3D printing to refine usability, structural durability, and controller alignment accuracy. Published and available on MakerWorld.',
    techGroups: {
      engineering: ['Onshape', 'CAD', '3D Printing', 'PETG', 'Product Design', 'Ergonomics'],
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
    <section id="projects" className="py-24 bg-slate-950 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">
            Things I&apos;ve Built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-4" />
        </div>

        {/* Featured projects */}
        <div className="space-y-8 mb-16">
          {featured.map((project, index) => (
            <div
              key={project.title}
              className={`relative bg-slate-800 border border-slate-700 rounded-xl p-6 md:p-8 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-900/20 ${
                index % 2 === 0 ? 'md:ml-0 md:mr-12' : 'md:ml-12 md:mr-0'
              }`}
            >
              <p className="text-blue-400 font-mono text-xs tracking-widest uppercase mb-2">
                Featured Project
              </p>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <div className="flex gap-4">
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
                      className={`transition-colors ${project.techGroups.engineering.length > 0 ? 'text-amber-500/60 hover:text-amber-400' : 'text-slate-400 hover:text-blue-400'}`}
                      aria-label="Live demo"
                    >
                      {project.techGroups.engineering.length > 0
                        ? <FaWrench size={17} />
                        : <FaExternalLinkAlt size={18} />}
                    </a>
                  )}
                </div>
              </div>
              <p className="text-slate-400 mt-3 leading-relaxed">{project.description}</p>
              {'detailPage' in project && project.detailPage && (
                <Link
                  href={project.detailPage as string}
                  className="inline-flex items-center gap-1.5 mt-4 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors group"
                >
                  View Case Study
                  <FaArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
              <div className="flex flex-col gap-2 mt-4">
                {project.techGroups.engineering.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    <FaCog size={11} className="text-amber-500 shrink-0" />
                    {project.techGroups.engineering.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 text-amber-300 font-mono text-xs border border-amber-800/50 rounded-full bg-amber-900/20">{t}</span>
                    ))}
                  </div>
                )}
                {project.techGroups.cs.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    <FaCode size={11} className="text-blue-400 shrink-0" />
                    {project.techGroups.cs.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 text-blue-300 font-mono text-xs border border-blue-800/50 rounded-full bg-blue-900/20">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <h3 className="text-center text-slate-400 text-sm font-mono uppercase tracking-widest mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {others.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 border border-slate-700 rounded-lg p-5 flex flex-col hover:border-blue-500/50 transition-all hover:-translate-y-1"
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
                    {project.techGroups.engineering.map((t) => (
                      <span key={t} className="text-amber-400/70 font-mono text-xs">{t}</span>
                    ))}
                  </div>
                )}
                {project.techGroups.cs.length > 0 && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    <FaCode size={10} className="text-blue-400 shrink-0" />
                    {project.techGroups.cs.map((t) => (
                      <span key={t} className="text-slate-500 font-mono text-xs">{t}</span>
                    ))}
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
