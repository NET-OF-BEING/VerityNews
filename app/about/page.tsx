import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "VerityNews combines AI-powered research with human editorial judgement to produce investigative journalism that holds power accountable.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-blue">
        About
      </div>
      <h1 className="mb-8 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] text-light">
        Truth, Verified with Intelligence.
      </h1>

      <div className="space-y-6 text-base leading-relaxed text-light/85">
        <p>
          <strong className="text-light">VerityNews</strong> is an independent
          investigative publication that uses artificial intelligence to
          accelerate research, cross-reference public records, and surface
          patterns that traditional newsrooms miss.
        </p>

        <p>
          We believe the biggest stories of our time are hiding in plain
          sight — buried in corporate filings, court documents, ownership
          chains, and financial disclosures. AI helps us connect those dots
          faster. Human editors ensure every claim is verified, sourced, and
          fair.
        </p>

        <div className="my-10 border-l-[3px] border-blue pl-6">
          <p className="font-serif text-xl font-bold italic text-light">
            &ldquo;AI-Powered Truth in a Post-Truth World&rdquo;
          </p>
        </div>

        <h2 className="pt-4 font-serif text-2xl font-black text-light">
          Our Methodology
        </h2>

        <p>Every VerityNews investigation follows a rigorous process:</p>

        <div className="space-y-4 pl-1">
          {[
            {
              num: "01",
              title: "AI-Assisted Research",
              desc: "We use large language models to scan public databases, corporate filings, court records, and news archives at scale.",
            },
            {
              num: "02",
              title: "Source Verification",
              desc: "Every AI-surfaced claim is verified against primary sources. We link directly to court documents, corporate filings, and original reporting.",
            },
            {
              num: "03",
              title: "Follow the Money",
              desc: "We trace ownership chains, financial flows, and corporate structures to reveal who really profits — and who pays the cost.",
            },
            {
              num: "04",
              title: "Human Editorial Review",
              desc: "AI assists the research. Humans make the editorial decisions. Every article is reviewed for accuracy, fairness, and public interest.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-[40px_1fr] gap-4 border-b border-border/30 py-4"
            >
              <span className="font-mono text-sm font-bold text-blue">
                {step.num}
              </span>
              <div>
                <h3 className="mb-1 font-semibold text-light">{step.title}</h3>
                <p className="text-sm text-muted">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="pt-8 font-serif text-2xl font-black text-light">
          Why This Matters
        </h2>

        <p>
          Traditional investigative journalism is expensive and slow. Many
          newsrooms have been gutted by budget cuts. Meanwhile, corporate
          structures grow more complex, ownership chains span more
          jurisdictions, and accountability gaps widen.
        </p>

        <p>
          AI doesn&apos;t replace journalists — it gives them superpowers. We
          can trace a corporate ownership chain across five countries in
          minutes, not weeks. We can cross-reference court filings with
          financial disclosures at a scale that would take a team of
          researchers months.
        </p>

        <p>
          The result is faster, deeper, more thorough investigative
          journalism — accessible to everyone, not just subscribers of
          premium publications.
        </p>

        <div className="mt-12 border border-border bg-navy p-8 text-center">
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[3px] text-dim">
            Got a tip?
          </p>
          <p className="text-sm text-muted">
            If you have information about corporate misconduct, safety
            failures, or systems that put people at risk, we want to hear from
            you.
          </p>
        </div>
      </div>
    </div>
  );
}
