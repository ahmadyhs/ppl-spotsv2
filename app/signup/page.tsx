import Image from 'next/image'
import Link from 'next/link'

export default function Signup() {

  return (
    <main>
      <title>Signup</title>

      <div className=" bg-blue-950 flex pt-12 overflow-y-scroll h-screen justify-center items-center">
        <div className="relative mt-96 mb-8 bg-white right flex w-fit sm:max-w-xl justify-center flex-col text-center rounded-xl">
          <Link
            href={'/'}>
            <Image
              className="absolute md:w-[22%] w-3/12 left-1/2 -translate-x-1/2 md:-top-20 -top-14 p-2 bg-white rounded-t-full hover:scale-110 ease-in-out duration-200"
              src="/spots.ico"
              width={250}
              height={250}
              alt='logo'
              priority />
          </Link>

          <h2 className="text-3xl font-bold text-center mb-10 mt-20">
            Daftar Akun
          </h2>

          <form>
            <input
              type='text'
              placeholder="Email Anda"
              className="border border-gray-300 rounded-xl w-11/12 py-2 text-center mx-3 my-1"
              required
            />

            <input
              type='password'
              placeholder="Password Anda"
              className="border mt-4 border-gray-300 rounded-xl w-11/12 py-2 text-center mx-3 my-1"
              required
            />

            <input
              type="text"
              placeholder="Nama Depan"
              className="border mt-4 border-gray-300 rounded-xl w-11/12 py-2 text-center mx-3 my-1"
              required
            />

            <input
              type="text"
              placeholder="Nama Belakang"
              className="border mt-4 border-gray-300 rounded-xl w-11/12 py-2 text-center mx-3 my-1"
              required
            />

            <input
              type="email"
              placeholder="Alamat Email"
              className="border mt-4 border-gray-300 rounded-xl w-11/12 py-2 text-center mx-3 my-1"
              required
            />


            <input
              type="password"
              placeholder="Kata Sandi"
              required
              className="border mt-4 border-gray-300 rounded-xl w-11/12 py-2 text-center mx-3 my-1"
            />

            <input
              type="password"
              placeholder="Ulangi Kata Sandi"
              className="border mt-4 border-gray-300 rounded-xl w-11/12 py-2 text-center mx-3 my-1"
              required
            />

            <input
              type="number"
              placeholder="Nomor Telepon"
              className="border mt-4 border-gray-300 rounded-xl w-11/12 py-2 text-center mx-3 my-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
            />

            <div className='flex justify-evenly items-center'>
              <p>Daftar Sebagai</p>
              <select className="select select-bordered rounded-xl border-2 m-2 py-2 w-full max-w-xs text-center"
                required
              >
                <option value="TENANT">Penyewa</option>
                <option value="OWNER">Penyedia</option>
              </select>
            </div>

            <hr className="border-blue-950 w-10/12 mx-auto mt-10" />

            <div className='flex justify-between mx-10 mb-10 gap-x-10'>
              <button
                type="submit"
                className="block bg-blue-950 border hover:bg-blue-400 active:bg-green-400 text-white font-semibold rounded-lg md:px-20 px-6 py-3 mt-6">
                Daftar
              </button>
              <Link className="block bg-gray-200 border hover:bg-blue-400 active:bg-green-400 text-blue-950 font-semibold rounded-lg md:px-20 px-6 py-3 mt-6"
                href='/login'>
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
