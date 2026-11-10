import Reveal from './Reveal';

const education = [
  {
    school: 'Black Hawk College',
    location: 'Moline, Illinois',
    period: 'Expected May 2027',
    detail: 'Engineering student focused on product design, prototyping, robotics, embedded systems, and software development.',
    metric: 'GPA 3.36',
    credential: '',
    activities: [],
    honors: [],
  },
  {
    school: 'United Township High School',
    location: 'East Moline, Illinois',
    period: 'Aug 2021 – May 2025',
    detail: 'Built the foundation for CAD, robotics leadership, STEM outreach, and applied engineering work through FTC Team 8813.',
    metric: '',
    credential: 'High School Diploma',
    activities: [
      'National Honor Society',
      'Robotics Club',
      'STEM Club',
      'Gearheads Auto Mechanics Club',
      'Student Council',
    ],
    honors: [
      '2x Cum Laude recipient with a 4.1+ GPA',
      'Presidential Scholar for maintaining a 3.5+ GPA',
      'Graduated in the top 10% of the class with a 4.1 weighted GPA',
    ],
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
                  {item.credential && (
                    <p className="mt-2 text-sm text-slate-300">{item.credential}</p>
                  )}
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{item.detail}</p>
                {item.metric && (
                  <p className="font-mono text-xs text-sky-300 md:text-right">{item.metric}</p>
                )}
                {(item.activities.length > 0 || item.honors.length > 0) && (
                  <div className="grid gap-5 sm:grid-cols-2 md:col-start-2 md:col-span-3">
                    {item.activities.length > 0 && (
                      <div>
                        <h4 className="page-eyebrow mb-3 text-[10px]">Activities &amp; Societies</h4>
                        <ul className="list-disc space-y-2 pl-4 text-sm text-slate-400">
                          {item.activities.map((activity) => <li key={activity}>{activity}</li>)}
                        </ul>
                      </div>
                    )}
                    {item.honors.length > 0 && (
                      <div>
                        <h4 className="page-eyebrow mb-3 text-[10px]">Honors</h4>
                        <ul className="list-disc space-y-2 pl-4 text-sm text-slate-400">
                          {item.honors.map((honor) => <li key={honor}>{honor}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}