import { useState } from 'react';
import { useFetch } from '../hooks';
import { projectService } from '../services/dataService';
import { Section, Card, Badge, Skeleton, Spinner, ErrorMessage } from './UI';

/**
 * Projects page - Display all projects from backend
 */
export const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const { data: projects, loading, error } = useFetch(projectService.getAllProjects);

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <Section title="Projects" icon="💻">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <Skeleton height="h-40" className="mb-4" />
              <Skeleton height="h-4" className="mb-2" />
              <Skeleton height="h-4 w-3/4" />
            </Card>
          ))}
        </div>
      </Section>
    );
  }

  if (error) {
    return (
      <Section title="Projects" icon="💻">
        <ErrorMessage message={error} onRetry={handleRetry} />
      </Section>
    );
  }

  return (
    <Section title="Projects" icon="💻">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects?.map((project) => (
          <Card
            key={project.id}
            hover
            className="cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-between">
                {project.title}
                {project.featured && <span className="text-xs bg-blue-600 px-2 py-1 rounded">Featured</span>}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills?.slice(0, 3).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {project.skills?.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.skills.length - 3}
                </Badge>
              )}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition text-sm"
              >
                View Project →
              </a>
            )}
          </Card>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <Card className="max-w-2xl w-full max-h-96 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="float-right text-gray-400 hover:text-white text-2xl"
            >
              ✕
            </button>
            <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>
            <p className="text-gray-300 mb-4">{selectedProject.description}</p>
            <div className="mb-4">
              <p className="text-gray-400 text-sm font-semibold mb-2">Technologies:</p>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills?.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
              >
                View on GitHub
              </a>
            )}
          </Card>
        </div>
      )}
    </Section>
  );
};

export default ProjectsPage;
