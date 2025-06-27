import AllBlogPosts from "@/components/home/AllBlogPosts";
import RecentPosts from "@/components/home/RecentPosts";
import PageHeader from "@/components/ui/PageHeader";
import type { BlogData } from "@/types/blog";
import React from "react";

async function Home() {
  let data: BlogData[] = [];
  let error: null | string = null;

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await res.json();
  } catch (err) {
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = "Error";
    }
  }

  return (
    <main className="overflow-hidden">
      <PageHeader title="THE BLOG" />
      {!error && data.length > 0 && (
        <>
          <RecentPosts posts={data} />
          <AllBlogPosts posts={data} />
        </>
      )}
    </main>
  );
}

export default Home;
