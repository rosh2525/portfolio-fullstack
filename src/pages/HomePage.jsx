import { Section, Card, Badge } from './UI';

/**
 * Home page - Hero section
 */
export const HomePage = () => (
  <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
    <div className="max-w-4xl text-center space-y-8">
      {/* Avatar */}
      <div className="mb-8">
        <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
          <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-4xl">
            👨‍💻
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold">
          <span className="text-white">Hi, I'm </span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Roshan Kumar
          </span>
        </h1>
        <p className="text-2xl md:text-3xl text-gray-400 font-light">
          Full Stack Developer & Software Engineer
        </p>
      </div>

      {/* Description */}
      <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
        I build scalable, high-performance applications using modern technologies.
        Experienced with Java Spring Boot, React, Docker, and cloud infrastructure.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-8">
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition transform hover:scale-105"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white rounded-lg font-semibold transition"
        >
          Get In Touch
        </a>
      </div>

      {/* Quick Links */}
      <div className="flex justify-center items-center gap-6 pt-12">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
          GitHub
        </a>
        <span className="text-gray-600">•</span>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition text-2xl">
          LinkedIn
        </a>
        <span className="text-gray-600">•</span>
        <a href="mailto:roshan@example.com" className="text-gray-400 hover:text-white transition text-2xl">
          Email
        </a>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 animate-bounce">
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
);

export default HomePage;
