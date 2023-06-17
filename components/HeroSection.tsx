import Image from "next/image"
import { CustomButton, CustomText, CustomLottiePlayer } from "@/components"
import heroLottie from "@/public/lottie-1.json"
import { MdOutlinePlayCircleOutline } from "react-icons/md"

/**
TODO: Add responsiveness 
*/
function HeroSection() {
	return (
		<section className="hero pt-44 pb-16 px-14  md:px-32 flex justify-between gap-32 flex-col sm:flex-row ">
			<div className="grid gap-3 max-w-2xl  md:max-w-lg ">
				<h1 className="text-4xl md:text-6xl  font-semibold ">
					We’re here to Increase your Productivity
				</h1>
				<div className="pr-24 space-y-8">
					<Image src="/mark.svg" alt="just a mark" width={400} height={100} />
					<CustomText
						text="Let's make your work more organize and easily using the app 
						Dashboard with many of the latest features you need to succeed managing work daily."
					/>
				</div>
				<div className="flex items-center gap-5">
					<CustomButton title="Try free trial" />
					<CustomButton
						title="Watch a demo"
						outline
						icon={<MdOutlinePlayCircleOutline fontSize={"1.3rem"} />}
					/>
				</div>
			</div>
			<CustomLottiePlayer src={heroLottie} />
		</section>
	)
}

export default HeroSection
