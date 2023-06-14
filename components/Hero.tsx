import Image from "next/image"
import { CustomButton, CustomLottiePlayer } from "@/components"
import heroLottie from "@/public/lottie-1.json"
import { MdOutlinePlayCircleOutline } from "react-icons/md"

/**
TODO: Add responsiveness 
*/
function Hero() {
	return (
		<div className="hero pt-44 pb-16 px-14  md:px-32 flex justify-between gap-32 flex-col sm:flex-row ">
			<div className="grid gap-3 max-w-2xl  md:max-w-lg ">
				<h1 className="text-4xl md:text-6xl  font-semibold ">
					We’re here to Increase your Productivity
				</h1>
				<Image src="/mark.svg" alt="" width={400} height={100} />
				<p className="text-base">
					Let's make your work more organize and easily using the Taskio
					Dashboard with many of the latest featuresin managing work every day.
				</p>
				<div className="flex items-center  gap-5">
					<CustomButton title="Try free trial" />
					<CustomButton
						title="Watch a demo"
						outline
						icon={<MdOutlinePlayCircleOutline fontSize={"1.3rem"} />}
					/>
				</div>
			</div>
			<div className="max-w-3xl">
				<CustomLottiePlayer src={heroLottie} />
			</div>
		</div>
	)
}

export default Hero
