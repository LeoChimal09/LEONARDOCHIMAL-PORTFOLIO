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
        title="Case studies with the signal turned up."
        description="A focused collection of engineering, product, local-business, and platform work. The strongest projects include deeper case studies so reviewers can inspect the decisions behind the build."
      />
      <Projects />
      <Contact />
    </>
  );
}