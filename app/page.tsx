"use client";

import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  CheckCircle2,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Brain,
  Users,
  ClipboardList,
  Star,
  ExternalLink,
  Menu,
  X,
  Hexagon,
  Sun, // Icon Matahari
  Moon, // Icon Bulan
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes"; // Import untuk Dark Mode

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function Portfolio() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dark Mode States
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Contact Form Logic
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Scroll & Mount Effect
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xojjajdr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setIsSubmitting(false);
        alert("Ada masalah saat mengirim pesan. Silakan coba lagi.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Terjadi kesalahan koneksi.");
    }
  };

  // --- DATA SECTIONS ---
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    {
      title: "Strategic Recruitment",
      desc: "Managing end-to-end talent acquisition. Proven success in high-volume hiring and niche sourcing.",
      icon: Users,
    },
    {
      title: "Psychological Assessment",
      desc: "Utilizing psychometrics and behavioral interviewing to evaluate candidate potential and cultural fit accurately.",
      icon: Brain,
    },
    {
      title: "HR Operations",
      desc: "Streamlining onboarding, attendance, and HRIS management to ensure operational excellence and compliance.",
      icon: ClipboardList,
    },
    {
      title: "People Development",
      desc: "Conducting counseling and engagement programs to foster a healthy, productive, and retaining work environment.",
      icon: Briefcase,
    },
  ];

  const experiences = [
    {
      role: "HR General Affair",
      company: "Tamtech International",
      period: "Jan 2023 - Present",
      location: "Yogyakarta (Onsite)",
      logo: "https://i.postimg.cc/sf4P3jbM/tamtech-international-logo.jpg",
      desc: [
        "Create and enforce HR policies and procedures in compliance with regulations.",
        "Oversee recruitment, including screening, interviewing, and job offers.",
        "Conduct onboarding programs and manage employee performance counseling.",
        "Handle office operations, inventory, and attendance reporting.",
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

  const education = [
    {
      degree: "Professional Program in Psychology",
      school: "Universitas Gadjah Mada",
      year: "2024 - Present",
    },
    {
      degree: "Bachelor of Psychology",
      school: "Universitas Gadjah Mada",
      year: "2016 - 2021",
      note: "Awardee of Program Beasiswa Santri Berprestasi (PBSB) Kementerian Agama RI 2016-2020",
    },
  ];

  const trainings = [
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
      name: "Recruiting, Hiring, and Onboarding Employees",
      issuer: "University of Minnesota",
      year: "2023",
      url: "https://coursera.org/share/ab599e642944b509f304075cee97c6f2",
    },
  ];

  const skills = [
    "End-to-end Recruitment",
    "Psychological Assessment",
    "People Management",
    "Counseling",
    "HRIS Management",
    "Industrial Relations",
    "Employee Training",
    "Google Workspace",
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans text-slate-900 dark:text-slate-100 overflow-x-hidden selection:bg-teal-200 dark:selection:bg-teal-900 transition-colors duration-300">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          <div className="flex items-center gap-2 cursor-default">
            <div className="bg-teal-600 p-1.5 rounded-lg text-white shadow-sm">
              <Hexagon size={24} strokeWidth={2.5} />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Akbar<span className="text-teal-600">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
                {link.name}
              </a>
            ))}
            
            {/* DARK MODE TOGGLE (DESKTOP) */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-teal-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>

          <div className="md:hidden flex items-center gap-4">
             {/* DARK MODE TOGGLE (MOBILE) */}
             {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-teal-400"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button className="text-slate-900 dark:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800"
            >
              <div className="px-4 py-4 space-y-3">
                 {navLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2 rounded-lg transition-colors">
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white dark:border-slate-800 shadow-2xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative ring-4 ring-teal-50 dark:ring-teal-900/30">
                <Image
                  src="https://i.postimg.cc/RVCYBbpn/DSC07063-(4)-(1).jpg"
                  alt="Akbar Wahyu Adi"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "60% 35%", transform: "scale(1.5)" }}
                  priority
                  unoptimized
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 dark:text-white tracking-tight leading-tight transition-colors">
              Akbar Wahyu Adi
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light transition-colors">
              Merging <span className="text-teal-600 dark:text-teal-400 font-bold">Psychological Insights</span> with{" "}
              <span className="text-teal-600 dark:text-teal-400 font-bold">Strategic HR</span> to build stronger teams and healthier workplace cultures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="px-8 py-4 bg-slate-900 dark:bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 dark:hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-200/50 dark:hover:shadow-teal-900/50 flex items-center justify-center gap-2 transform hover:-translate-y-1">
                <Send size={18} /> Let's Collaborate
              </a>
              
              <a href="https://drive.google.com/uc?export=download&id=1Xy8R8PjCtJdvlZx0DRJ-SAW82Di5m3rz" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:border-teal-400 dark:hover:border-teal-500 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md">
                <Download size={20} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT ME --- */}
      <section id="about" className="py-24 bg-white dark:bg-slate-950 relative scroll-mt-20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeInUp} className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">About Me</h3>
            <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
              <p>
                I bridge the gap between human behavior and business strategy. With a strong foundation in Psychology combined with <strong className="dark:text-white">3 years of hands-on HR experience</strong>, I bring a unique perspective to talent management. My approach focuses on strategic employee engagement and psychological assessment to ensure organizations retain high-performing talent that aligns with their culture.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE COMPETENCIES --- */}
      <section className="py-20 bg-slate-900 dark:bg-slate-900 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3">
              <Star className="text-teal-400" fill="currentColor" /> Core Competencies
            </h2>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span key={index} variants={scaleIn} className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-200 font-medium hover:bg-teal-900 hover:border-teal-500 hover:text-teal-300 transition-all cursor-default text-sm md:text-base">
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">How I Can Help</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Partnering to align the right talent with the right roles for growth.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm dark:shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-teal-500 dark:border-slate-800 dark:hover:border-teal-500 group">
                  <div className="w-14 h-14 bg-teal-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                      <Icon className="text-teal-600 dark:text-teal-400" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section id="experience" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="mb-12 flex items-center gap-4">
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Journey</h2>
            <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
          </motion.div>
          <div className="space-y-8 relative">
            {experiences.map((exp, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-500/50 transition-colors flex flex-col md:flex-row gap-6 group hover:shadow-lg dark:hover:shadow-teal-900/10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center overflow-hidden relative">
                     <Image 
                       src={exp.logo} 
                       alt={exp.company} 
                       fill 
                       className="object-contain p-2" 
                       sizes="64px"
                       unoptimized
                     />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">{exp.role}</h3>
                      <p className="text-slate-600 dark:text-slate-300 font-bold">{exp.company}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="inline-block px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">{exp.period}</span>
                      <p className="text-slate-500 dark:text-slate-400 text-xs flex md:justify-end items-center gap-1 mt-1"><MapPin size={12} /> {exp.location}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.desc.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-400 text-sm"><CheckCircle2 className="text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0" size={16} /><span className="leading-relaxed">{item}</span></li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & CERTIFICATIONS --- */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white"><GraduationCap className="text-teal-600 dark:text-teal-400" size={28} /> Academic Background</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border-l-4 border-teal-500 dark:border-slate-800">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                      <p className="text-teal-700 dark:text-teal-400 font-medium">{edu.degree}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{edu.year}</p>
                      {edu.note && <p className="text-slate-600 dark:text-slate-500 text-sm mt-3 italic">"{edu.note}"</p>}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="md:col-span-7">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white"><Award className="text-teal-600 dark:text-teal-400" size={28} /> Certifications & Courses</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {trainings.map((train, index) => (
                    <a key={index} href={train.url} target="_blank" rel="noopener noreferrer" className="group p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-teal-300 dark:hover:border-teal-600/50 transition-all block h-full flex flex-col justify-between">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="text-slate-800 dark:text-slate-200 font-bold text-sm leading-tight group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors line-clamp-2">{train.name}</h4>
                        <ExternalLink size={16} className="text-slate-300 dark:text-slate-600 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors flex-shrink-0 mt-0.5" />
                      </div>
                      <div className="pt-3 mt-auto border-t border-slate-50 dark:border-slate-800/50 text-[11px] font-medium text-slate-500 dark:text-slate-500 flex justify-between items-center">
                        <span className="truncate max-w-[75%]">{train.issuer}</span>
                        <span>{train.year}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden text-white scroll-mt-20">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white leading-tight">
                  Ready to Elevate <br/> Your Team?
                </h2>
                <div className="text-slate-400 text-lg leading-relaxed space-y-4">
                  <p>
                    Whether you need a <strong>Strategic HR Partner</strong> for the long run, or an expert <strong>Consultant</strong> for specific recruitment & assessment projects.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <span className="px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-semibold cursor-default hover:bg-teal-900 transition-colors">Full-time</span>
                    <span className="px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-semibold cursor-default hover:bg-teal-900 transition-colors">Freelance</span>
                    <span className="px-3 py-1 rounded-full bg-teal-900/50 border border-teal-700 text-teal-300 text-sm font-semibold cursor-default hover:bg-teal-900 transition-colors">Project-based</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "akbarwah.work@gmail.com", href: "mailto:akbarwah.work@gmail.com" },
                  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/akbarwap", href: "https://www.linkedin.com/in/akbarwap" },
                  { icon: Phone, label: "WhatsApp", value: "+62 857-2466-3707", href: "https://wa.me/6285724663707" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-teal-600 transition-colors border border-slate-700">
                          <Icon className="text-teal-400 group-hover:text-white transition-colors" size={24} />
                      </div>
                      <div><p className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-teal-400 transition-colors">{item.label}</p><p className="text-white font-medium text-lg">{item.value}</p></div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* FORM SECTION */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="bg-white dark:bg-slate-950 p-8 md:p-10 rounded-3xl text-slate-900 dark:text-white shadow-2xl dark:border dark:border-slate-800 transition-colors">
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                  <input type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea rows={4} name="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl focus:ring-2 focus:ring-teal-500 outline-none resize-none transition-all" required />
                </div>
                <button type="submit" disabled={isSubmitting || isSubmitted} className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${isSubmitted ? "bg-green-500" : "bg-slate-900 dark:bg-teal-600 hover:bg-teal-600 dark:hover:bg-teal-500 hover:shadow-teal-200 dark:hover:shadow-teal-900"}`}>{isSubmitting ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}</button>
              </form>
            </motion.div>
          </div>
          <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">© 2026 Akbarwap. All rights reserved.</div>
        </div>
      </section>
    </div>
  );
}