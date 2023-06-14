import {
	Hero,
	CollabSection,
	SupportSection,
	FeaturesSection,
	BenefitsSection
} from "@/components"

export default function Home() {
	return (
		<main className="overflow-hidden">
			<div className="bg-gradient-to-b from-teal-300 via-teal-200  to-white">
				<Hero />
				<CollabSection />
			</div>
			<SupportSection />
			<div className="bg-gradient-to-br from-teal-50 via-teal-100  to-white">
				<FeaturesSection />
				<BenefitsSection />
			</div>
		</main>
	)
}
