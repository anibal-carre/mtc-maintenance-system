import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-24 items-center justify-between rounded-lg bg-green-800 p-4 md:p-6 md:h-52">
        <h1 className="w-[280px] text-[18px] md:text-[28px] text-white font-[700] ">
          MTC Brazil Maintenance System
        </h1>

        <Image
          className=" w-[70px] h-[70px] md:h-[180px] md:w-[180px] rounded-md"
          src={"/mtc-logo.png"}
          alt="MTC Logo"
          width={180}
          height={180}
        />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Welcome to MTC Brazil Maintenance System.</strong> This is a
            tool to help with inventory control and maintenance in{" "}
            <a
              href="https://www.churchofjesuschrist.org/callings/missionary/brazil-missionary-training-center"
              className="text-green-600"
            >
              MTC Brazil
            </a>
          </p>
          <Link
            href="/auth/login"
            className="flex items-center gap-5 self-start rounded-lg bg-green-800 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-600 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
      </div>
    </main>
  );
}
