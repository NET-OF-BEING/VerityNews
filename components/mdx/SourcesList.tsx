interface Source {
  name: string;
  url: string;
}

interface SourcesListProps {
  sources: Source[];
}

export default function SourcesList({ sources }: SourcesListProps) {
  return (
    <div className="mt-16 border-t border-border pt-8">
      <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-dim">
        Sources
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {sources.map((source, i) => (
          <a
            key={i}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border bg-navy px-2.5 py-1 font-mono text-[11px] text-dim transition-colors hover:text-blue"
          >
            {source.name}
          </a>
        ))}
      </div>
    </div>
  );
}
