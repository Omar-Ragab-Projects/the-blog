"use client";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <Link
      href="/posts"
      className="font-bold text-xl whitespace-nowrap cursor-pointer"
    >
      o m a r
    </Link>
  );
}

export default Logo;
