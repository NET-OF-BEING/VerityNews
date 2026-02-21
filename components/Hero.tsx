export default function Hero() {
  return (
    <section className="relative flex min-h-[70vh] flex-col justify-center overflow-hidden px-6 py-24">
      {/* Background text */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-serif text-[clamp(100px,18vw,280px)] font-black tracking-tight"
        style={{ color: "rgba(78,163,255,0.03)" }}
      >
        VERITY
      </div>

      {/* Scan lines */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(78,163,255,0.02) 2px, rgba(78,163,255,0.02) 4px)",
        }}
      />

      <div className="relative z-[2] mx-auto max-w-4xl">
        <div className="mb-8 inline-block border border-blue px-4 py-1.5 font-mono text-[11px] uppercase tracking-[3px] text-blue">
          Investigative Journalism
        </div>
        <h1 className="mb-8 font-serif text-[clamp(2.2rem,5vw,4rem)] font-black leading-[1.1] tracking-tight text-light">
          AI-Powered Truth in a{" "}
          <span className="text-blue">Post-Truth World</span>
        </h1>
        <p className="max-w-xl border-l-[3px] border-blue pl-5 text-lg leading-relaxed text-muted">
          We follow the money, expose the systems, and hold power accountable.
          Every investigation is AI-assisted, human-verified, and built on
          public records.
        </p>
      </div>
    </section>
  );
}
