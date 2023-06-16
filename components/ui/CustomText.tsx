import { CustomTextProps } from "@/types"

export default function CustomText({ text }: CustomTextProps) {
	return <p className={`my-1.5`}>{text}</p>
}
