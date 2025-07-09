import { IoPersonCircle } from "react-icons/io5";
import Image from "next/image";

const Avatar = ({ src, name, email, verified = false }) => (
  <div className="flex items-center space-x-3 mb-6">
    <div className="relative">
      {src ? (
        <Image src={src} alt={name} className="sm:w-16 sm:h-16 w-14 h-14 rounded-full object-cover" />
      ) : (
        <div className="text-[64px] text-slate-300 border-2 border-green-500 rounded-full">
          <IoPersonCircle />
        </div>
      )}

      {verified && (
        <div className="absolute -bottom-1 -right-1 sm:w-6 w-4 sm:h-6 h-4 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs">✓</span>
        </div>
      )}
    </div>
    <div>
      <h2 className="xl:text-[20px] md:text-[18px] text-[16px] font-semibold text-gray-800">{name}</h2>
      <p className="xl:text-[16px] md:text-[14px] text-[12px] text-gray-600">{email}</p>
    </div>
  </div>
);

export default Avatar;
