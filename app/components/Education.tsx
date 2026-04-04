"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, ExternalLink } from "lucide-react";
import { educationData, trainingsData } from "@/app/lib/data";
import { fadeInUp } from "@/app/lib/animations";

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                <GraduationCap className="text-teal-600 dark:text-teal-400" size={28} /> Academic Background
              </h2>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-sm border-l-4 border-teal-500 dark:border-slate-800"
                  >
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{edu.school}</h3>
                    <p className="text-teal-700 dark:text-teal-400 font-medium">{edu.degree}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{edu.year}</p>
                    {edu.note && (
                      <p className="text-slate-600 dark:text-slate-500 text-sm mt-3 italic">&quot;{edu.note}&quot;</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          <div className="md:col-span-7">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3 text-slate-900 dark:text-white">
                <Award className="text-teal-600 dark:text-teal-400" size={28} /> Certifications &amp; Courses
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {trainingsData.map((train, index) => (
                  /* Fix: hapus class 'block' yang konflik dengan 'flex flex-col' */
                  <a
                    key={index}
                    href={train.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-teal-300 dark:hover:border-teal-600/50 transition-all h-full flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <h4 className="text-slate-800 dark:text-slate-200 font-bold text-sm leading-tight group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors line-clamp-2">
                        {train.name}
                      </h4>
                      <ExternalLink
                        size={16}
                        className="text-slate-300 dark:text-slate-600 group-hover:text-teal-500 dark:group-hover:text-teal-400 transition-colors flex-shrink-0 mt-0.5"
                      />
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
  );
}