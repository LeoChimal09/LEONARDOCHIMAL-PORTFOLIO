import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  const proofPoints = ['Production software', 'Local-business platforms', 'Engineering prototypes'];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 px-6 py-28 relative overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#4f8ef7 1px, transparent 1px), linear-gradient(90deg, #4f8ef7 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-4xl text-center relative z-10">
        <div className="mx-auto mb-8 h-36 w-36 md:h-44 md:w-44 overflow-hidden rounded-full border border-sky-400/40 bg-slate-900 shadow-2xl shadow-sky-950/40 ring-4 ring-slate-950/80">
          <Image
            src="/profile.webp"
            alt="Leonardo Chimal"
            width={176}
            height={176}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>

        <p className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Hi, I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Leonardo Chimal
        </h1>

        <h2 className="text-xl md:text-3xl text-blue-300 font-light mb-6">
          Building production software, business platforms, and engineering prototypes.
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          I&apos;m an engineering student and Apprentice IT at John Deere working across full-stack
          systems, cloud infrastructure, CAD, robotics, embedded electronics, and local-business
          product workflows.
        </p>

        <div className="mx-auto mb-8 grid max-w-3xl gap-3 sm:grid-cols-3">
          {proofPoints.map((point) => (
            <div
              key={point}
              className="rounded-full border border-sky-500/25 bg-slate-950/55 px-4 py-2 text-xs font-mono uppercase tracking-[0.18em] text-sky-200"
            >
              {point}
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-7">
          <Link
            href="/projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
          </Link>
          <Link
            href="/#contact"
            className="px-8 py-3 border border-slate-500 hover:border-blue-400 text-slate-300 hover:text-blue-400 rounded-full font-medium transition-all"
          >
            Contact Me
          </Link>
        </div>

        <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-slate-700/70 bg-slate-950/45 px-4 py-2 shadow-lg shadow-slate-950/20 backdrop-blur-sm">
          <span className="hidden sm:inline text-[10px] font-mono uppercase tracking-[0.22em] text-slate-500">
            Connect
          </span>
          <a
            href="https://github.com/LeoChimal09"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-800 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/in/leonardo-chimal-a442b6267"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-800 hover:text-sky-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:leochi2565@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-800 hover:text-sky-300"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
