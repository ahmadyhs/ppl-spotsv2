"use client";

import { useState, useEffect } from "react";
import StatusBlockColor from "@/app/components/StatusBlockColor";
import useApiSecured from "@/app/lib/hooks/useApiSecured";
import toast from "react-hot-toast";
import moneySplitter from "@/app/lib/moneySplitter";

export interface BookingHistory {
  booking_id: string;
  date: string;
  coworking_space: {
    name: string;
  };
  payment: {
    amount?: string;
    method?: string;
    status?: string;
  };
}

export default function TenantBookingHistory() {
  const axiosSecured = useApiSecured();
  const [isFetched, setIsFetched] = useState(false);
  const [bookings, setBookings] = useState<BookingHistory[] | null>(null);

  useEffect(() => {
    async function getBookings() {
      try {
        const response = await axiosSecured("/lib/apiCalls/booking");
        setBookings(response.data.bookings);
        setIsFetched(true);
        console.log(response);
      } catch (error) {
        toast.error("Gagal mengambil data riwayat booking");
      }
    }
    getBookings();
  }, []);

  return (
    <>
      <title>Riwayat Booking</title>

      <h1>Daftar Booking</h1>

      <table className="mx-auto mb-8 h-fit w-11/12 rounded-xl shadow-lg">
        <thead className="flex h-1/6 w-full">
          <tr className="flex w-full items-center rounded-tl-xl rounded-tr-xl bg-darkgray text-center">
            <th className="w-3/12 p-2 font-medium text-white">Nomor Booking</th>
            <th className="w-2/12 p-2 font-medium text-white">
              Tanggal Booking
            </th>
            <th className="w-3/12 p-2 font-medium text-white">
              Nama Coworking Space
            </th>
            <th className="w-2/12 p-2 font-medium text-white">
              Jumlah Pembayaran
            </th>
            <th className="w-40 p-2 font-medium text-white sm:w-2/12">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="flex h-[70vh] w-full flex-col items-center overflow-y-auto rounded-bl-xl rounded-br-xl text-black">
          {isFetched &&
            bookings &&
            (bookings.length !== 0 ? (
              bookings.map((b) => {
                return (
                  <tr
                    className="item-center flex w-full text-center"
                    key={b.booking_id}
                  >
                    <td className="w-3/12 break-words p-2">{b.booking_id}</td>

                    <td className="w-2/12 break-words p-2">{b.date}</td>

                    <td className="w-3/12 break-words p-2">
                      {b.coworking_space.name}
                    </td>

                    <td className="w-2/12 break-words p-2">
                      Rp.{" "}
                      {b.payment?.amount
                        ? moneySplitter(b.payment.amount)
                        : "-"}
                    </td>

                    <td className="w-40 break-words p-2 sm:w-2/12">
                      {b.payment?.status
                        ? StatusBlockColor(
                            b.payment.status,
                            "rounded-full px-6 py-3 text-center",
                          )
                        : "Belum bayar!"}
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
      {/* {
        transactionResult.bookings.length === 0 && (
          <p className="px-2 text-center text-black">
            Anda belum pernah melakukan transaksi
          </p>
        )
      } */}
    </>
  );
}
