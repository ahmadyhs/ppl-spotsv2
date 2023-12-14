"use client";

import SpaceForm from "@/app/components/Form/SpaceForm";
import useApiSecured from "@/app/lib/hooks/useApiSecured";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddSpace() {
  const { push } = useRouter();
  const axiosSecured = useApiSecured();

  const [isApproved, setIsApproved] = useState(false);

  useEffect(() => {
    async function getOwnerProfile() {
      try {
        const response = await axiosSecured("/lib/apiCalls/owner");

        if (response.data.owner.status !== "APPROVED") {
          toast.error(
            "Status penyedia belum diterima, pastikan data anda telah lengkap",
          );
          push("/owner");
        } else setIsApproved(true);
      } catch (error) {
        const err = error as AxiosError;
        console.log(err);
      }
    }

    getOwnerProfile();
  }, []);

  return (
    <section className="col-span-8 md:col-span-6">
      <title>Tambah Coworking Space</title>
      <div className="block max-h-screen overflow-auto px-8">
        <div className="h-1/12 flex justify-center">
          <h1>Tambah Coworking Space</h1>
        </div>

        {isApproved ? (
          <SpaceForm />
        ) : (
          <div className="mb-8 grid gap-y-8 rounded-xl border border-gray-300 px-4 py-8 shadow-lg">
            <div className="h-8 w-full animate-pulse rounded-lg bg-slate-200" />
            <div className="h-8 w-1/3 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-8 w-2/3 animate-pulse rounded-lg bg-slate-200" />
            <div className="h-8 w-full animate-pulse rounded-lg bg-slate-200" />
            <div className="h-8 w-1/3 animate-pulse rounded-lg bg-slate-200" />
          </div>
        )}
      </div>
    </section>
  );
}
