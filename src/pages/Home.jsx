import { Link } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="space-y-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Hi, I'm Roshan Kumar
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Full-stack developer passionate about building clean, scalable applications. 
              I create intuitive user experiences backed by robust backend systems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition font-medium"
            >
              View My Work
              <ArrowRight size={18} />
            </Link>
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-2 border border-gray-300 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 transition font-medium"
            >
              Get in Touch
              <Mail size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="border-t border-gray-200"></div>
      </div>

      {/* Featured Sections */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Projects */}
          <Link to="/projects" className="group">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                Projects
              </h2>
              <p className="text-gray-600 text-sm">Recent work and side projects</p>
            </div>
            <div className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Explore <ArrowRight size={16} />
            </div>
          </Link>

          {/* Experience */}
          <Link to="/experience" className="group">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                Experience
              </h2>
              <p className="text-gray-600 text-sm">Professional background</p>
            </div>
            <div className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More <ArrowRight size={16} />
            </div>
          </Link>

          {/* Skills */}
          <Link to="/skills" className="group">
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
                Skills
              </h2>
              <p className="text-gray-600 text-sm">Technologies & expertise</p>
            </div>
            <div className="text-blue-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
              Discover <ArrowRight size={16} />
            </div>
          </Link>
        </div>
      </section>

      {/* Social Links Footer */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-12 flex items-center justify-between">
          <p className="text-gray-600">Let's connect</p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
