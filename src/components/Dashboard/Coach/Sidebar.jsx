import React from "react";
import { MdHome, MdFavorite, MdPerson, MdMedicalServices, MdSettings, MdNotifications } from "react-icons/md";
import logo from "../../assets/Dashboard/logo.png";
import logout from "../../assets/Dashboard/logout.png";
import { Link } from "react-router-dom";
import Image from "next/image";

const Sidebar = () => {
  return (
    // Sidebar
    <div>
      <aside className="w-full lg:w-40 h-auto lg:h-[172vh] bg-[#24CDAF] p-4 flex flex-row lg:flex-col items-center justify-between rounded-b-[10px] lg:rounded-l-[10px] lg:rounded-b-none shadow-lg">
        <div className="flex items-center justify-center mt-4 lg:mt-10">
          <Image className="bg-white p-[10px] rounded-[40px]" src={logo} alt="Logo" />
        </div>
        <div className="hidden lg:block mt-20 bg-white p-4 rounded-[50px] shadow-lg">
          <nav>
            <ul className="flex flex-col gap-12">
              <li className="flex flex-col items-center">
                <Link href="/">
                  <MdHome size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Home</span>
                </Link>
              </li>
              <li className="flex flex-col items-center">
                <Link href="/">
                  <MdFavorite size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Health</span>
                </Link>
              </li>
              <li className="flex flex-col items-center">
                <Link href="/">
                  <MdPerson size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Coach</span>
                </Link>
              </li>
              <li className="flex flex-col items-center">
                <Link href="/">
                  <MdMedicalServices size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Specialist</span>
                </Link>
              </li>
              <li className="flex flex-col items-center">
                <Link href="/">
                  <MdSettings size={40} className="text-[#7C7C7C]" />
                  <span className="text-[#7C7C7C] font-medium mt-2">Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button className="mt-4 lg:mt-10 bg-white p-4 rounded-[40px] shadow-lg cursor-pointer">
          <Image src={logout} alt="Logout" className="w-8 h-8" />
        </button>
      </aside>
    </div>
  );
};

export default Sidebar;
