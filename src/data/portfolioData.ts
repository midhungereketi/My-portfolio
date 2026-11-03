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
    resumeUrl: "https://drive.google.com/file/d/1BtNcHKynsPuzPWrvD3GJSgvm4J3Uu3jU/view?usp=sharing",
    contactEmail: "midhungereketi@gmail.com",
    socials: {
      github: "https://github.com/midhungereketi",
      linkedin: "https://www.linkedin.com/in/midhun-gereketi-5b2084322/",
      twitter: "https://twitter.com"
    }
  },
  about: {
    pitch: "I build secure web products and explain how they work.",
    introduction: "B.Tech Cyber Security student at VIT Vellore. I have built a phishing detector with trained ML models, a SOC log platform benchmarked on a million logs, and a school ERP with eight role-based portals. Looking for a security or backend internship.",
    story: "I like problems I can measure. In Predictive Deadlock Lab we made real threads deadlock and I built the replay that rebuilds every run from its lock events. On the log platform I benchmarked indexed search on a million records before calling it fast. I split a system into parts, test each one, and write down what the numbers do and do not prove.",
    careerGoals: "Next I want to work on detection pipelines, access control and backend services that hold up under real data.",
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
      status: "",
      role: "Solo project — I designed, trained, built and deployed every part: models, API, web app and extension.",
      outcome: "URL model reached 92.2% accuracy on a 7,839-URL hold-out with no domain overlap; the email model scored 97.1% F1.",
      metrics: [
        { value: "92.2%", label: "URL model accuracy" },
        { value: "97.1%", label: "Email model F1" },
        { value: "21", label: "URL features" }
      ],
      metricsNote: "Corpus test-set metrics at a 0.5 threshold, not real-world accuracy claims.",
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
      status: "",
      role: "Team of 3 — I owned log ingestion and search: the event and bulk-upload APIs, MongoDB indexing, PostgreSQL device metadata and the million-log benchmark.",
      outcome: "On 1,000,000 logs, indexed search returned in 0.396 ms (median) versus 188 ms for a full scan — about 475× faster for the benchmarked query.",
      metrics: [
        { value: "1M", label: "Logs benchmarked" },
        { value: "0.4 ms", label: "Indexed search, median" },
        { value: "475×", label: "Faster than a scan" }
      ],
      metricsNote: "Measured in CI on a GitHub Actions runner for one source-IP query.",
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
      status: "",
      role: "Team of 3 — I built the frontend: the animated replay, Analysis and Compare views, integration with the experiment API, and deployment.",
      outcome: "Measured across 2, 4, 8, 16 and 32 threads with 10 trials per mode: vulnerable runs deadlock, protected runs always complete.",
      metrics: [
        { value: "2–32", label: "Threads per experiment" },
        { value: "10", label: "Trials per mode & size" },
        { value: "100%", label: "Protected-mode completion" }
      ],
      metricsNote: "The risk score is a documented heuristic tested in a controlled experiment, not a general deadlock predictor.",
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
      title: "Smart School ERP",
      description: "A school management platform with dedicated portals for administrators, faculty, students, parents, academic staff, finance, transport and library — on the web, with an Android build.",
      technologies: ["React", "Vite", "Supabase", "PostgreSQL", "Capacitor", "Android", "Groq AI"],
      github: "",
      liveDemo: "",
      category: "Full-Stack · Web + Android",
      date: "2026",
      status: "",
      role: "Solo build — data model, Supabase permissions and Edge Functions, all eight portals, and the Android packaging.",
      outcome: "Eight role portals on one permission-checked database, verified against the live Supabase backend and covered by unit and browser regression tests.",
      metrics: [
        { value: "8", label: "Role-based portals" },
        { value: "7", label: "Unit test suites" },
        { value: "Web + Android", label: "One codebase" }
      ],
      metricsNote: "The repository is private because it is configured for a real school. A walkthrough is available on request.",
      image: "/projects/school_erp.svg",
      features: [
        "Role-based portals covering admissions, attendance, timetables, exams and marks, assignments, fees and invoices, transport, library, notices and leave, with server-side permissions and private file storage on Supabase.",
        "Student Support Radar joins attendance, overdue work and recent results into explainable support signals; an Attendance Recovery Simulator shows students and parents exactly what it takes to reach a target.",
        "Schedule Health Audit and an Automatic Substitute Planner catch teacher, class and room clashes before they reach a school day, alongside an AI Study Coach with moderation and daily limits."
      ],
      challenges: "Serving eight different roles from one system while keeping every user's data, files and permissions strictly separated.",
      solutions: "Built on Supabase Auth with database-level permissions and private storage, administrator-managed accounts, and one shared data model that powers every portal.",
      results: "Frontend deployed on Vercel with the Supabase backend live and verified, CSV/JSON exports, printable schedules and receipts, and automated browser regression tests."
    },
    {
      id: 5,
      title: "DP-FCFS – Predictive Cloud Task Scheduler",
      description: "A cloud task-scheduling and visualization system built on First Come First Serve, being extended with predictive analysis of queue and execution dynamics.",
      technologies: ["React", "Vite", "Tailwind CSS", "Flask", "SQLite", "Chart.js"],
      github: "https://github.com/midhungereketi/DP-FCFS",
      liveDemo: "",
      category: "Cloud Computing",
      date: "2026",
      status: "In progress",
      role: "Solo project — scheduler, predictor and API in Flask, and the React dashboard.",
      outcome: "Scheduler, predictor and REST API are in place; queue analytics and performance reporting are next on the roadmap.",
      metrics: [],
      metricsNote: "",
      image: "/projects/dp_fcfs.svg",
      features: [
        "FCFS scheduling engine that models task arrival, queueing and execution across cloud resources.",
        "Planned visualizations of queue state, Gantt-style execution timelines and performance metrics with Chart.js.",
        "React + Flask architecture with SQLite persistence for tasks and scheduling runs."
      ],
      challenges: "Making a simple scheduling policy observable enough to reason about waiting time and utilization.",
      solutions: "Pairing the FCFS engine with a predictor service and visual timelines so each scheduling decision can be inspected.",
      results: "Work in progress — the scheduling core is built; analytics and reporting are underway."
    }
  ],
  experience: [
    {
      company: "IBM",
      role: "Completed Advanced Gen AI Course",
      duration: "2026",
      responsibilities: [
        "Studied generative AI foundations, large language models and prompt engineering.",
        "Applied LLM APIs to build and integrate AI-assisted features.",
        "Explored responsible AI practices for real-world applications."
      ],
      technologies: ["Generative AI", "LLM", "Prompt Engineering", "APIs"],
      achievements: "Completed IBM's Advanced Generative AI course.",
      credentialUrl: ""
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
      achievements: "Consistently delivered working prototypes under pressure, showcasing strong problem-solving and teamwork skills.",
      credentialUrl: ""
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
      credentialId: "",
      verifyUrl: "",
      image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg"
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
