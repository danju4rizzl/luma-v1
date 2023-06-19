import Image from "next/image"
import Link from "next/link"

const navigationItems = [
	{ title: "Home", href: "/" },
	{ title: "Product", href: "/" },
	{ title: "FAQ", href: "/" },
	{ title: "Blog", href: "/" },
	{ title: "About Us", href: "/" }
]

export default function Navigation() {
	return (
		<nav className="text-slate-700 font-medium">
			<ul className="flex items-center gap-2 md:gap-2">
				{navigationItems.map(({ title, href }, index) => (
					<Link
						href={href}
						key={index}
						className="rounded-lg px-3 py-2 hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 ease-in-out"
					>
						{title}
					</Link>
				))}
			</ul>
		</nav>
	)
}
