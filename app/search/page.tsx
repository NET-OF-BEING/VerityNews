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
    <div className="mx-auto max-w-3xl px-6 py-20">
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-blue">
        Search
      </div>
      <h1 className="mb-8 font-serif text-[clamp(2rem,4.5vw,3.2rem)] font-black leading-[1.1] text-light">
        Search Investigations
      </h1>
      <SearchClient posts={posts} />
    </div>
  );
}
