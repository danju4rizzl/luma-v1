import { CustomLinksProps } from "@/types";
import Link from "next/link";


/*
* This is the navigation links as a list item
*/
export default function CustomLink({
  title,
  url,
  isPrimary,
  isLink,
}: CustomLinksProps) {
  return isLink ? (
    <Link
      href={url}
      className="rounded-lg px-4 py-3 hover:bg-teal-50 hover:text-teal-900 transition-all duration-300 ease-in-out"
    >
      {title}
    </Link>
  ) : (
    <Link
      href={url}
      className={`${
        isPrimary
          ? "bg-teal-600 text-white hover:bg-teal-500"
          : "bg-teal-50 text-teal-900 hover:bg-teal-100"
      } px-5 py-3 rounded-full  transition-all duration-300`}
    >
      {title}
    </Link>
  );
}
