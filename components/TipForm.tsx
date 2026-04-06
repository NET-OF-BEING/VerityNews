"use client";

import { useState } from "react";

const categories = [
  "Corporate Misconduct",
  "Child Safety",
  "Privacy Violations",
  "Financial Fraud",
  "Government Corruption",
  "Environmental",
  "Other",
];

export default function TipForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (submitted) {
    return (
      <div className="card-futuristic border-cyan/20 p-8 text-center">
        <div className="mb-3 font-heading text-xl font-bold text-light">
          Tip Received
        </div>
        <p className="text-sm text-muted">
          Thank you for your submission. If you provided contact information, we
          may reach out for further details. Your identity will remain
          confidential.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch("https://formspree.io/f/mvzbwedo", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          _subject: `VerityNews Tip: ${data.subject || "No subject"}`,
        }),
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

  const inputClass =
    "w-full border border-border bg-surface px-4 py-3 text-sm text-light placeholder-dim outline-none transition-all focus:border-cyan focus:shadow-[0_0_15px_rgba(0,240,255,0.1)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-2 block font-mono text-[9px] uppercase tracking-[3px] text-cyan/50">
          // Category
        </label>
        <select name="category" required className={inputClass}>
          <option value="">Select a category...</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="mb-2 block font-mono text-[9px] uppercase tracking-[3px] text-cyan/50">
          // Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          placeholder="Brief description of the issue"
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-2 block font-mono text-[9px] uppercase tracking-[3px] text-cyan/50">
          // Details
        </label>
        <textarea
          name="details"
          required
          rows={8}
          placeholder="Provide as much detail as possible: names, dates, locations, companies involved, supporting evidence or documents..."
          className={`${inputClass} resize-y`}
        />
      </div>

      <div>
        <label className="mb-2 block font-mono text-[9px] uppercase tracking-[3px] text-cyan/50">
          // Supporting Links <span className="normal-case tracking-normal text-dim/60">(optional)</span>
        </label>
        <input
          type="text"
          name="links"
          placeholder="URLs to documents, news articles, court records..."
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-2 block font-mono text-[9px] uppercase tracking-[3px] text-cyan/50">
          // Contact Email <span className="normal-case tracking-normal text-dim/60">(optional — for follow-up only)</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="secure-email@protonmail.com"
          className={inputClass}
        />
      </div>

      {error && <p className="text-sm text-red">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full border border-cyan px-6 py-4 font-mono text-[11px] uppercase tracking-[3px] text-cyan transition-all hover:bg-cyan hover:text-dark hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] disabled:opacity-50"
      >
        {loading ? "Transmitting..." : "Submit Tip Securely"}
      </button>
    </form>
  );
}
