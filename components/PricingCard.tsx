import { PricingCardProps } from "@/types"
import { CustomText, CustomListItem, Button } from "@/components"

export default function PricingCard({
	price,
	title,
	offers,
	isPopularPlan
}: PricingCardProps) {
	return (
		<div
			className={`pt-10 pb-5 px-5 rounded-2xl shadow-md ${
				isPopularPlan ? "bg-teal-400 " : "bg-white"
			}`}
		>
			<div
				className={`max-w-xs mb-10 text-center ${isPopularPlan ? "text-white" : ""}`}
			>
				<h5 className="capitalize text-3xl font-semibold">{title}</h5>
				<CustomText text="Experiment the power of infinite possibilities" />

				<h3 className="text-5xl font-bold mt-4 mb-8 grid grid-flow-col justify-center">
					<span className="text-2xl -mt-4">₦</span>
					{price}
				</h3>
				{isPopularPlan && (
					<small className="bg-teal-600 text-white font-semibold  px-3 py-2 rounded-lg">
						Save ₦{Math.floor(parseFloat(price) / 0.5)}00 instantly!
					</small>
				)}
			</div>
			<ul className={` p-5 rounded-2xl  ${isPopularPlan ? "bg-white" : "bg-teal-50"}`}>
				{offers.map(({ offer }, index) => (
					<CustomListItem title={offer} key={index} isSmall />
				))}

				<div className="grid">
					<Button title={`Get ${title} plan`} active={isPopularPlan} />
				</div>
			</ul>
		</div>
	)
}
