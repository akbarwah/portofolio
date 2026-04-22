// file: lib/data.ts

// --- NAVIGATION DATA ---
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// --- SKILLS / CORE COMPETENCIES DATA ---
export const skillsData = [
  "Talent Acquisition & Recruitment",
  "Clinical & Industrial Assessment",
  "Psychological Counseling",
  "Learning & People Development",
  "Employee Relations & Engagement", // Menggambarkan kemampuan menangani konflik internal
  "Performance Appraisal Systems",
  "HR Automation & Digitalization",
];

// --- SERVICES DATA ---
// iconName merujuk ke nama icon dari lucide-react (resolved di Services.tsx)
export const servicesData = [
  {
    iconName: "Briefcase",
    title: "HR Consulting & Systems",
    desc: "Designing customized HR frameworks, digitizing workflows, and building scalable organizational structures for sustained growth.",
  },
  {
    iconName: "ClipboardList",
    title: "Corporate Assessment",
    desc: "Conducting comprehensive industrial assessments to uncover hidden potential and ensure the right talent fit for organizations.",
  },
  {
    iconName: "Users",
    title: "Talent Acquisition",
    desc: "Managing the full recruitment lifecycle with psychological precision to connect organizations with high-performing professionals.",
  },
  {
    iconName: "LineChart", // Ikon baru untuk People Development
    title: "People Development",
    desc: "Creating targeted training programs and performance management strategies to foster continuous learning and employee growth.",
  },
  {
    iconName: "Brain",
    title: "Clinical Counseling",
    desc: "Providing professional psychological support to help individuals navigate personal challenges, manage stress, and build mental resilience.",
  },
  {
    iconName: "GraduationCap", // Sangat cocok untuk konteks akademik
    title: "Educational Psychology",
    desc: "Providing IQ testing, academic talent mapping, and individual counseling to help students navigate their potential and future paths.",
  },
];

// --- FEATURED PROJECTS DATA ---
export const projectsData = [
  {
    title: "HRIS & Operations Platform",
    subtitle: "Tamtech International",
    year: "2026",
    status: "Live",
    logo: "https://i.postimg.cc/sf4P3jbM/tamtech-international-logo.jpg",
    description:
      "Designed, built, and deployed a comprehensive full-stack HRIS to digitize and centralize the entire HR operations lifecycle. The system replaced scattered spreadsheets and manual workflows, providing real-time workforce analytics, automated compliance alerts, and a dedicated Executive Dashboard for C-Level. Built end-to-end as a solo initiative.",
    highlights: [
      { label: "Employees Managed", value: "70+" },
      { label: "Core Modules", value: "9" },
      { label: "Manual Process Reduced", value: "~70%" },
    ],
    features: [
      "HR Analytics Dashboard with Workforce Insights",
      "Recruitment Pipeline & Candidate Database with automated status sync",
      "Employee Master Data with CSV bulk import/export & cascade operations",
      "Time-Off Management with configurable leave types, approval, & balance",
      "360 Degree Performance Review system with multi-period scoring & feedback",
      "Payroll Master with salary breakdown, schedule alerts & readiness checklist",
      "Asset Tracking for company device handover & offboarding audit",
      "Contract Lifecycle (PKWT/PKWTT) with expiry alerts & compliance monitoring",
      "Audit Logs: append-only journal for data governance & forensic tracing",
      "Password-protected Executive Dashboard for C-Level",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    role: "Solo Developer & Product Owner",
    // Screenshot gallery — upload gambar ke Postimg lalu paste URL-nya di sini
    // Contoh format: { url: "https://i.postimg.cc/xxx/screenshot.png", caption: "Dashboard Overview" }
    screenshots: [
      { url: "https://i.postimg.cc/FHxV9gcF/SS-HRIS-1.png", caption: "HR Analytics Dashboard" },
      { url: "https://i.postimg.cc/rpmxq6MP/SS-HRIS-2.png", caption: "Recruitment Pipeline Board" },
      { url: "https://i.postimg.cc/JhKB8Vyz/Screenshot-2026-04-14-225347.png", caption: "Executive Dashboard" },
    ],
  },
];

// --- EXPERIENCE DATA ---
export const experienceData = [
  {
    role: "HR General Affair",
    company: "Tamtech International",
    period: "Jan 2023 - Present",
    location: "Yogyakarta (Onsite)",
    logo: "https://i.postimg.cc/sf4P3jbM/tamtech-international-logo.jpg",
    desc: [
      "Manage end-to-end recruitment lifecycle for 20+ roles annually, applying strategy to improve hiring quality and reduce early turnover.",
      "Administer daily HR & GA operations for 60+ employees, including HRIS, attendance reporting, and office asset management.",
      "Enforce company SOPs and provide employee counseling to address performance gaps and resolve internal issues.",
      "Developed and deployed an integrated HRIS utilizing AI development tools to eliminate administrative bottlenecks and centralize HR workflows.",
    ],
  },
  {
    role: "Freelance HR Affiliate",
    company: "KUPU ID",
    period: "Jan 2024 - Dec 2024",
    location: "Jakarta (Remote)",
    logo: "https://i.postimg.cc/P5wPrKN9/kupu-id-logo.jpg",
    desc: [
      "Managed full recruitment lifecycle ensuring client satisfaction.",
      "Handled job postings and offer negotiations.",
    ],
  },
  {
    role: "Sociology Teacher & School Counselor",
    company: "Husnul Khotimah Islamic Boarding School",
    period: "Apr 2022 - Dec 2022",
    location: "Kuningan (Onsite)",
    logo: "https://i.postimg.cc/90QDmhqp/1630595087692.jpg",
    desc: [
      "Delivered counseling support through 50+ individual and group sessions, addressing academic stress, career guidance, and personal development.",
      "Taught Sociology curriculum to 13 classes (300+ students) weekly while leading the Sociology Study-Club extracurricular.",
      "Served as a dedicated Sociology tutor for the 12th-grade university entrance exam (SNBT) Preparation Program.",
    ],
  },
  {
    role: "HR Operations Excellence",
    company: "MyRobin.ID",
    period: "Aug 2021 - Dec 2021",
    location: "Jakarta (Remote)",
    logo: "https://i.postimg.cc/L8cgzwG7/myrobinid-logo.jpg",
    desc: [
      "Overseen end-to-end recruitment for clients in logistics & transport sectors.",
      "Built and delivered weekly data-driven reports to clients, providing actionable hiring insights that improved sourcing strategy.",
    ],
  },
  {
    role: "Field Recruiter",
    company: "Swakarya Insan Mandiri",
    period: "Jan 2021 - Apr 2021",
    location: "Yogyakarta (Onsite)",
    logo: "https://i.postimg.cc/FzTJ3R4v/swamandiri-logo.jpg",
    desc: [
      "Successfully fulfilled a target of 200 call center agents within 3 months, achieving 100% fulfillment rate ahead of deadline.",
      "Built sourcing pipelines through partnerships with 10+ vocational schools and local Dinas Ketenagakerjaan.",
    ],
  },
];

// --- EDUCATION DATA ---
export const educationData = [
  {
    degree: "Professional Program in Psychology (General Psychologist)",
    school: "Universitas Gadjah Mada",
    year: "2024 - 2026",
  },
  {
    degree: "Bachelor of Psychology",
    school: "Universitas Gadjah Mada",
    year: "2016 - 2021",
    note: "Awardee of Program Beasiswa Santri Berprestasi (PBSB) Kementerian Agama RI 2016-2020",
  },
];

// --- TRAININGS & CERTIFICATIONS DATA ---
export const trainingsData = [
  {
    name: "Tester: AJT Cognitive Ability Test",
    issuer: "Universitas Gadjah Mada",
    year: "2025",
    url: "https://drive.google.com/file/d/1oZmpqpQ2oTlfuSfeVQmewzSdsIYAEtwx/view?usp=sharing",
  },
  {
    name: "Diploma in HR Management",
    issuer: "Oxford Home Study Centre",
    year: "2024",
    url: "https://drive.google.com/file/d/1PXO7l1CktvbDwSu6h8gMXEP8N7MkoszT/view?usp=sharing",
  },
  {
    name: "HR Analytics: Mastering HR Metrics",
    issuer: "Mekari University",
    year: "2024",
    url: "https://univ.mekari.com/certificates/elxepgqtxg",
  },
  {
    name: "Foundations of Project Management",
    issuer: "Google",
    year: "2023",
    url: "https://coursera.org/share/d992699b3eb4b7cb844054ac0e929471",
  },
  {
    name: "Preparing to Manage Human Resources",
    issuer: "University of Minnesota",
    year: "2023",
    url: "https://coursera.org/share/b3b3e822e0138ca13da07f158a94a977",
  },
  {
    name: "Recruiting, Hiring, & Onboarding Employees",
    issuer: "University of Minnesota",
    year: "2023",
    url: "https://coursera.org/share/ab599e642944b509f304075cee97c6f2",
  },
];