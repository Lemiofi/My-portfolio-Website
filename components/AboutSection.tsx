"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Layers, Cpu, Rocket, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-36 bg-[#0a0a0c] relative border-t border-white/5">
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/2 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-accent-lime/5 blur-[120px] md:blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold">
            01 — ABOUT ME
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-neutral-600" />
        </div>

        {/* Large Editorial Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-extrabold text-[clamp(1.85rem,5.2vw,4.5rem)] uppercase tracking-tight text-neutral-100 mb-8 sm:mb-12 max-w-4xl leading-[1.05]"
        >
          TECHNOLOGY.
          <br />
          <span className="text-neutral-400">CREATIVITY.</span>{" "}
          <span className="text-neutral-500">STRATEGY.</span>
        </motion.h2>

        {/* Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Main Biography Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed font-light"
          >
            <p>
              <strong className="text-neutral-100 font-semibold">Lemiofi Chalchisa</strong> is a passionate Software Developer and Co-Founder of <strong className="text-neutral-100 font-semibold">Liq Academy</strong>—an online education platform for Ethiopian universities, supporting students and academic communities through accessible educational resources, technology, and mentorship.
            </p>
            <p>
              As a Software Developer, he thrives at the intersection of practical problem-solving and clean digital architecture—enjoying the process of turning real-world operational challenges into intuitive software systems.
            </p>
            <p>
              Collaborating alongside a team of developers, Lemiofi contributed to the development of the{" "}
              <span className="text-neutral-100 font-semibold underline decoration-neutral-500 underline-offset-4">
                Complaint Request Management System
              </span>
              —a practical software project aimed at organizing, tracking, and streamlining organizational complaint tickets efficiently.
            </p>

            {/* Current Role Card - Co-Founder of Liq Academy */}
            <div className="mt-2 sm:mt-4 p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl overflow-hidden bg-white p-1 shrink-0 border border-white/20">
                <Image
                  src="/liq-academy.jpg"
                  alt="Liq Academy Logo"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400">
                  Online Education Platform
                </span>
                <h4 className="text-neutral-100 font-bold text-sm sm:text-base">
                  Co-Founder at Liq Academy
                </h4>
                <p className="text-xs text-neutral-400 leading-normal">
                  Providing centralized digital study resources, tutorials, and academic guidance for Ethiopian universities nationwide.
                </p>
              </div>
            </div>

            {/* Continuous Learning Tags */}
            <div className="pt-2 sm:pt-4 flex flex-col gap-2.5 sm:gap-3">
              <span className="text-[11px] sm:text-xs uppercase font-mono text-neutral-400 tracking-wider">
                Continuously Learning & Exploring
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Web Development",
                  "Artificial Intelligence",
                  "Software Development",
                  "Freelancing",
                  "Digital Marketing",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 text-neutral-300 border border-white/10 hover:border-white/30 hover:text-white transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side Quote Callout & Pillar Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-5 sm:gap-6 mt-4 lg:mt-0"
          >
            {/* Highlighted Quote Block */}
            <blockquote className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 sm:p-6 text-white/5 font-display text-6xl sm:text-8xl leading-none select-none pointer-events-none">
                &ldquo;
              </div>
              <p className="text-base sm:text-xl md:text-2xl font-normal leading-snug text-neutral-100 italic relative z-10">
                &ldquo;I believe the best digital experiences combine strong technology with creativity and a clear understanding of people.&rdquo;
              </p>
              <footer className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/10 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 flex flex-wrap items-center justify-between gap-2">
                <span>— LEMIOFI CHALCHISA</span>
                <span className="text-neutral-400">CORE PHILOSOPHY</span>
              </footer>
            </blockquote>

            {/* Mini Stat Highlights */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col gap-2">
                <Users className="w-5 h-5 text-neutral-300" />
                <span className="text-[10px] sm:text-xs font-mono uppercase text-neutral-500">Core Focus</span>
                <span className="text-neutral-100 font-bold text-xs sm:text-sm">Team Collaboration & Systems</span>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col gap-2">
                <Layers className="w-5 h-5 text-neutral-300" />
                <span className="text-[10px] sm:text-xs font-mono uppercase text-neutral-500">Approach</span>
                <span className="text-neutral-100 font-bold text-xs sm:text-sm">Functional Digital Solutions</span>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
