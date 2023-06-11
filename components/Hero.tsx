import Image from "next/image"
import { CustomButton, CustomLottiePlayer } from "@/components"
import heroImage from "@/public/hero-lottie.json"

function Hero() {
	return (
		<div className="hero py-44 px-32 flex gap-32">
			<div className="max-w-md grid gap-8">
				<h1 className="text-6xl font-semibold ">
					We’re here to Increase your Productivity
				</h1>
				<Image src="/mark.svg" alt="" width={400} height={100} />
				<p className="text-md">
					Let's make your work more organize and easily using the Taskio
					Dashboard with many of the latest featuresin managing work every day.
				</p>
				<div className="flex gap-5">
					<CustomButton title="Try free trial" />
					<CustomButton title="Watch a demo" outline />
				</div>
			</div>

			<div className="">
				<CustomLottiePlayer src={heroImage} />
			</div>
		</div>
	)
}

export default Hero
