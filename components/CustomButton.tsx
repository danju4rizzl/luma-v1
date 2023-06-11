import React from "react"
import { CustomButtonProps } from "@/types"

export default function CustomButton({ title, outline }: CustomButtonProps) {
	return (
		<button
			className={`bg-teal-500 text-white hover:bg-teal-800  ${
				outline &&
				"bg-transparent text-teal-500  border border-current hover:bg-teal-800 hover:text-white "
			} px-5 py-2 rounded-full`}
		>
			{title}
		</button>
	)
}
