import { Section, Card, Badge } from '../components/UI';

export const SkillsPage = () => (
  <div className="space-y-12">
    <Section
      title="Technical Skills"
      subtitle="Technologies and tools I work with"
    >
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Languages */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Python</Badge>
            <Badge>Java</Badge>
            <Badge>C/C++</Badge>
            <Badge>JavaScript</Badge>
          </div>
        </Card>

        {/* Web & Backend */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Web & Backend</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Spring Boot</Badge>
            <Badge>React</Badge>
            <Badge>FastAPI</Badge>
            <Badge>Django</Badge>
            <Badge>Docker</Badge>
          </div>
        </Card>

        {/* AI/ML & Data */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">AI/ML & Data</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>PyTorch</Badge>
            <Badge>TensorFlow</Badge>
            <Badge>Pandas</Badge>
            <Badge>scikit-learn</Badge>
            <Badge>LangChain</Badge>
          </div>
        </Card>

        {/* DevOps & Cloud */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">DevOps & Cloud</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>AWS</Badge>
            <Badge>Kubernetes</Badge>
            <Badge>Docker</Badge>
            <Badge>Terraform</Badge>
            <Badge>Linux</Badge>
          </div>
        </Card>

        {/* Tools & Databases */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Tools & Databases</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Git</Badge>
            <Badge>PostgreSQL</Badge>
            <Badge>SQLite</Badge>
            <Badge>Jupyter</Badge>
            <Badge>Google Colab</Badge>
          </div>
        </Card>

        {/* Specializations */}
        <Card className="p-6">
          <h3 className="text-xl font-bold text-white mb-4">Specializations</h3>
          <div className="flex flex-wrap gap-2">
            <Badge>Network Automation</Badge>
            <Badge>Embedded Systems</Badge>
            <Badge>RAG Systems</Badge>
            <Badge>Agentic AI</Badge>
          </div>
        </Card>
      </div>
    </Section>

    {/* Proficiency Levels */}
    <Section title="Proficiency Levels">
      <div className="space-y-6 max-w-2xl mx-auto">
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-semibold">Python</span>
            <span className="text-gray-400">Expert</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '95%'}}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-semibold">Java / Spring Boot</span>
            <span className="text-gray-400">Advanced</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-semibold">React / Frontend</span>
            <span className="text-gray-400">Advanced</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-semibold">Cloud & DevOps</span>
            <span className="text-gray-400">Advanced</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
          </div>
        </div>

        <div>
          <div className="flex justify-between mb-2">
            <span className="text-white font-semibold">Machine Learning</span>
            <span className="text-gray-400">Intermediate</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{width: '75%'}}></div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export default SkillsPage;
