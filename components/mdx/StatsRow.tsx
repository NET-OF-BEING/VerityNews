interface Stat {
  value: string;
  label: string;
  color?: "red" | "green" | "amber" | "blue";
}

interface StatsRowProps {
  stats: Stat[];
}

const colorMap = {
  red: "text-red",
  green: "text-green",
  amber: "text-amber",
  blue: "text-blue",
};

export default function StatsRow({ stats }: StatsRowProps) {
  return (
    <div className="my-12 grid grid-cols-1 gap-[2px] border border-border bg-border md:grid-cols-3">
      {stats.map((stat, i) => (
        <div key={i} className="bg-navy-dark p-8 text-center">
          <div
            className={`font-mono text-[clamp(1.6rem,3.5vw,2.6rem)] font-bold leading-none ${
              colorMap[stat.color || "blue"]
            }`}
          >
            {stat.value}
          </div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-[2px] text-dim">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
