import { useEffect, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';

const DEMO_PROJECTS = [
  {
    id: 1,
    title: 'Portfolio Platform',
    description:
      'End-to-end portfolio platform with React, Spring Boot, and AWS (ECS, RDS, ALB) focused on performance and reliability.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Spring Boot', 'PostgreSQL', 'AWS ECS', 'AWS RDS'],
    link: 'https://dev-roshankumar.vercel.app',
    github: 'https://github.com/rosh2525/portfolio-fullstack',
  },
  {
    id: 2,
    title: 'Cloud-native Task Manager',
    description:
      'Task management SaaS with real-time updates, optimistic UI, and event-driven architecture running on AWS.',
    technologies: ['React', 'Node.js', 'WebSockets', 'Redis', 'AWS SQS'],
    link: 'https://github.com/rosh2525',
    github: 'https://github.com/rosh2525',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description:
      'Interactive analytics dashboard with time-series visualisation, role-based access control, and caching.',
    technologies: ['React', 'TypeScript', 'D3.js', 'PostgreSQL', 'Redis'],
    link: 'https://github.com/rosh2525',
    github: 'https://github.com/rosh2525',
  },
];

export const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
        const res = await fetch(`${apiUrl}/api/v1/projects`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        const unique = Array.from(new Map(data.map((p) => [p.id, p])).values());
        setProjects(unique);
      } catch (err) {
        console.warn('Projects API failed, using demo data:', err.message);
        setProjects(DEMO_PROJECTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="h-10 w-10 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
          <p className="text-slate-600 text-sm">Loading projects…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">Selected work</p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">Projects</h1>
          <p className="text-slate-600 max-w-2xl text-sm md:text-base">
            A curated set of projects that highlight my experience with full‑stack engineering, cloud infrastructure, and
            thoughtful UI engineering.
          </p>
        </header>

        <div className="grid gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id ?? index}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-6 md:p-8 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative flex flex-col gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 mb-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-xs uppercase tracking-[0.18em] text-slate-500">Project {index + 1}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-semibold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {project.title}
                    </h2>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600 hover:border-slate-300 hover:text-slate-900 text-xs gap-1 transition-colors"
                      >
                        <Github size={16} />
                        <span className="hidden sm:inline">Code</span>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-2 text-xs font-medium text-white hover:bg-blue-700 gap-1 transition-colors"
                      >
                        <span className="hidden sm:inline">Live</span>
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm md:text-base leading-relaxed text-slate-700">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
