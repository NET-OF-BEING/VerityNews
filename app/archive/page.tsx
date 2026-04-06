import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Archive",
  description: "Complete chronological archive of VerityNews investigations.",
};

export default function ArchivePage() {
  const posts = getAllPosts();

  const grouped: Record<string, typeof posts> = {};
  for (const post of posts) {
    const d = new Date(post.date);
    const key = d.toLocaleDateString("en-AU", {
      month: "long",
      year: "numeric",
    });
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(post);
  }

  const months = Object.keys(grouped);

  return (
    <div className="hex-bg mx-auto max-w-3xl px-6 py-20">
      <div className="mb-4 tag-cyber inline-block">Archive</div>
      <h1 className="mb-6 font-heading text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] text-light">
        All Investigations
      </h1>
      <p className="mb-12 text-base leading-relaxed text-muted">
        Complete chronological archive.{" "}
        <span className="font-mono text-[10px] text-cyan/60">
          [{posts.length} records]
        </span>
      </p>

      {months.map((month) => (
        <section key={month} className="mb-12">
          <div className="section-label">
            <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-cyan/60">
              <span className="text-cyan/30">// </span>{month}
            </h2>
          </div>

          <div className="space-y-0">
            {grouped[month].map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group flex items-start gap-4 border-b border-border/50 py-4 transition-colors hover:bg-cyan/[0.02]"
              >
                <time className="mt-1 shrink-0 font-mono text-[10px] tracking-wider text-dim">
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    day: "2-digit",
                    month: "short",
                  })}
                </time>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 font-heading text-base font-bold leading-snug text-light transition-colors group-hover:text-cyan">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="tag-cyber text-[8px]">
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px] tracking-wider text-dim">
                      {post.readingTime}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {posts.length === 0 && (
        <div className="card-futuristic p-12 text-center">
          <p className="font-mono text-sm text-dim">
            <span className="text-cyan/40">&gt; </span>
            No articles yet. Watch this space.
          </p>
        </div>
      )}
    </div>
  );
}
