import React from "react";
import Link from "next/link";

const CTAButton = ({ btnText = "Get Started", className = "" }) => {
  return (
    <Link
      href="/login"
      className={`text-center text-nowrap font-semibold xl:text-[18px] lg:text-[16px] text-[14px] bg-[#24CDAF] text-white px-8 py-2 rounded-[30px] hover:bg-[#009B8C] transition ${className}`}
    >
      {btnText}
    </Link>
  );
};

export default CTAButton;
