import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 px-6 relative overflow-hidden"
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
        <p className="text-blue-400 font-mono text-sm mb-4 tracking-widest uppercase">
          Hi, I&apos;m
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Leonardo Chimal
        </h1>

        <h2 className="text-xl md:text-3xl text-blue-300 font-light mb-6">
          Engineering Student &amp; CS Developer
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Engineering student combining mechanical design, embedded electronics, and software
          development to build functional prototypes. From autonomous drone platforms to
          full-stack web apps — I bridge hardware and code.
        </p>

        {/* CTA buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-slate-500 hover:border-blue-400 text-slate-300 hover:text-blue-400 rounded-full font-medium transition-all"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/LeoChimal09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/leonardo-chimal-a442b6267"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:leochi2565@gmail.com"
            className="text-slate-400 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 text-slate-500 hover:text-slate-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <FaArrowDown size={20} />
      </a>
    </section>
  );
}
