import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const pageSections = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#projects' },
  { label: 'Background', href: '#background' },
  { label: 'Contact', href: '#contact' },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-[92vh] items-center border-b border-slate-800 px-6 pb-16 pt-28 md:pb-20"
    >
      <div className="page-container grid gap-8 md:grid-cols-[1.05fr_0.75fr] md:items-center lg:gap-12">
        <div className="min-w-0">
          <p className="page-eyebrow mb-5">Engineering / Software / Product</p>

          <h1 className="max-w-xl text-6xl font-extrabold leading-[0.88] tracking-tight text-white md:text-7xl lg:text-8xl">
            <span className="block">Leonardo</span>
            <span className="block">Chimal</span>
          </h1>

          <p className="mt-7 max-w-xl text-xl leading-relaxed text-slate-200 md:text-2xl">
            Building production software, business platforms, and engineering prototypes.
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
            Engineering student and John Deere Electrical Systems Engineer Part Time Student
            working across AI-assisted systems, full-stack software, CAD, robotics, and embedded electronics.
          </p>

          <nav aria-label="Homepage sections" className="mt-9 grid border-y border-slate-700/80 sm:grid-cols-4">
            {pageSections.map((section, index) => (
              <Link
                key={section.href}
                href={section.href}
                className="group flex items-center gap-3 border-b border-slate-800 py-4 last:border-b-0 sm:border-b-0 sm:border-r sm:px-4 sm:first:pl-0 sm:last:border-r-0"
              >
                <span className="dossier-index">0{index + 1}</span>
                <span className="font-mono text-xs uppercase tracking-[0.12em] text-slate-300 transition-colors group-hover:text-sky-300">
                  {section.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link href="/projects" className="inline-flex items-center border-b border-sky-400 pb-2 font-medium text-white transition-colors hover:text-sky-300">
              View selected work
            </Link>
            <Link href="/#contact" className="inline-flex items-center border-b border-slate-600 pb-2 font-medium text-slate-300 transition-colors hover:border-sky-400 hover:text-white">
              Start a conversation
            </Link>
            <div className="flex items-center gap-5 border-l border-slate-700 pl-6">
              <a href="https://github.com/LeoChimal09" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-white" aria-label="GitHub"><FaGithub size={18} /></a>
              <a href="https://linkedin.com/in/leonardo-chimal-a442b6267" target="_blank" rel="noopener noreferrer" className="text-slate-400 transition-colors hover:text-sky-300" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
              <a href="mailto:leochi2565@gmail.com" className="text-slate-400 transition-colors hover:text-sky-300" aria-label="Email"><FaEnvelope size={18} /></a>
            </div>
          </div>
        </div>
        <figure className="relative aspect-[4/5] w-full max-w-sm justify-self-center overflow-hidden border-y border-slate-700 md:w-[82%] md:justify-self-end lg:w-[78%]">
          <Image
            src="/profile.webp"
            alt="Portrait of Leonardo Chimal"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
          />
          <figcaption className="absolute bottom-0 left-0 border-t border-slate-700 bg-slate-950/90 px-4 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-400">
            Leonardo Chimal / East Moline, Illinois
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
