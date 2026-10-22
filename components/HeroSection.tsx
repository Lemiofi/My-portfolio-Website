"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Code, Sparkles, TrendingUp } from "lucide-react";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-editorial-grid">
      {/* Soft neutral background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-white/[0.03] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-neutral-400/[0.02] blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Top Meta Line & Intro - Centered */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pb-6 border-b border-white/10 mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2.5"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-neutral-300 animate-pulse" />
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-300">
              Hi, I&apos;m Lemiofi Chalchisa
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-neutral-400 font-mono"
          >
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Code className="w-3.5 h-3.5 text-neutral-400" /> Software Engineering
            </span>
            <span className="hidden sm:inline-block text-neutral-600">•</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <Sparkles className="w-3.5 h-3.5 text-neutral-400" /> Digital Creativity
            </span>
            <span className="hidden sm:inline-block text-neutral-600">•</span>
            <span className="flex items-center gap-1.5 text-neutral-300">
              <TrendingUp className="w-3.5 h-3.5 text-neutral-400" /> Strategy
            </span>
          </motion.div>
        </div>

        {/* Massive Editorial Headline - Centered: SOFTWARE ENGINEER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="my-6 text-center w-full flex flex-col items-center justify-center"
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.3em] font-mono text-neutral-400 mb-3 font-semibold">
            LEMIOFI CHALCHISA
          </span>

          <h1 className="font-display font-extrabold text-[12vw] sm:text-[11vw] md:text-[8rem] lg:text-[9.5rem] leading-[0.85] tracking-tight uppercase text-neutral-100 select-none text-center">
            SOFTWARE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-500">
              ENGINEER
            </span>
          </h1>

          <p className="mt-6 text-xs sm:text-sm uppercase tracking-[0.25em] font-mono text-neutral-400 text-center font-medium">
            Software Engineer &bull; Co-Founder of Liq Academy &bull; Digital Strategist
          </p>
        </motion.div>

        {/* Centered Subtitle & Bio Summary */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 my-6 md:my-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-2xl font-light leading-relaxed text-neutral-200"
          >
            Building meaningful digital solutions by combining{" "}
            <span className="text-white font-medium">software engineering</span>,{" "}
            <span className="text-neutral-300 font-medium">tech education</span>, and{" "}
            <span className="text-neutral-400 font-medium">strategy</span>.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-2xl"
          >
            Software Engineering, Online Education at Liq Academy (supporting Ethiopian universities), and Digital Strategy — delivering impactful digital solutions and educational empowerment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-2"
          >
            <Link
              href="#work"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-neutral-200 text-[#0a0a0c] font-bold text-xs uppercase tracking-wider hover:bg-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 group"
            >
              <span>VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 border border-white/15 text-neutral-200 font-semibold text-xs uppercase tracking-wider hover:bg-white/10 hover:text-white transition-all duration-300 group"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Hero Visual Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full flex justify-center"
        >
          <HeroVisual />
        </motion.div>

      </div>
    </section>
  );
}
