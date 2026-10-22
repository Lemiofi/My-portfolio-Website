"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, ExternalLink, Calendar, Sparkles } from "lucide-react";
import { PROJECTS, Project } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

export default function SelectedWorkSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-24 md:py-36 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold">
                02 — SELECTED WORK
              </span>
              <div className="h-[1px] w-16 bg-neutral-600" />
            </div>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-neutral-100">
              FEATURED PROJECTS
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm uppercase tracking-wide">
            Real-world software engineering solutions & collaborative systems.
          </p>
        </div>

        {/* Featured Project Layout */}
        <div className="flex flex-col gap-16">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group rounded-3xl p-8 md:p-12 bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden shadow-2xl"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/[0.02] blur-[120px] pointer-events-none rounded-full group-hover:bg-white/[0.04] transition-all duration-500" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                
                {/* Left Info Column */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-white/10 text-neutral-200 border border-white/15 font-bold">
                      {project.category}
                    </span>
                    <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-white/5 text-neutral-300 border border-white/10 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-neutral-400" /> {project.team}
                    </span>
                    <span className="text-xs font-mono text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {project.year}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-neutral-100 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-neutral-300 text-base md:text-lg font-light mt-3 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Metadata Table / Key Highlights */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs border-t border-b border-white/10 py-4">
                    <div>
                      <span className="text-neutral-500 uppercase block mb-1">Role</span>
                      <span className="text-neutral-200 font-semibold">{project.role}</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase block mb-1">Collaboration</span>
                      <span className="text-neutral-200 font-semibold">Team-Based Project</span>
                    </div>
                    <div>
                      <span className="text-neutral-500 uppercase block mb-1">Status</span>
                      <span className="text-neutral-200 font-semibold">Completed</span>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-neutral-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Case Study Trigger Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-neutral-200 text-[#0a0a0c] font-bold text-xs uppercase tracking-wider hover:bg-white hover:shadow-lg transition-all duration-300 group/btn"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Visual Frame */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-6 md:p-8 overflow-hidden min-h-[300px] flex flex-col justify-between group-hover:border-white/20 transition-colors">
                    <div className="flex items-center justify-between font-mono text-xs text-neutral-400 border-b border-white/10 pb-4">
                      <span>PROJECT PREVIEW</span>
                      <span className="text-neutral-200 font-bold">
                        {project.id === "liq-academy-platform" ? "02 // ACADEMY" : "01 // SYSTEM"}
                      </span>
                    </div>

                    <div className="my-6 flex flex-col gap-3">
                      {project.id === "liq-academy-platform" ? (
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5">
                          <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-white p-1 flex-shrink-0 border border-white/20">
                            <Image
                              src="/liq-academy.jpg"
                              alt="Liq Academy Logo"
                              fill
                              className="object-contain p-1"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs font-mono uppercase text-neutral-400">
                              Online Education Platform
                            </span>
                            <h4 className="text-sm font-bold text-neutral-100 font-display">
                              Liq Academy
                            </h4>
                            <p className="text-[11px] text-neutral-400 mt-0.5">
                              For Ethiopian universities
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 font-mono text-xs text-neutral-300 space-y-2">
                          <div className="flex items-center gap-2 text-neutral-200">
                            <Sparkles className="w-4 h-4 text-neutral-400" />
                            <span>Collaborative Request Architecture</span>
                          </div>
                          <p className="text-[11px] text-neutral-400">
                            Structured digital system for organizing, managing, and handling ticket resolution workflows.
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 pt-2 border-t border-white/10">
                      <span>Interactive Modal Available</span>
                      <span className="text-neutral-200 underline cursor-pointer hover:text-white" onClick={() => setSelectedProject(project)}>
                        Inspect Case Study ↗
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
