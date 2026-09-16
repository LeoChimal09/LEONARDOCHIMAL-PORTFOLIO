import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import PageIntro from '../components/PageIntro';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export const metadata: Metadata = {
  title: 'Projects | Leonardo Chimal',
  description: 'Engineering, full-stack, business, and product case studies by Leonardo Chimal.',
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <PageIntro
        eyebrow="Project Library"
        title="Software, products, and applied engineering."
        description="Selected work across technical systems, physical design, and full-stack products."
      />
      <Projects />
      <Contact />
    </>
  );
}