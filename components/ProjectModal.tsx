"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Users, Calendar, Tag, CheckCircle2, ShieldCheck } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          aria-hidden="true"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-4xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto bg-[#111115] border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-2xl text-cream-100"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-2.5 rounded-full bg-white/5 hover:bg-white/15 active:scale-95 text-neutral-300 hover:text-white transition-all z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 mb-6 sm:mb-8 pr-10 sm:pr-12">
            {project.id === "liq-academy-platform" && (
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden bg-white p-1 shrink-0 border border-white/20 shadow-lg">
                <Image
                  src="/liq-academy.jpg"
                  alt="Liq Academy Logo"
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </div>
            )}
            <div className="flex flex-col gap-2 sm:gap-3 min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono uppercase bg-white/10 text-neutral-200 border border-white/15">
                  {project.category}
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-neutral-400 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {project.year}
                </span>
              </div>
              <h3
                id="modal-title"
                className="font-display font-extrabold text-2xl xs:text-3xl md:text-5xl uppercase tracking-tight text-neutral-100 break-words leading-tight"
              >
                {project.title}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 sm:mb-8 font-mono text-xs">
            <div>
              <span className="text-neutral-500 uppercase block mb-0.5 text-[10px] sm:text-xs">Role</span>
              <span className="text-neutral-200 font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase block mb-0.5 text-[10px] sm:text-xs">Team Structure</span>
              <span className="text-neutral-200 font-semibold flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-neutral-400 shrink-0" /> {project.team}
              </span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase block mb-0.5 text-[10px] sm:text-xs">Year</span>
              <span className="text-neutral-200 font-semibold">{project.year}</span>
            </div>
            <div>
              <span className="text-neutral-500 uppercase block mb-0.5 text-[10px] sm:text-xs">Type</span>
              <span className="text-neutral-200 font-semibold">Collaborative System</span>
            </div>
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-6 sm:gap-8 text-neutral-300 text-sm sm:text-base leading-relaxed">
            <div>
              <h4 className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-neutral-400 mb-2 sm:mb-3">
                Project Overview
              </h4>
              <p className="font-light">{project.fullDescription}</p>
            </div>

            {/* Team Collaboration Distinction */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col gap-2.5 sm:gap-3">
              <div className="flex items-center gap-2 text-neutral-200 font-mono text-xs uppercase tracking-wider font-bold">
                <ShieldCheck className="w-4 h-4 text-neutral-400 shrink-0" /> Team Collaboration Focus
              </div>
              <p className="text-neutral-300 text-xs sm:text-sm font-light leading-relaxed">
                {project.collaborationDetails}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-neutral-400 mb-3 sm:mb-4">
                Key Features & Architectural Capabilities
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3">
                {project.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-3 sm:p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2.5 sm:gap-3 text-xs text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-[11px] sm:text-xs uppercase font-mono tracking-widest text-cream-400 mb-2.5 sm:mb-3 flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5" /> Technologies & Core Concepts
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-cream-200"
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
