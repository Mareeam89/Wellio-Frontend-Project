const SocialLink = ({ icon: Icon, href = "#" }) => {
  return (
    <a
      href={href}
      className="xl:w-12 xl:h-12 md:w-10 md:h-10 w-8 h-8 bg-[#24CDAF] hover:bg-[#1fb89d] rounded-full flex items-center justify-center transition-colors duration-200 group"
    >
      <Icon className="text-white xl:text-[20px] md:text-[18px] text-[16px]" />
    </a>
  );
};

export default SocialLink;
