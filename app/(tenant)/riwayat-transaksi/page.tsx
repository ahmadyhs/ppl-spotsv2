import getTenantTransactionList, {
  TenantTransactionHistory,
} from "@/app/lib/apiCalls/getTenantTransactionList";
import TenantTransactionTable from "@/app/components/TenantTransactionTable";

export default function TenantTransactionHistory() {
  const transactionResult = getTenantTransactionList();

  return (
    <>
      <title>Riwayat Transaksi</title>

      <h1>Daftar Transaksi</h1>

      <div className="flex justify-center">
        <table className="mb-10 md:w-11/12">
          <thead>
            <tr className="bg-darkblue w-full text-center font-bold text-white">
              <th className="w-1/5">Nomor Transaksi</th>
              <th className="w-1/5">Tanggal Transaksi</th>
              <th className="w-1/5">Nama Coworking Space</th>
              <th className="w-1/5">Harga</th>
              <th className="w-1/5">Status Transaksi</th>
            </tr>
          </thead>
          <tbody className="bg-gray-300 text-center text-xs font-semibold text-black md:text-base">
            {
              // isDataFetched &&
              transactionResult &&
                transactionResult.bookings.map((transaction) => {
                  return (
                    <TenantTransactionTable
                      key={transaction.booking_id}
                      id={transaction.booking_id}
                      date={transaction.date}
                      name={transaction.coworking_space.name}
                      payment={transaction.payment}
                    />
                  );
                })
            }
          </tbody>
        </table>
      </div>
      {
        //isDataFetched &&
        transactionResult.bookings.length === 0 && (
          <p className="px-2 text-center text-black">
            Anda belum pernah melakukan transaksi
          </p>
        )
      }
    </>
  );
}
