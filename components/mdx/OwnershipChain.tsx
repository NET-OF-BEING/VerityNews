interface ChainNode {
  country: string;
  name: string;
  detail: string;
  highlight?: boolean;
  top?: boolean;
}

interface OwnershipChainProps {
  nodes: ChainNode[];
  acquisitionLabel?: string;
  acquisitionIndex?: number;
}

export default function OwnershipChain({
  nodes,
  acquisitionLabel,
  acquisitionIndex,
}: OwnershipChainProps) {
  return (
    <div className="my-12 mx-auto max-w-lg">
      <div className="flex flex-col items-center">
        {nodes.map((node, i) => (
          <div key={i} className="flex w-full flex-col items-center">
            {/* Node */}
            <div
              className={`w-full max-w-md border p-5 text-center ${
                node.top
                  ? "border-red/30 bg-gradient-to-br from-navy to-[#1a1122]"
                  : node.highlight
                  ? "border-red/40 bg-gradient-to-br from-[#1a1122] to-navy"
                  : "border-border bg-navy"
              }`}
            >
              <div className="font-mono text-[9px] uppercase tracking-[3px] text-dim">
                {node.country}
              </div>
              <div
                className={`font-serif text-base font-bold ${
                  node.highlight ? "text-red" : "text-light"
                }`}
              >
                {node.name}
              </div>
              <div className="mt-0.5 text-[0.8rem] text-dim">{node.detail}</div>
            </div>

            {/* Arrow */}
            {i < nodes.length - 1 && (
              <div className="flex flex-col items-center py-1">
                <div className="h-3 w-[1px] bg-border" />
                {acquisitionLabel && acquisitionIndex === i && (
                  <div className="my-0.5 font-mono text-[9px] text-dim">
                    {acquisitionLabel}
                  </div>
                )}
                <svg
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  className="fill-border"
                >
                  <polygon points="6,8 0,0 12,0" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
