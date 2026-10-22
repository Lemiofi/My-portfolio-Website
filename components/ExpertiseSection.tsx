"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, GraduationCap, TrendingUp, Plus, Minus, ArrowUpRight } from "lucide-react";

export default function ExpertiseSection() {
  const [activeItem, setActiveItem] = useState<number | null>(0);

  const pillars = [
    {
      number: "01",
      title: "SOFTWARE ENGINEERING",
      tagline: "Building practical, functional, and meaningful digital solutions.",
      icon: Code,
      accent: "#f4f4f5",
      description:
        "Engineered with clean architectural principles, focusing on practical problem solving, robust software systems, and responsive web applications. Experienced in collaborating across development teams to deliver real-world management systems.",
      skills: [
        "Web Development",
        "Frontend Development",
        "Backend Development",
        "Problem Solving",
        "Software Systems Architecture",
        "Team Collaboration",
      ],
    },
    {
      number: "02",
      title: "EDTECH & UNIVERSITY EDUCATION",
      tagline: "Empowering Ethiopian universities and students through Liq Academy's online education platform.",
      icon: GraduationCap,
      accent: "#d4d4d8",
      description:
        "Co-Founder of Liq Academy, an online education platform for Ethiopian universities. Providing accessible, structured course resources, exam preparations, and mentorship to help students succeed throughout higher education.",
      skills: [
        "Online Education Platforms",
        "Ethiopian University Curricula",
        "Academic Resource Design",
        "Student Community Leadership",
        "Educational Technology",
        "Academic Mentorship",
      ],
    },
    {
      number: "03",
      title: "DIGITAL MARKETING",
      tagline: "Combining creativity and strategy to help ideas and brands grow in the digital world.",
      icon: TrendingUp,
      accent: "#a1a1aa",
      description:
        "Aligning technical engineering capabilities with creative digital marketing strategies. Helping innovative software products find market reach, convert interest into active users, and sustain long-term digital growth.",
      skills: [
        "Creative Campaign Strategy",
        "Digital Brand Strategy",
        "Audience Connection",
        "Growth Marketing",
        "Performance Optimization",
        "Cross-Platform Execution",
      ],
    },
  ];

  return (
    <section id="expertise" className="py-24 md:py-36 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold">
                EXPERTISE
              </span>
              <div className="h-[1px] w-16 bg-neutral-600" />
            </div>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-neutral-100">
              WHAT I DO
            </h2>
          </div>
          <p className="text-sm font-mono text-neutral-400 max-w-sm uppercase tracking-wide">
            Combining technology, creativity, and strategy to build holistic digital experiences.
          </p>
        </div>

        {/* Large Editorial Pillar Accordion / Interactive List */}
        <div className="flex flex-col border-t border-white/10">
          {pillars.map((pillar, idx) => {
            const isOpen = activeItem === idx;
            const Icon = pillar.icon;

            return (
              <div
                key={pillar.number}
                className="border-b border-white/10 transition-colors duration-300 hover:bg-white/[0.01]"
              >
                {/* Header Row */}
                <button
                  onClick={() => setActiveItem(isOpen ? null : idx)}
                  className="w-full py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 text-left group focus:outline-none"
                >
                  <div className="flex items-start md:items-center gap-6 md:gap-12">
                    <span className="font-mono text-xl md:text-2xl text-neutral-500 font-medium group-hover:text-neutral-200 transition-colors">
                      {pillar.number}
                    </span>
                    <div className="flex flex-col">
                      <h3
                        className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight transition-colors duration-300"
                        style={{ color: isOpen ? pillar.accent : "#e4e4e7" }}
                      >
                        {pillar.title}
                      </h3>
                      <p className="text-xs md:text-sm text-neutral-400 mt-1 font-light">
                        {pillar.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end md:self-center">
                    <div
                      className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center transition-all duration-300 group-hover:border-neutral-200"
                      style={{
                        backgroundColor: isOpen ? "#f4f4f5" : "transparent",
                        color: isOpen ? "#0a0a0c" : "#e4e4e7",
                      }}
                    >
                      {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                    </div>
                  </div>
                </button>

                {/* Expanded Content View */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pt-2 pl-0 md:pl-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Description */}
                        <div className="lg:col-span-7 text-neutral-300 text-base leading-relaxed font-light">
                          <p className="mb-6">{pillar.description}</p>
                          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                            <Icon className="w-4 h-4 text-neutral-300" />
                            <span>Primary Core Capability</span>
                          </div>
                        </div>

                        {/* Skill Badges */}
                        <div className="lg:col-span-5 flex flex-col gap-3">
                          <span className="text-xs uppercase font-mono text-neutral-400 tracking-wider">
                            Supporting Competencies
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {pillar.skills.map((skill) => (
                              <span
                                key={skill}
                                className="px-3.5 py-2 rounded-xl text-xs font-medium bg-white/[0.04] text-neutral-200 border border-white/10 flex items-center gap-2"
                              >
                                <span
                                  className="w-1.5 h-1.5 rounded-full bg-neutral-300"
                                />
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
