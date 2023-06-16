import { CustomListItemProps } from "@/types"
import { BsCheck } from "react-icons/bs"

export default function CustomListItem({
	title,
	isSmall
}: CustomListItemProps) {
	// size is just a variable that determines the size of the icon.
	const size = !isSmall ? "8" : "6"

	return (
		<li className="flex items-center gap-2 mb-5">
			<div
				className={`bg-teal-400 text-white text-lg rounded-full p-0.5 grid place-items-center w-${size} h-${size} `}
			>
				<BsCheck />
			</div>
			<p>{title}</p>
		</li>
	)
}
