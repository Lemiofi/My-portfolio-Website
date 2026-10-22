"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-[#08080a] border-t border-white/10 text-cream-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-cream-100 text-[#0a0a0c] font-display font-extrabold flex items-center justify-center text-xs">
            LC
          </div>
          <span>© 2026 Lemiofi Chalchisa. All rights reserved.</span>
        </div>

        {/* Middle Quick Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/lemiofi-chalchisa-90248a421"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href="https://www.instagram.com/leroyy.08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Instagram
          </a>
          <span>•</span>
          <a
            href="mailto:leroylemi44@gmail.com"
            className="hover:text-white transition-colors"
          >
            Email
          </a>
        </div>

        {/* Right Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-white transition-colors group"
        >
          <span>BACK TO TOP</span>
          <div className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-neutral-200 group-hover:text-[#0a0a0c] transition-all">
            <ArrowUp className="w-3.5 h-3.5" />
          </div>
        </button>

      </div>
    </footer>
  );
}
