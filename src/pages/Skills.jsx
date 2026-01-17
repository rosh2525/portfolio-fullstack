import { SKILLS } from '../data/profile';
import { Code2, Database, Cloud, Layers } from 'lucide-react';

const CATEGORY_ICONS = {
  Languages: Code2,
  'Frameworks & Libraries': Layers,
  'Tools & Platforms': Cloud,
  'Coursework & Domains': Database,
};

export const Skills = () => {
  const grouped = SKILLS.reduce((acc, skill) => {
    (acc[skill.category] = acc[skill.category] || []).push(skill);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">Skill map</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Skills</h1>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base">
            Languages, frameworks, tools and coursework I use to build reliable systems across backend, frontend and cloud.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(grouped).map(([category, skills]) => {
            const Icon = CATEGORY_ICONS[category] ?? Layers;
            return (
              <section
                key={category}
                className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-lg hover:border-blue-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Icon size={20} />
                  </div>
                  <h2 className="text-lg font-semibold text-slate-900">{category}</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
