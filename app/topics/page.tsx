import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getAllPosts, getAllCategories, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Topics",
  description: "Browse VerityNews investigations by topic and category.",
};

export default function TopicsPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  // Group posts by category
  const grouped = categories.map((cat) => ({
    name: cat,
    posts: posts.filter((p) => p.category === cat),
  }));

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-blue">
        Topics
      </div>
      <h1 className="mb-6 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] text-light">
        Browse by Topic
      </h1>
      <p className="mb-12 max-w-xl text-base leading-relaxed text-muted">
        All investigations, organised by subject area. Every article is
        AI-assisted, human-verified, and built on public records.
      </p>

      {/* Tags cloud */}
      {tags.length > 0 && (
        <div className="mb-16">
          <h2 className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-dim">
            Tags
          </h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-border bg-navy px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-blue/30 hover:text-blue"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Categories with articles */}
      {grouped.map((group) => (
        <section key={group.name} className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="font-serif text-xl font-bold text-light">
              {group.name}
            </h2>
            <span className="font-mono text-[11px] text-dim">
              {group.posts.length} article{group.posts.length !== 1 ? "s" : ""}
            </span>
            <div className="h-[1px] flex-1 bg-border" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.posts.map((post) => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      ))}

      {posts.length === 0 && (
        <div className="border border-border bg-navy p-12 text-center">
          <p className="font-mono text-sm text-dim">
            No articles yet. Investigations incoming.
          </p>
        </div>
      )}
    </div>
  );
}
