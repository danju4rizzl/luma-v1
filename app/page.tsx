import {
	HeroSection,
	CollabSection,
	SupportSection,
	FeaturesSection,
	BenefitsSection,
	PricingSection,
	TestimonialSection
} from "@/components"

export default function Home() {
	return (
		<main className="overflow-hidden">
			<div className="bg-gradient-to-b from-teal-200 via-teal-100  to-white">
				<HeroSection />
				<CollabSection />
			</div>
			<SupportSection />
			<FeaturesSection />
			<BenefitsSection />
			<div className="bg-gradient-to-br from-teal-50 via-teal-100  to-white">
				<PricingSection />
			</div>
			<TestimonialSection />
		</main>
	)
}
