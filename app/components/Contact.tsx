import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section id="contact" className="page-section">
      <Reveal className="page-container">
        <div className="panel-card rounded-3xl p-8 md:p-12 text-center">
          <p className="page-eyebrow mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">Let&apos;s build something useful.</h2>

          <p className="page-copy leading-relaxed mb-10 max-w-2xl mx-auto">
            I&apos;m open to internships, engineering work, local-business web projects, and
            interesting collaborations where hardware, software, or operations meet real users.
          </p>

          <a
            href="mailto:leochi2565@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-sky-500/25 mb-12"
          >
            <FaEnvelope size={16} />
            Say Hello
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-sky-400" size={14} />
              <span>East Moline, Illinois</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhone className="text-sky-400" size={14} />
              <a href="tel:+13092783618" className="hover:text-sky-300 transition-colors">
                309-278-3618
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-sky-400" size={14} />
              <a href="mailto:leochi2565@gmail.com" className="hover:text-sky-300 transition-colors">
                leochi2565@gmail.com
              </a>
            </div>
          </div>

          <div className="flex gap-6 justify-center mb-12">
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
              className="text-slate-400 hover:text-sky-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <p className="text-slate-600 text-sm font-mono">
            Designed &amp; Built by Leonardo Chimal &mdash; {new Date().getFullYear()}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
