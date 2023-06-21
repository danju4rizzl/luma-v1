"use client";
import { useState } from "react";

import Link from "next/link";
import { NavigationLinks, NavigationItem } from "@/components";
import { MdMenu, MdMenuOpen } from "react-icons/md";

const ButtonLinks = [
  {
    title: "Login",
    url: "/",
    isPrimary: false,
  },
  {
    title: "Sign Up",
    url: "/",
    isPrimary: true,
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full px-5 md:px-20 lg:px-32 z-50">
      <div className=" bg-white rounded-full mt-8 mb-3 px-5 py-6 shadow-lg flex items-center justify-between">
        <div className="flex">
          <Link
            className="text-4xl font-semibold text-teal-500 mx-5"
            href={"/"}
          >
            Luma
          </Link>
          <div className="hidden lg:flex">
            <NavigationLinks />
          </div>
        </div>
        <div className="hidden lg:flex justify-between items-center gap-3">
          {ButtonLinks.map(({ url, title, isPrimary }) => (
            <NavigationItem title={title} url={url} isPrimary={isPrimary} />
          ))}
        </div>

        {/* Mobile NavigationLinks is here */}
        <div
          className="lg:hidden p-3 text-teal-800 text-4xl bg-teal-50 rounded-full cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <MdMenuOpen /> : <MdMenu />}
        </div>
      </div>

      <div
        className={`${
          open ? "block" : "hidden"
        } bg-white rounded-2xl mx-10 px-5 py-6 shadow-lg`}
      >
        <NavigationLinks />
        <div className="flex gap-x-5">
          {ButtonLinks.map(({ url, title, isPrimary }) => (
            <NavigationItem title={title} url={url} isPrimary={isPrimary} />
          ))}
        </div>
      </div>
    </header>
  );
}
