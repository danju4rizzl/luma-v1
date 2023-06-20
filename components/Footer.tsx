import { CustomText } from "@/components";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-5 md:py-3 md:px-16 lg:px-32  bg-slate-800 text-white border-t border-slate-700 text-center lg:text-left">
     <div className="grid md:flex justify-between items-center">
	 <CustomText text="© 2023 Luma Inc. Copyright and rights reserved" />
      <div className="space-x-5 order-first md:order-last">
        <Link href="/">Terms and Conditions</Link>
        <Link href="/"> Privacy Policy</Link>
      </div>
	 </div>
    </footer>
  );
}
