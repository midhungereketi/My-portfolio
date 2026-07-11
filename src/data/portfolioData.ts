import { 
  Terminal, Code2, Database, Globe, Cpu, Server, 
  Layout, GitBranch, LineChart
} from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Midhun Gereketi",
    title: "B.Tech Cyber Security Student",
    roles: [
      "Vibe Coder",
      "Cyber Security Student",
      "Tech Enthusiast",
      "AI Integrator"
    ],
    resumeUrl: "https://drive.google.com/file/d/1lzEV6l51oG0mn7oYuDaY3AGDBBJ-hPTO/view?usp=drive_link",
    contactEmail: "midhungereketi@gmail.com",
    socials: {
      github: "https://github.com/midhungereketi",
      linkedin: "https://linkedin.com/in/midhungereketi",
      twitter: "https://twitter.com"
    }
  },
  about: {
    introduction: "Motivated B.Tech Cyber Security student with hands-on experience in full-stack development, AI integrations, and backend engineering. Seeking an internship to apply problem-solving skills and technical knowledge toward building efficient, data-driven software solutions.",
    story: "My journey revolves around complex problem decomposition and analytical reasoning. I enjoy system design thinking and fast self-learning to adapt to new technologies, executing consistently on long, research-oriented projects.",
    careerGoals: "My goal is to build scalable backend systems, distributed architectures, and real-world AI applications.",
    mission: "To engineer robust backend architectures and scalable data pipelines integrated with cutting-edge AI technologies.",
    vision: "A secure, efficient web powered by advanced microservices and AI-assisted development.",
    stats: [
      { label: "Projects Completed", value: "2+" },
      { label: "Technologies", value: "15+" },
      { label: "Certificates", value: "2" },
      { label: "CGPA", value: "8.36" },
      { label: "Languages", value: "2" }
    ]
  },
  skills: [
    { name: "C++ / Python / Java / SQL", category: "Programming", proficiency: 85, icon: Code2 },
    { name: "Node.js / Express.js", category: "Backend", proficiency: 85, icon: Server },
    { name: "React.js / Vite", category: "Frontend", proficiency: 80, icon: Globe },
    { name: "Generative AI & Agentic AI", category: "AI", proficiency: 75, icon: Cpu },
    { name: "Data Analytics (Snowflake)", category: "Data", proficiency: 75, icon: LineChart },
    { name: "Databricks", category: "Tools", proficiency: 70, icon: Database },
    { name: "Git / GitHub", category: "Version Control", proficiency: 85, icon: GitBranch },
    { name: "Firebase / Firestore", category: "Database", proficiency: 80, icon: Database },
    { name: "Data Structures & Algorithms", category: "Core", proficiency: 90, icon: Layout },
    { name: "System Design", category: "Architecture", proficiency: 75, icon: Terminal },
  ],
  projects: [
    {
      id: 1,
      title: "Phishing URL Detection System",
      description: "Developed a full-stack Phishing URL Detection System to analyze URLs and classify phishing threats using an intuitive web interface.",
      technologies: ["React.js", "Vite", "Firebase", "Firestore", "Chart.js", "JavaScript", "HTML", "CSS", "Vercel"],
      github: "#",
      liveDemo: "#",
      category: "Personal Project",
      date: "2024",
      image: "/projects/phishing_dashboard.png",
      features: [
        "Built secure authentication with role-based access control, enabling separate dashboards for administrators and users.",
        "Designed an interactive analytics dashboard with Chart.js to visualize phishing trends, detection statistics, and user activity.",
        "Implemented URL risk scoring, phishing report history, and real-time validation with responsive UI using React.js and Vite."
      ],
      challenges: "Managing state and real-time validations efficiently.",
      solutions: "Integrated Firebase/Firestore and LocalStorage for data persistence, user management, and application state handling.",
      results: "Deployed the application on Vercel with modern responsive design supporting both light and dark themes."
    },
    {
      id: 2,
      title: "Farm Market – Smart Agricultural Marketplace",
      description: "Developed a responsive e-commerce platform connecting farmers and consumers through a modern digital marketplace.",
      technologies: ["React.js", "Framer Motion", "JavaScript", "HTML", "CSS"],
      github: "#",
      liveDemo: "#",
      category: "Web Programming Project",
      date: "2024",
      image: "/projects/farm_market.png",
      features: [
        "Designed an immersive landing page featuring cinematic Framer Motion animations with interactive product introduction.",
        "Implemented product browsing, category filtering, shopping workflow, and responsive user interface.",
        "Built an administrator portal for managing products, inventory, and customer information."
      ],
      challenges: "Ensuring smooth animations and optimal user experience across all devices.",
      solutions: "Optimized UI responsiveness and user experience across desktop and mobile devices using Framer Motion and custom CSS.",
      results: "Delivered a performant, highly interactive marketplace connecting consumers and farmers."
    },
    {
      id: 3,
      title: "MindVault – Smart Memory Organizer",
      description: "Developed a smart knowledge management application implementing multiple Data Structures and Algorithms for efficient note organization.",
      technologies: ["Java", "Data Structures", "Algorithms"],
      github: "#",
      liveDemo: "#",
      category: "DSA Project",
      date: "2024",
      image: "/projects/mind_vault.png",
      features: [
        "Designed optimized search and retrieval using Hash Maps, Binary Search Trees, and Binary Search algorithms.",
        "Implemented priority-based note management using Heaps, undo functionality using Stacks, and reminder scheduling using Queues.",
        "Built graph-based relationship mapping between notes to improve contextual navigation and knowledge discovery."
      ],
      challenges: "Efficiently organizing, sorting, and scheduling notes based on priority and relationships.",
      solutions: "Applied sorting algorithms for efficient organization of notes based on title, priority, and timestamps.",
      results: "Achieved highly optimized contextual navigation and rapid knowledge discovery."
    }
  ],
  experience: [
    {
      company: "IBM",
      role: "Gen AI Summer Intern",
      duration: "2026",
      responsibilities: [
        "Worked on AI-assisted development and LLM integration.",
        "Engineered backend systems with integrated third-party APIs.",
        "Collaborated on real-world AI applications and problem decomposition."
      ],
      technologies: ["Generative AI", "LLM", "Backend Systems", "APIs"],
      achievements: "Gained hands-on experience in enterprise AI applications."
    },
    {
      company: "Various Hackathons",
      role: "Active Participant & Developer",
      duration: "2024 - Present",
      responsibilities: [
        "Rapidly prototyped full-stack applications within strict 24 to 48-hour time limits.",
        "Collaborated with diverse teams to brainstorm, design, and implement innovative software solutions.",
        "Pitched technical architectures and product visions to judging panels."
      ],
      technologies: ["React.js", "Node.js", "AI APIs", "Firebase"],
      achievements: "Consistently delivered working prototypes under pressure, showcasing strong problem-solving and teamwork skills."
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science and Engineering (Cyber Security)",
      university: "Vellore Institute of Technology (VIT) — Vellore",
      cgpa: "8.36 / 10.0",
      duration: "2024 - 2028 (Expected)",
      subjects: ["Data Structures", "Object-Oriented Programming", "Computer Architecture", "Cyber Security"],
      highlights: "Maintained consistent 8.36 CGPA across all semesters."
    }
  ],
  certificates: [
    {
      title: "Basic Networking Certificate",
      provider: "Cisco",
      issueDate: "2024",
      credentialId: "CSCO-123456",
      verifyUrl: "#",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
    },
    {
      title: "Advanced Gen AI Certificate",
      provider: "IBM",
      issueDate: "2024",
      credentialId: "IBM-789012",
      verifyUrl: "#",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
    }
  ],
  achievements: [
    {
      title: "Backend Engineering Excellence",
      description: "Engineered backend systems with integrated third-party APIs (GitHub, Jira) for data visualization and developer analytics.",
      category: "Engineering",
      date: "2024"
    },
    {
      title: "Version Control Proficiency",
      description: "Regularly utilizes Git for branch management and collaborative workflows across multiple projects.",
      category: "Development",
      date: "2024"
    }
  ],
  testimonials: []
};
