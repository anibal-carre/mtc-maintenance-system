"use client";
import { Key } from "@/lib/definitions";
import Link from "next/link";
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Button } from "../button";
import { createKey } from "@/lib/actions";
import { useFormState } from "react-dom";
import { error } from "console";
import Image from "next/image";

export default function Form() {
  //const initialState = { message: null, errors: {} };
  //const [state, dispatch] = useFormState(createKey, initialState);
  return (
    <form action={createKey} aria-describedby="customer-error">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <div className="relative">
            <Image
              src={"/key.png"}
              alt="key-image"
              className="pointer-events-none absolute left-3 top-1/2 h-[25px] w-[25px] -translate-y-1/2 text-gray-500"
              width={18}
              height={18}
            />
          </div>
          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {/*state.errors?.key &&
              state.errors.key.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              )) */}
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Key Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="key"
                name="key"
                type="text"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="amount-error" aria-live="polite" aria-atomic="true">
              {/* state.errors?.key &&
                state.errors.key.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                )) */}
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Door
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="door"
                name="door"
                type="text"
                step="0.01"
                placeholder="Enter USD amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="amount-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
            <div id="amount-error" aria-live="polite" aria-atomic="true">
              {/* state.errors?.key &&
                state.errors.key.map((error: string) => (
                  <p className="mt-2 text-sm text-red-500" key={error}>
                    {error}
                  </p>
                )) */}
            </div>
          </div>
        </div>

        {/* Invoice Status */}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/keys"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Key</Button>
      </div>
    </form>
  );
}
