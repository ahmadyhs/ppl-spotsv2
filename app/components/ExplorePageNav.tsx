"use client";

import { useRouter } from "next/navigation";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export default function PageNav({
  pageIndex,
  direction,
}: {
  pageIndex: number | null;
  direction: "PREV" | "NEXT";
}) {
  const { push } = useRouter();
  const navArrow =
    direction === "PREV" ? (
      <GoChevronLeft size="1.5em" color="white" />
    ) : (
      <GoChevronRight size="1.5em" color="white" />
    );
  return (
    <>
      {pageIndex ? (
        <button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            push(`/eksplorasi?page=${pageIndex}`);
          }}
          className="flex items-center rounded-md bg-darkblue p-2"
        >
          {navArrow}
        </button>
      ) : (
        <div className="flex items-center rounded-md bg-darkblue bg-opacity-50 p-2">
          {navArrow}
        </div>
      )}
    </>
  );
}
