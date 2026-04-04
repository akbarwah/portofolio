"use client";

import { motion } from "framer-motion";
import {
  Users,
  Brain,
  ClipboardList,
  Briefcase,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";
import { servicesData } from "@/app/lib/data";
import { fadeInUp } from "@/app/lib/animations";

// Icon mapping dikelola di komponen ini — data.ts bebas dari React component imports
const iconMap: Record<string, LucideIcon> = {
  Users,
  Brain,
  ClipboardList,
  Briefcase,
  GraduationCap,
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950 scroll-mt-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">How I Can Help</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Partnering to align the right talent with the right roles for growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName];
            const desktopSpan = index < 3 ? "lg:col-span-2" : "lg:col-span-3";
            const tabletSpan = index === 4 ? "md:col-span-2" : "md:col-span-1";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 bg-white dark:bg-slate-900 rounded-2xl shadow-sm dark:shadow-none hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-teal-500 dark:border-slate-800 dark:hover:border-teal-500 group ${desktopSpan} ${tabletSpan}`}
              >
                <div className="w-14 h-14 bg-teal-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-100 dark:group-hover:bg-teal-900/30 transition-colors">
                  {Icon && <Icon className="text-teal-600 dark:text-teal-400" size={28} />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}