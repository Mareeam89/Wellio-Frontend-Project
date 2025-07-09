import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { PaymentCard } from "./PaymentCard";

const PaymentMethod = () => {
  const [selectedCard, setSelectedCard] = useState("mastercard");
  return (
    <section className="bg-white lg:p-6 sm:p-4 p-3 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="xl:text-[18px] md:text-[16px] text-[14px] font-semibold text-gray-800">Payment Methods</h3>
        <div className="flex space-x-2">
          <FaEdit className="text-[#24CDAF]" />
          <button className="p-1 bg-[#24CDAF] text-white rounded">
            <FaPlus className="xl:text-[14px] md:text-[13px] text-[12px]" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="xl:text-[14px] md:text-[13px] text-[12px] font-medium text-gray-500 mb-2">Card number</p>
          <PaymentCard cardNumber="**** 3479 2356 **20" cardType="mastercard" selected={selectedCard === "mastercard"} onSelect={() => setSelectedCard("mastercard")} />
        </div>
        <div>
          <p className="xl:text-[14px] md:text-[13px] text-[12px] font-medium text-gray-500 mb-2">Card number</p>
          <PaymentCard cardNumber="**** 5429 0336 **50" cardType="visa" selected={selectedCard === "visa"} onSelect={() => setSelectedCard("visa")} />
        </div>
      </div>
    </section>
  );
};

export default PaymentMethod;
