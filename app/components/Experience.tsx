"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, CheckCircle2 } from "lucide-react";
import { experienceData } from "@/app/lib/data";
import { fadeInUp } from "@/app/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 flex items-center gap-4"
        >
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Journey</h2>
          <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
        </motion.div>
        <div className="space-y-8 relative">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-teal-200 dark:hover:border-teal-500/50 transition-colors flex flex-col md:flex-row gap-6 group hover:shadow-lg dark:hover:shadow-teal-900/10"
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-xl bg-white p-2 shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-center overflow-hidden relative">
                  {/* Fix: hapus unoptimized — domain i.postimg.cc sudah di-whitelist di next.config.ts */}
                  <Image src={exp.logo} alt={exp.company} fill className="object-contain p-2" sizes="64px" />
                </div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 font-bold">{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <span className="inline-block px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-300 mb-1">
                      {exp.period}
                    </span>
                    <p className="text-slate-500 dark:text-slate-400 text-xs flex md:justify-end items-center gap-1 mt-1">
                      <MapPin size={12} /> {exp.location}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.desc.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-400 text-sm">
                      <CheckCircle2 className="text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0" size={16} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}