import Link from "next/link";
import NavLinks from "./nav-links";

import { PowerIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-24 items-center justify-between rounded-md bg-green-800 p-4 md:h-40"
        href="/"
      >
        <h2 className="text-white font-[700]">MTC Brazil Maintenance System</h2>
        <div className="w-20 text-white flex justify-end md:w-40">
          <Image
            className="w-[70px] h-[70px] md:w-[70px] md:h-[70px] rounded-md"
            src={"/mtc-logo.png"}
            alt="MTC Logo"
            width={70}
            height={70}
          />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-green-100 hover:text-green-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
