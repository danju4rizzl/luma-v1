"use client"

import React, { useState } from "react"
import { TogglerType, TogglerProps } from "@/types"
import { PricingCard } from "@/components"

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
			{ offer: "New income apps" }
		]
	},
	{
		cardTitle: "pro",
		monthlyPrice: "15,000",
		yearlyPrice: "140,000",
		cardOffers: [
			{ offer: "10 Users" },
			{ offer: "10 GB Storage" },
			{ offer: "Advanced Collaboration Features" },
			{ offer: "Priority Email Support" },
			{ offer: "Custom Branding" }
		]
	},
	{
		cardTitle: "business",
		monthlyPrice: "25,000",
		yearlyPrice: "329,000",
		cardOffers: [
			{ offer: "Unlimited Users" },
			{ offer: "50 GB Storage" },
			{ offer: "Advanced Collaboration Features" },
			{ offer: "Priority Email & Phone Support" },
			{ offer: "Custom Branding" }
		]
	}
]

/**
The PriceSwitch component is a toggle button that changes the price of the plan.
*/
const PriceSwitch = ({ title, active, onClick }: TogglerProps) => {
	return (
		<button
			type="button"
			className={`px-8 py-3 rounded-md capitalize ${
				active ? "bg-teal-400 text-white" : "bg-white text-teal-600"
			}`}
			onClick={onClick}
		>
			{title}
		</button>
	)
}

export default function Pricing() {
	const monthly = "monthly"
	const yearly = "yearly"

	const [activeSwitch, setActiveSwitch] = useState<TogglerType>(monthly)

	const handleSwitch = (button: TogglerType) => {
		if (activeSwitch !== button) {
			setActiveSwitch(button)
		}
	}

	return (
		<div className="pricing">
			<div className="grid place-items-center mt-10 mb-16">
				<div className="bg-white rounded-md p-2 shadow-lg">
					<PriceSwitch
						title={`Pay ${monthly}`}
						active={activeSwitch === monthly}
						onClick={() => handleSwitch(monthly)}
					/>
					<PriceSwitch
						title={`Pay ${yearly}`}
						active={activeSwitch === yearly}
						onClick={() => handleSwitch(yearly)}
					/>
				</div>
			</div>

			<div className="flex justify-center gap-8 px-24">
				{priceCardData.map(
					({ cardTitle, monthlyPrice, yearlyPrice, cardOffers }) => (
						<PricingCard
							offers={cardOffers}
							title={cardTitle}
							price={activeSwitch === monthly ? monthlyPrice : yearlyPrice}
							isHot={cardTitle === "pro"}
						/>
					)
				)}
			</div>
		</div>
	)
}
