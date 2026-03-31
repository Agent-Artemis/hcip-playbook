"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-6">
      <div className="max-w-lg w-full text-center">
        <div className="flex items-center justify-center mb-6">
          <img src="/hcip-icon.jpg" alt="HCIP" className="h-16 w-16 rounded-full" />
        </div>
        <h1 className="text-4xl font-black mb-4">
          You're in.
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Thanks for purchasing <strong className="text-white">How to Put an AI Agent to Work in Healthcare</strong>. Your playbook is ready to download.
        </p>

        <a
          href="/How-to-Put-an-AI-Agent-to-Work-in-Healthcare.pdf"
          download
          className="inline-block bg-teal-500 text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-teal-600 transition-all hover:scale-105 shadow-lg shadow-teal-500/20 mb-6"
        >
          Download Your Playbook (PDF)
        </a>

        <p className="text-gray-600 text-sm mb-8">
          85 pages. 15 chapters. 12 templates. 90-day plan included.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left">
          <h3 className="font-bold text-white mb-3">Your 90-day path to revenue:</h3>
          <ol className="space-y-2 text-gray-400 text-sm">
            <li className="flex gap-2">
              <span className="text-teal-400 font-bold">Week 1:</span>
              Platform setup + healthcare identity files (Chapter 13, Phase 1)
            </li>
            <li className="flex gap-2">
              <span className="text-teal-400 font-bold">Week 2:</span>
              Deploy CCM/RPM calculator + denial analysis workflow
            </li>
            <li className="flex gap-2">
              <span className="text-teal-400 font-bold">Month 1:</span>
              Launch sub-agents + begin outreach to billing companies
            </li>
            <li className="flex gap-2">
              <span className="text-teal-400 font-bold">Month 3:</span>
              First paying client + demonstrated ROI
            </li>
          </ol>
        </div>

        <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">Need a strategy call?</p>
          <p className="text-gray-400 text-sm mb-3">
            Book 30 minutes with Jeff Oldroyd, MHA to discuss your CCM/RPM implementation.
          </p>
          <a href="https://cal.com/agentartemis/30-minutes-with-jeff-oldroyd" className="text-teal-400 font-semibold hover:text-teal-300 transition-colors">
            Book a Strategy Call →
          </a>
        </div>

        <a href="/" className="inline-block mt-8 text-gray-600 text-sm hover:text-gray-400 transition-colors">
          ← Back to site
        </a>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0a0a]" />}>
      <SuccessContent />
    </Suspense>
  );
}
