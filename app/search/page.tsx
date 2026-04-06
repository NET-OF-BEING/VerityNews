import type { Metadata } from "next";
import SearchClient from "@/components/SearchClient";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Search",
  description: "Search VerityNews investigations.",
};

export default function SearchPage() {
  const posts = getAllPosts();

  return (
    <div className="hex-bg mx-auto max-w-3xl px-6 py-20">
      <div className="mb-4 tag-cyber inline-block">Search</div>
      <h1 className="mb-8 font-heading text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] text-light">
        Search Investigations
      </h1>
      <SearchClient posts={posts} />
    </div>
  );
}
