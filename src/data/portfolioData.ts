import { 
  Terminal, Code2, Database, Globe, Cpu, Server, 
  Layout, GitBranch, LineChart
} from "lucide-react";

export const portfolioData = {
  personal: {
    name: "Midhun Gereketi",
    title: "B.Tech Cyber Security Student",
    roles: [
      "Cyber Security Student",
      "Full-Stack Developer",
      "AI Integrator",
      "Backend Engineer",
      "Tech Enthusiast"
    ],
    resumeUrl: "/resume.pdf",
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
      description: "A full-stack system to analyze URLs and classify phishing threats using an intuitive web interface.",
      technologies: ["React.js", "Vite", "Firebase", "Firestore", "Chart.js", "Vercel"],
      github: "#",
      liveDemo: "#",
      category: "Cyber Security & Web",
      date: "2024",
      image: "/projects/phishing_dashboard.png",
      features: ["Role-based access control", "Interactive analytics dashboard", "Real-time URL risk scoring"],
      challenges: "Managing real-time analytics for varying threat types.",
      solutions: "Integrated Firebase/Firestore with Chart.js for responsive visualizations.",
      results: "Deployed successfully on Vercel with light and dark themes."
    },
    {
      id: 2,
      title: "Theme Chess – Multi-Theme Platform",
      description: "A modern web-based chess platform supporting multiple visual themes including Pokémon, Anime, Doraemon, and Classic Chess.",
      technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "chess.js"],
      github: "#",
      liveDemo: "#",
      category: "Web Development",
      date: "2024",
      image: "/projects/theme_chess.png",
      features: ["Interactive chessboard with legal move validation", "Move history and captured pieces tracking", "Multiple theme switching without reloading"],
      challenges: "Adding new themes without modifying core gameplay logic.",
      solutions: "Designed a scalable architecture with reusable components and efficient state management.",
      results: "Smooth animations and theme transitions using Framer Motion and Tailwind CSS."
    },
    {
      id: 3,
      title: "Farm Market – Smart Marketplace",
      description: "A responsive e-commerce platform connecting farmers and consumers through a modern digital marketplace.",
      technologies: ["React.js", "Framer Motion", "JavaScript", "HTML", "CSS"],
      github: "#",
      liveDemo: "#",
      category: "E-commerce & Web",
      date: "2024",
      image: "/projects/farm_market.png",
      features: ["Immersive landing page with cinematic animations", "Product browsing, category filtering, and shopping workflow", "Administrator portal for managing inventory"],
      challenges: "Creating highly interactive and cinematic product introductions.",
      solutions: "Utilized Framer Motion for scroll-linked animations and smooth page transitions.",
      results: "Optimized UI responsiveness across desktop and mobile devices."
    },
    {
      id: 4,
      title: "Chess Coaching Portal",
      description: "A web-based coaching platform for managing chess students, learning resources, and online class scheduling.",
      technologies: ["React.js", "JavaScript", "Firebase", "HTML", "CSS"],
      github: "#",
      liveDemo: "#",
      category: "EdTech & Web",
      date: "2024",
      image: "/projects/chess_coaching.png",
      features: ["Secure login with role-based access", "Student dashboards with study materials and progress tracking", "Interactive chessboard for notation practice"],
      challenges: "Organizing multiple types of resources (PDFs, videos) for various students.",
      solutions: "Developed an administrative panel for managing students and structuring learning materials.",
      results: "Streamlined workflow for coaches to generate credentials and schedule online classes."
    },
    {
      id: 5,
      title: "MindVault – Smart Memory Organizer",
      description: "A smart knowledge management application implementing multiple Data Structures and Algorithms.",
      technologies: ["Java", "Data Structures", "Algorithms"],
      github: "#",
      liveDemo: "#",
      category: "Software Engineering",
      date: "2024",
      image: "/projects/mind_vault.png",
      features: ["Optimized search & retrieval using Hash Maps and BST", "Priority-based note management using Heaps", "Graph-based relationship mapping"],
      challenges: "Efficiently organizing, sorting, and scheduling notes based on priority.",
      solutions: "Implemented Heaps for priority management, Stacks for undo, and Queues for reminders.",
      results: "Achieved contextual navigation and highly efficient note discovery."
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
      degree: "B.Tech in Information Technology",
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
