import { CustomText } from "@/components"
import Link from "next/link"
export default function Footer() {
	return (
		<footer className="flex  h-24 border-t">
			<CustomText text="© 2022 Biccas Inc. Copyright and rights reserved" />
			<Link href="/">Terms and Conditions</Link>
			<Link href="/"> Privacy Policy</Link>
		</footer>
	)
}
