import AllBlogPosts from "@/components/home/AllBlogPosts";
import RecentPosts from "@/components/home/RecentPosts";
import PageHeader from "@/components/ui/PageHeader";
import type { BlogData } from "@/types/blog";
import React from "react";

async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: BlogData[] = await res.json();

  return (
    <main className="overflow-hidden">
      <PageHeader title="THE BLOG" />
      <RecentPosts posts={data} />
      <AllBlogPosts posts={data} />
    </main>
  );
}

export default Home;
