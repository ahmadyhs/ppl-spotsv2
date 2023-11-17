"use client";

import { useState } from "react";
import api from "../lib/apiCalls/api";
import toast from "react-hot-toast";

export default function ResetPasswordModal({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  let passwordMatch = true;

  if (password !== confirmPassword) {
    passwordMatch = false;
  } else passwordMatch = true;

  async function passwordReset() {
    try {
      await api.post("/auth/reset-password", {
        // auth token
        password: password,
        confirmPassword: confirmPassword,
      });

      toast.success("Password berhasil diubah");
    } catch (error) {
      toast.error("Ubah Password gagal");
    }
  }
  return (
    <div className="fixed left-0 top-0 h-screen w-screen bg-black bg-opacity-50">
      <div className="absolute left-1/2 top-1/2 z-30 w-1/2 min-w-min -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white p-4">
        <button
          className="absolute right-0 top-0 rounded-none rounded-bl-md rounded-tr-xl bg-red-500 px-1 text-white"
          onClick={toggleModal}
        >
          X
        </button>

        <p>Kirim Email ganti password</p>

        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            if (password.length < 8) {
              toast.error("Password minimal 8 digit!");
            } else if (passwordMatch) {
              // passwordReset()
            } else toast.error("Password tidak cocok!");
          }}
        >
          <input
            type="password"
            placeholder="Kata Sandi"
            required
            className={
              "mx-auto my-4 w-11/12 rounded-xl border border-gray-300 py-2 text-center"
            }
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Ulangi Kata Sandi"
            className={
              "mx-auto my-4 w-11/12 rounded-xl border border-gray-300 py-2 text-center"
            }
            required
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
          />

          {!passwordMatch && (
            <p className="mb-2 text-red-400">Password tidak cocok</p>
          )}

          <button className="bg-blue-700 px-6 py-2 text-white">Kirim</button>
        </form>
      </div>
    </div>
  );
}
