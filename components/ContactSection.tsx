"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, ArrowUpRight, Copy, Check, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const email = "leroylemi44@gmail.com";
  const linkedin = "https://www.linkedin.com/in/lemiofi-chalchisa-90248a421";
  const instagram = "https://www.instagram.com/leroyy.08";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-36 bg-[#0a0a0c] relative border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-white/[0.02] blur-[120px] md:blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold">
            CONTACT & CONNECT
          </span>
          <div className="h-[1px] w-12 sm:w-16 bg-neutral-600" />
        </div>

        {/* Massive Editorial Headline - Responsive Scaling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12"
        >
          <h2 className="font-display font-extrabold text-[clamp(1.85rem,5.5vw,6.5rem)] uppercase tracking-tight text-neutral-100 leading-[0.95] sm:leading-[0.88] break-words">
            LET&apos;S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-500">
              SOMETHING GREAT.
            </span>
          </h2>
        </motion.div>

        {/* Supporting Copy & Action Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6">
            <p className="text-base sm:text-xl md:text-2xl font-light text-neutral-300 leading-relaxed">
              Have an idea, project, or opportunity? Let&apos;s connect and create something meaningful. Whether it&apos;s software development, technical collaboration, or digital strategy.
            </p>

            {/* Email Card with Copy Action */}
            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/5 text-neutral-200 shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-neutral-500">Direct Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-neutral-100 font-semibold text-sm sm:text-base md:text-lg hover:text-white transition-colors truncate"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-200 hover:bg-white/10 active:scale-95 transition-all font-mono text-xs uppercase flex items-center justify-center gap-2 shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-neutral-300" /> COPIED!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-neutral-400" /> COPY EMAIL
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Social Links Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-2 lg:mt-0">
            
            {/* LinkedIn Card */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] active:scale-[0.99] transition-all duration-300 flex flex-col justify-between min-h-[140px] sm:h-48"
            >
              <div className="flex items-center justify-between text-neutral-400 group-hover:text-white transition-colors">
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="pt-4 sm:pt-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase text-neutral-500 block mb-0.5">LinkedIn Profile</span>
                <h4 className="text-neutral-100 font-bold text-base sm:text-lg group-hover:text-white transition-colors">
                  Lemiofi Chalchisa
                </h4>
                <span className="text-[11px] sm:text-xs text-neutral-400 font-mono mt-0.5 block">Connect professionally ↗</span>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] active:scale-[0.99] transition-all duration-300 flex flex-col justify-between min-h-[140px] sm:h-48"
            >
              <div className="flex items-center justify-between text-neutral-400 group-hover:text-white transition-colors">
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="pt-4 sm:pt-0">
                <span className="text-[10px] sm:text-xs font-mono uppercase text-neutral-500 block mb-0.5">Instagram</span>
                <h4 className="text-neutral-100 font-bold text-base sm:text-lg group-hover:text-white transition-colors">
                  @leroyy.08
                </h4>
                <span className="text-[11px] sm:text-xs text-neutral-400 font-mono mt-0.5 block">Follow journey ↗</span>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
