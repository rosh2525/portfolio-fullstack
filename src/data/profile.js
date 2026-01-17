// Central source of truth for portfolio content based on Roshan's resume

export const PROFILE = {
  name: 'Roshan Kumar',
  title: 'Full‑Stack / Backend Engineer',
  location: 'Jodhpur, India',
  phone: '+91-7604864645',
  emailPrimary: 'techsavvy.roshan@gmail.com',
  emailInstitute: 'b23bb1037@iitj.ac.in',
  links: {
    linkedin: 'https://linkedin.com/in/roshan-kumar',
    github: 'https://github.com/rosh2525',
    codeforces: 'https://codeforces.com/profile/RoshanKumar2525',
  },
};

export const EDUCATION = [
  {
    id: 1,
    school: 'Indian Institute of Technology Jodhpur',
    degree: 'B.Tech, Bioengineering',
    location: 'Jodhpur, India',
    startYear: 2023,
    endYear: 2027,
    fieldOfStudy: 'Bioengineering',
    description:
      'Relevant coursework: Deep Learning, Data Structures and Algorithms, Machine Learning, Introduction to Computer Science, Computational Biology.',
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: 'Celestica Inc.',
    title: 'Software Engineer Intern (Embedded Systems, SONiC NOS)',
    location: 'Chennai, India (On-site)',
    start: 'May 2025',
    end: 'July 2025',
    bullets: [
      'Automated platform validation on Celestica DS3001/DS4001, including document search for command verification and automated report generation (~50% faster validation).',
      'Engineered a production-ready web app to manage and reserve shared network hardware, eliminating resource conflicts and boosting team efficiency.',
      'Analyzed and compared algorithms for memory spike detection in networking devices.',
      'Contributed to platform bring-up and kernel upgrades for DS3001/DS4001 targeting community SONiC.',
      'Rewrote kernel modules in Python and C to satisfy Semgrep rules, improving code quality and reliability.',
      'Debugged SONiC Docker crashes via log backtracking and end-to-end platform validation.',
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: 'LLM Inference Server on Kubernetes',
    role: 'Solo project',
    period: 'Jan 2026',
    tech: ['Python', 'FastAPI', 'HuggingFace', 'Docker', 'Kubernetes', 'Prometheus'],
    repo: 'https://github.com/rosh2525',
    link: '',
    description:
      'Containerized LLM inference API (DistilGPT2) with FastAPI exposing /generate, /health and Prometheus /metrics, deployed to Minikube with Deployment, Service and HPA to demo scalable inference workloads.',
  },
  {
    id: 2,
    name: 'NetOps‑Mate: AI‑Powered Network Operations Agent',
    role: 'Solo project',
    period: 'Jan 2026',
    tech: ['Python', 'LangChain', 'Llama3', 'RAG', 'ChromaDB'],
    repo: 'https://github.com/rosh2525',
    link: '',
    description:
      'Agentic AI system combining RAG with Llama3 to query Cisco docs and analyze network logs, demonstrating AI‑assisted network automation and optimization.',
  },
  {
    id: 3,
    name: 'PerkPilotBot',
    role: 'Solo project',
    period: 'Oct 2024 – Present',
    tech: ['Python', 'BeautifulSoup', 'Selenium', 'SQLite', 'Gemini Pro API'],
    repo: 'https://github.com/rosh2525',
    link: '',
    description:
      'Scrapers for discount and scholarship platforms (MyUNiDAYS, StudentBeans, National Scholarship Portal), storing data in SQLite and exposed via a Gemini‑powered conversational bot.',
  },
  {
    id: 4,
    name: 'Indian Language Character Recognition (ICPR Hackathon)',
    role: 'Team project, IIT Jodhpur',
    period: 'July 2024 – Aug 2024',
    tech: ['PyTorch', 'CRNN', 'Computer Vision'],
    repo: 'https://github.com/rosh2525',
    link: '',
    description:
      'CRNN-based model for recognizing Indian language characters from images, achieving 80%+ accuracy in the ICPR hackathon.',
  },
];

export const SKILLS = [
  // Languages
  { id: 1, name: 'C/C++', category: 'Languages' },
  { id: 2, name: 'Python', category: 'Languages' },
  { id: 3, name: 'Java', category: 'Languages' },

  // Frameworks & Libraries
  { id: 10, name: 'Pandas', category: 'Frameworks & Libraries' },
  { id: 11, name: 'NumPy', category: 'Frameworks & Libraries' },
  { id: 12, name: 'scikit-learn', category: 'Frameworks & Libraries' },
  { id: 13, name: 'PyTorch', category: 'Frameworks & Libraries' },
  { id: 14, name: 'Django', category: 'Frameworks & Libraries' },
  { id: 15, name: 'FastAPI', category: 'Frameworks & Libraries' },

  // Tools & Platforms
  { id: 20, name: 'Git', category: 'Tools & Platforms' },
  { id: 21, name: 'Linux', category: 'Tools & Platforms' },
  { id: 22, name: 'Jupyter Notebook', category: 'Tools & Platforms' },
  { id: 23, name: 'Google Colab', category: 'Tools & Platforms' },
  { id: 24, name: 'GitHub Copilot', category: 'Tools & Platforms' },
  { id: 25, name: 'Docker', category: 'Tools & Platforms' },
  { id: 26, name: 'Kubernetes', category: 'Tools & Platforms' },
  { id: 27, name: 'AWS', category: 'Tools & Platforms' },

  // Coursework / Domains
  { id: 30, name: 'Deep Learning', category: 'Coursework & Domains' },
  { id: 31, name: 'Data Structures & Algorithms', category: 'Coursework & Domains' },
  { id: 32, name: 'Machine Learning', category: 'Coursework & Domains' },
  { id: 33, name: 'Introduction to Computer Science', category: 'Coursework & Domains' },
  { id: 34, name: 'Computational Biology', category: 'Coursework & Domains' },
];
