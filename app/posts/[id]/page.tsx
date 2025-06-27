import Image from "next/image";
import React, { Fragment } from "react";
import photo from "@/public/image.png";
import { BlogData } from "@/types/blog";
import CategoriesList from "@/components/home/CategoriesList";
import { errorMetadata } from "@/lib/constants";
import { redirect } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  let post: BlogData | null = null;
  let error: null | string = null;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    post = await res.json();
  } catch (err) {
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = "Error";
    }
  }

  if (!error && post?.title)
    return {
      title: post?.title,
      description: post?.body.slice(0, 150),
      openGraph: {
        title: post?.title,
        description: post?.body.slice(0, 150),
        images: [
          {
            url: "/image.png",
            width: 1200,
            height: 630,
            alt: post?.title,
          },
        ],
      },
    };

  return errorMetadata;
}

async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  let postDetails: BlogData | null = null;
  let error: null | string = null;

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    postDetails = await res.json();
  } catch (err) {
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = "Error";
    }
  }

  if (postDetails?.title && !error)
    return (
      <article className="mt-16 relative">
        <span className="text-sm text-purple">Sunday , 1 Jan 2023</span>
        <h3 className="text-4xl font-bold my-8">{postDetails?.title}</h3>
        <Image
          src={photo}
          alt={postDetails?.title || "Blog post image"}
          className="object-cover h-full min-h-[250px] my-8"
        />
        <p className="text-paragraph">
          {Array(3)
            .fill("")
            .map((_, idx) => (
              <Fragment key={idx}>{postDetails?.body}</Fragment>
            ))}
        </p>
        <CategoriesList />
      </article>
    );

  redirect("/");
}

export default page;
