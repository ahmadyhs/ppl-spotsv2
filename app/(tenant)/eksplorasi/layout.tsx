"use client";

import SearchBar from "@/app/components/Form/Search";
import { Suspense } from "react";
import ExploreLoadingCard from "./loading";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <title>Eksplorasi</title>

      <h1>Cari Workspace</h1>

      <SearchBar />

      <div className="flex flex-wrap">
        <Suspense fallback={<ExploreLoadingCard />}>{children}</Suspense>
      </div>
    </>
  );
}
