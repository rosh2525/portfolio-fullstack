export const EducationPage = () => {
  const education = {
    school: "Indian Institute of Technology, Jodhpur",
    degree: "B.Tech",
    field: "Bioengineering",
    duration: "2023 - 2027",
    coursework: [
      "Machine Learning",
      "Data Structures & Algorithms",
      "Deep Learning",
      "Introduction to Computer Science",
      "Computational Biology",
      "Database Management Systems"
    ]
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Education</h1>
        <p className="text-gray-500 mb-12">Academic background</p>

        <div className="space-y-8">
          {/* Main Education Card */}
          <div className="border-l-4 border-blue-600 pl-6">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h2 className="text-2xl font-semibold">{education.school}</h2>
                <p className="text-blue-600 font-medium">
                  {education.degree} in {education.field}
                </p>
              </div>
              <span className="text-sm text-gray-500 whitespace-nowrap">{education.duration}</span>
            </div>
          </div>

          {/* Coursework */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Relevant Coursework</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {education.coursework.map((course) => (
                <div
                  key={course}
                  className="bg-gray-50 px-4 py-3 rounded border border-gray-200 hover:border-blue-300 transition"
                >
                  <p className="text-gray-800 text-sm font-medium">{course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
