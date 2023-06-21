import { NavigationItem } from "@/components";

const navigationItems = [
  { title: "Home", url: "/" },
  { title: "Product", url: "/" },
  { title: "Use Case", url: "/" },
  { title: "Pricing", url: "/" },
  { title: "Contact Us", url: "/" },
];

export default function NavigationLinks() {
  return (
    <nav className="text-slate-700 font-medium">
      <ul className=" grid lg:flex items-center gap-2 md:gap-2">
        {navigationItems.map(({ title, url }, index) => (
          <NavigationItem title={title} url={url} key={index} isLink />
        ))}
      </ul>
    </nav>
  );
}
