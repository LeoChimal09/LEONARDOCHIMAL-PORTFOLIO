import type { ReactNode } from 'react';
import ProjectNavigationFooter from '../components/ProjectNavigationFooter';

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <ProjectNavigationFooter />
    </>
  );
}