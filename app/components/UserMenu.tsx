"use client";

import Link from "next/link";
import Image from "next/image";

const UserMenu = () => {
  const token = false;
  const isOpen = false;

  return (
    <div className="inline-flex">
      <div className="flex w-full flex-col items-start justify-center lg:ml-auto  lg:h-auto lg:w-auto lg:flex-row lg:items-center">
        {token && (
          <Image
            className="cursor-pointer rounded-full bg-white p-1"
            src={"/person.png"}
            width={40}
            height={40}
            alt="user"
            // onClick={toggleOpen}
          />
        )}

        {!token && (
          <Link
            className="w-full justify-center rounded bg-white px-3 py-2 font-bold hover:bg-green-500 hover:text-white lg:inline-flex lg:w-auto"
            href="/login"
          >
            Login
          </Link>
        )}
      </div>

      {isOpen && (
        <div className="absolute right-4 top-16 w-fit overflow-hidden rounded-xl bg-white text-sm shadow-md">
          <div className="flex cursor-pointer flex-col">
            <div
              className="px-4 py-3 font-semibold text-black transition hover:bg-neutral-100"
              // onClick={profile}
            >
              Profile
            </div>
            <Link
              className="px-4 py-3 font-semibold text-black transition hover:bg-neutral-100"
              href="/list-transaksi"
            >
              Transaksi Anda
            </Link>
            <div
              className="px-4 py-3 font-semibold text-black transition hover:bg-neutral-100"
              // onClick={logout}
            >
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
