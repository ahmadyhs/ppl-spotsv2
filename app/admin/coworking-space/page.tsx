"use client";

import SpaceTable from "@/app/components/Table/SpaceTable";
import useApiSecured from "@/app/lib/hooks/useApiSecured";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminCoworkingSpace() {
  // const { refresh } = useRouter();
  const axiosSecured = useApiSecured();

  async function verifySpace(space_id: number, approval: boolean) {
    const status = approval ? "APPROVED" : "REJECTED";

    try {
      await axiosSecured.put("/lib/apiCalls/admin/verifySpace", {
        id: space_id,
        status: status,
      });
      toast.success("Verifikasi berhasil");
      setTimeout(() => location.reload(), 400);
      // setTimeout(() => refresh(), 200);
    } catch (error) {
      toast.error("Verifikasi gagal");
    }
  }

  return (
    <section className="col-span-8 max-h-screen md:col-span-6">
      <title>Data Coworking Space</title>

      <div className="h-1/12 flex justify-center">
        <h1>DATA COWORKING SPACE</h1>
      </div>

      <SpaceTable userType="ADMIN" editFunction={verifySpace} />
    </section>
  );
}
