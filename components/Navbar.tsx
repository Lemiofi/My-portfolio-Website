"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Articles", href: "#articles" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0c]/85 backdrop-blur-md py-4 border-b border-white/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-neutral-200 text-[#0a0a0c] font-display font-extrabold text-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:bg-white">
            LC
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-neutral-100 group-hover:text-white transition-colors">
              Lemiofi Chalchisa
            </span>
            <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono">
              Software Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors relative py-1 group font-medium"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-neutral-300 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-neutral-200 hover:bg-neutral-200 hover:text-[#0a0a0c] transition-all duration-300 group"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-white/5 text-neutral-100 hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#0e0e12] border-b border-white/10 px-6 py-8 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base uppercase tracking-wider text-neutral-300 hover:text-white transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-neutral-200 text-[#0a0a0c] font-bold text-xs uppercase tracking-wider mt-2 hover:bg-white"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
