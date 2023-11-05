import Image from 'next/image';

const Owner = () => {
  const fetched: boolean = true

  return (
    <section className="md:col-span-6 col-span-8 bg-white max-h-screen">
      <div className='h-screen overflow-auto'>
        <div className='flex justify-center'>
          <p className='mt-10 mb-5 text-black font-semibold text-3xl'>DATA OWNER</p>
        </div>

        {fetched &&
          <div className='border-dashed border-2 border-black p-4 mx-10 mb-4 rounded-xl'>
            <div className='flex justify-center'>
              <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                <p className='w-4/12'>Nama Depan</p>
                :
                <div className="rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                <p className='w-4/12'>Nama Belakang</p>
                :
                <div className="rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-10/12 flex text-xl text-black  justify-center items-center'>
                <p className='w-4/12'>Email</p>
                :
                <div className="rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                <p className='w-4/12'>Nomor Telepon</p>
                :
                <div className="rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                <p className='w-4/12'>NIK</p>
                :
                <div className="rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                <p className='w-4/12'>Bank</p>
                :
                <div className="rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                <p className='w-4/12'>Nomor Kartu</p>
                :
                <div className="rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                <p className='w-4/12'>Balance</p>
                :
                <div className="rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                <p className='w-4/12'>KTP</p>
                :
                <div className="flex justify-center rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <div className='w-10/12 text-xl text-black flex justify-center items-center'>
                <p className='w-4/12'>Status</p>
                :
                <div className="rounded-xl w-8/12 py-2 text-center m-2">
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  )
}

export default Owner;