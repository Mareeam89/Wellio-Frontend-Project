export const PaymentCard = ({ cardNumber, cardType, selected, onSelect }) => (
  <div
    className={`flex items-center justify-between p-4 bg-white rounded-lg border-2 cursor-pointer ${selected ? "border-[#24CDAF]" : "border-gray-200"}`}
    onClick={onSelect}
  >
    <div className="flex items-center space-x-3">
      <div className="xl:text-[24px] md:text-[22px] text-[20px]">
        {cardType === "mastercard" ? (
          <div className="flex">
            <div className="w-6 h-6 bg-red-500 rounded-full opacity-80"></div>
            <div className="w-6 h-6 bg-orange-400 rounded-full -ml-3"></div>
          </div>
        ) : (
          <div className="px-2 py-1 bg-blue-600 text-white text-xs font-bold rounded">VISA</div>
        )}
      </div>
      <span className="xl:text-[16px] md:text-[15px] text-[14px] font-mono text-gray-600">{cardNumber}</span>
    </div>
    <div className={`w-4 h-4 rounded-full border-2 ${selected ? "border-[#24CDAF] bg-[#24CDAF]" : "border-gray-300"}`}>
      {selected && <div className="w-2 h-2 bg-white rounded-full m-0.5"></div>}
    </div>
  </div>
);
