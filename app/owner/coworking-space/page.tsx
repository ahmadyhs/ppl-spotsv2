import Link from "next/link";

const SpaceOwner = () => {
  const blockColor = (status: string) => {
    let bgColor: string;
    let statusText: string;

    if (status === "APPROVED") {
      bgColor = "bg-green-400";
      statusText = "Disetujui";
    } else if (status === "REJECTED") {
      bgColor = "bg-red-400";
      statusText = "Ditolak";
    } else if (status === null) {
      bgColor = "bg-red-400";
      statusText = "Suspended";
    } else {
      bgColor = "bg-yellow-400";
      statusText = "Pending";
    }

    return (
      <div
        className={`${bgColor} rounded-full bg-yellow-400 px-6 py-3 text-center`}
      >
        {statusText}
      </div>
    );
  };

  return (
    <section className="col-span-8 max-h-screen md:col-span-6">
      <title>Coworking Space Anda</title>
      <div className="h-1/12 flex justify-center">
        <p className="mt-10 text-center text-3xl font-semibold text-black">
          DATA COWORKING SPACE
        </p>
      </div>

      <div className="h-11/12 block justify-center overflow-x-scroll">
        <table className="mx-10 mt-10 w-11/12">
          <thead className="flex h-1/6 w-full border-2 border-[#3C4158]">
            <tr className="flex w-full items-center bg-[#3C4158] text-center">
              <th className="2xl:w-1/12 w-10 p-2">ID</th>
              {/* <th className="p-2 w-1/12 border border-black">Owner ID</th> */}
              <th className="2xl:w-2/12 w-36 p-2">Nama</th>
              <th className="2xl:w-1/12 w-20 p-2">Harga Sewa</th>
              <th className="2xl:w-1/12 w-20 p-2">Kapasitas</th>
              <th className="2xl:w-2/12 w-36 p-2">Lokasi</th>
              <th className="2xl:w-3/12 w-60 p-2">Foto</th>
              <th className="2xl:w-2/12 w-40 p-2">Status</th>
              <th className="w-40 p-2">Edit</th>
            </tr>
          </thead>

          <tbody className="flex h-[65vh] w-full flex-col items-center overflow-y-scroll border-2 border-[#3C4158] text-black">
            {/* {isDataFetched && !spacesResult && ( */}
            <tr className="flex w-full">
              <td className="w-full p-4">Ambil data gagal!</td>
            </tr>
            {/* )} */}

            {/* {isDataFetched && spacesResult.length === 0 && ( */}
            <tr className="flex w-full">
              <td className="w-full p-4 text-center">
                Anda Belum Mendaftarkan Tempat Anda
              </td>
            </tr>
            {/* )} */}

            {/* {isDataFetched &&
              spacesResult.length !== 0 &&
              spacesResult.map((spaces) => {
                return ( */}
            <tr
              // key={spaces.name}
              className="flex w-full"
            >
              <td className="2xl:w-1/12 w-10 border border-black p-2">
                {/* {spaces.location && spaces.location.space_id}
                      {!spaces.location && <p></p>} */}
              </td>

              <td className="2xl:w-2/12 w-36 border border-black p-2">
                {/* {spaces.name} */}
              </td>

              <td className="2xl:w-1/12 w-20 border border-black p-2">
                {/* {spaces.price} */}
              </td>

              <td className="2xl:w-1/12 w-20 border border-black p-2">
                {/* {spaces.capacity} */}
              </td>

              <td className="2xl:w-2/12 w-36 border border-black p-2">
                {/* {spaces.location && spaces.location.address}
                      {!spaces.location && <p>Tidak dideskripsikan</p>} */}
              </td>

              <td className="2xl:w-3/12 flex w-60 justify-center border border-black p-2">
                {/* {spaces.coworking_space_images[0] && (
                        <Image
                          alt="foto"
                          src={spaces.coworking_space_images[0].image_url}
                          width={200}
                          height={200}
                        />
                      )}
                      {!spaces.coworking_space_images[0] && (
                        <p>Belum upload foto</p>
                      )} */}
              </td>

              <td className="2xl:w-2/12 flex w-40 items-center justify-center border border-black p-2">
                {/* {spaces.location &&
                        blockColor(spaces.status, spaces.location.space_id)}
                      {!spaces.location && blockColor(null, 0)} */}
              </td>

              <td className="flex w-40 items-center justify-center border border-black p-2 text-white">
                {/* {spaces.location && (
                        <Link
                          className={
                            "h-fit rounded-full bg-[#17224D] px-10 py-3 text-center hover:bg-blue-400 active:bg-green-400"
                          }
                          href={"/owner/edit/" + spaces.location.space_id}
                        >
                          Edit
                        </Link>
                      )} */}
              </td>
            </tr>
            {/* );
            })} */}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default SpaceOwner;
