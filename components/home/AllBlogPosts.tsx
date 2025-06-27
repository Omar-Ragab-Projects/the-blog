"use client";
import type { BlogData } from "@/types/blog";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Pagination from "../ui/Pagination";

interface PaginateIndexesTypes {
  start: number;
  end: number;
}

function AllBlogPosts({ posts }: { posts: BlogData[] }) {
  const postsPerPaginate = 6;
  const [currentPaginate, setCurrentPaginate] = useState<number>(1);
  const [paginateIndexes, setPaginateIndexes] = useState<PaginateIndexesTypes>({
    start: 0,
    end: 6,
  });

  const totalPages = Math.ceil(posts.length / postsPerPaginate);

  return (
    <section>
      <div className="inner-container container ">
        <div className="border-b border-b-foreground">
          <h3 className="section-header">Recent blog posts</h3>
          <div className="my-8 gap-4 xl:gap-8 md:grid md:grid-cols-2 xl:grid-cols-3 blog-posts-wrap">
            {posts
              .slice(paginateIndexes.start, paginateIndexes.end)
              .map((post: BlogData) => (
                <BlogCard post={post} key={post.id} />
              ))}
          </div>
        </div>

        <Pagination
          postsPerPaginate={postsPerPaginate}
          currentPaginate={currentPaginate}
          setCurrentPaginate={setCurrentPaginate}
          totalPages={totalPages}
          setPaginateIndexes={setPaginateIndexes}
        />
      </div>
    </section>
  );
}

export default AllBlogPosts;
