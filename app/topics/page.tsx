import type { Metadata } from "next";
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

  const grouped = categories.map((cat) => ({
    name: cat,
    posts: posts.filter((p) => p.category === cat),
  }));

  return (
    <div className="hex-bg mx-auto max-w-7xl px-6 py-20">
      <div className="mb-4 tag-cyber inline-block">Topics</div>
      <h1 className="mb-6 font-heading text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] text-light">
        Browse by Topic
      </h1>
      <p className="mb-12 max-w-xl text-base leading-relaxed text-muted">
        All investigations, organised by subject area. Every article is
        AI-assisted, human-verified, and built on public records.
      </p>

      {tags.length > 0 && (
        <div className="mb-16">
          <div className="section-label">
            <h2 className="font-mono text-[9px] uppercase tracking-[4px] text-cyan/60">
              <span className="text-cyan/30">// </span>Tags
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="tag-cyber">
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {grouped.map((group) => (
        <section key={group.name} className="mb-16">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="font-heading text-xl font-bold text-light">
              {group.name}
            </h2>
            <span className="font-mono text-[10px] tracking-wider text-cyan/50">
              [{group.posts.length}]
            </span>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-border-bright to-transparent" />
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {group.posts.map((post) => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>
        </section>
      ))}

      {posts.length === 0 && (
        <div className="card-futuristic p-12 text-center">
          <p className="font-mono text-sm text-dim">
            <span className="text-cyan/40">&gt; </span>
            No articles yet. Investigations incoming.
          </p>
        </div>
      )}
    </div>
  );
}
