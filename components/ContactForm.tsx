import { Button } from "@/components"

export default function ContactForm() {
	return (
		<form className="grid  mt-5">
			<label htmlFor="email">Email</label>
			<input
				name="email"
				id="email"
				type="email"
				placeholder="Enter your email"
				className=" py-2 px-3 my-2 rounded-md text-black placeholder:text-slate-600 placeholder:text-sm"
			/>

			<label htmlFor="message">Message</label>
			<textarea
			
				name="message"
				id="message"
				placeholder="What would you like to say"
				className="w-full py-2 px-3 my-2 rounded-md text-black placeholder:text-slate-600 placeholder:text-sm"
			></textarea>

			<Button title="Request Demo" active />
		</form>
	)
}
