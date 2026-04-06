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

      <section className="hex-bg mx-auto max-w-7xl px-6 pb-24">
        {/* Section label */}
        <div className="section-label">
          <h2 className="font-mono text-[9px] uppercase tracking-[4px] text-cyan/60">
            <span className="text-cyan/30">// </span>Latest Investigations
          </h2>
        </div>

        {/* Featured article */}
        {featured && (
          <div className="mb-8">
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
          <div className="card-futuristic p-12 text-center">
            <p className="font-mono text-sm text-dim">
              <span className="text-cyan/40">&gt; </span>
              Investigations incoming. Watch this space.
            </p>
          </div>
        )}
      </section>

      {/* Topics strip */}
      {categories.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="section-label">
            <h2 className="font-mono text-[9px] uppercase tracking-[4px] text-cyan/60">
              <span className="text-cyan/30">// </span>Browse by Topic
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/topics#${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className="tag-cyber"
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Tip Line CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="card-futuristic flex flex-col items-center gap-5 p-12 text-center">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
            </span>
            <p className="font-mono text-[9px] uppercase tracking-[4px] text-red/80">
              Secure Channel
            </p>
          </div>
          <h2 className="font-heading text-2xl font-bold text-light">
            Know something the public should see?
          </h2>
          <p className="max-w-md text-sm text-muted">
            Our best investigations start with anonymous tips. Submit securely.
          </p>
          <Link
            href="/tips"
            className="mt-2 border border-cyan px-8 py-3 font-mono text-[11px] uppercase tracking-[3px] text-cyan transition-all hover:bg-cyan hover:text-dark hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
          >
            Submit a Tip
          </Link>
        </div>
      </section>
    </>
  );
}
