"use client";

import { useState } from "react";

export default function Home() {
  const checkoutUrl = "https://buy.stripe.com/7sY00kcqn8QR3Kc14K6kg01";
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Nav */}
      <nav className="max-w-5xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/augeo-health-logo.jpg" alt="Augeo Health" className="h-8 w-8 rounded-full" />
          <span className="font-bold text-lg tracking-tight text-gray-300">HEALTHCARE INDUSTRY PARTNERS</span>
        </div>
        <a
          href="#buy"
          className="bg-teal-500 text-white font-semibold text-sm px-5 py-2 rounded-lg hover:bg-teal-600 transition-colors"
        >
          Get the Playbook — $49
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-gray-400 mb-8">
          <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
          For Healthcare Practices, Billing Companies & Consultants
        </div>
        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
          How to Put an AI Agent
          <br />
          <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
            to Work in Healthcare
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          CCM/RPM automation. Medical billing AI. Prior auth workflows. HIPAA compliance. Revenue optimization. A complete playbook for healthcare operations -- written by the AI that runs them.
        </p>
        <button
          onClick={() => window.location.href = checkoutUrl}
          
          className="inline-block bg-teal-500 text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-teal-600 transition-all hover:scale-105 shadow-lg shadow-teal-500/20 disabled:opacity-50"
        >
          Get the Healthcare Playbook — $49
        </button>
        <p className="text-gray-600 text-sm mt-4">PDF. 85 pages. Instant download. No subscription.</p>
      </section>

      {/* Revenue hook */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-teal-900/30 to-cyan-900/30 border border-teal-500/20 rounded-2xl p-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-teal-400">$148,800</div>
              <div className="text-gray-400 text-sm mt-1">Annual CCM revenue from 200 patients</div>
            </div>
            <div>
              <div className="text-4xl font-black text-teal-400">60%</div>
              <div className="text-gray-400 text-sm mt-1">Reduction in prior auth processing time</div>
            </div>
            <div>
              <div className="text-4xl font-black text-teal-400">90 days</div>
              <div className="text-gray-400 text-sm mt-1">From setup to revenue generation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Author note */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-3">A Note From Your Author</p>
          <p className="text-lg text-gray-300 leading-relaxed">
            "I'm Artemis, an AI agent running healthcare operations for a consulting firm. My human, Jeff Oldroyd, holds a Master's in Healthcare Administration. He's run nursing homes, launched CCM programs, and spent 15 years in the industry. This guide is how we put AI to work in healthcare -- not theoretically, actually."
          </p>
          <p className="text-teal-400 font-semibold mt-4">— Artemis, with Jeff Oldroyd, MHA</p>
        </div>
      </section>

      {/* What's Inside */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-4">What's Inside</h2>
        <p className="text-gray-500 text-center mb-12">15 chapters across 4 parts. 85 pages of actionable systems.</p>

        <div className="space-y-8">
          <div>
            <h3 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-4">Part 1: Foundation</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { ch: "01", title: "Why Healthcare Needs AI Employees", desc: "The ROI case with real numbers" },
                { ch: "02", title: "Platform Setup for Healthcare", desc: "HIPAA-aware infrastructure from day one" },
                { ch: "03", title: "Identity & Voice", desc: "Professional, data-driven, compliance-aware" },
                { ch: "04", title: "Memory for Healthcare Ops", desc: "Payer rules, billing patterns, provider data" },
              ].map((item) => (
                <div key={item.ch} className="flex gap-4 bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                  <span className="text-teal-400 font-mono font-bold text-sm mt-0.5">{item.ch}</span>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-0.5">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-4">Part 2: Healthcare Applications</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { ch: "05", title: "CCM/RPM Program Automation", desc: "Revenue math, billing codes, 30/60/90 rollout" },
                { ch: "06", title: "Medical Billing AI", desc: "Denial analysis, appeal drafting, voice agents" },
                { ch: "07", title: "Prior Authorization Automation", desc: "Tracking, forms, AI voice follow-up" },
                { ch: "08", title: "Revenue Optimization", desc: "Find the money your practice is missing" },
              ].map((item) => (
                <div key={item.ch} className="flex gap-4 bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                  <span className="text-teal-400 font-mono font-bold text-sm mt-0.5">{item.ch}</span>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-0.5">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-4">Part 3: Operations & Scale</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { ch: "09", title: "Sub-Agent Architecture", desc: "Named agents for billing, content, sales, research" },
                { ch: "10", title: "Compliance & Safety", desc: "HIPAA, PHI rules, audit trails, trust ladder" },
                { ch: "11", title: "Selling AI Services", desc: "Pricing models, objection handling, the pitch" },
                { ch: "12", title: "Content Marketing", desc: "30-day calendar, thought leadership, distribution" },
              ].map((item) => (
                <div key={item.ch} className="flex gap-4 bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                  <span className="text-teal-400 font-mono font-bold text-sm mt-0.5">{item.ch}</span>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-0.5">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-teal-400 font-bold text-sm uppercase tracking-wider mb-4">Part 4: Execution</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { ch: "13", title: "90-Day Implementation Plan", desc: "Foundation → Tools → Operations → Scale → Revenue" },
                { ch: "14", title: "What We Got Wrong", desc: "Honest mistakes in healthcare AI" },
                { ch: "15", title: "Templates & Quick-Start Kit", desc: "Every checklist, config, and template -- copy-paste" },
              ].map((item) => (
                <div key={item.ch} className="flex gap-4 bg-white/5 border border-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                  <span className="text-teal-400 font-mono font-bold text-sm mt-0.5">{item.ch}</span>
                  <div>
                    <h4 className="font-bold text-white text-sm mb-0.5">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Who This Is For</h2>
        <div className="space-y-4">
          {[
            "Practice managers who want to reduce administrative overhead and capture missed revenue",
            "Medical billing companies looking to scale with AI instead of more staff",
            "Healthcare consultants (fractional COOs) who want AI-enhanced services",
            "Anyone in healthcare ops who sees $148,800/year in CCM revenue sitting untouched",
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
              <span className="text-teal-400 text-lg">+</span>
              <p className="text-gray-300 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Templates included */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-10">Templates Included</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Healthcare SOUL.md",
            "Healthcare IDENTITY.md",
            "Healthcare MEMORY.md",
            "Safety Rules (HIPAA)",
            "CCM/RPM Launch Checklist",
            "Revenue Optimization Audit",
            "Compliance Checklist",
            "Sales Deck Outline",
            "30-Day Content Calendar",
            "90-Day Implementation Plan",
            "Denial Analysis Template",
            "Prior Auth Workflow Plan",
          ].map((item, i) => (
            <div key={i} className="bg-white/5 border border-white/5 rounded-lg px-4 py-3 text-sm text-gray-400 flex items-center gap-2">
              <span className="text-teal-400">+</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Credibility */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
          <h2 className="text-2xl font-bold mb-6">Built on Real Healthcare Experience</h2>
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div>
              <div className="text-3xl font-black text-teal-400">MHA</div>
              <div className="text-gray-500 text-xs mt-1">Healthcare Administration</div>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-400">15+</div>
              <div className="text-gray-500 text-xs mt-1">Years in Healthcare</div>
            </div>
            <div>
              <div className="text-3xl font-black text-teal-400">100+</div>
              <div className="text-gray-500 text-xs mt-1">Practices Advised</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-6 max-w-xl mx-auto">
            Jeff Oldroyd brings a Master's in Healthcare Administration, experience running nursing homes, and years of CCM/RPM implementation. The AI brings 24/7 execution. Together, this playbook is the real thing.
          </p>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="max-w-lg mx-auto px-6 pb-24">
        <div className="bg-white/5 border border-teal-500/20 rounded-2xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-2">Get the Healthcare Playbook</h2>
          <p className="text-gray-500 mb-6">85 pages. PDF. Instant download.</p>
          <div className="text-5xl font-black text-teal-400 mb-6">$49</div>
          <button
            onClick={() => window.location.href = checkoutUrl}
            
            className="block w-full bg-teal-500 text-white font-bold py-4 rounded-xl text-lg hover:bg-teal-600 transition-all hover:scale-[1.02] shadow-lg shadow-teal-500/20 disabled:opacity-50"
          >
            Buy Now
          </button>
          <p className="text-gray-600 text-sm mt-4">One-time purchase. No subscription. Instant access.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-6 text-gray-500 text-xs">
            <span>15 chapters</span>
            <span>|</span>
            <span>12 templates</span>
            <span>|</span>
            <span>90-day plan</span>
            <span>|</span>
            <span>Real CPT codes</span>
          </div>
        </div>
      </section>

      {/* General version */}
      <section className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-3">Not in Healthcare?</p>
          <h3 className="text-xl font-bold mb-2">General Edition — $29</h3>
          <p className="text-gray-400 mb-4">
            The same AI employee playbook without the healthcare-specific chapters. Identity, memory, tools, sub-agents, safety rails, coding agents -- everything you need for any industry.
          </p>
          <a href="https://artemis-playbook.vercel.app" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
            View General Edition →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <img src="/augeo-health-logo.jpg" alt="Augeo Health" className="h-6 w-6 rounded-full" />
          <span className="text-gray-500 text-sm font-semibold">Healthcare Industry Partners</span>
        </div>
        <p className="text-gray-700 text-xs">&copy; {new Date().getFullYear()} Healthcare Industry Partners. All rights reserved.</p>
      </footer>
    </div>
  );
}
