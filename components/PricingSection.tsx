import { SectionTitle, CustomText, Pricing, Button } from "@/components"

export default function PricingSection() {
	return (
		<section className="pricing py-24">
			<div className="text-center px-96">
				<SectionTitle title={`Choose Plan That's Right For You`} />
				<CustomText text="Choose a plan that works best for you, feel free to contact us" />
			</div>
			{/* build a Pricing plan toggle so users can switch between monthly bill and yearly bill */}
			<Pricing />
		</section>
	)
}
