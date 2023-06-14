import Image from "next/image"

const collabList = [
	{
		collabAlt: "Collab 1",
		collabSrc: "/collab-1.svg"
	},

	{
		collabAlt: "Collab 2",
		collabSrc: "/collab-2.svg"
	},
	{
		collabAlt: "Collab 3",
		collabSrc: "/collab-3.svg"
	},
	{
		collabAlt: "Collab 4",
		collabSrc: "/collab-4.svg"
	},
	{
		collabAlt: "Collab 5",
		collabSrc: "/collab-5.svg"
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
