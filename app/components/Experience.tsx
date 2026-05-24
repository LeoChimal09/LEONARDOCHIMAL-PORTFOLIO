const experiences = [
  {
    role: 'Apprentice IT',
    company: 'John Deere',
    location: 'Moline, Illinois',
    period: 'June 2024 – Present',
    description: [
      'Built internal tools and automation workflows using AWS, Terraform, JavaScript, and API integrations to support scalable technical systems.',
      'Designed and deployed a secure URL shortener with metadata tracking, encode/decode logic, and backend performance improvements for internal use.',
      'Collaborated with cross-functional teams through GitHub and Agile workflows to troubleshoot issues, document changes, and improve system reliability.',
      'Gained hands-on experience in a professional engineering environment focused on technical problem-solving, documentation, and production-ready solutions.',
    ],
    tech: ['AWS', 'Terraform', 'JavaScript', 'GitHub', 'Agile'],
  },
  {
    role: 'Robotics Design Lead',
    company: 'First Tech Challenge — Team 8813',
    location: 'Moline, Illinois',
    period: 'May 2022 – 2025',
    description: [
      'Led CAD design and mechanical integration for competitive FTC robotics systems using Onshape, collaborating with programming and manufacturing teams to optimize robot performance, maintainability, and weight distribution.',
      'Designed drivetrain, intake, launcher, and structural robot systems alongside engineers and mentors from John Deere, Lockheed Martin, Meta, Tesla, Amazon, and Black Hawk College.',
      'Helped implement Agile/Scrum-style workflows using Trello and Discord task tracking while contributing to STEM outreach, mentoring, and robotics demonstrations across the Quad Cities region.',
      'Qualified for FTC World Championship in Houston, TX (2024), FTC State Championship (2025), and FTC World Championship in Indianapolis, IN (2026).',
    ],
    tech: ['Onshape', 'CAD', '3D Printing', 'PETG', 'Agile/Scrum'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">
            Where I&apos;ve Worked
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate-700 md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-950 -translate-x-1 md:-translate-x-1.5 mt-1.5" />

                {/* Empty spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-6 md:ml-0 md:w-1/2 bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors">
                  {/* Period badge */}
                  <span className="text-blue-400 font-mono text-xs">{exp.period}</span>

                  <h3 className="text-white font-semibold text-lg mt-1">{exp.role}</h3>
                  <p className="text-slate-400 text-sm mb-4">
                    {exp.company} &mdash; {exp.location}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                        <span className="text-blue-400 mt-1 shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 bg-blue-900/40 text-blue-300 rounded-full text-xs font-mono border border-blue-800/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
