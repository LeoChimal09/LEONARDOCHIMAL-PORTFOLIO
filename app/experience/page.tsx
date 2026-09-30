import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import PageIntro from '../components/PageIntro';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Experience | Leonardo Chimal',
  description: 'Education, experience, technical skills, and engineering background for Leonardo Chimal.',
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <PageIntro
        eyebrow="Experience + Skills"
        title="Founder work, production software, and engineering practice."
        description="A resume-level view of my education, professional experience, robotics leadership, and applied skills across product design, prototyping, software, cloud systems, and real-world engineering work."
      />
      <nav aria-label="Experience sections" className="page-container mb-8 flex gap-5 overflow-x-auto px-6 md:hidden">
        <a href="#education" className="border-b border-slate-700 pb-2 text-sm text-slate-300">Education</a>
        <a href="#experience" className="border-b border-slate-700 pb-2 text-sm text-slate-300">Experience</a>
        <a href="#skills" className="border-b border-slate-700 pb-2 text-sm text-slate-300">Skills</a>
        <a href="#contact" className="border-b border-slate-700 pb-2 text-sm text-slate-300">Contact</a>
      </nav>
      <div className="page-container grid md:grid-cols-[12rem_minmax(0,1fr)] md:gap-8 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-10">
        <aside className="sticky top-24 hidden self-start md:block">
          <nav aria-label="Experience sections" className="border-l border-sky-400 p-4">
            <p className="page-eyebrow mb-4 text-[10px]">On this page</p>
            <a href="#education" className="flex gap-3 border-b border-slate-800 px-2 py-3 text-sm text-slate-400 hover:border-sky-500/50 hover:text-white"><span className="dossier-index">01</span>Education</a>
            <a href="#experience" className="flex gap-3 border-b border-slate-800 px-2 py-3 text-sm text-slate-400 hover:border-sky-500/50 hover:text-white"><span className="dossier-index">02</span>Experience</a>
            <a href="#skills" className="flex gap-3 border-b border-slate-800 px-2 py-3 text-sm text-slate-400 hover:border-sky-500/50 hover:text-white"><span className="dossier-index">03</span>Skills</a>
            <a href="#contact" className="flex gap-3 border-b border-slate-800 px-2 py-3 text-sm text-slate-400 hover:border-sky-500/50 hover:text-white"><span className="dossier-index">04</span>Contact</a>
          </nav>
        </aside>
        <div className="min-w-0">
          <Education />
          <Experience />
          <Skills />
        </div>
      </div>
      <Contact />
    </>
  );
}