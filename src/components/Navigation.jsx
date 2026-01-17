import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-gray-900';
  };

  return (
    <nav className="sticky top-0 bg-white border-b border-gray-200 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition">
          RK
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <Link to="/" className={`text-sm transition ${isActive('/')}`}>
            Home
          </Link>
          <Link to="/projects" className={`text-sm transition ${isActive('/projects')}`}>
            Projects
          </Link>
          <Link to="/experience" className={`text-sm transition ${isActive('/experience')}`}>
            Experience
          </Link>
          <Link to="/education" className={`text-sm transition ${isActive('/education')}`}>
            Education
          </Link>
          <Link to="/skills" className={`text-sm transition ${isActive('/skills')}`}>
            Skills
          </Link>
          <Link to="/contact" className={`text-sm transition ${isActive('/contact')}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
