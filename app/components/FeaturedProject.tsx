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
      className="py-12 bg-white dark:bg-slate-950 scroll-mt-20 transition-colors duration-300 relative overflow-hidden"
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header - more compact */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 rounded-full text-teal-700 dark:text-teal-400 text-xs font-semibold mb-4">
            <Sparkles size={12} />
            Featured Project
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-slate-900 dark:text-white">
            Built to Solve Real Problems
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Turning HR domain expertise into a working product that drives
            efficiency.
          </p>
        </motion.div>

        {/* Project Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-lg dark:shadow-none"
        >
          {/* Top bar accent */}
          <div className="h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500" />

          <div className="p-5 md:p-6">
            {/* Header row */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-white flex items-center justify-center flex-shrink-0 relative">
                  <Image
                    src={project.logo}
                    alt={project.subtitle}
                    fill
                    className="object-contain p-1.5"
                    sizes="40px"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                    {project.subtitle} · {project.year}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-full text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  {project.status}
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Screenshots Gallery - Smaller preview */}
            {hasScreenshots && (
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                  <Maximize2 size={12} className="text-teal-500" />
                  Screenshots
                  <span className="text-[10px] font-medium normal-case tracking-normal text-slate-400 dark:text-slate-500">
                    (click to enlarge)
                  </span>
                </h4>

                <div className="max-w-2xl mx-auto">
                  <div className="relative group">
                    {/* Main image - smaller preview */}
                    <div
                      className="relative w-full aspect-[16/10] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 cursor-pointer transition-shadow hover:shadow-xl"
                      onClick={() => setLightboxOpen(true)}
                    >
                      <Image
                        src={screenshots[activeSlide].url}
                        alt={screenshots[activeSlide].caption}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 672px"
                        unoptimized
                      />
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-1">
                          <Maximize2
                            size={28}
                            className="text-white drop-shadow-lg"
                          />
                          <span className="text-white text-xs font-medium drop-shadow-lg">
                            View full size
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Caption */}
                    <p className="text-center text-xs text-slate-500 dark:text-slate-400 mt-2 font-medium">
                      {screenshots[activeSlide].caption}
                    </p>

                    {/* Navigation arrows */}
                    {screenshots.length > 1 && (
                      <>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSlide((p) =>
                              p === 0 ? screenshots.length - 1 : p - 1
                            );
                          }}
                          className="absolute left-2 top-[45%] -translate-y-1/2 w-8 h-8 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
                        >
                          <ChevronLeft
                            size={16}
                            className="text-slate-700 dark:text-slate-200"
                          />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSlide((p) =>
                              p === screenshots.length - 1 ? 0 : p + 1
                            );
                          }}
                          className="absolute right-2 top-[45%] -translate-y-1/2 w-8 h-8 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white dark:hover:bg-slate-700"
                        >
                          <ChevronRight
                            size={16}
                            className="text-slate-700 dark:text-slate-200"
                          />
                        </button>
                      </>
                    )}

                    {/* Dot indicators */}
                    {screenshots.length > 1 && (
                      <div className="flex justify-center gap-1.5 mt-3">
                        {screenshots.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setActiveSlide(i)}
                            className={`h-2 rounded-full transition-all ${i === activeSlide
                                ? "bg-teal-500 w-5"
                                : "bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 w-2"
                              }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Lightbox - Full version on click */}
            {lightboxOpen && hasScreenshots && (
              <div
                className="fixed inset-0 bg-black/95 z-[100] flex items-center justify-center p-4 backdrop-blur-sm"
                onClick={() => setLightboxOpen(false)}
              >
                <button
                  className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2"
                  onClick={() => setLightboxOpen(false)}
                >
                  <X size={24} />
                </button>

                {/* Lightbox navigation arrows */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlide((p) =>
                          p === 0 ? screenshots.length - 1 : p - 1
                        );
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft size={22} className="text-white" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlide((p) =>
                          p === screenshots.length - 1 ? 0 : p + 1
                        );
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    >
                      <ChevronRight size={22} className="text-white" />
                    </button>
                  </>
                )}

                <div
                  className="relative w-full max-w-7xl h-[85vh]"
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

                {/* Bottom caption + counter */}
                <div className="absolute bottom-6 flex flex-col items-center gap-2">
                  <p className="text-white/80 text-sm font-medium">
                    {screenshots[activeSlide].caption}
                  </p>
                  {screenshots.length > 1 && (
                    <div className="flex items-center gap-1.5">
                      {screenshots.map((_, i) => (
                        <button
                          key={i}
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveSlide(i);
                          }}
                          className={`h-2 rounded-full transition-all ${i === activeSlide
                              ? "bg-teal-400 w-5"
                              : "bg-white/30 hover:bg-white/50 w-2"
                            }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Metrics */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6"
            >
              {project.highlights.map((h, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  className="bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl p-3.5 text-center group hover:border-teal-300 dark:hover:border-teal-600 transition-colors"
                >
                  <p className="text-xl md:text-2xl font-extrabold text-teal-600 dark:text-teal-400 mb-0.5">
                    {h.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {h.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Two columns: Features + Tech */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-10">
              {/* Key Modules */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                  <Rocket size={12} className="text-teal-500" />
                  Key Modules &amp; Features
                </h4>
                <ul className="space-y-2.5">
                  {project.features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-sm"
                    >
                      <CheckCircle2
                        className="text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0"
                        size={14}
                      />
                      <span className="leading-relaxed">{f}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack + Role */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                    <ChevronRight size={12} className="text-teal-500" />
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-teal-400 dark:hover:border-teal-600 hover:text-teal-700 dark:hover:text-teal-400 transition-colors cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-2">
                    <ChevronRight size={12} className="text-teal-500" />
                    My Role
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300 font-semibold">
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