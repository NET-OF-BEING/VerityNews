import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        {/* Section label */}
        <div className="mb-8 flex items-center gap-4">
          <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-dim">
            Latest Investigations
          </h2>
          <div className="h-[1px] flex-1 bg-border" />
        </div>

        {/* Featured article */}
        {featured && (
          <div className="mb-6">
            <ArticleCard {...featured} featured />
          </div>
        )}

        {/* Article grid */}
        {rest.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <ArticleCard key={post.slug} {...post} />
            ))}
          </div>
        )}

        {posts.length === 0 && (
          <div className="border border-border bg-navy p-12 text-center">
            <p className="font-mono text-sm text-dim">
              Investigations incoming. Watch this space.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
