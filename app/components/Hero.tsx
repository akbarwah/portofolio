"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Send, Download } from "lucide-react";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
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
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 text-slate-900 dark:text-white tracking-tight leading-tight transition-colors">
            Akbar Wahyu Adi
          </h1>
<h2 className="text-xl md:text-2xl font-semibold text-teal-600 dark:text-teal-400 mb-6 tracking-wide">
  HR Professional · Licensed General Psychologist
</h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="#contact" className="px-8 py-4 bg-slate-900 dark:bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 dark:hover:bg-teal-500 transition-all shadow-lg hover:shadow-teal-200/50 dark:hover:shadow-teal-900/50 flex items-center justify-center gap-2 transform hover:-translate-y-1 active:scale-95">
    <Send size={18} /> Let's Collaborate
  </a>
  <a href="https://drive.google.com/file/d/1yRs_rHPDrZC_ZQMzbGTcyN0LqSWHZ80Z/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-bold hover:border-teal-400 dark:hover:border-teal-500 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md active:scale-95">
    <Download size={20} /> Download CV
  </a>
</div>
        </motion.div>
      </div>
    </section>
  );
}