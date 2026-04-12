"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Rocket,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Maximize2,
  X,
} from "lucide-react";
import { projectsData } from "@/app/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/app/lib/animations";

export default function FeaturedProject() {
  const project = projectsData[0];
  const screenshots = project.screenshots ?? [];
  const [activeSlide, setActiveSlide] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const hasScreenshots = screenshots.length > 0;

  return (
    <section
      id="projects"
      className="py-16 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-full text-teal-700 dark:text-teal-400 text-sm font-semibold mb-6">
            <Sparkles size={14} />
            Featured Project
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900 dark:text-white">
            Built to Solve Real Problems
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Turning HR domain expertise into a working product that drives efficiency.
          </p>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg dark:shadow-none"
        >
          {/* Top bar accent */}
          <div className="h-1.5 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500" />

          <div className="p-6 md:p-8">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center flex-shrink-0 relative">
                  <Image src={project.logo} alt={project.subtitle} fill className="object-contain p-1.5" sizes="44px" unoptimized />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mt-1">
                    {project.subtitle} · {project.year}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  {project.status}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Screenshots Gallery */}
            {hasScreenshots && (
              <div className="mb-10">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                  <Maximize2 size={14} className="text-teal-500" />
                  Screenshots
                </h4>
                <div className="relative group">
                  {/* Main image */}
                  <div
                    className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 cursor-pointer"
                    onClick={() => setLightboxOpen(true)}
                  >
                    <Image
                      src={screenshots[activeSlide].url}
                      alt={screenshots[activeSlide].caption}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      unoptimized
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <Maximize2
                        size={32}
                        className="text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg"
                      />
                    </div>
                  </div>

                  {/* Caption */}
                  <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-3 font-medium">
                    {screenshots[activeSlide].caption}
                  </p>

                  {/* Navigation arrows */}
                  {screenshots.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide((p) => (p === 0 ? screenshots.length - 1 : p - 1));
                        }}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
                      >
                        <ChevronLeft size={20} className="text-slate-700 dark:text-slate-200" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveSlide((p) => (p === screenshots.length - 1 ? 0 : p + 1));
                        }}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
                      >
                        <ChevronRight size={20} className="text-slate-700 dark:text-slate-200" />
                      </button>
                    </>
                  )}

                  {/* Dot indicators */}
                  {screenshots.length > 1 && (
                    <div className="flex justify-center gap-2 mt-4">
                      {screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveSlide(i)}
                          className={`w-2.5 h-2.5 rounded-full transition-all ${
                            i === activeSlide
                              ? "bg-teal-500 w-6"
                              : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Lightbox */}
            {lightboxOpen && hasScreenshots && (
              <div
                className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4"
                onClick={() => setLightboxOpen(false)}
              >
                <button
                  className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                  onClick={() => setLightboxOpen(false)}
                >
                  <X size={28} />
                </button>
                <div
                  className="relative w-full max-w-6xl aspect-[16/9]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={screenshots[activeSlide].url}
                    alt={screenshots[activeSlide].caption}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    unoptimized
                  />
                </div>
                <p className="absolute bottom-6 text-white/70 text-sm font-medium">
                  {screenshots[activeSlide].caption}
                </p>
              </div>
            )}

            {/* Metrics */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8"
            >
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-4 text-center group hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
                >
                  <p className="text-2xl md:text-3xl font-extrabold text-teal-600 dark:text-teal-400 mb-1">
                    {h.value}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                    {h.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Two columns: Features + Tech */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Key Modules */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                  <Rocket size={14} className="text-teal-500" />
                  Key Modules &amp; Features
                </h4>
                <ul className="space-y-3">
                  {project.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm"
                    >
                      <CheckCircle2
                        className="text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0"
                        size={16}
                      />
                      <span className="leading-relaxed">{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack + Role */}
              <div className="space-y-8">
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                    <ChevronRight size={14} className="text-teal-500" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-teal-400 dark:hover:border-teal-600 hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                    <ChevronRight size={14} className="text-teal-500" />
                    My Role
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-semibold">
                    {project.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
