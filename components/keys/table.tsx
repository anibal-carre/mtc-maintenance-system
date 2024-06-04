import Image from "next/image";
import { UpdateKey, DeleteKey } from "./buttons";

import {
  formatDateToLocal,
  formatCurrency,
  formatDateToLocalDate,
  formatDateToLocalTime,
} from "@/lib/utils";
import { fetchFilteredKeys } from "@/lib/data";

export default async function KeysTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const keys = await fetchFilteredKeys(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {keys?.map((key) => (
              <div key={key.id} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={"/key.png"}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${key.key}'s profile picture`}
                      />
                      <p>{key.key}</p>
                    </div>
                    <p className="text-sm text-gray-500">{key.door}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <p>{formatDateToLocalDate(key.createdAt)}</p>

                  <p>{formatDateToLocalTime(key.createdAt)}</p>

                  <div className="flex justify-end gap-2">
                    <UpdateKey id={key.id} />
                    <DeleteKey id={key.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Key
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Door
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Time
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {keys?.map((key) => (
                <tr
                  key={key.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/key.png"}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${key.key}'s profile picture`}
                      />
                      <p>{key.key}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{key.door}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocalDate(key.createdAt)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocalTime(key.createdAt)}
                  </td>

                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex gap-3">
                      <UpdateKey id={key.id} />
                      <DeleteKey id={key.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
