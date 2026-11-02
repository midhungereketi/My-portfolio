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
    resumeUrl: "https://drive.google.com/file/d/1oSmfZaRusmDEjgpuMvg3jx5IqHq-cogR/view?usp=sharing",
    contactEmail: "midhungereketi@gmail.com",
    socials: {
      github: "https://github.com/midhungereketi",
      linkedin: "https://www.linkedin.com/in/midhun-gereketi-5b2084322/",
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
      title: "PhishGuard – ML Phishing Detection",
      description: "A machine-learning security workspace that classifies suspicious URLs and emails, explains the warning signs and blocks risky hosts, with a companion browser extension.",
      technologies: ["React", "Vite", "FastAPI", "scikit-learn", "Postgres", "Chrome Extension", "Vercel"],
      github: "https://github.com/midhungereketi/phishing-detector",
      liveDemo: "https://phishing-detector-pink.vercel.app",
      category: "Computer Networks · Security",
      date: "2026",
      image: "/projects/phishguard.png",
      features: [
        "URL classifier trained on 21 lexical and domain-structure features with a Random Forest; email classifier using TF-IDF + Logistic Regression plus header, link and attachment inspection.",
        "Model Lab with real metrics, confusion matrices, calibration curves, Brier scores and feature importance, plus cached PhishTank matching and opt-in DNS, TLS, RDAP and VirusTotal checks.",
        "Chrome/Edge Manifest V3 extension with scoped pairing tokens, click warnings and synced host blocking, backed by hashed passwords, HttpOnly sessions and admin audit logs."
      ],
      challenges: "Replacing a browser-only heuristic scanner with trained models while keeping results explainable and never contacting a target unless the user opts in.",
      solutions: "Trained and calibrated separate URL and email models behind a FastAPI service, combined them with transparent risk-policy floors, and exposed every signal in the UI and reports.",
      results: "Deployed on Vercel with a Postgres backend; users get immediate risk alerts, scan history and downloadable PDF/JSON security reports."
    },
    {
      id: 2,
      title: "Intelligent Cybersecurity Log Management System",
      description: "A Security Operations Center platform that ingests security logs into MongoDB, detects suspicious activity, and drives alert triage and incident response from a React dashboard.",
      technologies: ["Python", "MongoDB", "PostgreSQL", "React", "JWT", "Argon2id"],
      github: "https://github.com/midhungereketi/Intelligent-Cybersecurity-Log-Management-Systems",
      liveDemo: "",
      category: "Database Systems · Team of 3",
      date: "2026",
      image: "/projects/cyber_logs.svg",
      features: [
        "Single-event API and CSV/JSON/JSONL bulk upload into indexed MongoDB collections, benchmarked on a million-log search.",
        "Detection engine for failed logins, port-scan probes and excessive activity, with checkpointing, pagination and replay-safe deduplication.",
        "PostgreSQL schema for users, roles, rules, threats, alerts and incidents, secured with Argon2id hashing, HS256 JWT, RBAC and rate limiting."
      ],
      challenges: "Keeping high-volume log search fast while relational security data (users, alerts, incidents) stayed consistent across two databases.",
      solutions: "Split storage by workload: MongoDB for indexed log search, PostgreSQL for the security schema, joined by cross-database analytics for the SOC console.",
      results: "A working SOC console with log search, hourly timelines, attacker IP rankings, alert escalation and incident investigation."
    },
    {
      id: 3,
      title: "Predictive Deadlock Lab",
      description: "An operating-systems research lab that makes real threads deadlock, confirms the cycle with a Wait-For Graph, and warns before it forms using a weighted 0–100 risk score.",
      technologies: ["Python", "FastAPI", "JavaScript", "Playwright", "Vercel"],
      github: "https://github.com/midhungereketi/predictive-deadlock-lab",
      liveDemo: "https://predictive-deadlock-lab.vercel.app",
      category: "Operating Systems · Research",
      date: "2026",
      image: "/projects/deadlock_lab.png",
      features: [
        "Two-thread and N-thread ring experiments (2–32 threads) with a supervisor that detects the cycle and recovers by aborting a thread; protected mode enforces a learned global lock order.",
        "Animated replay of every run from its real event log, with step controls, narrated captions and a per-event risk-factor breakdown.",
        "Compare view with repeated trials, scaling tests (mean ± sd), live weight sliders and CSV export; scoring logic tested in both Python and JavaScript against shared cases."
      ],
      challenges: "Turning a non-deterministic concurrency bug into something you can measure, replay and explain.",
      solutions: "Logged every lock event from real threads, scored contention with a documented heuristic, and rebuilt each run visually from the log.",
      results: "A deployed lab with saved measurement sets showing warning lead time before deadlock and 100% completion in protected mode."
    },
    {
      id: 4,
      title: "DP-FCFS – Predictive Cloud Task Scheduler",
      description: "An intelligent cloud task-scheduling and visualization system built on First Come First Serve, extended with predictive analysis of queue and execution dynamics.",
      technologies: ["React", "Vite", "Tailwind CSS", "Flask", "SQLite", "Chart.js"],
      github: "https://github.com/midhungereketi/DP-FCFS",
      liveDemo: "",
      category: "Cloud Computing",
      date: "2026",
      image: "/projects/dp_fcfs.svg",
      features: [
        "FCFS scheduling engine that models task arrival, queueing and execution across cloud resources.",
        "Interactive visualizations of queue state, Gantt-style execution timelines and performance metrics with Chart.js.",
        "React + Flask architecture with SQLite persistence for tasks and scheduling runs."
      ],
      challenges: "Making a simple scheduling policy observable enough to reason about waiting time and utilization.",
      solutions: "Paired the FCFS engine with predictive metrics and rich visual timelines so every scheduling decision can be inspected.",
      results: "A visual scheduling sandbox for comparing task loads and understanding queue behaviour."
    },
    {
      id: 5,
      title: "Smart School ERP",
      description: "A complete school management platform with dedicated portals for administrators, faculty, students, parents, academic staff, finance, transport and library — on the web and as an Android app.",
      technologies: ["React", "Vite", "Supabase", "PostgreSQL", "Capacitor", "Android", "Groq AI"],
      github: "",
      liveDemo: "",
      category: "Full-Stack · Web + Android",
      date: "2026",
      image: "/projects/school_erp.svg",
      features: [
        "Role-based portals covering admissions, attendance, timetables, exams and marks, assignments, fees and invoices, transport, library, notices and leave, with server-side permissions and private file storage on Supabase.",
        "Student Support Radar joins attendance, overdue work and recent results into explainable support signals; an Attendance Recovery Simulator shows students and parents exactly what it takes to reach a target.",
        "Schedule Health Audit and an Automatic Substitute Planner catch teacher, class and room clashes before they reach a school day, alongside an AI Study Coach with moderation and daily limits."
      ],
      challenges: "Serving eight different roles from one system while keeping every user's data, files and permissions strictly separated.",
      solutions: "Built on Supabase Auth with database-level permissions and private storage, administrator-managed accounts, and one shared data model that powers every portal.",
      results: "Deployed to live school accounts with a published Android app, CSV/JSON exports, printable schedules and receipts, and automated browser regression tests."
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
