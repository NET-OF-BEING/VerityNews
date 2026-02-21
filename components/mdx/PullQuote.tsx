interface PullQuoteProps {
  children: React.ReactNode;
  attribution?: string;
}

export default function PullQuote({ children, attribution }: PullQuoteProps) {
  return (
    <div className="my-12 border-l-[3px] border-red pl-6">
      <blockquote className="font-serif text-[clamp(1.2rem,2.5vw,1.6rem)] font-bold italic leading-[1.4] text-light">
        {children}
      </blockquote>
      {attribution && (
        <p className="mt-3 font-mono text-[11px] tracking-[1px] text-dim">
          {attribution}
        </p>
      )}
    </div>
  );
}
