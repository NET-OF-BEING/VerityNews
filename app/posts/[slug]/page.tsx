import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import ArticleLayout from "@/components/ArticleLayout";
import type { Metadata } from "next";

const components = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="mt-14 mb-6 font-serif text-[clamp(1.5rem,3vw,2.2rem)] font-black leading-tight text-light"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mt-8 mb-4 font-mono text-[11px] uppercase tracking-[3px] text-red"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mb-6 leading-relaxed text-light/85" {...props} />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-light" {...props} />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="text-light/70" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mb-6 ml-1 space-y-3 list-none" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="mb-6 ml-1 space-y-3 list-none" {...props} />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li
      className="relative pl-5 text-light/85 leading-relaxed before:absolute before:left-0 before:top-[10px] before:h-1.5 before:w-1.5 before:rounded-full before:bg-red"
      {...props}
    />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-blue underline decoration-blue/30 underline-offset-2 hover:decoration-blue"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="my-10 border-l-[3px] border-red pl-6 font-serif text-[clamp(1.1rem,2.5vw,1.5rem)] font-bold italic leading-[1.4] text-light [&>p]:mb-0"
      {...props}
    />
  ),
  hr: () => (
    <div className="my-12 flex items-center gap-4">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="h-1.5 w-1.5 rotate-45 bg-red" />
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
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

  return (
    <ArticleLayout meta={post.meta}>
      <MDXRemote source={post.content} components={components} />
    </ArticleLayout>
  );
}
