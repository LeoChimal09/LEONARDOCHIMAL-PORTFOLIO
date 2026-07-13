import type { ReactNode } from 'react';
import Reveal from './Reveal';

type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export default function PageIntro({ eyebrow, title, description, children }: PageIntroProps) {
  return (
    <section className="page-section pt-32 pb-16">
      <div className="page-container">
        <Reveal>
          <p className="page-eyebrow mb-4">{eyebrow}</p>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <h1 className="page-title text-5xl md:text-7xl">{title}</h1>
            <div>
              <p className="page-copy text-lg">{description}</p>
              {children ? <div className="mt-6">{children}</div> : null}
            </div>
          </div>
        </Reveal>
        <div className="accent-line mt-12" />
      </div>
    </section>
  );
}