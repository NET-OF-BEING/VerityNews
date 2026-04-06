"use client";

import Image from "next/image";
import type { PostMeta } from "@/lib/posts";

interface ArticleLayoutProps {
  meta: PostMeta;
  children: React.ReactNode;
}

export default function ArticleLayout({ meta, children }: ArticleLayoutProps) {
  const shareArticle = () => {
    const text = `${meta.title} — VerityNews`;
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({ title: meta.title, text, url: window.location.href }).catch(() => {});
    } else if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(`${text}\n${window.location.href}`);
    }
  };

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      {/* Hero image */}
      {meta.image && (
        <div className="relative -mx-6 mb-10 aspect-[21/9] overflow-hidden md:-mx-16 lg:-mx-32">
          <Image
            src={meta.image}
            alt={meta.title}
            fill
            className="object-cover"
            priority
          />
          {/* Scanline overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-[1]"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,240,255,0.025) 2px, rgba(0,240,255,0.025) 4px)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent z-[2]" />
        </div>
      )}

      {/* Header */}
      <header className="mb-12">
        <div className="mb-4 tag-cyber inline-block">
          {meta.category}
        </div>

        <h1 className="mb-6 font-heading text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] tracking-tight text-light">
          {meta.title}
        </h1>

        {meta.excerpt && (
          <p className="mb-8 border-l border-cyan/40 pl-5 text-base leading-relaxed text-muted">
            {meta.excerpt}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 border-t border-b border-border py-4">
          <span className="font-mono text-[10px] uppercase tracking-[2px] text-cyan/60">
            {meta.author}
          </span>
          <span className="h-3 w-[1px] bg-border-bright" />
          <time className="font-mono text-[10px] tracking-wider text-dim">{meta.date}</time>
          <span className="h-3 w-[1px] bg-border-bright" />
          <span className="font-mono text-[10px] tracking-wider text-dim">
            {meta.readingTime}
          </span>
          <button
            onClick={shareArticle}
            className="ml-auto border border-cyan/30 px-4 py-1.5 font-mono text-[10px] uppercase tracking-[2px] text-cyan transition-all hover:border-cyan hover:bg-cyan/10 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          >
            Share
          </button>
        </div>
      </header>

      {/* Article body */}
      <div className="prose-verity">{children}</div>

      {/* Footer share */}
      <div className="mt-16 border-t border-border pt-8 text-center">
        <p className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-dim">
          If this matters, share it
        </p>
        <button
          onClick={shareArticle}
          className="border border-cyan px-6 py-3 font-mono text-[11px] uppercase tracking-[2px] text-cyan transition-all hover:bg-cyan hover:text-dark hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
        >
          Share This Report
        </button>
      </div>
    </article>
  );
}
