"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { ScrollReveal } from "../motion/ScrollReveal";
import { Sparkles, Send, CheckCircle2, Mail, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

export function ProjectPlannerForm() {
  const [projectTypes, setProjectTypes] = useState<string[]>(["Freelance Project"]);
  const [budgetTier, setBudgetTier] = useState("");
  const [timeline, setTimeline] = useState("Within a Month");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableTypes = [
    "Freelance Project",
    "Full-Time Role",
    "Contract / Collaboration",
    "SaaS / Web App",
    "Business Website",
    "AI Integration"
  ];

  const timelineOptions = [
    "ASAP",
    "Within a Month",
    "1 - 3 Months",
    "Flexible / Just Exploring"
  ];

  const toggleType = (t: string) => {
    if (projectTypes.includes(t)) {
      setProjectTypes(projectTypes.filter((item) => item !== t));
    } else {
      setProjectTypes([...projectTypes, t]);
    }
  };

  const mailtoLink = `mailto:${siteConfig.email}?subject=Portfolio Inquiry - ${encodeURIComponent(
    name || "Hello"
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nLooking for: ${projectTypes.join(
      ", "
    )}\nBudget / Role details: ${budgetTier || "Not specified"}\nTimeline: ${timeline}\n\nMessage:\n${details || "Hi Dev, I'd like to connect."}`
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#2563eb", "#38bdf8", "#6366f1", "#10b981"],
      });
    } catch {
      // Confetti fallback
    }

    setIsSubmitted(true);

    // Automatically trigger pre-filled email in client's mail application
    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 500);
  };

  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-mono font-semibold tracking-widest text-blue-400 uppercase bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/25">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 mb-4">
            Let&apos;s Build Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-sky-400">Together.</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have a project idea, a role to fill, or just want to say hi? Tell me a bit about it and it lands straight in my inbox.
          </p>
        </ScrollReveal>

        {/* Planner Workspace */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.15}>
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-blue-500/30 bg-slate-900/90 shadow-2xl relative">
              
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Scope Selection */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 flex items-center gap-2">
                      <Sparkles size={14} className="text-blue-400" />
                      <span>1. What are you looking for?</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableTypes.map((type) => {
                        const isSelected = projectTypes.includes(type);
                        return (
                          <button
                            type="button"
                            key={type}
                            onClick={() => toggleType(type)}
                            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                              isSelected
                                ? "bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 scale-[1.02]"
                                : "bg-slate-950/70 text-slate-400 border border-white/10 hover:text-white"
                            }`}
                          >
                            {isSelected ? "✓ " : "+ "}
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget & Timeline Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300">
                        2. Budget or Role Details (optional):
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹50k - 1L, or Full-time / Remote"
                        value={budgetTier}
                        onChange={(e) => setBudgetTier(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-mono text-slate-300">
                        3. Timeline:
                      </label>
                      <select
                        value={timeline}
                        onChange={(e) => setTimeline(e.target.value)}
                        className="w-full bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-blue-500"
                      >
                        {timelineOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-slate-950 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Client Info Inputs */}
                  <div className="space-y-4">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300">
                      4. Your Contact Information:
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="Company (optional)"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-slate-950 border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <textarea
                      rows={3}
                      placeholder="Tell me about your idea, project, or the role..."
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  {/* Submission and NDA Badge */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <Mail size={13} className="text-blue-400" />
                      <span>Goes straight to my inbox • No spam, ever</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:via-indigo-500 hover:to-blue-600 text-white font-semibold text-xs shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.03]"
                    >
                      <Send size={14} />
                      <span>Send Message</span>
                    </button>
                  </div>

                </form>
              ) : (
                /* Success View */
                <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-white">
                    Message Ready!
                  </h3>

                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thanks, <span className="text-white font-semibold">{name}</span>! Your message has been drafted in your mail app, addressed to <span className="text-blue-400 font-semibold">{siteConfig.email}</span>. Hit send and I&apos;ll get back to you soon.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                    <a
                      href={mailtoLink}
                      className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
                    >
                      <Mail size={14} />
                      <span>Open Mail Again</span>
                      <ArrowRight size={13} />
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-semibold text-xs transition-colors cursor-pointer"
                    >
                      Edit Form
                    </button>
                  </div>
                </div>
              )}

            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
