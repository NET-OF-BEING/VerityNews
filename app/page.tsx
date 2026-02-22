import Link from "next/link";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import { getAllPosts, getAllCategories } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);
  const categories = getAllCategories();

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

      {/* Topics strip */}
      {categories.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="mb-6 flex items-center gap-4">
            <h2 className="font-mono text-[10px] uppercase tracking-[3px] text-dim">
              Browse by Topic
            </h2>
            <div className="h-[1px] flex-1 bg-border" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/topics#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="border border-border bg-navy px-4 py-2 font-mono text-[11px] uppercase tracking-[2px] text-muted transition-colors hover:border-blue/30 hover:text-blue"
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Tip Line CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="flex flex-col items-center gap-4 border-t border-border pt-12 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[3px] text-dim">
            Got a tip?
          </p>
          <h2 className="font-serif text-2xl font-bold text-light">
            Know something the public should see?
          </h2>
          <p className="max-w-md text-sm text-muted">
            Our best investigations start with anonymous tips. Submit securely.
          </p>
          <Link
            href="/tips"
            className="mt-2 border border-blue bg-blue/10 px-6 py-3 font-mono text-[11px] uppercase tracking-[2px] text-blue transition-colors hover:bg-blue hover:text-white"
          >
            Submit a Tip
          </Link>
        </div>
      </section>
    </>
  );
}
