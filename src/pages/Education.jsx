import { Calendar, MapPin } from 'lucide-react';
import { EDUCATION } from '../data/profile';

export const Education = () => {
  const education = EDUCATION;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">Academic</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Education</h1>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base">
            Where I built my foundations in computer science, bioengineering, and applied ML.
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu) => (
            <article key={edu.id} className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-1">{edu.degree}</h2>
                  <p className="text-gray-800 font-medium">{edu.school}</p>
                  {edu.location && (
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  )}
                </div>

                <div className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-lg">
                  <Calendar size={14} />
                  <span>
                    {edu.startYear} b7 {edu.endYear}
                  </span>
                </div>
              </div>

              {edu.fieldOfStudy && (
                <p className="text-sm text-gray-700 mb-3">
                  <span className="font-medium">Field:</span> {edu.fieldOfStudy}
                </p>
              )}

              {edu.description && (
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {edu.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
