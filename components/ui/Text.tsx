import { TextProps } from "@/types"

export default function Text({ text }: TextProps) {
	return <p className={`my-1.5`}>{text}</p>
}
