import CalendarView from "@/app/components/CalendarView";
import MapVisualization from "@/app/components/MapVisualization";

import getSpaceByID, {
  SpaceResultDetail,
} from "@/app/lib/apiCalls/getSpaceByID";
import moneySplitter from "@/app/lib/moneySplitter";
import Image from "next/image";
import Link from "next/link";
import { HiMiniMapPin } from "react-icons/hi2";

export default function SpaceDetail(id: number) {
  const result = getSpaceByID(id);
  const space = result.coworking_space;
  const isDataFetched = true;

  return (
    <>
      <title>Detail</title>

      {isDataFetched && (
        <>
          <h1>{space && space.name}</h1>

          <div className="max-w-screen my-5 flex h-80 overflow-x-scroll rounded-xl bg-black md:mx-10 ">
            {space.coworking_space_images.map((picture: any) => {
              return (
                <Image
                  key={picture.image_url}
                  alt="room"
                  src={picture.image_url}
                  className="aspect-video w-full bg-left object-cover"
                  width={1280}
                  height={720}
                />
              );
            })}
          </div>

          <div className="grid rounded-xl py-2 md:grid-cols-3">
            <div className="border-1 mb-3 mt-5 rounded-xl bg-gray-100 p-5 md:col-span-2 md:ml-10 md:mr-2">
              <div className="flex">
                <p className="text-xl font-semibold">Tentang</p>
                <p className="mx-2 text-xl font-semibold text-gray-600">
                  Coworking Space
                </p>
              </div>
              <p className="mt-2 font-medium text-gray-600">
                {space.description}
              </p>
            </div>
            <div className="border-1 right mb-3 mt-5 rounded-xl bg-gray-100 p-5 md:col-span-1 md:ml-2 md:mr-10">
              <p className="text-xl font-bold">Harga</p>
              <p className="mt text-2xl font-bold text-cyan-500">
                Rp {moneySplitter(space.price)}/Jam
              </p>
            </div>
          </div>

          <div className="m-auto grid rounded-xl py-2 md:grid-cols-3">
            <div className="border-1 mb-3 mt-5 rounded-xl bg-gray-100 p-5 md:col-span-2 md:ml-10 md:mr-2">
              <p className="mb-2 text-xl font-semibold">Fasilitas</p>
              <ul className="ml-10 list-disc font-medium text-gray-600">
                <li>{space.capacity} Kursi</li>
                {space &&
                  space.coworking_space_facilities.map((fac) => {
                    return (
                      <li key={fac.facility.facility_id}>
                        {fac.facility.name}
                      </li>
                    );
                  })}
              </ul>
              <p className="mt-2 text-xl font-semibold">Lokasi</p>
              <div className="flex items-center">
                <HiMiniMapPin size="2em" />
                <p className="mt-2 font-medium text-gray-600">
                  {space && space.location.address}
                </p>
              </div>
            </div>

            <div className="border-1 right mb-3 mt-5 rounded-xl bg-gray-100 p-5 md:col-span-1 md:ml-2 md:mr-10">
              <p className="mb-4 text-xl font-semibold">
                Cek Waktu Kosong Tempat
              </p>

              <CalendarView />

              <hr />

              <Link
                type="submit"
                className="m-auto mt-5 flex justify-center rounded-full bg-blue-950 px-20
                py-3 text-center font-semibold text-white hover:bg-blue-400"
                href={`/booking/${space.location.location_id}`}
              >
                Booking
              </Link>
            </div>
          </div>

          <div className="mx-10 mb-4 flex justify-center">
            <MapVisualization
              lat={space.location.latitude}
              lng={space.location.longitude}
            />
          </div>
        </>
      )}
    </>
  );
}
