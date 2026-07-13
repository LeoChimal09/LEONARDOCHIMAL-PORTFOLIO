import Reveal from './Reveal';

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Python', 'SQL', 'TypeScript'],
  },
  {
    category: 'Development',
    skills: ['React', 'Next.js', 'APIs', 'AWS', 'Lambda', 'Terraform'],
  },
  {
    category: 'CAD & Engineering',
    skills: ['Onshape', 'CAD', '3D Printing', 'Drone Systems', 'Embedded Electronics', 'Mechanical Design'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Docker', 'Agile/Scrum', 'Trello', 'Linux'],
  },
  {
    category: 'Product & Prototyping',
    skills: ['Iterative CAD Design', 'Component Integration', 'Weight Optimization', 'Ergonomics', 'Engineering Reviews'],
  },
  {
    category: 'CS Fundamentals',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'Computer Architecture', 'Embedded Systems'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="page-section pt-0">
      <div className="page-container">
        <Reveal>
          <div className="mb-12 grid gap-4 md:grid-cols-[0.35fr_1fr] md:items-end">
            <p className="page-eyebrow">What I Work With</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Skills</h2>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <Reveal key={cat.category} delay={index * 60}>
              <div className="panel-card-soft h-full rounded-2xl p-6 hover:border-sky-400/45 transition-colors">
                <h3 className="page-eyebrow mb-5 text-[10px]">
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="pill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
