const FooterGroup = ({ title, children }) => {
  return (
    <div className="md:space-y-4 space-y-2">
      <h3 className="text-gray-800 xl:text-[18px] md:text-[16px] text-[14px] font-semibold uppercase tracking-wide">{title}</h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default FooterGroup;
