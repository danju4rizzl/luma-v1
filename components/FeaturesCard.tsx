import { FeaturesCardProps } from "@/types";
import Image from "next/image";
import Text from "./ui/Text";


export default  function FeaturesCard  ({ image, title, body }: FeaturesCardProps) {
	return (
		<div className="grid">
			<div className="">
				<Image
					src={image}
					width={364}
					height={430}
					alt={`Card image of ${title}`}
					
				/>
			</div>
			<div className="max-w-sm pr-2 text-center md:text-left">
				<h4 className="text-2xl font-bold mt-4 mb-2">{title}</h4>
				<Text text={body} />
			</div>
		</div>
	)
}