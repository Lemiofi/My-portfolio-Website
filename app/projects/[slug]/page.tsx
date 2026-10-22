import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS } from "@/lib/projects";
import { ArrowLeft, Users, Calendar, CheckCircle2, ShieldCheck, Tag } from "lucide-react";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = PROJECTS.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0a0a0c] text-cream-100 selection:bg-accent-lime selection:text-[#0a0a0c]">
      <Navbar />

      <article className="pt-36 pb-24 max-w-4xl mx-auto px-6 md:px-12">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cream-400 hover:text-accent-lime transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO SELECTED WORK
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-white/10 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 rounded-full text-xs font-mono uppercase bg-accent-lime/10 text-accent-lime border border-accent-lime/20 font-bold">
              {project.category}
            </span>
            <span className="text-xs font-mono text-cream-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {project.year}
            </span>
            <span className="text-xs font-mono text-cream-400 flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-accent-cyan" /> {project.team}
            </span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight text-cream-100 leading-tight">
            {project.title}
          </h1>

          <p className="text-cream-300 text-lg md:text-xl font-light leading-relaxed pt-2">
            {project.subtitle}
          </p>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 mb-12 font-mono text-xs">
          <div>
            <span className="text-cream-500 uppercase block mb-1">Role</span>
            <span className="text-cream-100 font-semibold">{project.role}</span>
          </div>
          <div>
            <span className="text-cream-500 uppercase block mb-1">Team Collaboration</span>
            <span className="text-accent-lime font-semibold">{project.team}</span>
          </div>
          <div>
            <span className="text-cream-500 uppercase block mb-1">Timeline</span>
            <span className="text-cream-100 font-semibold">{project.year}</span>
          </div>
          <div>
            <span className="text-cream-500 uppercase block mb-1">Status</span>
            <span className="text-cream-100 font-semibold">Completed Project</span>
          </div>
        </div>

        {/* Details Content */}
        <div className="flex flex-col gap-10 text-cream-300 text-base md:text-lg leading-relaxed font-light">
          <div>
            <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-cream-100 mb-4">
              Project Overview
            </h2>
            <p>{project.fullDescription}</p>
          </div>

          {/* Team Collaboration Focus Card */}
          <div className="p-6 rounded-2xl bg-accent-lime/5 border border-accent-lime/20 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-accent-lime font-mono text-xs uppercase tracking-wider font-bold">
              <ShieldCheck className="w-4 h-4" /> Team Collaboration & Software Development
            </div>
            <p className="text-cream-200 text-sm">
              {project.collaborationDetails}
            </p>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="font-display font-bold text-xl uppercase tracking-tight text-accent-orange mb-3">
                The Operational Challenge
              </h3>
              <p className="text-sm text-cream-300">{project.challenge}</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <h3 className="font-display font-bold text-xl uppercase tracking-tight text-accent-cyan mb-3">
                The Practical Solution
              </h3>
              <p className="text-sm text-cream-300">{project.solution}</p>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-cream-100 mb-4">
              Key Features & System Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.keyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs md:text-sm text-cream-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-lime shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h2 className="font-display font-bold text-xl uppercase tracking-tight text-cream-400 mb-4 flex items-center gap-2">
              <Tag className="w-4 h-4" /> System Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl text-xs font-mono bg-white/5 border border-white/10 text-cream-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
