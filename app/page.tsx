import { Hero, CollabSection, SupportSection } from "@/components"

export default function Home() {
	return (
		<main className="overflow-hidden">
			<div className="bg-gradient-to-b from-teal-300 via-teal-200  to-white">
				<Hero />
				<CollabSection />
			</div>
			<SupportSection />
		</main>
	)
}
