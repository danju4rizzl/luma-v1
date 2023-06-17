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
		<nav className="">
			<ul className="flex items-center gap-10 ">
				{navigationItems.map(({ title, href }, index) => (
					<Link href={href} key={index}>
						{title}
					</Link>
				))}
			</ul>
		</nav>
	)
}
