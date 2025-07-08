import React from "react";
import PlanCard from "./PlanCard";

const PricingSection = () => {
  const plans = [
    {
      price: "₦25k",
      planName: "Pro",
      features: [
        { text: "Access to an health expert", included: true },
        { text: "General diet guidelines", included: true },
        { text: "24/7 support", included: true },
        { text: "Access to a specialist", included: false },
        { text: "Personalized meal plans", included: false },
      ],
    },
    {
      price: "₦50k",
      planName: "Premium",
      isPopular: true,
      features: [
        { text: "Unlimited coaching session", included: true },
        { text: "Personalized meal plans", included: true },
        { text: "Access to a specialist", included: true },
        { text: "Access to an health expert", included: true },
        { text: "24/7 Support", included: true },
      ],
    },
  ];

  return (
    <div id="pricing" className="max-w-[1152px] mx-auto md:px-8 px-4 md:py-10 py-6">
      <div className="text-center sm:mb-12 mb-8">
        <h2 className="xl:text-[38px] md:text-[26px] text-[20px] font-bold text-[#1A1A1A] leading-[1.1] mb-2">Choose your Plan</h2>
        <p className="xl:text-[18px] md:text-[16px] text-[14px] text-[#636363] max-w-2xl mx-auto">
          Sign up in less than 30 seconds. Enjoy a 7-day free trial, upgrade anytime, and cancel whenever you want — no pressure, no commitment.
        </p>
      </div>

      <div className="grid md:grid-cols-2 md:gap-8 gap-6 max-w-4xl mx-auto">
        {plans.map((plan, index) => (
          <PlanCard key={index} price={plan.price} planName={plan.planName} features={plan.features} isPopular={plan.isPopular} />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
