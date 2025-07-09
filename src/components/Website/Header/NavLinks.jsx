import React from "react";
import Link from "next/link";

const NavLinks = ({ onToggleChange }) => {
  const handleLinkClick = () => {
    onToggleChange(false);
  };
  return (
    <div className="lg:w-full xl:max-w-[450px] lg:max-w-[420px] flex max-lg:flex-col max-lg:items-start gap-3 justify-between items-center lg:mx-10 ml-6 max-lg:mt-2 ">
      <Link href="/" className="font-semibold text-[#000] hover:text-[#24CDAF]" onClick={handleLinkClick}>
        Home
      </Link>
      <a href="#about" className="text-[#686868] hover:text-[#24CDAF] text-nowrap" onClick={handleLinkClick}>
        About Us
      </a>
      <a href="#features" className="text-[#686868] hover:text-[#24CDAF]" onClick={handleLinkClick}>
        Features
      </a>
      <a href="#pricing" className="text-[#686868] hover:text-[#24CDAF] text-nowrap" onClick={handleLinkClick}>
        Pricing
      </a>
    </div>
  );
};

export default NavLinks;
