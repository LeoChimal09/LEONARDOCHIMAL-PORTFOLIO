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

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 80}>
              <article className="panel-card-soft h-full rounded-2xl p-6 md:p-8">
                <p className="page-eyebrow mb-3 text-[10px]">{item.period}</p>
                <h3 className="text-xl font-bold text-white">{item.school}</h3>
                <p className="mt-1 text-sm text-slate-400">{item.location}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{item.detail}</p>
                <span className="mt-5 inline-flex rounded-full border border-sky-500/30 bg-sky-950/35 px-3 py-1 text-xs font-mono text-sky-200">
                  {item.metric}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}