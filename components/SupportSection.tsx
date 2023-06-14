import { SectionTitle, Rating } from "@/components"

import { TbActivityHeartbeat } from "react-icons/tb"
import { AiOutlinePieChart } from "react-icons/ai"
import { FiCommand } from "react-icons/fi"

const supportRatings = [
	{ ratedBy: "Tolani", rating: 4.9 },
	{ ratedBy: "Chinedu", rating: 4.8 },
	{ ratedBy: "Mike", rating: 5 }
]

const supportPoints = [
	{
		title: "Publishing",
		icon: <TbActivityHeartbeat />,
		description:
			"Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd"
	},
	{
		title: "Analytics",
		icon: <AiOutlinePieChart />,
		description: "Analyze your performance and create goegeous report"
	},
	{
		title: "Integration",
		icon: <FiCommand />,
		description: "Quiuckly navigate you anda engage with your adience"
	}
]

export default function SupportSection() {
	return (
		<section className="support flex mt-24 py-28 px-32 gap-x-20 bg-slate-50">
			<div className="w-1/2">
				<SectionTitle title="How we support our partners all over the world" />
				<p className="text-sm text-gray-400">
					SaaS become a common delivery model for many business application,
					including office software, messaging software, payroll processing
					software, DBMS software, management software
				</p>

				<div className="flex gap-16 my-8">
					{supportRatings.map(({ ratedBy, rating }, index) => (
						<Rating ratedBy={ratedBy} rating={rating} key={index} />
					))}
				</div>
			</div>
			<div className="w-1/3">
				<ul>
					{supportPoints.map(({ title, icon, description }, index) => (
						<li
							className="grid grid-flow-col gap-5 justify-start items-start mb-5 "
							key={index}
						>
							<div className="bg-white text-teal-400 text-3xl p-4 rounded-lg shadow-lg">
								{icon}
							</div>
							<div className="">
								<h5 className="text-2xl font-bold ">{title}</h5>
								<p className="text-gray-400 my-1.5">{description}</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
