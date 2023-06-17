"use client"

import Image from "next/image"
import {
	SectionTitle,
	CustomText,
	CustomLottiePlayer,
	ContactForm
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
		<section className="px-32 pt-32 pb-20 grid grid-cols-2 gap-8 bg-slate-800 ">
			<div className="text-white pr-16">
				<SectionTitle title="What people are saying about us" />

				<CustomText text="Everything you need to accept to payment and grow your money of manage anywhere on planet" />
				<div className="grid gap-5 mt-5">
					<Image
						src={quoteImg}
						width={45}
						height={38}
						alt="testimonial quote"
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

			<div className="px-16 pb-16 bg-slate-700  rounded-2xl text-white before:block before:absolute before:inset-0 before:bg-teal-700 before:opacity-30 before:rounded-2xl before:z-[-1] before:p-16 before:w-96  relative">
				<div className="w-1/2 text-center mx-auto -mt-24">
					<CustomLottiePlayer src={formLottie} />
					<h4 className="text-3xl ">Get Started</h4>
				</div>
				<ContactForm />
			</div>
		</section>
	)
}
