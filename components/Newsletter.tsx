"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setSubmitted(true);
      }}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="your@email.com"
        className="flex-1 border border-border bg-navy px-4 py-3 font-body text-sm text-light placeholder-dim outline-none transition-colors focus:border-blue"
      />
      <button
        type="submit"
        className="shrink-0 border border-blue bg-blue/10 px-6 py-3 font-mono text-[11px] uppercase tracking-[2px] text-blue transition-colors hover:bg-blue hover:text-white"
      >
        Subscribe
      </button>
    </form>
  );
}
