import Link from "next/link"
import { Navigation } from "@/components"
export default function Header() {
	return (
		<header className="fixed w-full z-50 grid justify-center ">
			<div className="flex justify-between items-center bg-white rounded-full my-5 p-5 shadow-lg gap-32">
				<Link className="text-4xl font-semibold text-teal-500 mx-8" href={"/"}>
					Luma
				</Link>
				<Navigation />
				<div className="flex items-center gap-5">
					<Link href={"/"}>Login</Link>
					<Link
						href={"/"}
						className="bg-teal-400 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition-all duration-300"
					>
						Sign Up
					</Link>
				</div>
			</div>
		</header>
	)
}
