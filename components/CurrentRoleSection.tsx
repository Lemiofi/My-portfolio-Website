"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Radio, GraduationCap, ArrowUpRight } from "lucide-react";

export default function CurrentRoleSection() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-[#0e0e12] relative overflow-hidden border-t border-b border-white/10">
      {/* Background Motion Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-white/[0.02] blur-[100px] md:blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Label */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono uppercase bg-white/10 text-neutral-200 border border-white/15 font-bold">
              <Radio className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse text-neutral-300 shrink-0" /> ACTIVE VENTURE
            </span>
            <span className="text-[10px] sm:text-xs uppercase font-mono tracking-widest text-neutral-400">
              CURRENT LEADERSHIP & VENTURE
            </span>
          </div>
          <span className="text-[11px] sm:text-xs font-mono text-neutral-500 hidden sm:inline-block">
            Liq Academy © 2024 - Present
          </span>
        </div>

        {/* Large Text Composition with Logo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center my-4 sm:my-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8"
          >
            <h2 className="font-display font-extrabold text-[clamp(1.85rem,5.5vw,5.5rem)] uppercase tracking-tight text-neutral-100 leading-[0.95] sm:leading-[0.9] break-words">
              CO-FOUNDER
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-500">
                OF LIQ ACADEMY
              </span>
            </h2>
          </motion.div>

          {/* Liq Academy Logo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex items-center justify-start lg:justify-end mt-2 lg:mt-0"
          >
            <div className="p-3.5 sm:p-4 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 shadow-2xl flex items-center gap-3.5 sm:gap-4 backdrop-blur-md w-full sm:w-auto">
              <div className="relative w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden bg-white p-1 shrink-0 border border-white/20 shadow-md">
                <Image
                  src="/liq-academy.jpg"
                  alt="Liq Academy Logo"
                  fill
                  sizes="80px"
                  className="object-contain p-1"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-neutral-400 truncate">
                  Online Education Platform
                </span>
                <span className="text-sm sm:text-base font-bold text-neutral-100 font-display">
                  LIQ ACADEMY
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-400 font-mono">
                  For Ethiopian Universities
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Supporting Description & Responsibilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center mt-6 sm:mt-10">
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
              Co-Founder of <strong className="text-white font-medium">Liq Academy</strong>, an online education platform for Ethiopian universities. Providing accessible, high-quality course resources, structured guides, and digital learning tools to empower students across higher education.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-2.5 sm:gap-3 mt-4 md:mt-0">
            {[
              "Centralized digital educational resources for Ethiopian universities",
              "Structured exam preparation, tutorials & course walkthroughs",
              "Accessible, low-bandwidth web platform for nationwide reach",
            ].map((responsibility, idx) => (
              <div
                key={idx}
                className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/10 flex items-start gap-2.5 sm:gap-3 text-xs text-neutral-200 font-medium"
              >
                <CheckCircle className="w-4 h-4 text-neutral-300 shrink-0 mt-0.5" />
                <span>{responsibility}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Infinite Marquee Text Ticker */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10 overflow-hidden relative">
          <div className="flex w-max whitespace-nowrap animate-marquee gap-6 sm:gap-8 text-[11px] sm:text-xs font-mono uppercase tracking-widest text-neutral-500">
            <span className="flex items-center gap-2 text-neutral-300 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-neutral-300 shrink-0" /> LIQ ACADEMY
            </span>
            <span>•</span>
            <span>ONLINE EDUCATION FOR ETHIOPIAN UNIVERSITIES</span>
            <span>•</span>
            <span>ACADEMIC SUCCESS & MENTORSHIP</span>
            <span>•</span>
            <span>HIGHER EDUCATION SUPPORT</span>
            <span>•</span>
            <span className="flex items-center gap-2 text-neutral-300 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-neutral-300 shrink-0" /> LIQ ACADEMY
            </span>
            <span>•</span>
            <span>EMPOWERING ETHIOPIAN UNIVERSITY STUDENTS</span>
            <span>•</span>
            <span>ACCESSIBLE DIGITAL EDUCATION</span>
            <span>•</span>
            <span className="flex items-center gap-2 text-neutral-300 font-bold">
              <Sparkles className="w-3.5 h-3.5 text-neutral-300 shrink-0" /> LIQ ACADEMY
            </span>
            <span>•</span>
            <span>ONLINE EDUCATION FOR ETHIOPIAN UNIVERSITIES</span>
            <span>•</span>
            <span>ACADEMIC SUCCESS & MENTORSHIP</span>
          </div>
        </div>

      </div>
    </section>
  );
}
