import Image from 'next/image'
import Link from 'next/link'

export default function Login() {

    return (
        <main>
            <title>Login</title>

            <div className=" bg-blue-950 flex overflow-y-scroll h-screen justify-center items-center">
                <div className="relative mt-20 mb-8 bg-white right flex w-fit justify-center flex-col text-center rounded-xl">
                    <Link
                        href={'/'}>
                        <Image
                            className="absolute md:w-[22%] w-3/12 left-1/2 -translate-x-1/2 sm:-top-20 -top-14 p-2 bg-white rounded-t-full hover:scale-110 ease-in-out duration-200"
                            src="/spots.ico"
                            width={250}
                            height={250}
                            alt='logo'
                            priority />
                    </Link>

                    <h2 className="text-3xl font-bold text-center mb-10 mt-20">
                        Login
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

                        <hr className="border-blue-950 w-10/12 mx-auto mt-10" />

                        <Link className='flex md:px-12 px-8 mt-2 text-blue-500 text-xs'
                            href={'/'}>
                            Lupa password?
                        </Link>

                        <div className='flex justify-between mx-10 mb-10 gap-x-10'>
                            <button
                                type="submit"
                                className="block bg-blue-950 border hover:bg-blue-400 active:bg-green-400 text-white font-semibold rounded-lg md:px-20 px-6 py-3 mt-6">
                                Masuk
                            </button>
                            <Link className="block bg-gray-100 border hover:bg-blue-400 active:bg-green-400 text-blue-950 font-semibold rounded-lg md:px-20 px-6 py-3 mt-6"
                                href='/signup'>
                                Daftar
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
