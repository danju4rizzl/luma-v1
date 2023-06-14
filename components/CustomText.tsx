import { CustomTextProps } from "@/types"

export default function CustomText({ text }: CustomTextProps) {
	return <p className="text-gray-400 my-1.5">{text}</p>
}
