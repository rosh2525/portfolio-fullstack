import { Section, Card, Badge } from '../components/UI';

/**
 * Skills page - Display skills organized by category
 */
export const SkillsPage = () => {
  const skillCategories = {
    'Backend Development': [
      { skill: 'Java', proficiency: 90, icon: '☕' },
      { skill: 'Python', proficiency: 95, icon: '🐍' },
      { skill: 'C/C++', proficiency: 85, icon: '⚙️' },
      { skill: 'Spring Boot', proficiency: 90, icon: '🍃' },
      { skill: 'FastAPI', proficiency: 85, icon: '⚡' },
    ],
    'Frontend Development': [
      { skill: 'React', proficiency: 90, icon: '⚛️' },
      { skill: 'JavaScript', proficiency: 95, icon: '📜' },
      { skill: 'TypeScript', proficiency: 85, icon: '📘' },
      { skill: 'Tailwind CSS', proficiency: 90, icon: '🎨' },
      { skill: 'HTML/CSS', proficiency: 95, icon: '🌐' },
    ],
    'Database & Data': [
      { skill: 'PostgreSQL', proficiency: 90, icon: '🗄️' },
      { skill: 'MongoDB', proficiency: 80, icon: '🍃' },
      { skill: 'SQLite', proficiency: 85, icon: '📦' },
      { skill: 'SQL', proficiency: 95, icon: '🔍' },
      { skill: 'Firebase', proficiency: 75, icon: '🔥' },
    ],
    'DevOps & Cloud': [
      { skill: 'Docker', proficiency: 90, icon: '🐳' },
      { skill: 'Kubernetes', proficiency: 80, icon: '☸️' },
      { skill: 'AWS', proficiency: 85, icon: '☁️' },
      { skill: 'Git/GitHub', proficiency: 95, icon: '🐙' },
      { skill: 'Linux', proficiency: 90, icon: '🐧' },
    ],
    'AI/ML & Tools': [
      { skill: 'PyTorch', proficiency: 85, icon: '🔥' },
      { skill: 'LangChain', proficiency: 80, icon: '🔗' },
      { skill: 'LLMs', proficiency: 85, icon: '🤖' },
      { skill: 'Selenium', proficiency: 80, icon: '🔍' },
      { skill: 'BeautifulSoup', proficiency: 85, icon: '🥣' },
    ],
  };

  const categoryColors = {
    'Backend Development': 'from-blue-600 to-blue-800',
    'Frontend Development': 'from-purple-600 to-purple-800',
    'Database & Data': 'from-green-600 to-green-800',
    'DevOps & Cloud': 'from-orange-600 to-orange-800',
    'AI/ML & Tools': 'from-pink-600 to-pink-800',
  };

  return (
    <Section title="Skills" icon="⚡">
      <div className="space-y-12">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            {/* Category Header */}
            <div className={`mb-6 pb-4 border-b-2 border-gray-700`}>
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${categoryColors[category]} bg-clip-text text-transparent`}>
                {category}
              </h3>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((item) => (
                <Card key={item.skill} hover className="group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{item.icon}</span>
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
                        {item.skill}
                      </h4>
                    </div>
                  </div>

                  {/* Proficiency Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400">Proficiency</span>
                      <span className="text-xs font-semibold text-blue-400">{item.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                        style={{ width: `${item.proficiency}%` }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Skills Summary */}
      <div className="mt-16 pt-12 border-t border-gray-700">
        <h3 className="text-2xl font-bold text-white mb-6">Technical Summary</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-bold text-blue-400 mb-2">25+</p>
            <p className="text-gray-300">Technical Skills</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-purple-400 mb-2">90%</p>
            <p className="text-gray-300">Average Proficiency</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-pink-400 mb-2">5</p>
            <p className="text-gray-300">Expertise Categories</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsPage;
