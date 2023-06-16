import Image from "next/image"
import { SectionTitle, CustomText } from "@/components"
import { BsChatSquareQuote } from "react-icons/bs"
import quoteImg from "@/public/quote.svg"
import testimonialImage1 from "@/public/testimonial-1.png"

export default function TestimonialSection() {
	return (
		<section className="px-32 pt-32 pb-16  bg-slate-900 ">
			<div className="text-white">
				<SectionTitle title="What people are saying about us" />
				<CustomText text="Everything you need to accept to payment and grow your money of manage anywhere on planet" />
			</div>
			<div className="">
				<Image
					src={quoteImg}
					width={50}
					height={50}
					alt="testimonial quoteImg "
				/>
				<BsChatSquareQuote />
				<CustomText text="I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍" />
				<CustomText text="Christoper Odunlami" />
				<Image
					src={testimonialImage1}
					width={100}
					height={100}
					alt="testimonial"
				/>
			</div>
		</section>
	)
}
