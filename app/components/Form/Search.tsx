"use client";

import { useState } from "react";

export default function SearchBar() {
  const [keyWord, setKeyWord] = useState("");
  return (
    <>
      <form
        className="relative mb-8 flex w-full flex-wrap"
        onSubmit={(e: any) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          className="ml-12 mr-12 block flex-auto rounded-full border border-solid border-neutral-400 bg-transparent px-5 text-base font-normal transition duration-150 ease-in-out sm:mr-0"
          placeholder="Masukkan Kata Kunci"
          value={keyWord}
          onChange={(e: any) => setKeyWord(e.target.value)}
        />

        <button
          className="bg-darkblue ml-12 mr-12 mt-2 rounded-full border-2 px-6 py-2 text-xs font-medium text-white transition duration-150 ease-in-out hover:bg-green-500"
          type="submit"
        >
          Cari
        </button>
      </form>
    </>
  );
}
