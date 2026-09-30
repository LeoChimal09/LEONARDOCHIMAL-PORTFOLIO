import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-6 py-12 md:py-16">
      <Reveal className="page-container border-t border-slate-700 pt-8">
        <div>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <p className="page-eyebrow mb-3">Get In Touch</p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-5xl">Let&apos;s build something useful.</h2>
              <p className="page-copy max-w-2xl">
                I&apos;m open to engineering work, local-business web projects, and collaborations where hardware, software, or operations meet real users.
              </p>
            </div>
            <div className="lg:text-right">
              <a href="mailto:leochi2565@gmail.com" className="group inline-flex items-center gap-3 border-b border-sky-400 pb-2 text-lg font-semibold text-white transition-colors hover:text-sky-300">
                Start a conversation
                <FaEnvelope size={15} />
              </a>
            </div>
          </div>

          <div className="mt-8 grid gap-4 border-t border-slate-800 pt-5 text-sm text-slate-400 sm:grid-cols-2 lg:grid-cols-5">
            <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-sky-400" size={13} /><span>East Moline, Illinois</span></div>
            <div className="flex items-center gap-2"><FaPhone className="text-sky-400" size={13} /><a href="tel:+13092783618" className="hover:text-sky-300">309-278-3618</a></div>
            <div className="flex items-center gap-2"><FaEnvelope className="text-sky-400" size={13} /><a href="mailto:leochi2565@gmail.com" className="hover:text-sky-300">leochi2565@gmail.com</a></div>
            <a href="https://github.com/LeoChimal09" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white"><FaGithub className="text-sky-400" size={14} /><span>GitHub</span></a>
            <a href="https://linkedin.com/in/leonardo-chimal-a442b6267" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-sky-300"><FaLinkedin className="text-sky-400" size={14} /><span>LinkedIn</span></a>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-800 pt-5 font-mono text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
            <p>Designed &amp; Built by Leonardo Chimal &mdash; 2026</p>
            <p>
              Last updated &mdash; <time dateTime="2026-09-16">9/16/2026</time>
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
