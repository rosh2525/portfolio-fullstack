import { useFetch } from '../hooks';
import { experienceService } from '../services/dataService';
import { Section, Card, Badge, Skeleton, ErrorMessage } from './UI';

/**
 * Experience page - Display work experiences from backend
 */
export const ExperiencePage = () => {
  const { data: experiences, loading, error } = useFetch(experienceService.getAllExperiences);

  const handleRetry = () => {
    window.location.reload();
  };

  if (loading) {
    return (
      <Section title="Experience" icon="💼">
        {[1, 2].map((i) => (
          <Card key={i} className="mb-6">
            <Skeleton height="h-6" className="mb-2 w-1/3" />
            <Skeleton height="h-4" className="mb-4 w-1/2" />
            <Skeleton height="h-4" />
          </Card>
        ))}
      </Section>
    );
  }

  if (error) {
    return (
      <Section title="Experience" icon="💼">
        <ErrorMessage message={error} onRetry={handleRetry} />
      </Section>
    );
  }

  return (
    <Section title="Experience" icon="💼">
      <div className="space-y-8">
        {experiences?.map((exp, index) => (
          <Card key={exp.id} hover className="relative">
            {/* Timeline indicator */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-l" />

            {/* Content */}
            <div className="pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                  <p className="text-blue-400 text-lg">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                  {exp.duration}
                </span>
              </div>

              {/* Description */}
              <ul className="list-disc list-inside space-y-2 my-4">
                {exp.highlights?.map((highlight, idx) => (
                  <li key={idx} className="text-gray-300">
                    {highlight}
                  </li>
                ))}
              </ul>

              {/* Skills */}
              {exp.skills && exp.skills.length > 0 && (
                <div>
                  <p className="text-gray-400 text-sm font-semibold mb-2">Skills:</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default ExperiencePage;
