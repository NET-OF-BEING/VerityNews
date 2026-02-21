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
          className="absolute left-4 top-1/2 -translate-y-1/2 text-dim"
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
          className="w-full border border-border bg-navy py-4 pl-12 pr-4 font-body text-base text-light placeholder-dim outline-none transition-colors focus:border-blue"
        />
      </div>

      {/* Results */}
      {q && (
        <div className="mb-4 font-mono text-[11px] text-dim">
          {results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;
          {query}&rdquo;
        </div>
      )}

      <div className="space-y-4">
        {results.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group block border border-border bg-navy p-6 transition-colors hover:border-blue/30"
          >
            <div className="mb-2 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-blue">
                {post.category}
              </span>
              <span className="font-mono text-[11px] text-dim">
                {post.date}
              </span>
            </div>
            <h3 className="mb-2 font-serif text-lg font-bold text-light transition-colors group-hover:text-blue">
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
                    className="bg-navy-light px-2 py-0.5 font-mono text-[10px] text-dim"
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
        <div className="border border-border bg-navy p-10 text-center">
          <p className="mb-2 font-serif text-lg font-bold text-light">
            No results found
          </p>
          <p className="text-sm text-muted">
            Try different keywords or browse by{" "}
            <Link href="/topics" className="text-blue hover:underline">
              topic
            </Link>
            .
          </p>
        </div>
      )}

      {!q && (
        <div className="border border-border bg-navy p-10 text-center">
          <p className="text-sm text-muted">
            Start typing to search across all investigations.
          </p>
        </div>
      )}
    </>
  );
}
