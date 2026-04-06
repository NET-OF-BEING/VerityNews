export default function Hero() {
  return (
    <section className="hero-futuristic">
      {/* Grid lines background */}
      <div className="hero-grid" />

      {/* Large background text */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-heading text-[clamp(120px,22vw,320px)] font-black tracking-tight"
        style={{ color: "rgba(0, 240, 255, 0.02)" }}
      >
        VERITY
      </div>

      <div className="relative z-[3] mx-auto max-w-5xl px-6 py-24">
        <div className="max-w-3xl">
          {/* Status indicator */}
          <div className="mb-8 flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[4px] text-cyan">
              Live Investigation Feed
            </span>
          </div>

          {/* Title */}
          <h1 className="glitch-text mb-6 font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-light">
            AI-Powered Truth
            <br />
            <span className="bg-gradient-to-r from-cyan via-cyan to-magenta bg-clip-text text-transparent">
              in a Post-Truth World
            </span>
          </h1>

          {/* Subtitle with left border */}
          <p className="mb-10 max-w-xl border-l border-cyan/40 pl-5 text-base leading-relaxed text-muted">
            We follow the money, expose the systems, and hold power accountable.
            Every investigation is AI-assisted, human-verified, and built on
            public records.
          </p>

          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              { value: "100%", label: "Sourced" },
              { value: "AI+Human", label: "Verified" },
              { value: "Public", label: "Records" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="border border-border px-4 py-3 text-center"
              >
                <div className="font-mono text-sm font-bold text-cyan">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-[9px] uppercase tracking-[2px] text-dim">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
