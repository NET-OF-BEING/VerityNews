import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Board",
  description:
    "Meet the team behind VerityNews — AI-assisted investigative journalism.",
};

const team = [
  {
    name: "VerityNews AI",
    role: "Research Engine",
    bio: "Large language models trained on public records, court documents, and corporate filings. Performs bulk research, cross-referencing, and pattern detection at scale.",
    type: "ai" as const,
  },
  {
    name: "Investigation Team",
    role: "Human Editorial",
    bio: "Every AI-surfaced claim is verified against primary sources by human editors. We make the editorial decisions on what to publish, how to frame it, and what the public interest justifies.",
    type: "human" as const,
  },
  {
    name: "Community",
    role: "Tips & Sources",
    bio: "Many of our best leads come from anonymous tipsters and community members who see something wrong and want to help expose it. Your tips drive our investigations.",
    type: "community" as const,
  },
];

const values = [
  {
    title: "Accuracy Over Speed",
    desc: "We'd rather be right than first. Every fact is verified against primary sources before publication.",
  },
  {
    title: "Follow the Money",
    desc: "Ownership chains, financial flows, and corporate structures reveal who really profits — and who pays the cost.",
  },
  {
    title: "Transparency",
    desc: "We show our sources. Every article links to the court documents, corporate filings, and original reporting we built it on.",
  },
  {
    title: "Public Interest",
    desc: "We publish because the public has a right to know — not for clicks, outrage, or engagement metrics.",
  },
];

export default function TeamPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-blue">
        Editorial Board
      </div>
      <h1 className="mb-6 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] text-light">
        Who We Are
      </h1>
      <p className="mb-16 max-w-xl text-base leading-relaxed text-muted">
        VerityNews combines AI-powered research with human editorial judgement.
        Here&apos;s how our newsroom works.
      </p>

      {/* Team cards */}
      <div className="mb-20 grid gap-6 md:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="border border-border bg-navy p-6 transition-colors hover:border-blue/20"
          >
            {/* Icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center border border-border">
              {member.type === "ai" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ea3ff"
                  strokeWidth="1.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              )}
              {member.type === "human" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ea3ff"
                  strokeWidth="1.5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              )}
              {member.type === "community" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4ea3ff"
                  strokeWidth="1.5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              )}
            </div>
            <h3 className="mb-1 font-serif text-lg font-bold text-light">
              {member.name}
            </h3>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[2px] text-blue">
              {member.role}
            </div>
            <p className="text-sm leading-relaxed text-muted">{member.bio}</p>
          </div>
        ))}
      </div>

      {/* Editorial values */}
      <div className="mb-8 flex items-center gap-4">
        <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-dim">
          Editorial Values
        </h2>
        <div className="h-[1px] flex-1 bg-border" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {values.map((v, i) => (
          <div key={i} className="border-l-[3px] border-blue pl-5 py-2">
            <h3 className="mb-2 font-serif text-base font-bold text-light">
              {v.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
