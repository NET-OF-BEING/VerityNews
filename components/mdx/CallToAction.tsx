interface CTAItem {
  text: string;
}

interface CallToActionProps {
  title: string;
  items: CTAItem[];
}

export default function CallToAction({ title, items }: CallToActionProps) {
  return (
    <div className="relative my-12 overflow-hidden border border-border bg-navy p-8 md:p-10">
      <div className="absolute top-0 right-0 left-0 h-[3px] bg-gradient-to-r from-red via-amber to-red" />
      <h3 className="mb-8 font-serif text-2xl font-black text-light">
        {title}
      </h3>
      <div className="flex flex-col gap-0">
        {items.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-[40px_1fr] gap-4 py-5 ${
              i < items.length - 1 ? "border-b border-border/30" : ""
            }`}
          >
            <div className="font-mono text-lg font-bold text-red">
              {String(i + 1).padStart(2, "0")}
            </div>
            <p
              className="text-base leading-relaxed text-light/90"
              dangerouslySetInnerHTML={{ __html: item.text }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
