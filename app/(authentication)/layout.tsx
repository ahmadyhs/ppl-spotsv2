"use client";

import Image from "next/image";
import Link from "next/link";
import { Toaster } from "react-hot-toast";
import { useSelectedLayoutSegment } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let page = useSelectedLayoutSegment();

  if (page) page = page[0].toUpperCase() + page.slice(1);

  return (
    <main>
      <Toaster />

      <div
        className={
          (page === "Signup" ? "pt-12 " : "") +
          "bg-darkblue flex h-screen items-center justify-center overflow-y-scroll"
        }
      >
        <div
          className={
            (page === "Signup" ? " mt-96 sm:max-w-xl " : "") +
            "right relative mb-8 mt-20 flex w-fit flex-col justify-center rounded-xl bg-white text-center"
          }
        >
          <Link href={"/"}>
            <Image
              className="absolute -top-14 left-1/2 w-3/12 -translate-x-1/2 rounded-t-full bg-white p-2 duration-200 ease-in-out hover:scale-110 sm:-top-20 md:w-[22%]"
              src="/spots.ico"
              width={250}
              height={250}
              alt="logo"
              priority
            />
          </Link>

          <h2 className="mb-10 mt-20 text-center text-3xl font-bold">
            {page === "Signup" ? "Daftar Akun" : page}
          </h2>

          {children}
        </div>
      </div>
    </main>
  );
}
