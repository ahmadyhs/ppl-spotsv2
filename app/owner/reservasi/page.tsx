export default function SpaceOwnerReservationList() {
  const isDataFetched: boolean = true;

  return (
    <section className="col-span-8 max-h-screen bg-white md:col-span-6">
      <title>Transaksi Tercatat</title>
      <div className="h-1/12 flex justify-center">
        <p className="mt-10 text-center text-3xl font-semibold text-black">
          DATA TRANSAKSI
        </p>
      </div>

      <div className="h-11/12 block justify-center overflow-x-scroll">
        <table className="mx-10 mb-2 mt-10 h-fit w-11/12">
          <thead className="flex h-1/6 w-full border-2 border-[#3C4158]">
            <tr className="flex w-full items-center bg-[#3C4158] text-center">
              <th className="w-40 p-2 lg:w-1/6">ID</th>
              <th className="w-36 p-2 lg:w-1/6">Nama Space</th>
              <th className="w-28 p-2 lg:w-1/6">Tanggal</th>
              <th className="w-28 p-2 lg:w-1/6">Jumlah Pembayaran</th>
              <th className="w-28 p-2 lg:w-1/6">Metode Pembayaran</th>
              <th className="w-40 p-2 xl:w-1/6">Status</th>
            </tr>
          </thead>

          <tbody className="flex h-[65vh] w-full flex-col items-center overflow-y-scroll border-2 border-[#3C4158] text-black">
            {isDataFetched && (
              // !transactionResult  &&
              <tr className="flex w-full">
                <td className="w-full p-4">Ambil data gagal!</td>
              </tr>
            )}

            {isDataFetched && (
              // transactionResult.length === 0  &&
              <tr className="flex w-full">
                <td className="w-full p-4 text-center">
                  Belum ada transaksi tercatat
                </td>
              </tr>
            )}

            {isDataFetched && (
              // transactionResult.length !== 0 &&
              // transactionResult.map(transaction =>{
              // return
              <tr
                className="flex w-full"
                // key={transaction.booking_id}
              >
                <td className="w-40 border border-black p-2 lg:w-1/6">
                  {/* {transaction.booking_id} */}
                </td>

                <td className="w-36 border border-black p-2 lg:w-1/6">
                  {/* {transaction.coworking_space.name} */}
                </td>

                <td className="w-28 border border-black p-2 lg:w-1/6">
                  {/* {transaction.date} */}
                </td>

                <td className="w-28 border border-black p-2 lg:w-1/6">
                  {/* {transaction.payment && 'Rp. ' + transaction.payment.amount}
                                        {!transaction.payment && <p>Belum dibayar</p>} */}
                </td>

                <td className="w-28 border border-black p-2 lg:w-1/6">
                  {/* {transaction.payment && transaction.payment.method}
                                        {!transaction.payment && <p>Belum dibayar</p>} */}
                </td>

                <td className="flex w-40 items-center justify-center border border-black p-2 xl:w-1/6">
                  {/* {transaction.payment && blockColor(transaction.payment.status)}
                                        {!transaction.payment && blockColor(null)} */}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
