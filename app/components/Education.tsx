import Reveal from './Reveal';

const education = [
  {
    school: 'Black Hawk College',
    location: 'Moline, Illinois',
    period: 'Expected May 2027',
    detail: 'Engineering student focused on product design, prototyping, robotics, embedded systems, and software development.',
    metric: 'GPA 3.36',
  },
  {
    school: 'United Township High School',
    location: 'East Moline, Illinois',
    period: 'May 2025',
    detail: 'Built the foundation for CAD, robotics leadership, STEM outreach, and applied engineering work through FTC Team 8813.',
    metric: 'GPA 4.1 weighted',
  },
];

export default function Education() {
  return (
    <section id="education" className="page-section pt-0">
      <div className="page-container">
        <Reveal>
          <div className="mb-12 grid gap-4 md:grid-cols-[0.35fr_1fr] md:items-end">
            <p className="page-eyebrow">Education</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Academic Background</h2>
          </div>
        </Reveal>

        <div className="border-b border-slate-800">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 80}>
              <article className="dossier-row grid gap-4 py-7 md:grid-cols-[4rem_0.85fr_1.15fr_auto] md:items-start">
                <span className="dossier-index">0{index + 1}</span>
                <div>
                  <p className="page-eyebrow mb-2 text-[10px]">{item.period}</p>
                  <h3 className="text-xl font-bold text-white">{item.school}</h3>
                  <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{item.detail}</p>
                <p className="font-mono text-xs text-sky-300 md:text-right">{item.metric}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}