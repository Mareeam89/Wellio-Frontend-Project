import React from "react";
import Avatar from "./Avatar";
import { FaBell } from "react-icons/fa";

const Header = ({ src, name, email, verified }) => {
  return (
    <div className="bg-white sm:px-6 px-4 py-4 flex max-md:flex-col md:items-center justify-between galg:p-6 sm:p-4 p-3 border-b border-gray-200 sm:shadow-lg shadow-md shadow-gray-200">
      <Avatar src={src} name={name} email={email} verified={verified} />
      <div className="flex items-center gap-3">
        <button className="xl:text-[16px] md:text-[14px] text-[12px] px-6 py-2 border border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50">Cancel</button>
        <button className="xl:text-[16px] md:text-[14px] text-[12px] px-6 py-2 bg-[#24CDAF] text-white text-nowrap rounded-lg hover:bg-emerald-600">Save changes</button>
        <button className="max-md:ml-auto w-max h-max xl:text-[16px] md:text-[15px] text-[14px] p-[8px] text-[#24CDAF] bg-white border-2 border-[#24CDAF] rounded-full hover:bg-emerald-200">
          <FaBell />
        </button>
      </div>
    </div>
  );
};

export default Header;
