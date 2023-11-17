import Image from "next/image";

const AdminCoworkingSpace = () => {
  const fetched: boolean = true;
  const spacesResult = true;

  return (
    <section className="col-span-8 max-h-screen md:col-span-6">
      <title>Data Coworking Space</title>
      <div className="h-1/12 flex justify-center">
        <p className="mt-10 text-center text-3xl font-semibold text-black">
          DATA COWORKING SPACE
        </p>
      </div>

      <div className="h-11/12 block justify-center overflow-x-scroll">
        <table className="mx-10 mt-10 h-fit w-11/12">
          <thead className="flex h-1/6 w-full border-2 border-[#3C4158]">
            <tr className="flex w-full items-center bg-[#3C4158] text-center">
              <th className="w-10 p-2 xl:w-1/12">ID</th>
              <th className="w-36 p-2 xl:w-2/12">Nama</th>
              <th className="w-28 p-2 xl:w-2/12">Harga Sewa</th>
              <th className="w-20 p-2 xl:w-1/12">Kapasitas</th>
              <th className="w-36 p-2 xl:w-1/12">Lokasi</th>
              <th className="w-60 p-2 xl:w-3/12">Foto</th>
              <th className="w-40 p-2 xl:w-2/12">Status</th>
            </tr>
          </thead>

          <tbody className="flex h-[70vh] w-full flex-col items-center overflow-y-scroll border-2 border-[#3C4158] text-black">
            {
              fetched && spacesResult && (
                // spacesResult.map((spaces) => {
                //   return (
                <tr
                  className="flex w-full"
                  // key={spaces.name}
                >
                  <td className="2xl:w-1/12 w-10 border border-black p-2">
                    {/* {spaces.location && spaces.location.space_id}
                      {!spaces.location && <p></p>} */}
                  </td>
                  <td className="w-36 border border-black p-2 xl:w-2/12">
                    {/* {spaces.name} */}
                  </td>
                  <td className="w-28 border border-black p-2 xl:w-2/12">
                    {/* Rp. {spaces.price} */}
                  </td>
                  <td className="w-20 border border-black p-2 xl:w-1/12">
                    {/* {spaces.capacity} */}
                  </td>
                  <td className="w-36 border border-black p-2 xl:w-2/12">
                    {/* {spaces.location && spaces.location.address}
                      {!spaces.location && <p>Tidak dideskripsikan</p>} */}
                  </td>
                  <td className="flex w-60 justify-center border border-black p-2 xl:w-3/12">
                    {/* {spaces.coworking_space_images[0] && ( */}
                    <Image
                      alt="foto"
                      // src={spaces.coworking_space_images[0].image_url}
                      src={"/office.png"}
                      width={200}
                      height={200}
                    />
                    {/* )} */}
                    {/* {!spaces.coworking_space_images[0] && (
                        <p>Belum upload foto</p>
                      )} */}
                  </td>
                  <td className="grid w-40 items-center border border-black p-2 xl:w-2/12">
                    {/* {spaces.location &&
                        blockColor(spaces.status, spaces.location.space_id)}
                      {!spaces.location && blockColor(spaces.status, 0)} */}
                  </td>
                </tr>
              )
              // );
              // })
            }

            {fetched && !spacesResult && (
              <tr className="flex w-full">
                <td className="w-full p-4">Ambil data gagal!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminCoworkingSpace;
