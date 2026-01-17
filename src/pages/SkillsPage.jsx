export const SkillsPage = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "Java", "C/C++", "JavaScript"]
    },
    {
      category: "Backend & Frameworks",
      items: ["Spring Boot", "FastAPI", "Django", "Node.js"]
    },
    {
      category: "Frontend",
      items: ["React", "Tailwind CSS", "HTML/CSS", "JavaScript"]
    },
    {
      category: "AI/ML & Data",
      items: ["PyTorch", "TensorFlow", "Pandas", "scikit-learn", "LangChain"]
    },
    {
      category: "DevOps & Cloud",
      items: ["AWS", "Docker", "Kubernetes", "Terraform", "Linux"]
    },
    {
      category: "Tools & Databases",
      items: ["Git", "PostgreSQL", "SQLite", "Jupyter", "Google Colab"]
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Skills</h1>
        <p className="text-gray-500 mb-12">Technologies and tools I work with</p>

        <div className="grid md:grid-cols-2 gap-12">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category}>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-gray-800 px-3 py-2 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
