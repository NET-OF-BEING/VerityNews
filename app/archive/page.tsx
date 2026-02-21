import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Archive",
  description: "Complete chronological archive of VerityNews investigations.",
};

export default function ArchivePage() {
  const posts = getAllPosts();

  // Group by month/year
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
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-blue">
        Archive
      </div>
      <h1 className="mb-6 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] text-light">
        All Investigations
      </h1>
      <p className="mb-12 text-base leading-relaxed text-muted">
        Complete chronological archive.{" "}
        <span className="font-mono text-[11px] text-dim">
          {posts.length} article{posts.length !== 1 ? "s" : ""}
        </span>
      </p>

      {months.map((month) => (
        <section key={month} className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <h2 className="font-mono text-[11px] uppercase tracking-[3px] text-dim">
              {month}
            </h2>
            <div className="h-[1px] flex-1 bg-border" />
          </div>

          <div className="space-y-3">
            {grouped[month].map((post) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group flex items-start gap-4 border-b border-border/30 pb-3 transition-colors"
              >
                <time className="mt-1 shrink-0 font-mono text-[11px] text-dim">
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    day: "2-digit",
                    month: "short",
                  })}
                </time>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 font-serif text-base font-bold leading-snug text-light transition-colors group-hover:text-blue">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-[2px] text-blue">
                      {post.category}
                    </span>
                    <span className="font-mono text-[10px] text-dim">
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
        <div className="border border-border bg-navy p-12 text-center">
          <p className="font-mono text-sm text-dim">
            No articles yet. Watch this space.
          </p>
        </div>
      )}
    </div>
  );
}
