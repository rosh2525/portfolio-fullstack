export const ExperiencePage = () => {
  const experience = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Celestica Inc.",
      location: "Chennai, India",
      duration: "May 2025 - Jul 2025",
      highlights: [
        "Automated platform validation on Celestica DS3001/DS4001, reducing validation time by ~50%",
        "Engineered a production-ready web application to manage and reserve shared network hardware",
        "Analyzed and compared algorithms for memory spike detection in networking devices",
        "Contributed to platform bring-up and kernel upgradation for community SONiC",
        "Rewrote kernel modules in Python and C for code quality improvements"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Experience</h1>
        <p className="text-gray-500 mb-12">Professional work and internships</p>

        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.id} className="border-l-4 border-blue-600 pl-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-2xl font-semibold">{job.title}</h2>
                  <p className="text-blue-600 font-medium">{job.company}</p>
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">{job.duration}</span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{job.location}</p>

              <ul className="space-y-2">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-700 text-sm leading-relaxed flex gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
