import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import arrowLeft from "@/public/icons/arrowLeft.svg";
import arrowRight from "@/public/icons/arrowRight.svg";

interface PaginationTypes {
  totalPages: number;
  postsPerPaginate: number;
  currentPaginate: number;
  setCurrentPaginate: React.Dispatch<React.SetStateAction<number>>;
  setPaginateIndexes?: React.Dispatch<{ start: number; end: number }>;
}

function Pagination({
  totalPages,
  postsPerPaginate,
  currentPaginate,
  setCurrentPaginate,
  setPaginateIndexes,
}: PaginationTypes) {
  useEffect(() => {
    if (setPaginateIndexes) {
      setPaginateIndexes({
        start: currentPaginate * postsPerPaginate - postsPerPaginate,
        end: currentPaginate * postsPerPaginate,
      });
    }
  }, [currentPaginate, postsPerPaginate, setPaginateIndexes]);

  const totalPagesArray = useMemo(
    () => Array.from({ length: totalPages }, (_, idx) => idx + 1),
    [totalPages]
  );

  function handleNextPaginate() {
    if (currentPaginate < totalPages) setCurrentPaginate((p) => p + 1);
  }

  function handlePreviousPaginate() {
    if (currentPaginate > 1) setCurrentPaginate((p) => p - 1);
  }

  function handlePaginateClick(pageNumber: number) {
    setCurrentPaginate(pageNumber);
  }

  function getVisiblePages() {
    if (totalPages <= 7) return totalPagesArray;
    if (currentPaginate <= 2)
      return [
        ...totalPagesArray.slice(0, 3),
        "...",
        ...totalPagesArray.slice(totalPages - 3, totalPages),
      ];
    if (currentPaginate >= totalPages - 3)
      return [1, "...", ...totalPagesArray.slice(-5)];
    return [
      1,
      "...",
      currentPaginate - 1,
      currentPaginate,
      currentPaginate + 1,
      "...",
      totalPages,
    ];
  }

  const visiblePages = getVisiblePages();

  return (
    <div
      className="flex-between flex-col md:flex-row  my-6"
      aria-label="Pagination"
    >
      <button
        className={`flex-center gap-2 cursor-pointer mb-4 sm:my-0 mr-auto ${
          currentPaginate === 1 ? "disable-btn" : ""
        }`}
        onClick={handlePreviousPaginate}
        disabled={currentPaginate === 1}
        aria-label="Previous page"
      >
        <Image
          src={arrowLeft}
          alt="Previous paginate"
          className="invert-100 dark:invert-0"
        />
        <span>Previous</span>
      </button>
      <ul className="flex gap-[2px] justify-end">
        {visiblePages.map((page, idx) =>
          page === "..." ? (
            <li
              key={`ellipsis-${idx}`}
              className="my-auto mx-1 select-none block"
            >
              ...
            </li>
          ) : (
            <li key={page}>
              <button
                className={`py-[10px] px-4 cursor-pointer rounded-lg font-medium ${
                  page === currentPaginate
                    ? "bg-foreground text-background"
                    : ""
                }`}
                onClick={() => handlePaginateClick(Number(page))}
                aria-current={page === currentPaginate ? "page" : undefined}
              >
                {page}
              </button>
            </li>
          )
        )}
      </ul>
      <button
        className={`flex-center gap-2 cursor-pointer mt-4 sm:my-0 ml-auto  ${
          currentPaginate === totalPages ? "disable-btn" : ""
        }`}
        onClick={handleNextPaginate}
        disabled={currentPaginate === totalPages}
        aria-label="Next page"
      >
        <span>Next</span>
        <Image
          src={arrowRight}
          alt="Next paginate"
          className="invert-100 dark:invert-0"
        />
      </button>
    </div>
  );
}

export default Pagination;
