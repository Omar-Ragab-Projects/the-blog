"use client";
import { BlogData } from "@/types/blog";
import Image from "next/image";
import React from "react";
import photo from "@/public/image.png";
import arrow from "@/public/icons/arrowUpRight.svg";
import CategoriesList from "./CategoriesList";
import Link from "next/link";

interface PropsType {
  post: BlogData;
  cardDirection?: "row" | "column";
  showArrow?: boolean;
  customClass?: string;
}

function BlogCard({
  post,
  cardDirection,
  showArrow = true,
  customClass,
}: PropsType) {
  return (
    <article key={post.id} className="h-full">
      <Link
        href={`posts/${post.id}`}
        className={`group flex flex-col gap-8 cursor-pointer h-full  ${
          cardDirection == "row" ? "sm:row-post-card" : ""
        } ${customClass ? customClass : ""}`}
      >
        <div className="w-full h-auto min-h-[250px]">
          <Image
            src={photo}
            alt={post.title}
            className="object-cover h-full min-h-[250px]"
          />
        </div>

        <div className="mb-6">
          <span className="text-sm text-purple">Sunday , 1 Jan 2023</span>
          <div className="flex-between gap-4 my-3">
            <h5 className="text-2xl leading-[32px] font-semibold group-hover:opacity-85 transition">
              {post.title}
            </h5>
            {!showArrow ? null : (
              <Image src={arrow} alt="Go to blog details" className="mr-1 " />
            )}
          </div>
          <p className="leading-[24px] text-paragraph">{post.body}</p>
          <CategoriesList />
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
