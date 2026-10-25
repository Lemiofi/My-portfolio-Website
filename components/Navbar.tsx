"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Expertise", href: "/#expertise" },
    { name: "Articles", href: "/articles" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-[#0a0a0c]/90 backdrop-blur-md py-3.5 sm:py-4 border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="group flex items-center gap-2.5 sm:gap-3"
          aria-label="Lemiofi Chalchisa Home"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-neutral-200 text-[#0a0a0c] font-display font-extrabold text-base sm:text-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-hover:bg-white shrink-0">
            LC
          </div>
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold tracking-tight text-neutral-100 group-hover:text-white transition-colors truncate max-w-[150px] sm:max-w-none">
              Lemiofi Chalchisa
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-neutral-400 uppercase font-mono">
              Software Developer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Main Navigation">
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
            href="/#contact"
            className="inline-flex items-center gap-2 px-4 lg:px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/10 text-neutral-200 hover:bg-neutral-200 hover:text-[#0a0a0c] transition-all duration-300 group"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-100 hover:bg-white/10 active:scale-95 transition-all touch-manipulation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 top-[60px] sm:top-[68px] bg-black/60 backdrop-blur-sm z-40"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden relative z-50 bg-[#0d0e12] border-b border-white/10 px-5 sm:px-6 py-6 flex flex-col gap-5 shadow-2xl max-h-[calc(100vh-4.5rem)] overflow-y-auto"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="text-sm sm:text-base uppercase tracking-wider text-neutral-300 hover:text-white transition-colors py-3 px-2 border-b border-white/5 flex items-center justify-between group active:bg-white/5 rounded-lg"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-neutral-200 transition-colors" />
                  </Link>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/#contact"
                  onClick={handleLinkClick}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-200 text-[#0a0a0c] font-bold text-xs uppercase tracking-wider hover:bg-white active:scale-[0.98] transition-all"
                >
                  <span>GET IN TOUCH</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                <span>Lemiofi Chalchisa</span>
                <span>Software Developer</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
