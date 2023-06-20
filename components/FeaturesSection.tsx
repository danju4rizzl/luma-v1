import { SectionContainer, CustomText, SectionTitle, CustomButton,} from "@/components"
import { FeaturesCardProps } from "@/types"
import Image from "next/image"

const cardList = [
	{
		image: "/features-1.svg",
		title: "Collaboration Teams",
		body: "Here you can handle projects together with team virtually"
	},
	{
		image: "/features-2.svg",
		title: "Cloud Storage",
		body: "No need to worry about storage because we provide storage up to 2 TB"
	},
	{
		image: "/features-3.svg",
		title: "Daily Analytics",
		body: "We always provide useful information to make it easier for you every day"
	}
]

const FeaturesCard = ({ image, title, body }: FeaturesCardProps) => {
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
				<CustomText text={body} />
			</div>
		</div>
	)
}

export default function FeaturesSection() {
	return (
		<SectionContainer className="py-5 md:py-14">
			<div className="grid lg:flex justify-center lg:justify-between my-24 text-center">
				<SectionTitle title="Features you can use" />
				<div className="lg:w-1/2 lg:mx-4 mb-5 lg:mb-0">
					<CustomText text="We offer a variety of interesting features that you can help increase yor productivity at work and manage your projects easily" />
				</div>
				<div className="lg:w-1/3 ">
					<CustomButton title="Get Started" />
				</div>
			</div>
			<div className="flex flex-wrap md:flex-nowrap justify-center gap-8">
				{cardList.map((card, index) => (
					<FeaturesCard key={index} {...card} />
				))}
			</div>
		</SectionContainer>
	)
}
