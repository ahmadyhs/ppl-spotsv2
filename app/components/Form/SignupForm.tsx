"use client";

import api from "@/app/lib/apiCalls/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SignupForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userType, setUserType] = useState("TENANT");

  const style =
    "mx-3 my-1 mt-4 w-11/12 rounded-xl border border-gray-300 py-2 text-center";

  let passwordMatch = true;

  if (password !== confirmPassword) {
    passwordMatch = false;
  } else passwordMatch = true;

  function registerUser() {
    const post = async () => {
      try {
        await api.post("/auth/register", {
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          firstName: firstName,
          lastName: lastName,
          phoneNumber: phoneNumber,
          userType: userType,
        });
        // console.log("RES = ", respond);
        toast.success("Akun berhasil didaftarkan");
        router.push("/login");
      } catch (error: any) {
        // console.log("ERR = ", error);
        toast.error("Sesuatu berjalan tidak seharusnya");
      }
    };

    // function post() {
    //   api
    //     .post("/auth/register", {
    //       data,
    //     })
    //     .then((response) => console.log("RES = ", response))
    //     .catch((error) => console.log("ERR = ", error));
    // }

    // function post() {
    //   fetch("https://api.spotscoworking.live/auth/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-type": "application/json; charset=UTF-8",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((response) =>
    //       //console.log("RES = ", response.text()
    //       response.text(),
    //     )
    //     .then((result) => {
    //       const r = JSON.parse(result);
    //       console.log("RES = ", r);
    //     })
    //     .catch((error) => console.log("ERR = ", error));
    // }

    post();
  }

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        if (password.length < 8) {
          toast.error("Password minimal 8 digit!");
        } else if (!RegExp("^[1-9][0-9]{0,14}$").test(phoneNumber)) {
          toast.error("Nomor telepon harus disertai kode negara");
        } else if (passwordMatch) {
          registerUser();
        } else toast.error("Password tidak cocok!");
      }}
    >
      <input
        type="text"
        placeholder="Nama Depan"
        className={style}
        required
        value={firstName}
        onChange={(e: any) => setFirstName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Nama Belakang"
        className={style}
        required
        value={lastName}
        onChange={(e: any) => setLastName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Alamat Email"
        className={style}
        required
        value={email}
        onChange={(e: any) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Kata Sandi"
        required
        className={style}
        value={password}
        onChange={(e: any) => setPassword(e.target.value)}
      />

      <input
        type="password"
        placeholder="Ulangi Kata Sandi"
        className={style}
        required
        value={confirmPassword}
        onChange={(e: any) => setConfirmPassword(e.target.value)}
      />

      {!passwordMatch && <p className="text-red-400">Password tidak cocok</p>}

      <input
        type="number"
        placeholder="Nomor Telepon"
        className="mx-3 my-1 mt-4 w-11/12 rounded-xl border border-gray-300 py-2 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        required
        value={phoneNumber}
        onChange={(e: any) => setPhoneNumber(e.target.value)}
      />

      <div className="flex items-center justify-evenly">
        <p>Daftar Sebagai</p>
        <select
          className="select select-bordered m-2 w-full max-w-xs rounded-xl border-2 py-2 text-center"
          required
          value={userType}
          onChange={(e: any) => setUserType(e.target.value)}
        >
          <option value="TENANT">Penyewa</option>
          <option value="OWNER">Penyedia</option>
        </select>
      </div>

      <hr />

      <div className="mx-10 mb-10 flex justify-between gap-x-10">
        <button
          type="submit"
          className="mt-6 block border bg-blue-950 px-6 py-3 text-white hover:bg-blue-400 active:bg-green-400 md:px-20"
        >
          Daftar
        </button>
        <Link
          className="mt-6 block rounded-lg border bg-gray-200 px-6 py-3 font-semibold text-blue-950 hover:bg-blue-400 active:bg-green-400 md:px-20"
          href="/login"
        >
          Login
        </Link>
      </div>
    </form>
  );
}