import { useFetch } from '../hooks';
import { projectService } from '../services/dataService';

export const ProjectsPage = () => {
  const { data: projects, loading, error } = useFetch(projectService.getAllProjects);

  if (loading) {
    return (
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-500">Loading projects...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-600">Error loading projects</p>
        </div>
      </div>
    );
  }

  // Remove duplicates by ID
  const uniqueProjects = projects ? Array.from(new Map(projects.map(p => [p.id, p])).values()) : [];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Projects</h1>
        <p className="text-gray-500 mb-12">Selected work and side projects</p>

        <div className="space-y-8">
          {uniqueProjects.map((project) => (
            <div
              key={project.id}
              className="border-b border-gray-200 pb-8 hover:bg-gray-50 px-4 py-4 rounded transition"
            >
              <div className="flex items-start justify-between mb-3">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold hover:text-blue-600 transition"
                >
                  {project.title}
                </a>
                <span className="text-xs text-gray-500 whitespace-nowrap ml-4">
                  {new Date(project.createdAt).getFullYear()}
                </span>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.skills?.slice(0, 5).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
