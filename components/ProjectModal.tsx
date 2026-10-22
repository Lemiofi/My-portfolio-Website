"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Calendar, Tag, CheckCircle2, ShieldCheck } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#111115] border border-white/15 rounded-3xl p-6 md:p-10 shadow-2xl text-cream-100"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/15 text-neutral-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-col sm:flex-row items-start gap-5 mb-8 pr-12">
            {project.id === "liq-academy-platform" && (
              <div className="relative w-20 h-20 rounded-2xl overflow-hidden bg-white p-1 flex-shrink-0 border border-white/20 shadow-lg">
                <Image
                  src="/liq-academy.jpg"
                  alt="Liq Academy Logo"
                  fill
                  className="object-contain p-1"
                />
              </div>
            )}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono uppercase bg-white/10 text-neutral-200 border border-white/15">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {project.year}
                </span>
              </div>
              <h3 className="font-display font-extrabold text-3xl md:text-5xl uppercase tracking-tight text-neutral-100">
                {project.title}
              </h3>
              <p className="text-base md:text-lg text-neutral-300 font-light">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-8 font-mono text-xs">
            <div>
              <span className="text-neutral-500 uppercase block mb-1">Role</span>
              <span className="text-neutral-200 font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase block mb-1">Team Structure</span>
              <span className="text-neutral-200 font-semibold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-neutral-400" /> {project.team}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase block mb-1">Year</span>
              <span className="text-neutral-200 font-semibold">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase block mb-1">Type</span>
              <span className="text-neutral-200 font-semibold">Collaborative System</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-8 text-neutral-300 text-sm md:text-base leading-relaxed">
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-3">
                Project Overview
              </h4>
              <p>{project.fullDescription}</p>
            </div>

            {/* Team Collaboration Distinction */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-neutral-200 font-mono text-xs uppercase tracking-wider font-bold">
                <ShieldCheck className="w-4 h-4 text-neutral-400" /> Team Collaboration Focus
              </div>
              <p className="text-neutral-300 text-sm">
                {project.collaborationDetails}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-neutral-400 mb-4">
                Key Features & Architectural Capabilities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs uppercase font-mono tracking-widest text-cream-400 mb-3 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" /> Technologies & Core Concepts
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cream-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
