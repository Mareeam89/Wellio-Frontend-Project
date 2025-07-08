import FooterGroup from "./FooterGroup";
import FooterLink from "./FooterLink";
import NewsletterSubscription from "./NewsletterSubscription";
import SocialLink from "./SocialLink";
import ChronoxLogo from "../../../assets/logos/ChronoxLogo.svg";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="sm:bg-white bg-[#F0FBF9] md:mt-14 mt-8">
      <div className="max-page-width mx-auto md:px-8 px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:space-y-6 space-y-2">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={ChronoxLogo} alt="Wellio Logo" className="w-[32px] max-md:w-[24px] " />
              <span className="text-2xl font-bold text-gray-800">Wellio</span>
            </Link>
            <p className="text-gray-600 xl:text-[14px] md:text-[13px] text-[12px] leading-relaxed">Your trusted companion for managing chronic health conditions</p>
            <div className="flex space-x-3">
              <SocialLink icon={FaFacebookF} />
              <SocialLink icon={RiInstagramFill} />
              <SocialLink icon={FaLinkedinIn} />
              <SocialLink icon={FaTwitter} />
            </div>
          </div>

          {/* Our Addresses */}
          <FooterGroup title="Our Addresses">
            <div className="space-y-2 text-gray-600 xl:text-[14px] md:text-[13px] text-[12px]">
              <p>+1 (234) 567-890</p>
              <p>+1 (234) 5787-890</p>
              <p>123 Maxwell Street, City, Lagos</p>
              <p>support@Welliocompany.com</p>
            </div>
          </FooterGroup>

          {/* Quick Access */}
          <FooterGroup title="Quick Access">
            <FooterLink href="#about">About us</FooterLink>
            <FooterLink href="#blog">Blog</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#pricing">Pricing</FooterLink>
          </FooterGroup>

          {/* Newsletter */}
          <NewsletterSubscription />
        </div>

        {/* Footer Bottom */}
        <div className="md:pt-2 pt-1 border-t border-[#24CDAF]">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0 xl:text-[14px] md:text-[13px] text-[12px]">
            <p className="text-gray-500">© {currentYear} Wellio. All rights reserved</p>
            <div className="flex space-x-6">
              <a href="#terms" className="text-gray-500 hover:text-[#24CDAF] transition-colors duration-200">
                Terms & conditions
              </a>
              <a href="#privacy" className="text-gray-500 hover:text-[#24CDAF] transition-colors duration-200">
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
