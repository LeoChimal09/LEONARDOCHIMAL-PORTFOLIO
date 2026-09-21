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

        <div className="border-b border-slate-800">
          {skillCategories.map((cat, index) => (
            <Reveal key={cat.category} delay={index * 60}>
              <div className="dossier-row grid gap-3 py-6 md:grid-cols-[4rem_0.55fr_1.45fr] md:items-baseline">
                <span className="dossier-index">0{index + 1}</span>
                <h3 className="font-semibold text-white">{cat.category}</h3>
                <p className="font-mono text-sm leading-7 text-slate-400">{cat.skills.join('  /  ')}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
