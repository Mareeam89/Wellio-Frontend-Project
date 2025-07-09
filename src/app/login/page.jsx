"use client";

import React, { useState } from "react";
import ChronoxLogo from "../../assets/logos/ChronoxLogo.svg";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const navigateTo = (path) => {
    router.push(path); // or router.replace(path) for navigation without adding to history
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.toLowerCase() === "admin" && password === "Admin") {
      navigateTo("/dashboard");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4">
      <Link href="/" className="self-start flex items-center gap-2 py-2">
        <div className="md:h-[50px] md:w-[50px] h-[40px] w-[40px] flex justify-center items-center bg-white rounded-full border border-[#86ebd8]">
          <Image src={ChronoxLogo} alt="Wellio Logo" className="w-[32px] max-md:w-[24px]" />
        </div>
        <span className="xl:text-[32px] lg:text-[28px] text-[22px] font-bold text-[#1A1A1A]">Wellio</span>
      </Link>

      <div className="max-w-md w-full my-auto space-y-8 mt-[80px]">
        <div>
          <h2 className="mt-6 text-center xl:text-[30px] md:text-[26px] text-[22px] font-semibold text-gray-900">
            Welcome back! Glad <br />
            to see you, Again!
          </h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-center xl:text-[16px] md:text-[14px] text-[12px]">{error}</div>}

          <div className="rounded-lg -space-y-px">
            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="appearance-none relative block w-full sm:p-4 p-[14px] bg-slate-100 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:xl:text-[16px] md:text-[14px] text-[12px]"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none relative block w-full sm:p-4 p-[14px] bg-slate-100 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:xl:text-[16px] md:text-[14px] text-[12px]"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="xl:text-[16px] md:text-[14px] text-[12px]">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Forgot Password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent xl:text-[16px] md:text-[14px] text-[12px] font-medium rounded-lg text-white bg-[#24CDAF] hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </div>
        </form>

        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center xl:text-[16px] md:text-[14px] text-[12px]">
            <span className="px-2 bg-white text-gray-500">Or Login with</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <button className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-lg xl:text-[20px] md:text-[18px] text-[16px] font-medium text-blue-500 bg-white hover:bg-slate-50 hover:border-[#24CDAF]">
            <FaFacebook />
          </button>
          <button className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-lg xl:text-[20px] md:text-[18px] text-[16px] font-medium text-red-600 bg-white hover:bg-slate-50 hover:border-[#24CDAF]">
            <FaGoogle />
          </button>
          <button className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-lg xl:text-[20px] md:text-[18px] text-[16px] font-medium text-black bg-white hover:bg-slate-50 hover:border-[#24CDAF]">
            <FaApple />
          </button>
        </div>

        <div className="text-center mt-4">
          <p className="xl:text-[16px] md:text-[14px] text-[12px] text-gray-600">
            Don't have an account?
            <Link href="/" className="font-medium text-blue-600 hover:text-blue-500 ml-1">
              Register Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
