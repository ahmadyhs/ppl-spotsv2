"use client";

import { useState, useCallback, useRef } from "react";
import getSpaceByID, {
  SpaceResultDetail,
} from "@/app/lib/apiCalls/getSpaceByID";
import Image from "next/image";
import Link from "next/link";
import moneySplitter from "@/app/lib/moneySplitter";
import CalendarView from "@/app/components/CalendarView";
import MapVisualization from "@/app/components/MapVisualization";
import { HiMiniMapPin } from "react-icons/hi2";
import { GoX } from "react-icons/go";

export default function ClientDetailView({
  coworking_space,
}: SpaceResultDetail) {
  const space = coworking_space;
  const isDataFetched = true;
  const page = useRef(null);
  const [hideScroll, sethideScroll] = useState(false);
  const [showPictureContainer, setShowPictureContainer] = useState(false);

  const togglePictureContainer = useCallback(() => {
    sethideScroll((value) => !value);
    //   hideScroll === "" ? "h-detailview absolute overflow-hidden" : "",
    // );

    // document.getElementById("page")?.classList.toggle("overflow-hidden");

    setShowPictureContainer((value) => !value);
  }, []);

  return (
    <div
      className={
        hideScroll
          ? "h-detailview absolute overflow-hidden"
          : "h-detailview absolute "
      }
      ref={page}
      id="page"
    >
      <title>Detail</title>

      {isDataFetched && (
        <>
          <h1>{space && space.name}</h1>

          {showPictureContainer && (
            <div className="fixed top-0 z-30 flex h-screen justify-center bg-white bg-opacity-50">
              <div className="relative flex w-3/4 flex-wrap overflow-x-hidden overflow-y-scroll bg-white p-4">
                <span
                  className="sticky top-0 cursor-pointer"
                  onClick={togglePictureContainer}
                >
                  <GoX size="2em" />
                </span>
                {space.coworking_space_images.map((picture: any) => {
                  return (
                    <Image
                      key={picture.image_url}
                      alt="room"
                      src={picture.image_url}
                      className="aspect-video w-full object-cover p-6"
                      width={1280}
                      height={720}
                    />
                  );
                })}
              </div>
            </div>
          )}

          <div className="grid rounded-xl py-2 md:grid-cols-3">
            <div className="relative my-5 flex rounded-xl bg-black md:col-span-2 md:mx-10 md:ml-10 md:mr-2 ">
              <Image
                alt="room"
                src={space.coworking_space_images[0].image_url}
                className="aspect-video w-full rounded-xl bg-left object-cover"
                width={1280}
                height={720}
              />

              <span
                className="absolute bottom-4 right-4 cursor-pointer rounded-full bg-white px-2 font-medium"
                onClick={togglePictureContainer}
              >
                Lihat Selengkapnya
              </span>
            </div>
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

              <div className="grid justify-center">
                <CalendarView />
              </div>

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

          <div className="mb-4 flex justify-center md:mx-10">
            <MapVisualization
              lat={space.location.latitude}
              lng={space.location.longitude}
            />
          </div>
        </>
      )}
    </div>
  );
}
