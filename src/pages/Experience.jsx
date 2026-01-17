import { Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../data/profile';

export const Experience = () => {
  const experiences = EXPERIENCE;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-blue-600 uppercase mb-3">Journey</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Experience</h1>
          <p className="text-gray-600 max-w-2xl text-sm md:text-base">
            Roles and work that best represent how I build, ship, and improve systems.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative">
              {idx !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 bottom-0 w-1 bg-gradient-to-b from-blue-600/80 to-blue-200/40" />
              )}

              <div className="absolute left-0 top-2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center border-4 border-gray-50 z-10">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              <div className="ml-20 bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg hover:border-blue-300 transition-all">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <span>{exp.company}</span>
                      {exp.location && (
                        <>
                          <span className="text-gray-300">•</span>
                          <MapPin size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-600">{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-xs md:text-sm text-gray-600 mb-4 bg-gray-50 px-3 py-1 rounded-lg">
                  <Calendar size={14} />
                  <span>
                    {exp.start} 
                    {exp.end ? ` b7 ${exp.end}` : ' b7 Present'}
                  </span>
                </div>

                <ul className="mt-2 space-y-2 text-gray-700 text-sm md:text-base">
                  {exp.bullets.map((point, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
