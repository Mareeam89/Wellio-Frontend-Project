import React from "react";
import { IoHome, IoHeart, IoPerson, IoPeople, IoSettings } from "react-icons/io5";
import ChronoxLogo from "../../assets/logos/ChronoxLogo.svg";
import Link from "next/link";
import { MdHealthAndSafety } from "react-icons/md";
import Image from "next/image";

const Sidebar = ({ activeTabName }) => {
  const menuItems = [
    { id: "/", icon: IoHome, label: "Home" },
    { id: "health", icon: IoHeart, label: "Health" },
    { id: "coach", icon: IoPerson, label: "Coach" },
    { id: "specialist", icon: IoPeople, label: "Specialist" },
    { id: "settings", icon: IoSettings, label: "Settings" },
  ];

  return (
    <div className="hidden absolute top-0 left-0 h-full min-h-max z-[100] lg:flex flex-col bg-[#24CDAF] xl:w-[120px] lg:w-[100px] w-[80px] xl:p-5 p-3 rounded-br-[24px]">
      <Link
        href="/"
        className="md:h-[50px] md:w-[50px] h-[40px] w-[40px] flex justify-center items-center mx-auto mt-4 mb-[60px] bg-white rounded-full border border-[#86ebd8]"
      >
        <Image src={ChronoxLogo} alt="Wellio Logo" className="w-[32px] max-md:w-[24px]" />
      </Link>

      <nav className="py-10 space-y-2 bg-white rounded-[40px] overflow-hidden">
        {menuItems.map((item) => (
          <Link
            href={`/dashboard/${item.id}`}
            key={item.id}
            className={`w-full flex flex-col items-center justify-center lg:py-4 py-6 xl:text-[12px] md:text-[11px] text-[10px] transition-colors ${
              activeTabName === item.label ? "text-teal-500 bg-teal-50" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            <item.icon className="w-6 h-6 mb-1" />
            <span className="">{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-8 p-4">
        <button className="w-full flex flex-col items-center justify-center xl:text-[12px] md:text-[11px] text-[10px] text-white cursor-pointer">
          <MdHealthAndSafety className="text-red-500 bg-white xl:w-8 xl:h-8 w-6 h-6 rounded-full mb-1" />
          <span className="font-medium tracking-wide">Emergency</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
