"use client";

import { ProfileType } from "@/app/lib/context/UserInfoContextProvider";
import useApiSecured from "@/app/lib/hooks/useApiSecured";
import { AxiosError } from "axios";
import { useState, useEffect } from "react";

type Tenant = ProfileType & {
  tenant_id: number;
};

export default function AdminPenyewa() {
  const axiosSecured = useApiSecured();

  const [isFetched, setIsFetched] = useState(false);
  const [tenants, setTenants] = useState<Tenant[] | null>(null);

  useEffect(() => {
    async function getTenants() {
      try {
        const response = await axiosSecured("/lib/apiCalls/admin/getTenants");

        setTenants(response.data.tenants);
        setIsFetched(true);
      } catch (error) {
        const err = error as AxiosError;
      }
    }

    getTenants();
  }, []);

  return (
    <section className="col-span-8 max-h-screen md:col-span-6">
      <title>Data Penyewa</title>

      <div className="flex justify-center">
        <h1>DATA PENYEWA</h1>
      </div>

      <table className="mx-auto mb-8 h-fit w-11/12 rounded-xl shadow-lg">
        <thead className="flex h-1/6 w-full">
          <tr className="flex w-full items-center rounded-tl-xl rounded-tr-xl bg-darkgray text-center">
            <th className="w-1/12 p-2 font-medium text-white">Tenant ID</th>
            <th className="w-2/12 p-2 font-medium text-white">Nama Depan</th>
            <th className="w-2/12 p-2 font-medium text-white">Nama Belakang</th>
            <th className="w-4/12 p-2 font-medium text-white">Email</th>
            <th className="w-3/12 p-2 font-medium text-white">Nomor Telepon</th>
          </tr>
        </thead>

        <tbody className="flex h-[70vh] w-full flex-col items-center overflow-y-auto rounded-bl-xl rounded-br-xl text-black">
          {isFetched &&
            tenants &&
            (tenants.length !== 0 ? (
              tenants.map((t) => {
                return (
                  <tr className="item-center flex w-full" key={t.tenant_id}>
                    <td className="w-1/12 break-words p-2">{t.tenant_id}</td>

                    <td className="w-2/12 break-words p-2">
                      {t.user.first_name}
                    </td>

                    <td className="w-2/12 break-words p-2">
                      {t.user.last_name}
                    </td>

                    <td className="w-4/12 break-words p-2">{t.user.email}</td>

                    <td className="w-3/12 break-words p-2">
                      {t.user.phone_number}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="flex w-full">
                <td className="grid w-full justify-center p-4">Data Kosong</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
}
