import getSpaceByID from "@/app/lib/apiCalls/getSpaceByID";
import BookingForm from "@/app/components/Form/BookingForm";

export default function Booking(id: number) {
  const isDataFetched = true;
  const spaceResult = getSpaceByID(id);

  return (
    <>
      <title>Booking</title>

      <h1>Booking Workspace</h1>

      <p className="text-l bg-white pb-8 pl-12 text-black">
        Mohon cek ulang data yang dimasukkan
      </p>

      {isDataFetched && <BookingForm {...spaceResult} />}
    </>
  );
}
