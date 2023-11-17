"use client";

import { SpaceResultDetail } from "@/app/lib/apiCalls/getSpaceByID";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function BookingForm(spaceParams: SpaceResultDetail) {
  const router = useRouter();

  const space = spaceParams.coworking_space;
  //const [space, setSpace] = useState(null);
  const [date, setDate] = useState("");
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");

  function submitBooking() {
    const path = `/transaksi?bookingId=${1}&date=${date}&start=${startHour}&end=${endHour}&name=${"namaspace"}&spacePrice=${100}&spaceId=${1}`;

    // easier to read
    //  const path = '/transaksi?bookingId=' + bookingDetail.booking_id +
    // '&date=' + date +
    // '&start=' + startHour +
    // '&end=' + endHour +
    // '&name=' + spaceName +
    // '&spacePrice=' + spacePrice +
    // '&spaceId=' + id;

    router.push(path);
  }

  return (
    <form
      className="m-auto mb-5 grid w-11/12 items-center rounded-xl border-2 border-dashed border-black py-5 lg:grid-cols-2"
      onSubmit={(e: any) => {
        e.preventDefault();
        submitBooking();
      }}
    >
      <div className="px-10 py-5">
        <p className="my-6 text-2xl font-bold text-black">Data Booking</p>
        <div className="my-3 flex justify-between">
          <p className="text-lg font-semibold text-black">
            Nama Coworking Space
          </p>
          <p className="mx-4 text-lg font-semibold text-black">:</p>
          <p className="text-lg font-semibold text-black">
            {space && space.name}
          </p>
        </div>

        <p className="text-lg font-semibold text-black">Tanggal</p>
        <div className="flex flex-row items-center">
          <input
            type="date"
            className="border-darkblue my-3 w-full rounded-2xl border bg-slate-100 bg-transparent px-4 py-2 text-left text-black"
            placeholder="Pilih Tanggal"
            required
            onChange={(e: any) => setDate(e.target.value)}
          ></input>
        </div>

        <div className="flex justify-between">
          <p className="text-lg font-semibold text-black">Jam Masuk</p>
          <p className="text-lg font-semibold text-black">Jam Keluar</p>
        </div>

        <div className="flex justify-between">
          <div className="flex w-full flex-row items-center pr-4">
            <input
              type="number"
              id="startHour"
              className="border-darkblue my-3 w-full rounded-2xl border bg-slate-100 bg-transparent px-4 py-2 text-left text-black "
              placeholder="Pilih Waktu Masuk"
              min="8"
              max="21"
              required
              onChange={(e: any) => setStartHour(e.target.value)}
            ></input>
          </div>
          <div className="flex w-full flex-row items-center pl-4">
            <input
              type="number"
              id="endHour"
              className="border-darkblue my-3 w-full rounded-2xl border bg-slate-100 bg-transparent px-4 py-2 text-left text-black"
              placeholder="Pilih Waktu Keluar"
              min="9"
              max="22"
              required
              onChange={(e: any) => setEndHour(e.target.value)}
            ></input>
          </div>
        </div>
      </div>

      <div className="right flex flex-col items-center">
        <div className="mt-10 rounded-full px-10 md:pr-10">
          {space && (
            <Image
              alt="room"
              src={space.coworking_space_images[0].image_url}
              className="rounded-xl"
              width={500}
              height={500}
            />
          )}
        </div>
        <button
          type="submit"
          className="m-auto mt-10 block rounded-full border border-teal-200 bg-blue-950 px-20
              py-3 text-center font-semibold text-white hover:bg-blue-400"
        >
          Submit Booking
        </button>
      </div>
    </form>
  );
}
