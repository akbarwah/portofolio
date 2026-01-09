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
} from "lucide-react";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

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

  // Contact Form Logic
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // --- DATA FROM CV ---

  // Services
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

  // Professional Experience
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
      period: "Apr 2022 - Dec 2022",
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
      period: "Aug 2021 - Dec 2021",
      location: "Kuningan (Onsite)",
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

  // Education
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

  // Training
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
      name: "Recruiting, Hiring, & Onboarding",
      issuer: "University of Minnesota",
      year: "2023",
      url: "https://coursera.org/share/ab599e642944b509f304075cee97c6f2",
    },
  ];

  // Skills
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
    <div className="bg-slate-50 min-h-screen font-sans text-slate-900 overflow-x-hidden selection:bg-teal-200">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
          >
            {/* BAGIAN OPEN FOR OPPORTUNITIES SUDAH DIHAPUS DI SINI */}

            {/* FOTO PROFIL */}
            <div className="mb-8 flex justify-center">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-200 relative">
                <img
                  src="https://i.postimg.cc/RVCYBbpn/DSC07063-(4)-(1).jpg"
                  alt="Akbar Wahyu Adi Pratama"
                  className="w-full h-full object-cover"
                  style={{
                    // 1. ZOOM (Scale)
                    transform: "scale(1.6)",

                    // 2. POSISI (Horizontal Vertical)
                    // Ubah '40%' di bawah ini. Coba ganti ke 30% atau 60% sampai pas.
                    // Angka kedua (20%) adalah posisi Atas-Bawah.
                    objectPosition: "50% 35%",
                  }}
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-slate-900 tracking-tight leading-tight">
              Akbar Wahyu Adi
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
              Merging{" "}
              <span className="text-teal-600 font-bold">
                Psychological Insights
              </span>{" "}
              with{" "}
              <span className="text-teal-600 font-bold">
                Strategic HR
              </span>{" "}
              to build stronger teams and healthier workplace
              cultures
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-teal-700 text-white rounded-xl font-bold hover:bg-teal-800 transition-all shadow-lg hover:shadow-teal-200/50 flex items-center justify-center gap-2"
              >
                <Send size={18} /> Let's Collaborate
              </a>
              
              {/* TOMBOL DOWNLOAD CV YANG SUDAH DIPERBAIKI */}
              <a
                // GANTI ID DI BAWAH DENGAN ID FILE PDF DI GOOGLE DRIVE ANDA
                href="https://drive.google.com/file/d/1XiujmJ0rXZSmxBqWrWKT7A1sIL_u4W_z/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-slate-800 border-2 border-slate-200 rounded-xl font-bold hover:border-teal-400 hover:text-teal-700 hover:bg-teal-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download size={20} /> Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT ME --- */}
      <section className="py-24 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-sm font-bold text-teal-600 tracking-widest uppercase mb-3">
              About Me
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900">
              More Than Just HR Administration
            </h3>

            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                I bridge the gap between human behavior and
                business strategy. With a strong foundation in
                Psychology combined with{" "}
                <strong>
                  3 years of hands-on HR experience
                </strong>
                , I bring a unique perspective to talent
                management. My approach goes beyond
                administrative tasks. I focus on{" "}
                <strong>strategic employee engagement</strong>{" "}
                and accurate{" "}
                <strong>psychological assessment</strong> to
                ensure you don't just hire employees, but retain
                high-performing talent that aligns with your
                culture. From handling industrial relations to
                executing mass recruitment, I am ready to drive
                impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CORE COMPETENCIES --- */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3">
              <Star
                className="text-teal-400"
                fill="currentColor"
              />
              Core Competencies & Technical Skills
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="flex flex-wrap justify-center gap-4"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={scaleIn}
                  className="px-6 py-3 bg-slate-800 border border-slate-700 rounded-full text-slate-200 font-medium hover:bg-teal-900 hover:border-teal-500 hover:text-teal-300 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              How I Can Help
            </h2>
            <p className="text-slate-500">
              Partnering to align the right talent with the right roles for growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-teal-500"
                >
                  <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-teal-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- EXPERIENCE --- */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            className="mb-12 flex items-center gap-4"
          >
            <div className="h-px bg-slate-200 flex-1"></div>
            <h2 className="text-3xl font-bold text-slate-900">
              Professional Journey
            </h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </motion.div>

          <div className="space-y-8 relative">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 hover:border-teal-200 transition-colors flex flex-col md:flex-row gap-6"
              >
                {/* LOGO */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-sm border border-slate-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <p className="text-teal-700 font-bold">
                        {exp.company}
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <span className="inline-block px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 mb-1">
                        {exp.period}
                      </span>
                      <p className="text-slate-500 text-xs flex md:justify-end items-center gap-1 mt-1">
                        <MapPin size={12} /> {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.desc.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-slate-700 text-sm"
                      >
                        <CheckCircle2
                          className="text-teal-500 mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        <span className="leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- EDUCATION & TRAINING (REVISED CARD DESIGN) --- */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Education (5/12) */}
            <div className="md:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                  <GraduationCap
                    className="text-teal-600"
                    size={28}
                  />
                  Academic Background
                </h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-2xl shadow-sm border-l-4 border-teal-500"
                    >
                      <h3 className="text-lg font-bold text-slate-900">
                        {edu.school}
                      </h3>
                      <p className="text-teal-700 font-medium">
                        {edu.degree}
                      </p>
                      <p className="text-slate-500 text-sm mt-1">
                        {edu.year}
                      </p>
                      {edu.note && (
                        <p className="text-slate-600 text-sm mt-3 italic">
                          "{edu.note}"
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Certifications (7/12) - COMPACT ROW DESIGN */}
            <div className="md:col-span-7">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={fadeInUp}
              >
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900">
                  <Award className="text-teal-600" size={28} />
                  Certifications & Courses
                </h2>

                {/* COMPACT & CLEAN DESIGN */}
                <div className="grid sm:grid-cols-2 gap-3">
                  {trainings.map((train, index) => (
                    <a
                      key={index}
                      href={train.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-4 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all block h-full flex flex-col justify-between"
                    >
                      {/* Baris 1: Judul dan Icon Sejajar */}
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <h4 className="text-slate-800 font-bold text-sm leading-tight group-hover:text-teal-700 transition-colors line-clamp-2">
                          {train.name}
                        </h4>
                        <ExternalLink
                          size={16}
                          className="text-slate-300 group-hover:text-teal-500 transition-colors flex-shrink-0 mt-0.5"
                        />
                      </div>

                      {/* Baris 2: Metadata */}
                      <div className="pt-3 mt-auto border-t border-slate-50 text-[11px] font-medium text-slate-500 flex justify-between items-center">
                        <span className="truncate max-w-[75%]">
                          {train.issuer}
                        </span>
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
      <section
        id="contact"
        className="py-24 bg-slate-900 relative overflow-hidden text-white"
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                  Let's Work Together
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Looking for a strategic partner in HR or
                  Psychology? I'm currently open for new
                  opportunities.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: "akbarwah.work@gmail.com",
                    href: "mailto:akbarwah.work@gmail.com",
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    value: "linkedin.com/in/akbarwap",
                    href: "https://www.linkedin.com/in/akbarwap",
                  },
                  {
                    icon: Phone,
                    label: "WhatsApp",
                    value: "+62 857-2466-3707",
                    href: "https://wa.me/6285724663707",
                  },
                  {
                    icon: MapPin,
                    label: "Based in",
                    value: "Yogyakarta (Open to Relocate)",
                    href: "#",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center group-hover:bg-teal-600 transition-colors border border-slate-700">
                        <Icon
                          className="text-teal-400 group-hover:text-white transition-colors"
                          size={24}
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-teal-400 transition-colors">
                          {item.label}
                        </p>
                        <p className="text-white font-medium text-lg">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Side (Form) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false }}
              className="bg-white p-8 md:p-10 rounded-3xl text-slate-900 shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                Send Me a Message
              </h3>
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none resize-none transition-all"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all shadow-lg ${isSubmitted ? "bg-green-500" : "bg-slate-900 hover:bg-teal-600 hover:shadow-teal-200"}`}
                >
                  {isSubmitting
                    ? "Sending..."
                    : isSubmitted
                      ? "Message Sent!"
                      : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>

          <div className="mt-20 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            © 2026 Akbarwap. All rights
            reserved.
          </div>
        </div>
      </section>
    </div>
  );
}

// Named export fix
export const About = Portfolio;