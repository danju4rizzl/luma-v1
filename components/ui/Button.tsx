import { ButtonProps } from "@/types"

export default function Button({ title, active }: ButtonProps) {
	return (
		<button
			type="button"
			className={`px-8 py-3 rounded-xl shadow-sm transition-colors ${
				active
					? "bg-teal-400 text-white hover:bg-teal-600 "
					: "bg-white text-teal-600  hover:bg-teal-400 hover:text-white"
			}`}
		>
			{title}
		</button>
	)
}
