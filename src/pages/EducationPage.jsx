import { Section, Card, Badge } from '../components/UI';

/**
 * Education page - Static education info (can be fetched from API if needed)
 */
export const EducationPage = () => {
  const education = {
    school: 'Indian Institute of Technology Jodhpur',
    degree: 'Bachelor of Technology',
    field: 'Bioengineering',
    duration: '2023 - 2027',
    gpa: '3.8/4.0',
    coursework: [
      'Data Structures & Algorithms',
      'Machine Learning',
      'Deep Learning',
      'Computer Science Fundamentals',
      'Computational Biology',
      'Introduction to C Programming',
      'Database Management Systems',
      'Web Development',
    ],
    achievements: [
      'Maintain 3.8 GPA throughout coursework',
      'Active in technical clubs and competitions',
      'Published research in bioengineering',
    ],
  };

  return (
    <Section title="Education" icon="🎓">
      <div className="space-y-8">
        {/* Main Education Card */}
        <Card hover className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-l" />

          <div className="pl-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-3xl font-bold text-white">{education.school}</h3>
                <p className="text-xl text-blue-400 mt-1">
                  {education.degree} in {education.field}
                </p>
              </div>
              <span className="text-sm text-gray-400 whitespace-nowrap ml-4">
                {education.duration}
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-400 text-sm font-semibold mb-1">GPA</p>
                <p className="text-lg text-white font-bold">{education.gpa}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm font-semibold mb-1">Program</p>
                <p className="text-lg text-white font-bold">{education.degree}</p>
              </div>
            </div>

            {/* Achievements */}
            {education.achievements && education.achievements.length > 0 && (
              <div className="mb-6">
                <p className="text-gray-400 text-sm font-semibold mb-2">Achievements:</p>
                <ul className="list-disc list-inside space-y-1">
                  {education.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Coursework */}
            <div>
              <p className="text-gray-400 text-sm font-semibold mb-3">Relevant Coursework</p>
              <div className="grid md:grid-cols-2 gap-3">
                {education.coursework.map((course) => (
                  <div
                    key={course}
                    className="bg-gray-700 bg-opacity-50 px-4 py-2 rounded border border-gray-600 hover:border-blue-500 transition"
                  >
                    <p className="text-white text-sm">{course}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Education Info */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <p className="text-gray-400 text-sm font-semibold mb-2">Institution</p>
            <p className="text-white font-semibold">IIT Jodhpur</p>
            <p className="text-gray-500 text-sm mt-1">Top-tier engineering college in India</p>
          </Card>

          <Card>
            <p className="text-gray-400 text-sm font-semibold mb-2">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                AI/ML
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Software Dev
              </Badge>
              <Badge variant="secondary" className="text-xs">
                Full Stack
              </Badge>
            </div>
          </Card>

          <Card>
            <p className="text-gray-400 text-sm font-semibold mb-2">Expected Graduation</p>
            <p className="text-white font-semibold">May 2027</p>
            <p className="text-gray-500 text-sm mt-1">Currently in 2nd year</p>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default EducationPage;
