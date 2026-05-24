const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'Python', 'SQL', 'TypeScript'],
  },
  {
    category: 'Development',
    skills: ['React', 'Next.js', 'Node.js', 'REST APIs', 'AWS', 'Terraform'],
  },
  {
    category: 'CAD & Engineering',
    skills: ['Onshape', '3D Printing', 'PETG Prototyping', 'Drone Systems', 'Embedded Electronics', 'Mechanical Design'],
  },
  {
    category: 'Tools & Workflow',
    skills: ['Git', 'GitHub', 'Docker', 'Agile/Scrum', 'Trello', 'Linux'],
  },
  {
    category: 'Product & Prototyping',
    skills: ['Iterative CAD Design', 'Component Integration', 'Weight Optimization', 'Ergonomics', 'Product Design'],
  },
  {
    category: 'CS Fundamentals',
    skills: ['Data Structures', 'Algorithms', 'System Design', 'Computer Architecture', 'Embedded Systems'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">
            What I Work With
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-4" />
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wider mb-4 font-semibold">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm hover:bg-blue-900/50 hover:text-blue-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
