import { useState } from 'react';

export const HomePage = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl text-center space-y-8">
        {/* Minimal Header */}
        <div className="space-y-4">
          <div className="text-sm font-mono text-gray-500">Welcome to my portfolio</div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            Roshan Kumar
          </h1>
          <p className="text-lg text-gray-600">
            Software Engineer | Full Stack Developer | AI/ML Enthusiast
          </p>
        </div>

        {/* Bio */}
        <div className="text-gray-700 leading-relaxed text-base max-w-xl mx-auto">
          <p>
            B.Tech in Bioengineering from IIT Jodhpur. Building scalable applications with Python, Java, and cloud infrastructure. 
            Experience in embedded systems, network automation, and AI-driven solutions.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col items-center gap-3 pt-8">
          <a
            href="https://github.com/rosh2525"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-blue-600 transition"
          >
            GitHub
          </a>
          <div className="w-12 h-px bg-gray-300"></div>
          <a
            href="https://linkedin.com/in/roshan-kumar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-blue-600 transition"
          >
            LinkedIn
          </a>
          <div className="w-12 h-px bg-gray-300"></div>
          <a
            href="mailto:techsavvy.roshan@gmail.com"
            className="text-sm hover:text-blue-600 transition"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
