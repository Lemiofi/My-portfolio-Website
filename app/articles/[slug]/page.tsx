import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ARTICLES } from "@/lib/articles";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-neutral-100 selection:bg-neutral-300 selection:text-[#0a0a0c]">
      <Navbar />

      <article className="pt-28 sm:pt-36 pb-16 sm:pb-24 max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Back Link */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors mb-6 sm:mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO ALL ARTICLES
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-3 sm:gap-4 border-b border-white/10 pb-6 sm:pb-8 mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="px-3 sm:px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-mono uppercase bg-white/10 text-neutral-200 border border-white/15 font-bold">
              {article.category}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-neutral-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="text-[11px] sm:text-xs font-mono text-neutral-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {article.date}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-[clamp(1.75rem,5vw,3.75rem)] uppercase tracking-tight text-neutral-100 leading-tight break-words">
            {article.title}
          </h1>

          <p className="text-neutral-300 text-base sm:text-lg md:text-xl font-light italic leading-relaxed pt-1 sm:pt-2">
            &ldquo;{article.excerpt}&rdquo;
          </p>
        </div>

        {/* Article Content Render */}
        <div className="prose prose-invert max-w-none text-neutral-300 text-base md:text-lg leading-relaxed font-light space-y-6">
          {article.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h3
                  key={index}
                  className="font-display font-bold text-2xl uppercase tracking-tight text-neutral-100 pt-6 border-t border-white/10"
                >
                  {paragraph.replace("### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 text-neutral-400">
                  {paragraph.split("\n").map((li, i) => (
                    <li key={i}>{li.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* Author Footer Card */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-neutral-200 text-[#0a0a0c] font-display font-extrabold flex items-center justify-center text-lg">
              LC
            </div>
            <div>
              <span className="text-xs font-mono uppercase text-neutral-500 block">Written by</span>
              <h4 className="text-neutral-100 font-bold text-base">Lemiofi Chalchisa</h4>
              <span className="text-xs text-neutral-400 font-mono">Software Engineer & Co-Founder of Liq Academy</span>
            </div>
          </div>

          <Link
            href="/#contact"
            className="px-5 py-2.5 rounded-full bg-neutral-200 text-[#0a0a0c] font-bold text-xs uppercase tracking-wider hover:bg-white transition-all"
          >
            Get In Touch ↗
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
