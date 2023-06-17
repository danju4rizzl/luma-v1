import { CustomText } from "@/components"
import Link from "next/link"

export default function Footer() {
	return (
		<footer className="flex justify-between items-center  bg-slate-800 text-white px-32 py-3 border-t border-slate-700">
			<CustomText text="© 2023 Luma Inc. Copyright and rights reserved" />
			<div className="space-x-5">
				<Link href="/">Terms and Conditions</Link>
				<Link href="/"> Privacy Policy</Link>
			</div>
		</footer>
	)
}
