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
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}