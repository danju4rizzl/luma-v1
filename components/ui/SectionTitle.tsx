import { SectionTitleProps } from "@/types"

export default function SectionTitle({ title }: SectionTitleProps) {
	return <h2 className="text-5xl font-bold mb-8"> {title} </h2>
}
