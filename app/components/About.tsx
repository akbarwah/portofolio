"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { skillsData } from "@/app/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/app/lib/animations";

export default function About() {
  return (
    <>
      <section id="about" className="py-24 bg-white dark:bg-slate-950 relative scroll-mt-20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center"
          >
            {/* Fix: h2 (bukan h3) untuk konsistensi heading hierarchy & SEO */}
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-900 dark:text-white">About Me</h2>
            <div className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
              <p>
                I bridge the gap between human behavior and sustainable success. As a Licensed Psychologist with{" "}
                <strong className="dark:text-white">4 years of hands-on HR experience</strong>, I bring an analytical
                and empathetic approach to people development. My work centers on evidence-based{" "}
                psychological assessments, strategic employee engagement, and clinical counseling, ensuring
                organizations build resilient teams while empowering individuals to thrive.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 dark:bg-slate-900 text-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3">
              <Star className="text-teal-400" fill="currentColor" /> Core Competencies
            </h2>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-3"
            >
              {skillsData.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={scaleIn}
                  className="px-5 py-2.5 bg-slate-800/50 border border-slate-700 rounded-full text-slate-200 font-medium hover:bg-teal-900 hover:border-teal-500 hover:text-teal-300 transition-all cursor-default text-sm md:text-base"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}