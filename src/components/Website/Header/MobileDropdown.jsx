import React from "react";
import NavLinks from "./NavLinks";
import CTAButton from "../CTAButton";

const SideMenu = ({ isOpen, onToggleChange }) => {
  return (
    <div
      className={`z-10 lg:hidden absolute top-0 right-0 flex flex-col justify-between h-max min-h-[400px] w-max bg-white pt-[70px] pb-[20px] sm:pr-[100px] pr-[70px] sm:rounded-l-[30px] rounded-l-[20px] transition-transform duration-500 border border-[#24CDAF] shadow-lg shadow-[#8afde8] ${
        isOpen ? "translate-x-0" : "translate-x-[120%]"
      }`}
    >
      <NavLinks onToggleChange={onToggleChange} />
      <div className="lg:hidden flex flex-col gap-2 w-max mx-[14px] mt-[50px]">
        <CTAButton href="/login" btnText="Login" isDarkBg={false} />
        <CTAButton href="/register" btnText="Download App" isDarkBg={true} />
      </div>
    </div>
  );
};

export default SideMenu;
