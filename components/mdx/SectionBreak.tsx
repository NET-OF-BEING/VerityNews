interface SectionBreakProps {
  part: string;
  title: string;
}

export default function SectionBreak({ part, title }: SectionBreakProps) {
  return (
    <div className="my-14">
      {/* Divider */}
      <div className="mb-10 flex items-center gap-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="h-1.5 w-1.5 rotate-45 bg-red" />
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
      <div className="mb-3 font-mono text-[11px] uppercase tracking-[3px] text-red">
        {part}
      </div>
      <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.4rem)] font-black leading-[1.15] text-light">
        {title}
      </h2>
    </div>
  );
}
