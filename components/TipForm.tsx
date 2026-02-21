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

  if (submitted) {
    return (
      <div className="border border-blue/30 bg-blue-dim p-8 text-center">
        <div className="mb-3 font-serif text-xl font-bold text-light">
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-6"
    >
      {/* Category */}
      <div>
        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[3px] text-dim">
          Category
        </label>
        <select
          name="category"
          required
          className="w-full border border-border bg-navy px-4 py-3 font-body text-sm text-light outline-none transition-colors focus:border-blue"
        >
          <option value="">Select a category...</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Subject */}
      <div>
        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[3px] text-dim">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          required
          placeholder="Brief description of the issue"
          className="w-full border border-border bg-navy px-4 py-3 font-body text-sm text-light placeholder-dim outline-none transition-colors focus:border-blue"
        />
      </div>

      {/* Details */}
      <div>
        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[3px] text-dim">
          Details
        </label>
        <textarea
          name="details"
          required
          rows={8}
          placeholder="Provide as much detail as possible: names, dates, locations, companies involved, supporting evidence or documents..."
          className="w-full resize-y border border-border bg-navy px-4 py-3 font-body text-sm text-light placeholder-dim outline-none transition-colors focus:border-blue"
        />
      </div>

      {/* Supporting links */}
      <div>
        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[3px] text-dim">
          Supporting Links{" "}
          <span className="normal-case tracking-normal text-dim/60">
            (optional)
          </span>
        </label>
        <input
          type="text"
          name="links"
          placeholder="URLs to documents, news articles, court records..."
          className="w-full border border-border bg-navy px-4 py-3 font-body text-sm text-light placeholder-dim outline-none transition-colors focus:border-blue"
        />
      </div>

      {/* Contact (optional) */}
      <div>
        <label className="mb-2 block font-mono text-[10px] uppercase tracking-[3px] text-dim">
          Contact Email{" "}
          <span className="normal-case tracking-normal text-dim/60">
            (optional — for follow-up only)
          </span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="secure-email@protonmail.com"
          className="w-full border border-border bg-navy px-4 py-3 font-body text-sm text-light placeholder-dim outline-none transition-colors focus:border-blue"
        />
      </div>

      <button
        type="submit"
        className="w-full border border-blue bg-blue/10 px-6 py-4 font-mono text-[12px] uppercase tracking-[2px] text-blue transition-colors hover:bg-blue hover:text-white"
      >
        Submit Tip Securely
      </button>
    </form>
  );
}
