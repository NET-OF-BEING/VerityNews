import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/posts";
import ArticleLayout from "@/components/ArticleLayout";
import type { Metadata } from "next";

const components = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="mt-14 mb-6 font-heading text-[clamp(1.4rem,3vw,2rem)] font-bold leading-tight text-light"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mt-8 mb-4 font-mono text-[10px] uppercase tracking-[3px] text-cyan"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-6 leading-relaxed text-light/80" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-light" {...props} />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="text-light/65" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-6 ml-1 space-y-3 list-none" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mb-6 ml-1 space-y-3 list-none" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li
      className="relative pl-5 text-light/80 leading-relaxed before:absolute before:left-0 before:top-[10px] before:h-1.5 before:w-1.5 before:bg-cyan/60"
      {...props}
    />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-cyan underline decoration-cyan/30 underline-offset-2 transition-colors hover:decoration-cyan hover:text-cyan"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="my-10 border-l border-magenta/60 pl-6 font-heading text-[clamp(1.1rem,2.5vw,1.4rem)] font-bold leading-[1.4] text-light/90 [&>p]:mb-0"
      {...props}
    />
  ),
  hr: () => (
    <div className="my-12 flex items-center gap-4">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      <div className="h-1 w-1 bg-cyan/40" />
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
    </div>
  ),
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      title: post.meta.title,
      description: post.meta.excerpt,
      type: "article",
      publishedTime: post.meta.date,
      images: post.meta.ogImage
        ? [{ url: post.meta.ogImage }]
        : post.meta.image
        ? [{ url: post.meta.image }]
        : [{ url: "/og-default.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.meta.title,
      description: post.meta.excerpt,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);

  return (
    <>
      <ArticleLayout meta={post.meta}>
        <MDXRemote source={post.content} components={components} />
      </ArticleLayout>

      {/* More Investigations */}
      {related.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 pb-20">
          <div className="section-label">
            <h2 className="font-mono text-[9px] uppercase tracking-[4px] text-cyan/60">
              <span className="text-cyan/30">// </span>Related Reports
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/posts/${r.slug}`}
                className="group card-futuristic corner-brackets overflow-hidden"
              >
                {r.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={r.image}
                      alt={r.title}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
                  </div>
                )}
                <div className="p-4">
                  <div className="mb-2 tag-cyber inline-block">
                    {r.category}
                  </div>
                  <h3 className="mb-2 font-heading text-sm font-bold leading-snug text-light transition-colors group-hover:text-cyan">
                    {r.title}
                  </h3>
                  <p className="font-mono text-[10px] tracking-wider text-dim">{r.readingTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
