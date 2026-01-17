import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import SystemStatus from './components/SystemStatus';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-gray-600 text-sm">© 2025 Roshan Kumar. All rights reserved.</p>
        <div className="flex flex-col gap-3 items-start md:items-end">
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/rosh2525"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              GitHub
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="https://linkedin.com/in/roshan-kumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              LinkedIn
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="mailto:techsavvy.roshan@gmail.com"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Email
            </a>
          </div>
          <SystemStatus />
        </div>
      </div>
    </footer>
  );
}

export default App;
