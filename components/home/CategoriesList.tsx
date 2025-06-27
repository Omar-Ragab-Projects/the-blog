"use client";
import { categories, colors } from "@/lib/constants";
import React from "react";
import { getRandomNumber } from "@/lib/helpers";
import useMounted from "@/hooks/useMounted";

function CategoriesList() {
  const { mounted } = useMounted();
  if (!mounted) return null; // Prevent SSR mismatch
  return (
    <ul className="flex flex-wrap gap-2 items-center mt-6 ">
      {Array(getRandomNumber(3, 2))
        .fill("")
        .map((_, idx) => (
          <li
            key={idx}
            className={`text-sm px-2 py-1 rounded-full`}
            style={{
              color: `var(--color-${
                colors[getRandomNumber(colors.length - 1)]
              })`,
              backgroundColor: `var(--color-light-${
                colors[getRandomNumber(colors.length - 1)]
              })`,
            }}
          >
            {categories[getRandomNumber(categories.length - 1)]}
          </li>
        ))}
    </ul>
  );
}

export default CategoriesList;
