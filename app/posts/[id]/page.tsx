import Image from "next/image";
import React, { Fragment } from "react";
import photo from "@/public/image.png";
import { BlogData } from "@/types/blog";
import CategoriesList from "@/components/home/CategoriesList";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post: BlogData = await res.json();

  return {
    title: post.title,
    description: post.body.slice(0, 150),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 150),
      images: [
        {
          url: "/image.png",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

async function page({ params }: { params: { id: number } }) {
  const { id } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postDetails: BlogData = await res.json();

  return (
    <article className="mt-16 relative">
      <span className="text-sm text-purple">Sunday , 1 Jan 2023</span>
      <h3 className="text-4xl font-bold my-8">{postDetails.title}</h3>
      <Image
        src={photo}
        alt={postDetails.title}
        className="object-cover h-full min-h-[250px] my-8"
      />
      <p className="text-paragraph">
        {Array(3)
          .fill("")
          .map((_, idx) => (
            <Fragment key={idx}>{postDetails.body}</Fragment>
          ))}
      </p>
      <CategoriesList />
    </article>
  );
}

export default page;
