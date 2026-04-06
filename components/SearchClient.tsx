"use client";

import { useState } from "react";
import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

interface SearchClientProps {
  posts: PostMeta[];
}

export default function SearchClient({ posts }: SearchClientProps) {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase().trim();
  const results = q
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          (p.author && p.author.toLowerCase().includes(q))
      )
    : [];

  return (
    <>
      {/* Search input */}
      <div className="relative mb-10">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan/40"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, topic, tag, or keyword..."
          autoFocus
          className="w-full border border-border bg-surface py-4 pl-12 pr-4 text-base text-light placeholder-dim outline-none transition-all focus:border-cyan focus:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
        />
      </div>

      {/* Results count */}
      {q && (
        <div className="mb-4 font-mono text-[10px] tracking-wider text-dim">
          <span className="text-cyan/50">&gt; </span>
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
        </div>
      )}

      <div className="space-y-4">
        {results.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group block card-futuristic p-6"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="tag-cyber text-[8px]">
                {post.category}
              </span>
              <span className="font-mono text-[10px] tracking-wider text-dim">
                {post.date}
              </span>
            </div>
            <h3 className="mb-2 font-heading text-lg font-bold text-light transition-colors group-hover:text-cyan">
              {post.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted line-clamp-2">
              {post.excerpt}
            </p>
            {post.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-surface-light px-2 py-0.5 font-mono text-[9px] text-dim"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>

      {q && results.length === 0 && (
        <div className="card-futuristic p-10 text-center">
          <p className="mb-2 font-heading text-lg font-bold text-light">
            No results found
          </p>
          <p className="text-sm text-muted">
            Try different keywords or browse by{" "}
            <Link href="/topics" className="text-cyan hover:underline">
              topic
            </Link>
            .
          </p>
        </div>
      )}

      {!q && (
        <div className="card-futuristic p-10 text-center">
          <p className="text-sm text-muted">
            <span className="text-cyan/40 font-mono">&gt; </span>
            Start typing to search across all investigations.
          </p>
        </div>
      )}
    </>
  );
}
