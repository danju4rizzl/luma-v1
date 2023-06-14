import { SectionTitle, CustomLottiePlayer } from "@/components"
import { BsCheckCircleFill, BsCheck } from "react-icons/bs"
import benefitsLottie from "@/public/lottie-3.json"

const benefitsList = [
	{ title: "Free Consulting With Expert Saving Money" },
	{ title: "Online Banking" },
	{ title: "Investment Report Every Month" },
	{ title: "Saving Money For The Future" },
	{ title: "Online Transaction" }
]

export default function BenefitsSection() {
	return (
		<section className="px-32 my-24 grid grid-flow-col items-center ">
			<div className="pr-8 max-w-lg">
				<SectionTitle title="What Benefits Will You Get" />
				<ul>
					{benefitsList.map(({ title }, index) => (
						<li key={index} className="flex items-center gap-2 mb-5">
							<div className="bg-teal-400 text-white text-lg rounded-full w-8 h-8 grid place-items-center">
								<BsCheck />
							</div>
							<p>{title}</p>
						</li>
					))}
				</ul>
			</div>
			<div className="w-full">
				<CustomLottiePlayer src={benefitsLottie} />
			</div>
		</section>
	)
}
