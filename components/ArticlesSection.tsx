"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, BookOpen } from "lucide-react";
import { ARTICLES } from "@/lib/articles";

export default function ArticlesSection() {
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <section id="articles" className="py-24 md:py-36 bg-[#0a0a0c] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold">
                03 — WRITING
              </span>
              <div className="h-[1px] w-16 bg-neutral-600" />
            </div>
            <h2 className="font-display font-extrabold text-5xl sm:text-7xl uppercase tracking-tight text-neutral-100">
              IDEAS & ARTICLES
            </h2>
          </div>
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors group"
          >
            <span>VIEW ALL ARTICLES ({ARTICLES.length})</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredArticles.map((article, idx) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link
                href={`/articles/${article.slug}`}
                className="group flex flex-col justify-between h-full p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
              >
                <div>
                  {/* Category & Date */}
                  <div className="flex items-center justify-between gap-2 mb-6 text-xs font-mono">
                    <span className="px-3 py-1 rounded-full bg-white/10 text-neutral-200 border border-white/15 font-bold uppercase">
                      {article.category}
                    </span>
                    <span className="text-neutral-500 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight text-neutral-100 group-hover:text-white transition-colors leading-snug mb-3">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Footer Metadata */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" /> {article.date}
                  </span>
                  <span className="text-neutral-300 group-hover:text-white group-hover:translate-x-1 transition-all flex items-center gap-1 font-semibold">
                    READ ARTICLE <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
