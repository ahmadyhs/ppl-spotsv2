import moneySplitter from "../lib/moneySplitter";

export default function TenantTransactionTable({
  id,
  date,
  name,
  payment,
}: {
  id: string;
  date: string;
  name: string;
  payment: {
    amount?: string;
    method?: string;
    status?: string;
  };
}) {
  function blockColor(status: string | undefined) {
    let bgColor: string;
    let statusText: string;

    if (status === "settlement") {
      bgColor = "bg-green-400";
      statusText = "Disetujui";
    } else if (status === "pending") {
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
  }

  return (
    <tr key={id}>
      <td className="px-2">{id}</td>
      <td>{date}</td>
      <td>{name}</td>
      <td>
        {payment && "Rp. "}
        {/* {(transaction.payment && transaction.payment.amount) ||
        "belum dibayar"} */}
        {payment.amount ? moneySplitter(payment.amount) : "belum dibayar"}
      </td>
      <td className="p-4">{blockColor(payment && payment.status)}</td>
    </tr>
  );
}
