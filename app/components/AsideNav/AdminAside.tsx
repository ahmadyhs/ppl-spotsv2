"use client";

import Image from "next/image";
import Link from "next/link";
//import { usePathname, useRouter } from "next/navigation"
//import { useCallback, useEffect, useState } from "react"
//import { BiAlignRight } from 'react-icons/bi'
//import { useMediaQuery } from "react-responsive"

export default function AdminAside() {
  return (
    <aside className="col-span-8 block w-full place-content-between bg-[#17224D] md:col-span-2 md:grid md:h-screen">
      {/* {!isNotPhone &&
        <div className="md:flex block w-full bg-[#17224D] relative h-12">
          <Image 
            className="absolute top-3 left-3"
            alt='logo' 
            src="/SPOTS-white-icon.svg"  
            width={25} height={25} />
          <BiAlignRight 
            className="absolute top-4 right-4 border-white border-2 scale-150 bg-[#17224D]"
            onClick={toggleOpen}/>
        </div>
      } */}

      {/* {(isOpen || isNotPhone) && */}
      <>
        <div className="md:col-span-2">
          <div className="right flex flex-col items-center">
            <div className="right mt-5 flex flex-col items-center">
              <Image
                alt="logo"
                src="/spots-white-nobg.png"
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
          <p className="mx-5 mb-10 text-center text-3xl text-white">Admin</p>
          <Link
            className="my-1 block w-full bg-blue-500 p-3 text-left font-semibold text-white hover:bg-blue-600 active:bg-slate-500"
            href="/admin/penyewa"
          >
            Data Penyewa
          </Link>
          <Link
            className="my-1 block w-full bg-blue-500 p-3 text-left font-semibold text-white hover:bg-blue-600 active:bg-slate-500"
            href="/admin/penyedia"
          >
            Data Penyedia
          </Link>
          <Link
            className="my-1 block w-full bg-blue-500 p-3 text-left font-semibold text-white hover:bg-blue-600 active:bg-slate-500"
            href="/admin/coworking-space"
          >
            Data Coworking
          </Link>
        </div>

        <div className="mb-10 mt-5 md:col-span-2">
          <div className="flex items-center justify-center md:flex-col">
            <button
              className="my-1 w-5/6 border border-white bg-transparent p-3 text-left text-white hover:bg-blue-600 active:bg-slate-500"
              // onClick={
              //   e => {
              //     e.preventDefault();

              //   }
              // }
            >
              ← Keluar
            </button>
          </div>
        </div>
      </>
    </aside>
  );
}
