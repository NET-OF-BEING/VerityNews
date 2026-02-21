import Link from "next/link";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  featured?: boolean;
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  date,
  readingTime,
  category,
  featured = false,
}: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/posts/${slug}`} className="group block">
        <article className="border border-border bg-navy p-8 transition-colors hover:border-blue/30 md:p-12">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-blue">
            {category}
          </div>
          <h2 className="mb-4 font-serif text-[clamp(1.6rem,3.5vw,2.8rem)] font-black leading-[1.15] text-light transition-colors group-hover:text-blue">
            {title}
          </h2>
          <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted">
            {excerpt}
          </p>
          <div className="flex items-center gap-4 font-mono text-[11px] text-dim">
            <time>{date}</time>
            <span className="text-border">|</span>
            <span>{readingTime}</span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/posts/${slug}`} className="group block">
      <article className="border border-border bg-navy p-6 transition-colors hover:border-blue/30">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[3px] text-blue">
          {category}
        </div>
        <h3 className="mb-3 font-serif text-xl font-bold leading-snug text-light transition-colors group-hover:text-blue">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted line-clamp-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-3 font-mono text-[11px] text-dim">
          <time>{date}</time>
          <span className="text-border">|</span>
          <span>{readingTime}</span>
        </div>
      </article>
    </Link>
  );
}
