import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-900 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Section header */}
        <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">
          Get In Touch
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact</h2>
        <div className="w-12 h-0.5 bg-blue-500 mx-auto mb-10" />

        {/* Message */}
        <p className="text-slate-400 leading-relaxed mb-10">
          I&apos;m currently open to new opportunities — whether it&apos;s a full-time role,
          contract work, or an interesting collaboration. My inbox is always open.
          Feel free to reach out and I&apos;ll get back to you as soon as I can!
        </p>

        {/* Primary CTA */}
        <a
          href="mailto:leochi2565@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-all hover:shadow-lg hover:shadow-blue-500/25 mb-12"
        >
          <FaEnvelope size={16} />
          Say Hello
        </a>

        {/* Contact details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-400" size={14} />
            <span>East Moline, Illinois</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-400" size={14} />
            <a href="mailto:leochi2565@gmail.com" className="hover:text-blue-400 transition-colors">
              leochi2565@gmail.com
            </a>
          </div>
        </div>

        {/* Social links */}
        <div className="flex gap-6 justify-center mb-16">
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
        </div>

        {/* Footer */}
        <p className="text-slate-600 text-sm font-mono">
          {/* TODO: Replace with your name */}
          Designed &amp; Built by Leonardo Chimal &mdash; {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
