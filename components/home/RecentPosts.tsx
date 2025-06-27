import React from "react";
import type { BlogData } from "@/types/blog";
import BlogCard from "./BlogCard";

async function RecentPosts({ posts }: { posts: BlogData[] }) {
  return (
    <section>
      <div className="inner-container container">
        <h3 className="section-header">Recent blog posts</h3>

        <div className="flex flex-col gap-8">
          <div className="grid xl:grid-cols-2 items-stretch gap-8">
            <div>
              <BlogCard post={posts[0]} />
            </div>
            <div className="flex flex-col gap-8 ">
              <BlogCard post={posts[1]} cardDirection="row" showArrow={false} />
              <BlogCard post={posts[2]} cardDirection="row" showArrow={false} />
            </div>
          </div>
          <BlogCard post={posts[3]} customClass="xl:row-post-card" />
        </div>
      </div>
    </section>
  );
}

export default RecentPosts;
