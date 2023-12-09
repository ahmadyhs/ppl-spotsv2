"use client";

import getSpaceByID from "@/app/lib/apiCalls/getSpaceByID";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import CalendarView from "@/app/components/CalendarView";
import moneySplitter from "@/app/lib/moneySplitter";
import useApiSecured from "@/app/lib/hooks/useApiSecured";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import MainLoading from "@/app/components/MainLoading";

export default function BookingDetailCallback(id: number) {
  const router = useRouter();
  const searchParams = useSearchParams();
  // if (
  //   !searchParams.get("spaceId") ||
  //   !searchParams.get("bookingId") ||
  //   !searchParams.get("name") ||
  //   !searchParams.get("date") ||
  //   !searchParams.get("end") ||
  //   !searchParams.get("start") ||
  //   !searchParams.get("spacePrice")
  // ) {
  //   router.back();
  // }
  const [isFetched, setIstFetched] = useState(false);

  const axiosSecured = useApiSecured();
  const paramsProps = {
    spaceId: "",
    bookingId: "",
    spaceName: "",
    date: "",
    startHour: "0",
    endHour: "0",
    spacePrice: "0",
  };

  const bookingDuration =
    parseInt(paramsProps.endHour) - parseInt(paramsProps.startHour);
  const totalPrice = bookingDuration * parseInt(paramsProps.spacePrice);

  const image = "/dummyoffice.jpeg";

  useEffect(() => {
    setTimeout(() => setIstFetched(true), 3000);
    const script = document.createElement("script");

    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  async function download() {
    // const a = document.createElement("a");
    // const blob = new Blob(["TES DOWNLOAD"], {
    //   type: "text/plain;charset=utf-8;",
    // });
    // const url = URL.createObjectURL(blob);
    // a.setAttribute("href", url);
    // a.setAttribute("download", "test.pdf");
    // a.click();
    const element = document.getElementById("receipt");

    // @ts-ignore
    html2pdf().from(element).save();
  }

  if (!isFetched) return <MainLoading />;

  return (
    <>
      <title>Detail Booking</title>

      <h1>Detail Booking</h1>

      <p className="text-l bg-white pb-8 pl-12 text-black">
        Teliti kembali sebelum lanjut ke pembayaran
      </p>

      <form
        className="m-auto mb-5"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          download();
        }}
      >
        <div
          id="receipt"
          className="m-auto grid w-11/12 items-center rounded-xl border-2 border-dashed border-black py-5 lg:grid-cols-2"
        >
          <Image
            src={"/spots-white.svg"}
            width={200}
            height={200}
            alt="Spots-logo"
            className="col-span-2 mx-auto bg-darkblue"
          />

          <h2 className="col-span-2 my-6 text-center text-2xl font-bold text-darkblue">
            Struk Booking
          </h2>
          <div className="px-10">
            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Nomor Booking
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {paramsProps.spaceName}
              </p>
            </div>

            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Nama Coworking Space
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {paramsProps.spaceName}
              </p>
            </div>

            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black ">Tanggal</p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {paramsProps.date}
              </p>
            </div>

            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Waktu Sewa
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {paramsProps.startHour}:00 - {paramsProps.endHour}:00
              </p>
            </div>

            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Dibuat Pada
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {bookingDuration} Jam
              </p>
            </div>

            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Biaya Sewa
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                Rp {moneySplitter(paramsProps.spacePrice)}
              </p>
            </div>

            <hr />
          </div>

          <div className="px-10">
            <div className="my-8 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Nomor Pembayaran
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {}
              </p>
            </div>

            <div className="my-8 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Metode Pembayaran
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {}
              </p>
            </div>

            <div className="my-8 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Status Pembayaran
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {}
              </p>
            </div>

            <div className="my-8 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Total Pembayaran
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                Rp {moneySplitter(totalPrice.toString())}
              </p>
            </div>
          </div>
        </div>

        <div className="first-line: flex items-center">
          <button
            type="submit"
            className="m-auto mt-10 block rounded-full bg-darkblue px-20
            py-3 text-center font-semibold text-white hover:bg-teal-700"
          >
            Bayar
          </button>

          <Link
            type="submit"
            className="m-auto mt-10 block rounded-full bg-gray-200 px-20
            py-3 text-center font-semibold hover:bg-blue-400"
            href="/eksplorasi"
          >
            Batal
          </Link>
        </div>
      </form>

      <a
        id="tes"
        href="http://localhost:8080/booking-detail"
        download="tes.text"
        className="w-full bg-black"
      >
        TES
      </a>

      <iframe
        src="https://ahmadyhs.github.io/#about"
        width="600"
        height="200"
      />
    </>
  );
}
