import Image from "next/image";

const AdminPenyewa = () => {
  const fetched: boolean = true;

  return (
    <section className="col-span-8 max-h-screen md:col-span-6">
      <title>Data Penyedia Tempat</title>
      <div className="h-screen overflow-auto">
        <div className="flex justify-center">
          <p className="mb-5 mt-10 text-3xl font-semibold text-black">
            DATA PENYEDIA
          </p>
        </div>

        {fetched && (
          <div className="mx-10 mb-4 rounded-xl border-2 border-dashed border-black p-4">
            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center text-xl text-black">
                <p className="w-4/12">Nama Depan</p>
                <div className="m-2 w-8/12 rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center text-xl text-black">
                <p className="w-4/12">Nama Belakang</p>:
                <div className="m-2 w-8/12 rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center  text-xl text-black">
                <p className="w-4/12">Email</p>:
                <div className="m-2 w-8/12 rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center text-xl text-black">
                <p className="w-4/12">Nomor Telepon</p>:
                <div className="m-2 w-8/12 rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center text-xl text-black">
                <p className="w-4/12">NIK</p>:
                <div className="m-2 w-8/12 rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center text-xl text-black">
                <p className="w-4/12">Bank</p>:
                <div className="m-2 w-8/12 rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center text-xl text-black">
                <p className="w-4/12">Nomor Kartu</p>:
                <div className="m-2 w-8/12 rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center text-xl text-black">
                <p className="w-4/12">Balance</p>:
                <div className="m-2 w-8/12 rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center text-xl text-black">
                <p className="w-4/12">KTP</p>:
                <div className="m-2 flex w-8/12 justify-center rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex w-10/12 items-center justify-center text-xl text-black">
                <p className="w-4/12">Status</p>:
                <div className="m-2 w-8/12 rounded-xl py-2 text-center">
                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminPenyewa;
