import { NavigationItemsProps } from "@/types";
import Link from "next/link";

export default function NavigationItem({
  title,
  url,
  isPrimary,
  isLink,
}: NavigationItemsProps) {
  return isLink ? (
    <Link
      href={url}
      className="rounded-lg px-3 py-2 hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 ease-in-out"
    >
      {title}
    </Link>
  ) : (
    <Link
      href={url}
      className={`${
        isPrimary
          ? "bg-teal-400 text-white hover:bg-teal-600"
          : "bg-teal-50 text-teal-600 hover:bg-teal-100"
      } px-5 py-2 rounded-full  transition-all duration-300`}
    >
      {title}
    </Link>
  );
}
