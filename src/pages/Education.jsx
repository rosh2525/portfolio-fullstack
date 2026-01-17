import { useEffect, useState } from 'react';
import { Calendar } from 'lucide-react';

export const Education = () => {
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/education');
        const data = await response.json();
        setEducation(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  if (loading) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-gray-500">Loading...</p></div>;
  if (error) return <div className="min-h-screen bg-gray-50 flex items-center justify-center"><p className="text-red-500">Error: {error}</p></div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Education</h1>
          <p className="text-gray-600">Academic background and certifications</p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {education.map((edu) => (
            <article key={edu.id} className="border-l-2 border-gray-300 pl-6 pb-6">
              <div className="flex items-start gap-4 mb-2">
                <Calendar size={16} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-500">
                  {edu.startDate && new Date(edu.startDate).getFullYear()}
                  {edu.endDate && ` - ${new Date(edu.endDate).getFullYear()}`}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mb-1">{edu.degree}</h2>
              <p className="text-gray-700 font-medium mb-2">{edu.school}</p>
              
              {edu.fieldOfStudy && (
                <p className="text-gray-600 mb-3">Field: {edu.fieldOfStudy}</p>
              )}

              {edu.description && (
                <p className="text-gray-600">{edu.description}</p>
              )}
            </article>
          ))}
        </div>

        {education.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No education records found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Education;
