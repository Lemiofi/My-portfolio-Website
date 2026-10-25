"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/articles";
import { ArrowUpRight, Calendar, Clock, Filter } from "lucide-react";

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories = [
    "ALL",
    "WEB DEVELOPMENT",
    "ARTIFICIAL INTELLIGENCE",
    "SOFTWARE DEVELOPMENT",
    "FREELANCING",
    "DIGITAL MARKETING",
  ];

  const filteredArticles =
    selectedCategory === "ALL"
      ? ARTICLES
      : ARTICLES.filter((art) => art.category === selectedCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-neutral-100 selection:bg-neutral-300 selection:text-[#0a0a0c]">
      <Navbar />

      <div className="pt-28 sm:pt-36 pb-16 sm:pb-24 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-4 border-b border-white/10 pb-8 sm:pb-12 mb-8 sm:mb-12">
          <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold">
            03 — INSIGHTS & THOUGHTS
          </span>
          <h1 className="font-display font-extrabold text-[clamp(1.85rem,5vw,4.5rem)] uppercase tracking-tight text-neutral-100">
            ARTICLES & WRITING
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base md:text-lg font-light max-w-2xl">
            Exploring the intersection of Software Engineering, Web Development, Artificial Intelligence, Freelancing, and Digital Marketing Strategy.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 sm:mb-12">
          <span className="text-xs font-mono text-neutral-500 uppercase flex items-center gap-1 mr-1 sm:mr-2 w-full sm:w-auto mb-1 sm:mb-0">
            <Filter className="w-3.5 h-3.5" /> Filter by Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? "bg-neutral-200 text-[#0a0a0c] font-bold shadow-lg"
                  : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-6 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-neutral-200 border border-white/15 font-bold uppercase">
                    {article.category}
                  </span>
                  <span className="text-neutral-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {article.readTime}
                  </span>
                </div>

                <h2 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight text-neutral-100 group-hover:text-white transition-colors leading-snug mb-3">
                  {article.title}
                </h2>

                <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" /> {article.date}
                </span>
                <span className="text-neutral-300 group-hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-1 font-semibold">
                  READ ARTICLE <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
