import { PricingCardProps } from "@/types"
import { CustomText, CustomListItem } from "@/components"

export default function PricingCard({
	price,
	title,
	offers,
	isHot
}: PricingCardProps) {
	return (
		<div
			className={`pt-10 pb-5 px-5 rounded-2xl shadow-md ${
				isHot ? "bg-teal-400 " : "bg-white"
			}`}
		>
			<div
				className={`max-w-xs mb-10 text-center ${isHot ? "text-white" : ""}`}
			>
				<h5 className="capitalize text-3xl font-semibold">{title}</h5>
				<CustomText text="Experiment the power of infinite possibilities" />

				<h3 className="text-5xl font-bold mt-4 mb-8 grid grid-flow-col justify-center">
					<span className="text-2xl -mt-4">₦</span>
					{price}
				</h3>
				{isHot && (
					<small className="bg-teal-600 text-white font-semibold  px-3 py-2 rounded-lg">
						Save ₦{Math.floor(parseFloat(price) / 0.5)}00 instantly!
					</small>
				)}
			</div>
			<ul className={` p-5 rounded-2xl  ${isHot ? "bg-white" : "bg-teal-50"}`}>
				{offers.map(({ offer }, index) => (
					<CustomListItem title={offer} key={index} isSmall />
				))}

				<div className="grid">
					<button
						type="button"
						className={`px-8 py-3 rounded-2xl shadow-sm ${
							isHot
								? "bg-teal-400 text-white hover:bg-teal-600 "
								: "bg-white text-teal-400 hover:text-white hover:bg-teal-600"
						}`}
					>
						Start <span className="uppercase">{title}</span> plan
					</button>
				</div>
			</ul>
		</div>
	)
}
