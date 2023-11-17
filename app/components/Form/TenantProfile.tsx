"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TenanttProfileForm({
  pictuteURLProps,
  firstNameProps,
  lastNameProps,
  emailProps,
  phoneNumberProps,
}: {
  pictuteURLProps?: string;
  firstNameProps: string;
  lastNameProps: string;
  emailProps: string;
  phoneNumberProps: number;
}) {
  const [picture, setPicture] = useState(pictuteURLProps);
  const [firstName, setFirstName] = useState(firstNameProps);
  const [lastName, setLastName] = useState(lastNameProps);
  const [email, setEmail] = useState(emailProps);
  const [phoneNumber, setPhoneNumber] = useState(phoneNumberProps);

  return (
    <div className="justtify-center from-darkblue my-10 block items-center bg-gradient-to-br to-blue-950 py-20">
      <div className="right flex justify-center">
        <div className="m-6 rounded-2xl bg-slate-100 p-8">
          <Image
            alt="profile-picture"
            className="scale-75 rounded-xl md:scale-100"
            src={picture ? picture : "/person.png"}
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="mx-8 rounded-xl bg-slate-100 p-6">
        <div className="my-3 grid grid-cols-2 items-center md:grid-cols-3">
          <p className="text-darkblue w-full text-xl font-medium">Nama Depan</p>
          <p className="text-darkblue w-full break-words text-xl font-medium md:col-span-2">
            {firstName}
          </p>
        </div>

        <div className="my-3 grid grid-cols-2 items-center md:grid-cols-3">
          <p className="text-darkblue w-full text-xl font-medium">
            Nama Belakang
          </p>
          <p className="text-darkblue w-full break-words text-xl font-medium md:col-span-2">
            {lastName}
          </p>
        </div>

        <div className="my-3 grid grid-cols-2 items-center md:grid-cols-3">
          <p className="text-darkblue w-full text-xl font-medium">Email</p>
          <p className="text-darkblue w-full break-words text-xl font-medium md:col-span-2">
            {email}
          </p>
        </div>

        <div className="my-3 grid grid-cols-2 items-center md:grid-cols-3">
          <p className="text-darkblue w-full text-xl font-medium">
            Nomor Telepon
          </p>
          <p className="text-darkblue w-full break-words text-xl font-medium md:col-span-2">
            {phoneNumber}
          </p>
        </div>
        <div className="flex items-center">
          <Link
            className=" m-auto mt-10 rounded-lg border border-teal-200 bg-blue-950 px-20
              py-3 font-semibold text-white hover:bg-blue-400"
            href="/profile/edit"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}
