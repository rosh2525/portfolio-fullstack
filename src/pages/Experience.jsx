import { useEffect, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/experience');
        const data = await response.json();
        setExperiences(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>;
  if (error) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-red-500">Error: {error}</p></div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Experience</h1>
          <p className="text-gray-600">Professional roles and responsibilities</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <article key={exp.id} className="border-l-2 border-gray-300 pl-6 pb-6">
              <div className="flex items-start gap-4 mb-3">
                <Calendar size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-500">
                  {exp.startDate && new Date(exp.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  {exp.endDate ? ` - ${new Date(exp.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}` : ' - Present'}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-1">{exp.jobTitle}</h2>
              <div className="flex items-center gap-2 text-gray-700 font-medium mb-3">
                <span>{exp.company}</span>
                {exp.location && (
                  <>
                    <span className="text-gray-300">•</span>
                    <MapPin size={14} className="text-gray-400" />
                    <span className="text-gray-600">{exp.location}</span>
                  </>
                )}
              </div>

              {exp.description && (
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              )}
            </article>
          ))}
        </div>

        {experiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No experience records found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Experience;
