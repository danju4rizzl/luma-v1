import Image from "next/image"
import {
	SectionTitle,
	CustomText,
	CustomLottiePlayer,
	ContactForm,
	SectionContainer
} from "@/components"
import quoteImg from "@/public/quote.svg"
import formLottie from "@/public/lottie-3.json"

const TestimonialsData = [
	{
		comment:
			"I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍.",
		author: "David Johnson",
		photo: "https://i.pravatar.cc/150?img=33"
	}
]

export default function TestimonialSection() {
	return (
		<SectionContainer className="pt-32 pb-20 grid lg:flex justify-center gap-x-8 gap-y-20 bg-slate-800">

			<div className="text-white xl:pr-16 text-center lg:text-left">
				<SectionTitle title="What people are saying about us" />

				<CustomText text="Everything you need to accept to payment and grow your money of manage anywhere on planet" />
				<div className="grid gap-5 mt-5">
					<Image
						src={quoteImg}
						width={45}
						height={38}
						alt="testimonial quote"
						className="hidden md:block"
					/>
					{TestimonialsData.map(({ comment, author, photo }, index) => (
						<div key={index}>
							<div className="space-y-6 text-slate-300">
								<CustomText text={comment} />
								<CustomText text={author} />
								<Image
									src={photo}
									width={60}
									height={60}
									alt={`testimonial by ${author}`}
									className="inline-block rounded-full"
								/>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="px-8 pb-8 sm:px-12 sm:pb-12 md:px-16 md:pb-16 bg-slate-700  rounded-2xl text-white">
				<div className="w-3/4 xl:w-1/2 text-center mx-auto mb-14">
					<CustomLottiePlayer src={formLottie} />
					<h4 className="text-2xl -my-7">Get Started</h4>
				</div>
				<ContactForm />
			</div>
		
		</SectionContainer>
	)
}
