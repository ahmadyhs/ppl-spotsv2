"use client";

import Link from "next/link";
import AsideLayout from "./AsideLayout";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function AdminAside() {
  const activeColor = "bg-blue-700 ";
  const path = usePathname();

  const menu1Condition = path.endsWith("/penyewa");
  const menu2Condition = path.endsWith("/penyedia");
  const menu3Condition = path.endsWith("/coworking-space");

  return (
    <AsideLayout>
      <p className="mx-5 mb-10 text-center text-3xl text-white">Admin</p>
      <Link
        className={
          (menu1Condition ? activeColor : "hover:bg-slate-500 ") +
          "block w-full p-2 text-left font-semibold text-white active:bg-blue-900"
        }
        as="/admin/penyewa"
        href="/admin/penyewa"
      >
        | &nbsp; Data Penyewa
      </Link>

      <Link
        className={
          (menu2Condition ? activeColor : "hover:bg-slate-500 ") +
          "block w-full p-2 text-left font-semibold text-white active:bg-blue-900"
        }
        as="/admin/penyedia"
        href="/admin/penyedia"
      >
        | &nbsp; Data Penyedia
      </Link>

      <Link
        className={
          (menu3Condition ? activeColor : "hover:bg-slate-500 ") +
          "block w-full p-2 text-left font-semibold text-white active:bg-blue-900"
        }
        as="/admin/coworking-space"
        href="/admin/coworking-space"
      >
        | &nbsp; Data Coworking
      </Link>
    </AsideLayout>
  );
}
