"use client";

import useApiSecured from "@/app/lib/hooks/useApiSecured";
import { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useCallback, useState } from "react";
//import { usePathname, useRouter } from "next/navigation"
import { BiAlignRight } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";

export default function AsideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { push } = useRouter();
  const isTabletOrMobile = useMediaQuery({ maxWidth: 768 });
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const axiosSecured = useApiSecured();

  async function logout() {
    try {
      const response = await axiosSecured.delete("/lib/apiCalls/auth/logout");

      if (response.status === 200) {
        toast.success(response.data.message);
        push("/login");
      }
    } catch (error) {
      const err = error as AxiosError;
      console.error(err?.response);
    }
  }

  return (
    <aside className="col-span-8 block w-full place-content-between overflow-y-auto bg-darkblue md:col-span-2 md:grid md:h-screen">
      {isTabletOrMobile && (
        <div className="flex h-16 w-full justify-between bg-darkblue">
          <Image
            className="mx-4 my-auto"
            alt="logo"
            src="/SPOTS-white-icon.svg"
            width={40}
            height={40}
          />
          <CiViewList
            className="mx-4 my-auto"
            size="2em"
            color="white"
            onClick={toggleOpen}
          />
        </div>
      )}

      {(isOpen || !isTabletOrMobile) && (
        <>
          <div className="md:col-span-2">
            <div className="right flex flex-col items-center">
              <div className="right mt-5 flex flex-col items-center">
                <Image
                  alt="logo"
                  src="/spots-white-icon.svg"
                  width={200}
                  height={200}
                  priority
                  className="scale-50"
                />
              </div>
            </div>

            {children}
          </div>

          <div className="mb-10 mt-5 md:col-span-2">
            <div className="flex items-center justify-center md:flex-col">
              <button
                className="my-1 w-5/6 border border-white bg-transparent p-3 text-left text-white hover:bg-slate-500 active:bg-blue-600"
                onClick={logout}
              >
                ← &nbsp; Keluar
              </button>
            </div>
          </div>
        </>
      )}
    </aside>
  );
}
