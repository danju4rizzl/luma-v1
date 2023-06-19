import { SectionTitle, Rating } from "@/components"

import { TbActivityHeartbeat } from "react-icons/tb"
import { AiOutlinePieChart } from "react-icons/ai"
import { FiCommand } from "react-icons/fi"

const supportRatings = [
	{ ratedBy: "Tolani", rating: 3.9 },
	{ ratedBy: "Chinedu", rating: 4.8 },
	{ ratedBy: "Mike", rating: 5 }
]

const supportPoints = [
	{
		title: "Publishing",
		icon: <TbActivityHeartbeat />,
		description:
			"Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand"
	},
	{
		title: "Analytics",
		icon: <AiOutlinePieChart />,
		description: "Analyze your performance and create gorgeous report"
	},
	{
		title: "Integration",
		icon: <FiCommand />,
		description: "Quickly navigate you and engage with your audience"
	}
]

export default function SupportSection() {
	return (
		<section className="flex flex-col md:flex-row gap-y-10  justify-between mt-24 py-28 px-6 sm:px-14 md:px-20 lg:px-32  bg-slate-50">
			<div className="w-full md:w-1/2 ">
				<SectionTitle title="How we support our partners all over the world" />
				<small className="text-sm text-slate-500">
					SaaS become a common delivery model for many business application,
					including office software, messaging software, payroll processing
					software, DBMS software, management software
				</small>
				<div className="flex flex-wrap justify-start lg:justify-between  gap-x-10 gap-y-5 my-8 ">
					{supportRatings.map(({ ratedBy, rating }, index) => (
						<Rating ratedBy={ratedBy} rating={rating} key={index} />
					))}
				</div>
			</div>
			<div className="w-full md:w-1/3 ">
				<ul className="grid gap-8 md:gap-5">
					{supportPoints.map(({ title, icon, description }, index) => (
						<li
							className="grid grid-flow-col gap-5 justify-start items-start"
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
