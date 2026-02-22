"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (submitted) {
    return (
      <div className="border border-blue/30 bg-blue-dim p-8 text-center">
        <div className="mb-2 font-serif text-lg font-bold text-light">
          You&apos;re on the list.
        </div>
        <p className="text-sm text-muted">
          We&apos;ll send you new investigations as they drop. No spam, ever.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://formspree.io/f/mykdnrbl", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, _subject: "VerityNews — New Subscriber" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <div className="flex flex-1 flex-col gap-1">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="your@email.com"
          className="flex-1 border border-border bg-navy px-4 py-3 font-body text-sm text-light placeholder-dim outline-none transition-colors focus:border-blue"
        />
        {error && <p className="text-xs text-red-400">{error}</p>}
      </div>
      <button
        type="submit"
        disabled={loading}
        className="shrink-0 border border-blue bg-blue/10 px-6 py-3 font-mono text-[11px] uppercase tracking-[2px] text-blue transition-colors hover:bg-blue hover:text-white disabled:opacity-50"
      >
        {loading ? "Sending..." : "Subscribe"}
      </button>
    </form>
  );
}
