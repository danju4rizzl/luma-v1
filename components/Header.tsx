import Link from "next/link"
import { Navigation } from "@/components"
import { MdMenu, MdMenuOpen } from "react-icons/md"

export default function Header() {
	return (
		<header className="fixed w-full px-5  md:px-20 lg:px-32 z-50">
			<div className=" bg-white rounded-full my-8 px-5 py-6 shadow-lg flex items-center justify-between">
				<div className="flex">
					<Link
						className="text-4xl font-semibold text-teal-500 mx-5"
						href={"/"}
					>
						Luma
					</Link>
					<div className="hidden lg:flex">
						<Navigation />
					</div>
				</div>
				<div className="hidden lg:flex justify-between items-center gap-5">
					<Link href={"/"}>Login</Link>
					<Link
						href={"/"}
						className="bg-teal-400 text-white px-5 py-2 rounded-full hover:bg-teal-600 transition-all duration-300"
					>
						Sign Up
					</Link>
				</div>

				{/* Mobile Navigation is here */}
				<div className="lg:hidden">
					<div className="p-3 text-teal-800 text-4xl bg-teal-50 rounded-full">
						<MdMenu />
						{/* <MdMenuOpen /> */}
					</div>
				</div>
			</div>
		</header>
	)
}
