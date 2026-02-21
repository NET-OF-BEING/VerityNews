"use client";

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
      {/* Header */}
      <header className="mb-12">
        <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-blue">
          {meta.category}
        </div>
        <h1 className="mb-6 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] tracking-tight text-light">
          {meta.title}
        </h1>
        {meta.excerpt && (
          <p className="mb-8 border-l-[3px] border-blue pl-5 text-lg leading-relaxed text-muted">
            {meta.excerpt}
          </p>
        )}
        <div className="flex flex-wrap items-center gap-4 border-t border-b border-border py-4">
          <time className="font-mono text-[11px] text-dim">{meta.date}</time>
          <span className="text-border">|</span>
          <span className="font-mono text-[11px] text-dim">
            {meta.readingTime}
          </span>
          <button
            onClick={shareArticle}
            className="ml-auto border border-blue/40 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[2px] text-blue transition-colors hover:border-blue hover:bg-blue/10"
          >
            Share
          </button>
        </div>
      </header>

      {/* Article body */}
      <div className="prose-verity">{children}</div>

      {/* Footer share */}
      <div className="mt-16 border-t border-border pt-8 text-center">
        <p className="mb-4 font-mono text-[11px] uppercase tracking-[2px] text-dim">
          If this matters, share it
        </p>
        <button
          onClick={shareArticle}
          className="border border-blue px-6 py-3 font-mono text-[12px] uppercase tracking-[2px] text-blue transition-colors hover:bg-blue hover:text-white"
        >
          Share This Article
        </button>
      </div>
    </article>
  );
}
