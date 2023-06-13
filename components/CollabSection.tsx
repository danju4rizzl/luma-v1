import Image from "next/image"

import image1 from "@/public/collab-1.svg"
import image2 from "@/public/collab-2.svg"
import image3 from "@/public/collab-3.svg"
import image4 from "@/public/collab-4.svg"
import image5 from "@/public/collab-5.svg"

const collabList = [
	{
		collabAlt: "Collab 1",
		collabSrc: image1
	},

	{
		collabAlt: "Collab 2",
		collabSrc: image2
	},
	{
		collabAlt: "Collab 3",
		collabSrc: image3
	},
	{
		collabAlt: "Collab 4",
		collabSrc: image4
	},
	{
		collabAlt: "Collab 5",
		collabSrc: image5
	}
]

export default function CollabSection() {
	return (
		<section className="collab my-24">
			<div className="grid place-items-center gap-11">
				<h3 className="text-4xl font-bold">
					More than 25,000 teams use Collab
				</h3>

				<div className="flex gap-10">
					{collabList.map(({ collabAlt, collabSrc }) => (
						<Image src={collabSrc} width={180} height={100} alt={collabAlt} />
					))}
				</div>
			</div>
		</section>
	)
}
