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
    <section id="contact" className="py-24 md:py-36 bg-[#0a0a0c] relative border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold">
            CONTACT & CONNECT
          </span>
          <div className="h-[1px] w-16 bg-neutral-600" />
        </div>

        {/* Massive Editorial Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-9xl uppercase tracking-tight text-neutral-100 leading-[0.85]">
            LET&apos;S BUILD
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 via-neutral-400 to-neutral-500">
              SOMETHING GREAT.
            </span>
          </h2>
        </motion.div>

        {/* Supporting Copy & Action Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-6 flex flex-col gap-6">
            <p className="text-lg md:text-2xl font-light text-neutral-300 leading-relaxed">
              Have an idea, project, or opportunity? Let&apos;s connect and create something meaningful. Whether it&apos;s software development, technical collaboration, or digital strategy.
            </p>

            {/* Email Card with Copy Action */}
            <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-2">
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-2xl bg-white/5 text-neutral-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-mono uppercase text-neutral-500">Direct Email</span>
                  <a
                    href={`mailto:${email}`}
                    className="text-neutral-100 font-semibold text-base md:text-lg hover:text-white transition-colors"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-200 hover:bg-white/10 transition-colors font-mono text-xs uppercase flex items-center gap-2"
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
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* LinkedIn Card */}
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between h-48"
            >
              <div className="flex items-center justify-between text-neutral-400 group-hover:text-white transition-colors">
                <Linkedin className="w-7 h-7" />
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-neutral-500 block mb-1">LinkedIn Profile</span>
                <h4 className="text-neutral-100 font-bold text-lg group-hover:text-white transition-colors">
                  Lemiofi Chalchisa
                </h4>
                <span className="text-xs text-neutral-400 font-mono mt-1 block">Connect professionally ↗</span>
              </div>
            </a>

            {/* Instagram Card */}
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between h-48"
            >
              <div className="flex items-center justify-between text-neutral-400 group-hover:text-white transition-colors">
                <Instagram className="w-7 h-7" />
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-neutral-500 block mb-1">Instagram</span>
                <h4 className="text-neutral-100 font-bold text-lg group-hover:text-white transition-colors">
                  @leroyy.08
                </h4>
                <span className="text-xs text-neutral-400 font-mono mt-1 block">Follow journey ↗</span>
              </div>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
