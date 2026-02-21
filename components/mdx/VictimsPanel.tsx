interface Victim {
  age: number;
  description: string;
  location: string;
}

interface VictimsPanelProps {
  label: string;
  victims: Victim[];
  response?: string;
}

export default function VictimsPanel({
  label,
  victims,
  response,
}: VictimsPanelProps) {
  return (
    <div className="relative my-12 border border-border/50 border-l-4 border-l-red bg-navy p-8">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(220,38,38,0.08), transparent 60%)",
        }}
      />
      <div className="relative">
        <div className="mb-5 font-mono text-[10px] uppercase tracking-[3px] text-red">
          {label}
        </div>

        {victims.map((v, i) => (
          <div
            key={i}
            className={`grid grid-cols-[auto_1fr] gap-4 py-4 ${
              i < victims.length - 1 ? "border-b border-border/30" : ""
            }`}
          >
            <div className="min-w-[48px] font-mono text-3xl font-bold leading-none text-red">
              {v.age}
            </div>
            <div>
              <p className="text-[0.95rem] leading-relaxed text-muted">
                {v.description}
              </p>
              <p className="mt-1 font-mono text-[11px] tracking-[1px] text-dim">
                {v.location}
              </p>
            </div>
          </div>
        ))}

        {response && (
          <div className="mt-5 border-t border-border/30 pt-5 text-[0.9rem] italic text-muted">
            {response}
          </div>
        )}
      </div>
    </div>
  );
}
