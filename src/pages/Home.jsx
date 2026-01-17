import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Code2, Zap, Target } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 flex flex-col gap-10 md:flex-row md:items-center">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to backend / full‑stack roles
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
                Hi, I'm Roshan.
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
                  I build reliable systems.
                </span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed text-slate-600 max-w-xl">
                Full‑stack engineer with experience across React, Java/Spring Boot, and AWS. I care about clean abstractions,
                observability, and shipping things that actually move the needle for users.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition"
              >
                View projects
                <ArrowRight size={18} />
              </Link>
              <a
                href="mailto:your-email@example.com"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition"
              >
                <Mail size={18} />
                Get in touch
              </a>
            </div>

            <div className="flex items-center gap-4 pt-4 text-sm text-slate-500">
              <span className="uppercase tracking-[0.18em] text-xs text-slate-500">Profiles</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/rosh2525"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition"
                >
                  <Github size={18} />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
                <a
                  href="https://linkedin.com/in/roshan-kumar"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-600 hover:text-slate-900 transition"
                >
                  <Linkedin size={18} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-auto md:mx-0">
            <div className="rounded-2xl border border-slate-200 bg-slate-900 text-slate-50 p-6 shadow-xl">
              <p className="text-xs font-mono text-emerald-300 mb-3">// snapshot</p>
              <div className="space-y-3 text-sm font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">role</span>
                  <span className="text-emerald-300">"full_stack_engineer"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">focus</span>
                  <span className="text-emerald-300">"backend + cloud"</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">stack</span>
                  <span className="text-emerald-300">["React", "SpringBoot", "AWS"]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">currently_building</span>
                  <span className="text-emerald-300">"developer tooling & infra"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three cards */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <div className="grid gap-6 md:grid-cols-3">
          <Link
            to="/projects"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-lg transition"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Code2 size={20} />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-blue-700">Projects</h2>
            <p className="mb-3 text-sm text-slate-600">
              Real-world work across backend, frontend, and infrastructure with measurable impact.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
              Browse projects <ArrowRight size={14} />
            </span>
          </Link>

          <Link
            to="/experience"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-lg transition"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <Zap size={20} />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-blue-700">Experience</h2>
            <p className="mb-3 text-sm text-slate-600">
              Building and shipping features end‑to‑end, mentoring, and owning production systems.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
              View timeline <ArrowRight size={14} />
            </span>
          </Link>

          <Link
            to="/skills"
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-blue-200 hover:shadow-lg transition"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Target size={20} />
            </div>
            <h2 className="mb-2 text-lg font-semibold text-slate-900 group-hover:text-blue-700">Skills</h2>
            <p className="mb-3 text-sm text-slate-600">
              Strong foundation in CS fundamentals, API design, data modeling, and cloud architecture.
            </p>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600">
              Explore stack <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
