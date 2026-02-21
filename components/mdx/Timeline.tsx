interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  tag?: { text: string; type: "money" | "danger" | "fine" };
  dotColor?: "red" | "green" | "amber";
}

interface TimelineProps {
  events: TimelineEvent[];
}

const tagStyles = {
  money:
    "bg-green/10 text-green border border-green/20",
  danger:
    "bg-red/10 text-red/80 border border-red/20",
  fine: "bg-amber/10 text-amber border border-amber/20",
};

const dotStyles = {
  red: "bg-red shadow-[0_0_12px_rgba(220,38,38,0.3)]",
  green: "bg-[#059669]",
  amber: "bg-amber",
};

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative my-12 pl-[120px] md:pl-[140px]">
      {/* Vertical line */}
      <div className="absolute left-[80px] top-0 bottom-0 w-[1px] bg-border md:left-[100px]" />

      {events.map((event, i) => (
        <div key={i} className="relative pb-10 last:pb-0">
          {/* Year */}
          <div className="absolute left-[-120px] top-0 w-[64px] text-right font-mono text-sm font-bold text-dim md:left-[-140px] md:w-[80px]">
            {event.year}
          </div>

          {/* Dot */}
          <div
            className={`absolute left-[-44px] top-[6px] h-[12px] w-[12px] rounded-full border-[2.5px] border-navy-dark md:left-[-44px] ${
              dotStyles[event.dotColor || "amber"]
            }`}
          />

          {/* Connector */}
          <div className="absolute left-[-38px] top-[11px] h-[1px] w-[34px] bg-border md:left-[-38px]" />

          {/* Content */}
          <div>
            <h4 className="mb-1 font-serif text-base font-bold text-light">
              {event.title}
            </h4>
            <p className="text-[0.85rem] leading-relaxed text-muted">
              {event.description}
            </p>
            {event.tag && (
              <span
                className={`mt-2 inline-block rounded-sm px-2.5 py-1 font-mono text-[11px] font-bold ${
                  tagStyles[event.tag.type]
                }`}
              >
                {event.tag.text}
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
