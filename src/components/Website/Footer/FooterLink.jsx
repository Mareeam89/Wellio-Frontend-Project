const FooterLink = ({ children, href = "#" }) => {
  return (
    <a href={href} className="block text-gray-600 xl:text-[14px] md:text-[13px] text-[12px] hover:text-[#24CDAF] transition-colors duration-200">
      {children}
    </a>
  );
};

export default FooterLink;
