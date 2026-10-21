"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { projectsData } from "@/data/projects";
import { ScrollReveal } from "../motion/ScrollReveal";
import { GithubIcon } from "../icons/GithubIcon";
import { MapPin, Mail, Phone, CheckCircle2, Briefcase, Sparkles, User, Compass, Rocket, Link2 } from "lucide-react";

export function AboutDev() {
  const [activeTab, setActiveTab] = useState<"profile" | "approach">("profile");

  const domains = ["Accounting SaaS", "Enterprise HRMS", "Interior Design Studios", "Luxury Interiors", "Car Rentals"];

  const quickFacts = [
    { icon: <Briefcase size={14} className="text-emerald-400 shrink-0" />, label: "Experience", value: "1+ yr production MERN" },
    { icon: <Rocket size={14} className="text-blue-400 shrink-0" />, label: "Shipped", value: `${projectsData.length} live projects` },
    { icon: <MapPin size={14} className="text-sky-400 shrink-0" />, label: "Based in", value: "Surat, India" },
    { icon: <Sparkles size={14} className="text-indigo-400 shrink-0" />, label: "Focus", value: "Full Stack + Applied AI" },
  ];

  return (
    <section id="about" className="py-24 relative bg-transparent border-t border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Section Header */}
        <ScrollReveal direction="diagonal" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/25">
            About Me
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Hi, I&apos;m Dev. <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">Nice to meet you.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer who cares about the product as much as the code behind it.
          </p>
        </ScrollReveal>

        {/* Tab Selector */}
        <ScrollReveal delay={0.1} className="flex justify-center">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "profile"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-600/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <User size={13} /> Profile
            </button>
            <button
              onClick={() => setActiveTab("approach")}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === "approach"
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-md shadow-blue-600/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Compass size={13} /> How I Work
            </button>
          </div>
        </ScrollReveal>

        {/* Main Content Card */}
        <ScrollReveal delay={0.2} className="glass-card rounded-3xl p-6 sm:p-10 border border-blue-500/30 bg-slate-900/95 shadow-2xl max-w-5xl mx-auto">

          {/* Tab 1: Profile */}
          {activeTab === "profile" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-in fade-in duration-300">
              {/* Monogram Badge */}
              <div className="lg:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-sky-500 p-1 shadow-2xl shadow-blue-600/25 mb-4 flex items-center justify-center group hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-slate-950 rounded-[22px] flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="text-5xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">
                      {siteConfig.shortName}
                    </div>
                    <div className="text-[10px] font-mono text-blue-400/90 mt-1 uppercase tracking-widest">
                      Full Stack Dev
                    </div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-1 font-mono text-xs text-slate-400">
                  <div className="text-white font-bold text-base font-sans">{siteConfig.name}</div>
                  <div>{siteConfig.role}</div>
                  <div className="text-blue-400 flex items-center justify-center gap-1 font-semibold pt-0.5">
                    <MapPin size={12} /> {siteConfig.location}
                  </div>
                </div>
              </div>

              {/* Bio & Quick Facts */}
              <div className="lg:col-span-8 space-y-5">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Building products that <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">work, scale, and make an impact.</span>
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {siteConfig.positioning.intro}
                </p>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  {quickFacts.map((fact) => (
                    <div key={fact.label} className="bg-slate-950/80 p-3 rounded-xl border border-white/5 flex items-center gap-2.5">
                      {fact.icon}
                      <div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">{fact.label}</div>
                        <div className="text-slate-200 font-semibold">{fact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct Touchpoint Pills */}
                <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-mono">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 border border-white/10 hover:border-blue-500 hover:text-blue-300 transition-colors shadow-sm"
                  >
                    <Mail size={13} className="text-blue-400" />
                    <span>{siteConfig.email}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 border border-white/10 hover:border-emerald-500 hover:text-emerald-300 transition-colors shadow-sm"
                  >
                    <Phone size={13} className="text-emerald-400" />
                    <span>{siteConfig.phone}</span>
                  </a>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 border border-white/10 hover:border-indigo-500 hover:text-indigo-300 transition-colors shadow-sm"
                  >
                    <GithubIcon size={13} className="text-indigo-400" />
                    <span>GitHub</span>
                  </a>
                  {siteConfig.linkedin && (
                    <a
                      href={siteConfig.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 text-slate-200 border border-white/10 hover:border-sky-500 hover:text-sky-300 transition-colors shadow-sm"
                    >
                      <Link2 size={13} className="text-sky-400" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: How I Work */}
          {activeTab === "approach" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center max-w-2xl mx-auto space-y-2 mb-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  From idea to <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">live product.</span>
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  The principles I bring to every project — freelance, startup, or team.
                </p>
              </div>

              {/* Working Principles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {siteConfig.principles.map((p) => (
                  <div key={p.title} className="bg-slate-950/80 p-4 rounded-xl border border-white/5 space-y-1 hover:border-blue-500/40 transition-colors">
                    <div className="flex items-center gap-2 text-blue-400 font-bold">
                      <CheckCircle2 size={14} className="shrink-0" />
                      <span>{p.title}</span>
                    </div>
                    <p className="text-[11px] font-sans text-slate-400 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Domains */}
              <div className="space-y-2.5">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">Domains I&apos;ve built for:</div>
                <div className="flex flex-wrap gap-1.5">
                  {domains.map((d) => (
                    <span key={d} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-950 text-slate-300 border border-white/10">
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs shadow-lg shadow-blue-600/25 hover:scale-[1.02] transition-transform"
                >
                  <Sparkles size={13} />
                  <span>Let&apos;s Talk About Your Idea</span>
                </a>
              </div>
            </div>
          )}

        </ScrollReveal>

      </div>
    </section>
  );
}
