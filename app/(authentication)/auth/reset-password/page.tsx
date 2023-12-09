"use client";

import api from "@/app/lib/apiCalls/api";
import axios, { AxiosError } from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function submitResetPassword() {
    try {
      const response = await api.post("/lib/apiCalls/auth/login", {
        resetToken: token,
        password: password,
        confirmPassword: confirmPassword,
      });

      if (response.status === 200) {
        router.push("/login");
      }
      // setTimeout(() => {
      //   toast.success("Login berhasil");
      // }, 500);
    } catch (error) {
      const err: any = error as AxiosError;
      toast.error(err?.response?.data);
    }
  }

  return (
    <>
      <title>Reset Password</title>

      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          // submitLogin();
        }}
      >
        <input
          type="text"
          placeholder="Password Baru"
          className="mx-3 my-1 w-11/12 rounded-xl border border-gray-300 py-2 text-center"
          required
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Ulangi Password Baru"
          className="mx-3 my-1 mt-4 w-11/12 rounded-xl border border-gray-300 py-2 text-center"
          required
          value={confirmPassword}
          onChange={(e: any) => setConfirmPassword(e.target.value)}
        />

        <hr />

        <div className="mx-10 mb-10 flex justify-between gap-x-10">
          <button
            type="submit"
            className="mt-6 block bg-blue-950 px-6 py-3 text-white hover:bg-blue-400 active:bg-green-400 md:px-20"
          >
            Kirim
          </button>
          <Link
            className="mt-6 block rounded-lg bg-gray-200 px-6 py-3 font-semibold text-blue-950 hover:bg-blue-400 active:bg-green-400 md:px-20"
            href="/login"
          >
            login
          </Link>
        </div>
      </form>
    </>
  );
}
