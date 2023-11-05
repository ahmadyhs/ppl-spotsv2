import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className=" flex w-full flex-col items-center justify-between bg-white">
      <title>Spots</title>

      <Image
        className="scale-x-100"
        src="/office.png"
        width={1920}
        height={658}
        alt="office"
        priority
      />

      <section className="w-full border-b bg-[#027FFF] py-8">
        <div className="container mx-auto flex flex-wrap pb-12 pt-4">
          <h2 className="my-2 w-full text-center text-5xl font-bold leading-tight text-gray-800">
            Mengapa Harus Spots?
          </h2>
          <div className="mb-4 w-full">
            <div className="gradient mx-auto my-0 h-1 w-64 rounded-t py-0 opacity-25"></div>
          </div>
          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/4">
            <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
              <br></br>
              <Image
                src="/shield.png"
                className="mx-auto h-auto w-auto"
                width={100}
                height={24}
                alt="shield"
              />
              <br></br>
              <p className="mb-5 px-6 text-center text-base text-gray-800">
                Website terproteksi SSL dan pembayaran dilakukan melalui Payment
                Gateway terpercaya untuk menjamin keamanan transaksi.{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/4">
            <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
              <br></br>
              <Image
                src="/search.png"
                className="mx-auto h-auto w-auto"
                width={100}
                height={24}
                alt="search"
              />
              <br></br>
              <p className="mb-5 px-6 text-center text-base text-gray-800">
                Kemudahan dalam mencari Coworking Space sesuai kebutuhan dengan
                fitur-fitur menarik, seperti pencarian berdasarkan jarak, detail
                informasi, dan lainnya.{" "}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/4">
            <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
              <br></br>
              <Image
                src="/tag.png"
                className="mx-auto h-auto w-auto"
                width={100}
                height={24}
                alt="tag"
              />
              <br></br>
              <p className="mb-5 px-6 text-center text-base text-gray-800">
                Harga sewa yang kompetitif dengan tambahan promo-promo menarik.{" "}
              </p>
            </div>
          </div>

          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/4">
            <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow">
              <br></br>
              <Image
                src="/operator.png"
                className="mx-auto h-auto w-auto"
                width={100}
                height={24}
                alt="operator"
              />
              <br></br>
              <p className="mb-5 px-6 text-center text-base text-gray-800">
                Customer Service kami akan siap membantu jika ada kendala saat
                pemesanan tempat ataupun hal lainnya.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-50 dark:bg-white-800">
        <div className="mx-auto max-w-screen-xl space-y-12 px-4 py-8 lg:space-y-20">
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="ml-10 text-gray-500 dark:text-gray-400 sm:text-lg">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#027FFF] ">
                Cari Coworking Space Sesuai Kebutuhanmu!
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Kami menghubungkanmu kepada penyedia Coworking Space terbaik
                hanya dengan jentikan jari. Buat pertemuan tak terlupakan
                bersama kolegamu menggunakan bantuan jasa kami yang mudah dan
                aman.{" "}
              </p>
            </div>
            <Image
              className="mx-auto scale-75 rounded-md"
              src="/hands.png"
              width={770}
              height={1024}
              alt="hands"
              priority
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-[#19E8E0] py-8">
        <div className="container mx-auto flex flex-wrap pb-12 pt-4">
          <h2 className="my-2 w-full text-center text-4xl font-bold leading-tight text-gray-800 sm:text-5xl">
            Bagaimana Alurnya?
          </h2>
          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3 ">
            <div className="flex-1 overflow-hidden border-hidden bg-[#19E8E0]">
              <br></br>
              <Image
                src="/city.png"
                className="mx-auto w-auto"
                width={100}
                height={24}
                alt="city"
              />
              <br></br>
              <div className="w-full px-6 text-center text-xl font-bold text-gray-800">
                Cari Tempat Favoritmu{" "}
              </div>
              <p className="mb-5 px-6 text-center text-base text-gray-800">
                Pertama, cari Coworking Space sesuai kebutuhanmu.{" "}
              </p>
            </div>
          </div>
          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden  bg-[#19E8E0] ">
              <br></br>
              <Image
                src="/calender.png"
                className="mx-auto mt-4 w-auto"
                width={100}
                height={24}
                alt="calender"
              />
              <br></br>
              <div className="w-full px-6 text-center text-xl font-bold text-gray-800">
                Lakukan Pemesanan
              </div>
              <p className="mb-5 px-6 text-center text-base text-gray-800">
                Kedua, booking melalui website serta bayar menggunakan metode
                yang dipilih.
              </p>
            </div>
          </div>

          <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
            <div className="flex-1 overflow-hidden  bg-[#19E8E0] ">
              <br></br>
              <Image
                src="/people.png"
                className="mx-auto mt-6 w-auto"
                width={100}
                height={24}
                alt="people"
              />
              <br></br>
              <div className="w-full px-6 text-center text-xl font-bold text-gray-800">
                Nikmati Pengalaman Terbaikmu!
              </div>
              <p className="mb-5 px-6 text-center text-base text-gray-800">
                Ketiga, cek status penyewaanmu dan bersiap untuk pengalaman
                terbaik.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
