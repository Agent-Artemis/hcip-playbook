"use client";

import { useState } from "react";

export default function CapturePage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [newsletter, setNewsletter] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const checkoutUrl = "https://buy.stripe.com/7sY00kcqn8QR3Kc14K6kg01";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Subscribe to Beehiiv newsletter if opted in
    if (newsletter && email) {
      try {
        await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, name, source: "playbook-healthcare-capture" }),
        });
      } catch {
        // Don't block checkout if newsletter fails
      }
    }

    // Redirect to Stripe checkout with prefilled email
    const url = new URL(checkoutUrl);
    url.searchParams.set("prefilled_email", email);
    window.location.href = url.toString();
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col">
      {/* Nav */}
      <nav className="max-w-5xl mx-auto w-full px-6 py-6 flex justify-between items-center">
        <a href="/" className="flex items-center gap-3">
          <img src="/augeo-health-logo.jpg" alt="Augeo Health" className="h-8 w-8 rounded-full" />
          <span className="font-bold text-lg tracking-tight text-gray-300">AUGEO HEALTH</span>
        </a>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="flex gap-1.5">
            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-xs font-bold text-black">1</div>
            <div className="w-8 h-px bg-gray-700 self-center" />
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">2</div>
            <div className="w-8 h-px bg-gray-700 self-center" />
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-gray-600">3</div>
          </div>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black mb-3">Almost there.</h1>
            <p className="text-gray-400">
              Enter your info below and we&rsquo;ll take you to checkout. You&rsquo;ll get instant access to the healthcare playbook after purchase.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Email</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-teal-400 transition-colors"
              />
            </div>

            {/* Newsletter opt-in */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="mt-1 w-4 h-4 rounded border-gray-600 bg-white/10 text-teal-500 focus:ring-teal-400 focus:ring-offset-0"
                />
                <div>
                  <p className="text-white text-sm font-medium">Send me weekly healthcare AI insights</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    CCM/RPM updates, billing automation tips, and healthcare AI strategies. Cancel anytime with one click.
                  </p>
                </div>
              </label>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-teal-500 text-white font-bold py-4 rounded-xl text-lg hover:bg-teal-600 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            >
              {submitting ? "Redirecting to checkout..." : "Continue to Checkout — $49"}
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-gray-600 text-xs">One-time purchase. No recurring charges.</p>
            <p className="text-gray-700 text-xs">Your email is used for purchase delivery and newsletter (if opted in). We never share or sell your data.</p>
          </div>

          {/* What you get recap */}
          <div className="mt-10 bg-white/5 border border-white/10 rounded-xl p-5">
            <p className="text-sm font-semibold text-gray-300 mb-3">What you&rsquo;re getting:</p>
            <ul className="space-y-2">
              {[
                "128-page healthcare-specific PDF playbook",
                "16 chapters covering CCM/RPM, billing AI, HIPAA",
                "Revenue modeling templates",
                "90-day implementation plan",
                "Voice AI platform framework",
                "Instant download after purchase",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="text-teal-400">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
