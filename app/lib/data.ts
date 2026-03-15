// file: lib/data.ts

import { 
  Users, 
  Brain, 
  ClipboardList, 
  Briefcase, 
  GraduationCap 
} from "lucide-react";

// --- NAVIGATION DATA ---
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// --- SKILLS / CORE COMPETENCIES DATA ---
export const skillsData = [
  "End-to-end Recruitment",
  "Psychological Assessment",
  "Talent Mapping",             
  "Learning & Development",     
  "Psychological Counseling",   
  "Performance Management",     
  "HRIS Management",      
];

// --- SERVICES DATA ---
export const servicesData = [
  {
    title: "Strategic Recruitment",
    desc: "Managing end-to-end talent acquisition. Proven success in high-volume hiring and sourcing niche professionals aligned with business goals.",
    icon: Users,
  },
  {
    title: "Psychological Assessment",
    desc: "Conducting comprehensive evaluations for hiring, talent mapping, and leadership promotion using validated psychometrics and behavioral insights.",
    icon: Brain,
  },
  {
    title: "HR Operations",
    desc: "Streamlining onboarding, attendance, and HRIS management to ensure operational excellence, compliance, and seamless daily HR functions.",
    icon: ClipboardList,
  },
  {
    title: "Training & People Development",
    desc: "Designing impactful corporate training, psychological counseling, and engagement programs to maximize employee potential and well-being.",
    icon: Briefcase,
  },
  {
    title: "Educational & Personal Assessment",
    desc: "Providing IQ testing, student talent mapping (penjurusan), and individual psychological counseling to support personal growth and academic success.",
    icon: GraduationCap, 
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
      "Manage the end-to-end recruitment lifecycle and onboarding, utilizing psychological insights for better candidate evaluation.",
      "Handle daily HR & GA operations, including HRIS administration, attendance reporting, and office asset management.",
      "Enforce company SOPs and provide employee counseling to address performance gaps and resolve internal issues."
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
    period: "Aug 2021 - Dec 2021",
    location: "Kuningan (Onsite)",
    logo: "https://i.postimg.cc/90QDmhqp/1630595087692.jpg",
    desc: [
      "Provided comprehensive counseling support through individual and group sessions.",
      "Delivered engaging Sociology curriculum to 13 classes weekly while facilitating the Sociology Study-Club.",
      "Served as a Sociology tutor for the 12th-grade SNBT Preparation Program.",
    ],
  },
  {
    role: "HR Operations Excellence",
    company: "MyRobin.ID",
    period: "Apr 2022 - Dec 2022",
    location: "Jakarta (Remote)",
    logo: "https://i.postimg.cc/L8cgzwG7/myrobinid-logo.jpg",
    desc: [
      "Overseen end-to-end recruitment for clients in logistics & transport sectors.",
      "Analyzed data to provide actionable insights for clients.",
    ],
  },
  {
    role: "Field Recruiter",
    company: "Swakarya Insan Mandiri",
    period: "Jan 2021 - Apr 2021",
    location: "Yogyakarta (Onsite)",
    logo: "https://i.postimg.cc/FzTJ3R4v/swamandiri-logo.jpg",
    desc: [
      "Achieved fulfillment target of 200 agents within 3 months for an outbound call center project.",
      "Collaborated with vocational schools and Dinas Ketenagakerjaan for sourcing.",
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
    name: "Tester: AJT Cognitive Abilities Test",
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