"use client";

import React, { useState } from "react";
import { TogglerProps, TogglerType } from "@/types";
import { PricingCard } from "@/components";

const priceCardData = [
  {
    cardTitle: "free",
    monthlyPrice: "0",
    yearlyPrice: "0",
    cardOffers: [
      { offer: "2 Users" },
      { offer: "2 GB Storage" },
      { offer: "Public Share & Comments" },
      { offer: "Chat Support" },
      { offer: "New income apps" },
    ],
  },
  {
    cardTitle: "basic",
    monthlyPrice: "1,500",
    yearlyPrice: "5,700",
    cardOffers: [
      { offer: "10 Users" },
      { offer: "10 GB Storage" },
      { offer: "Advanced Collaboration Features" },
      { offer: "Priority Email Support" },
      { offer: "Custom Branding" },
    ],
  },
  {
    cardTitle: "pro",
    monthlyPrice: "3,400",
    yearlyPrice: "7,200",
    cardOffers: [
      { offer: "Unlimited Users" },
      { offer: "Unlimited Storage" },
      { offer: "AI Collaboration Features" },
      { offer: "Instant Support" },
      { offer: "Free Training" },
    ],
  },
];

/**
The PriceSwitch component is a toggle button that changes the price of the plan.
*/
const PriceSwitch = ({ title, active, onClick }: TogglerProps) => {
  return (
    <button
      type="button"
      className={`px-5 md:px-8 py-3 rounded-md capitalize ${
        active ? "bg-teal-400 text-white" : "bg-white text-teal-600"
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default function Pricing() {
  const MONTHLY = "monthly";
  const YEARLY = "yearly";

  const [activeSwitch, setActiveSwitch] = useState<TogglerType>(MONTHLY);

  const handleSwitch = (monthOrYear: TogglerType) => {
    if (activeSwitch !== monthOrYear) {
      setActiveSwitch(monthOrYear);
    }
  };

  return (
    <div className="grid justify-center">
      <div className="bg-white rounded-md shadow-lg p-2 mt-10 mb-16 mx-auto ">
        <PriceSwitch
          title={`Pay ${MONTHLY}`}
          active={activeSwitch === MONTHLY}
          onClick={() => handleSwitch(MONTHLY)}
        />
        <PriceSwitch
          title={`Pay ${YEARLY}`}
          active={activeSwitch === YEARLY}
          onClick={() => handleSwitch(YEARLY)}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {priceCardData.map(
          ({ cardTitle, monthlyPrice, yearlyPrice, cardOffers }, index) => (
            <PricingCard
              offers={cardOffers}
              title={cardTitle}
              price={activeSwitch === MONTHLY ? monthlyPrice : yearlyPrice}
              isPopularPlan={cardTitle === priceCardData[1].cardTitle}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
}
