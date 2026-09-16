import Link from 'next/link';
import { FaArrowRight, FaCog, FaRocket } from 'react-icons/fa';
import Reveal from './Reveal';

const profileFacts = [
  {
    label: 'Based in',
    value: 'East Moline, Illinois',
  },
  {
    label: 'Studying',
    value: 'Engineering at Black Hawk College',
  },
  {
    label: 'Current work',
    value: 'John Deere + WebsterLocale',
  },
  {
    label: 'Direction',
    value: 'Software + electrical systems',
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
    label: 'Full-Stack Discord App',
    title: 'Discord Soundboard Admin',
    description: 'A full-stack soundboard platform with media uploads, ffmpeg processing, an admin dashboard, shared MySQL metadata, and live Discord voice playback.',
    href: '/projects/discord-soundboard',
    tags: ['Next.js 16', 'Discord.js', 'ffmpeg', 'MySQL'],
  },
  {
    label: 'AI + Discord System',
    title: 'Discord AI Dungeon Master & NPC Bot',
    description: 'A Python Discord roleplay system with OpenAI-powered sessions, persistent campaign memory, combat tracking, character sheets, and multi-server state.',
    href: '/projects/discord-npc',
    tags: ['Python', 'discord.py', 'OpenAI', 'MySQL'],
  },
  {
    label: 'Restaurant Platform',
    title: 'Zacatika Restaurant Platform',
    description: 'A restaurant platform with ordering, reservations, order tracking, live hours, admin dashboards, reports, gallery, and events.',
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
      <section id="about" className="scroll-mt-16 bg-slate-950 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <div>
                <p className="mb-3 text-blue-400 font-mono text-xs uppercase tracking-[0.28em]">About</p>
                <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                  I work comfortably between code, hardware, and the people using both.
                </h2>
              </div>
              <div className="space-y-5 text-base leading-relaxed text-slate-400 md:text-lg">
                <p>
                  I&apos;m an engineering student based in East Moline, Illinois. At John Deere,
                  I build internal software and cloud workflows; through WebsterLocale, I work
                  directly with local businesses; and my robotics background keeps me grounded
                  in CAD, prototyping, and physical constraints.
                </p>
                <p>
                  What connects those paths is how I like to work: understand the real problem,
                  take ownership beyond one layer, and keep iterating until the result works
                  outside a demo. I&apos;m growing toward roles where software and electrical or
                  mechanical systems meet.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-10 grid border-y border-slate-800 sm:grid-cols-2 lg:grid-cols-4">
            {profileFacts.map((fact, index) => (
              <Reveal key={fact.label} delay={index * 90}>
                <div className="border-b border-slate-800 py-5 lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400">
                    0{index + 1} / {fact.label}
                  </p>
                  <p className="text-sm text-slate-200">{fact.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-16 bg-slate-900 px-6 py-24">
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

          <div className="border-b border-slate-800">
            {selectedWork.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <Link
                  href={project.href}
                  className="dossier-row group grid gap-5 py-7 md:grid-cols-[3rem_0.8fr_1.2fr_auto] md:items-start"
                >
                  <span className="dossier-index">0{index + 1}</span>
                  <div>
                    <p className="mb-2 text-blue-400 font-mono text-[10px] uppercase tracking-[0.2em]">{project.label}</p>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{project.title}</h3>
                  </div>
                  <div>
                    <p className="mb-3 text-sm leading-relaxed text-slate-400">{project.description}</p>
                    <p className="font-mono text-[11px] leading-6 text-slate-500">{project.tags.join('  /  ')}</p>
                  </div>
                  <FaArrowRight size={13} className="mt-1 text-blue-400 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="background" className="scroll-mt-16 bg-slate-950 px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <Reveal>
            <p className="mb-3 text-blue-400 font-mono text-xs uppercase tracking-[0.28em]">Path</p>
            <h2 className="mb-5 text-3xl md:text-4xl font-bold text-white">The background behind the work.</h2>
            <Link
              href="/experience"
              className="inline-flex items-center gap-2 border-b border-blue-500 pb-2 text-sm font-medium text-blue-300 hover:text-white transition-colors"
            >
              View full experience + skills
              <FaArrowRight size={12} />
            </Link>
          </Reveal>

          <div className="border-b border-slate-800">
            {pathItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="dossier-row grid gap-4 py-6 sm:grid-cols-[3rem_0.55fr_1.45fr]">
                  <span className="dossier-index pt-1">0{index + 1}</span>
                  <div>
                    <div className="mb-3 text-blue-400">{index === 0 ? <FaRocket size={15} /> : <FaCog size={15} />}</div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}