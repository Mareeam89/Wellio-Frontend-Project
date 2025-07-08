"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import ChronoxLogo from "../../../assets/logos/ChronoxLogo.svg";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import NavLinks from "./NavLinks";
import MobileDropdown from "./MobileDropdown";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const ToggleDropdownMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleNavLinkClose = (value) => {
    setIsMenuOpen(value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="relative max-page-width md:h-[100px] h-[70px] sm:bg-[#E4FFFA] bg-[#F0FBF9] md:px-8 px-4 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="md:h-[50px] md:w-[50px] h-[40px] w-[40px] flex justify-center items-center bg-white rounded-full border border-[#86ebd8]">
          <Image src={ChronoxLogo} alt="Wellio Logo" className="w-[32px] max-md:w-[24px]" />
        </div>
        <span className="xl:text-[32px] lg:text-[28px] text-[22px] font-bold text-[#1A1A1A]">Wellio</span>
      </Link>
      <div className="max-lg:hidden w-full flex justify-center">
        <NavLinks />
      </div>
      <div className="Raleway max-lg:hidden lg:flex items-center space-x-6">
        <Link href="/login" className="text-[20px] text-[#344054] font-bold hover:text-[#24CDAF] text-nowrap">
          Log In
        </Link>
        <Link href="/login" className="bg-[#24CDAF] text-white text-[20px] font-medium px-8 py-3 rounded-[30px] hover:bg-[#009B8C] text-nowrap transition">
          Download App
        </Link>
      </div>
      <div className="z-100 hidden max-lg:block cursor-pointer" onClick={ToggleDropdownMenu}>
        {isMenuOpen ? <IoClose className="text-[34px]" /> : <CgMenuRightAlt className="text-[34px]" />}
      </div>
      <div ref={dropdownRef} className="absolute top-0 right-0">
        <MobileDropdown isOpen={isMenuOpen} onToggleChange={handleNavLinkClose} />
      </div>
    </nav>
  );
};

export default Navbar;
