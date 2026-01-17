import { useEffect, useState } from 'react';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const DEMO_EXPERIENCE = [
  {
    id: 1,
    jobTitle: "Senior Full-Stack Developer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    startDate: "2023-01-15",
    endDate: null,
    description: "Leading the design and implementation of microservices architecture. Architected scalable APIs serving 1M+ users. Mentored junior developers and established best practices for the team."
  },
  {
    id: 2,
    jobTitle: "Full-Stack Developer",
    company: "StartUp Solutions",
    location: "Remote",
    startDate: "2021-06-01",
    endDate: "2022-12-31",
    description: "Developed and maintained full-stack applications using React and Node.js. Implemented CI/CD pipelines, reducing deployment time by 60%. Collaborated with product team to deliver features on schedule."
  },
  {
    id: 3,
    jobTitle: "Junior Developer",
    company: "Digital Systems Ltd.",
    location: "New York, NY",
    startDate: "2020-03-01",
    endDate: "2021-05-31",
    description: "Built responsive web applications using React and Vue.js. Worked on bug fixes and feature enhancements. Learned best practices in web development and software engineering."
  }
];

export const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8080';
        const response = await fetch(`${apiUrl}/api/experience`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setExperiences(data);
      } catch (err) {
        console.warn('Using demo experience:', err.message);
        setExperiences(DEMO_EXPERIENCE);
      } finally {
        setLoading(false);
      }
    };

    fetchExperience();
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600">Loading experience...</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">Experience</h1>
          <p className="text-lg text-gray-600 max-w-2xl">A timeline of my professional journey and key roles.</p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative">
              {/* Timeline Line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-blue-200"></div>
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-gray-50 z-10">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>

              {/* Content Card */}
              <div className="ml-20 bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.jobTitle}</h3>
                    <div className="flex items-center gap-2 text-gray-600 font-semibold mb-3">
                      <span className="text-lg">{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-gray-300">•</span>
                          <MapPin size={16} className="text-gray-400" />
                          <span className="text-sm">{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 bg-gray-50 w-fit px-3 py-1 rounded-lg">
                  <Calendar size={14} />
                  {new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                  {' - '}
                  {exp.endDate 
                    ? new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                    : 'Present'
                  }
                </div>

                <p className="text-gray-700 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
