import Link from "next/link";
import Image from "next/image";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  featured?: boolean;
  image?: string;
}

export default function ArticleCard({
  slug,
  title,
  excerpt,
  date,
  readingTime,
  category,
  featured = false,
  image,
}: ArticleCardProps) {
  if (featured) {
    return (
      <Link href={`/posts/${slug}`} className="group block">
        <article className="card-futuristic corner-brackets overflow-hidden">
          {/* Image */}
          {image && (
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                priority
              />
              {/* Scanline overlay on image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.03) 2px, rgba(0,240,255,0.03) 4px)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
              {/* Category badge on image */}
              <div className="absolute top-4 left-4 tag-cyber">
                {category}
              </div>
            </div>
          )}

          <div className="p-8 md:p-10">
            {!image && (
              <div className="mb-4 tag-cyber inline-block">
                {category}
              </div>
            )}

            <h2 className="mb-4 font-heading text-[clamp(1.5rem,3.5vw,2.4rem)] font-bold leading-[1.15] text-light transition-colors group-hover:text-cyan">
              {title}
            </h2>

            <p className="mb-6 max-w-2xl text-sm leading-relaxed text-muted">
              {excerpt}
            </p>

            <div className="flex items-center gap-4">
              <time className="font-mono text-[10px] tracking-wider text-dim">{date}</time>
              <span className="h-3 w-[1px] bg-border-bright" />
              <span className="font-mono text-[10px] tracking-wider text-dim">{readingTime}</span>
              <span className="ml-auto font-mono text-[10px] uppercase tracking-[2px] text-cyan opacity-0 transition-opacity group-hover:opacity-100">
                Read Report &rarr;
              </span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/posts/${slug}`} className="group block">
      <article className="card-futuristic corner-brackets h-full flex flex-col overflow-hidden">
        {/* Image */}
        {image && (
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.03) 2px, rgba(0,240,255,0.03) 4px)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
          </div>
        )}

        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 tag-cyber inline-block self-start">
            {category}
          </div>

          <h3 className="mb-3 font-heading text-lg font-bold leading-snug text-light transition-colors group-hover:text-cyan">
            {title}
          </h3>

          <p className="mb-4 flex-1 text-sm leading-relaxed text-muted line-clamp-3">
            {excerpt}
          </p>

          <div className="flex items-center gap-3 border-t border-border pt-3">
            <time className="font-mono text-[10px] tracking-wider text-dim">{date}</time>
            <span className="h-3 w-[1px] bg-border-bright" />
            <span className="font-mono text-[10px] tracking-wider text-dim">{readingTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
