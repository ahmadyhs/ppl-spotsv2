import getSpaceByID from "@/app/lib/apiCalls/getSpaceByID";
import BookingForm from "@/app/components/Form/BookingForm";
import Image from "next/image";
import Link from "next/link";

export default function Booking(id: number) {
  const isDataFetched = true;
  const spaceResult = getSpaceByID(1);
  const image = "/office.png";

  function payment() {}

  return (
    <>
      <title>Transaksi</title>

      <h1>Transaksi</h1>

      <p className="text-l bg-white pb-8 pl-12 text-black">
        Teliti kembali sebelum lanjut ke pembayaran
      </p>

      <form
        className="m-auto mb-5"
        // onSubmit={(e: any) => {
        //   e.preventDefault();
        // }}
      >
        <div className="m-auto grid w-11/12 items-center rounded-xl border-2 border-dashed border-black py-5 lg:grid-cols-2">
          <div className="px-10">
            <h2 className="text-darkblue my-6 text-2xl font-bold">
              Detail Transaksi
            </h2>
            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Nama Coworking Space
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {/* {props.spaceName} */}nama
              </p>
            </div>

            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black ">Tanggal</p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {/* {props.date} */}tanggal
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
                {/* {props.startHour}:00 - {props.endHour}:00 */}
              </p>
            </div>

            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Lama Sewa
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {/* {props.bookDuration} Jam */}
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
                {/* Rp {props.spacePrice} */}
              </p>
            </div>

            <hr />
            <div className="my-3 flex justify-between">
              <p className="w-2/6 text-lg font-semibold text-black">
                Total Pembayaran
              </p>
              <p className="w-1/6 text-center text-lg font-semibold text-black">
                :
              </p>
              <p id="" className="w-3/6 text-lg font-semibold text-black">
                {/* Rp {props.totalPrice} */}
              </p>
            </div>
          </div>

          <div className="right flex flex-col items-center">
            <div className="mt-10 rounded-full px-10 md:pr-10">
              <Image
                alt="room"
                className="rounded-xl"
                src={image}
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>

        <div className="first-line: flex items-center">
          <button
            type="submit"
            className="m-auto mt-8 block rounded-full bg-blue-950 px-20
                      py-3 text-center font-semibold text-white hover:bg-blue-400"
          >
            Bayar
          </button>

          <Link
            type="submit"
            className="m-auto mt-8 block rounded-full border border-blue-950 bg-white px-20
                      py-3 text-center font-semibold text-blue-950 hover:bg-blue-400"
            href="/eksplorasi"
          >
            Batal
          </Link>
        </div>
      </form>
    </>
  );
}
