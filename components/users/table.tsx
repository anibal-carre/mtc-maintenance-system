import Image from "next/image";
import { UpdateKey, DeleteKey } from "../keys/buttons";

import {
  formatDateToLocal,
  formatCurrency,
  formatDateToLocalDate,
  formatDateToLocalTime,
} from "@/lib/utils";
import { fetchFilteredUsers } from "@/lib/data";
import { DeleteUser } from "./buttons";

export default async function UsersTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const users = await fetchFilteredUsers(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {users?.map((user) => (
              <div
                key={user.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={"/user.jpg"}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${user.name}'s profile picture`}
                      />
                      <p>
                        <span className="font-[500]">Name: </span>
                        {user.name}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">
                      <span className="font-[500]">Rol: </span>
                      {user.isAdmin == true ? "Admin" : "User"}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex flex-col">
                    <span className="text-[12px]">Created At</span>
                    <p>{formatDateToLocalDate(user.createdAt)}</p>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[12px]">Updated At</span>
                    <p>{formatDateToLocalDate(user.updatedAt as Date)}</p>
                  </div>

                  <div className="flex justify-end gap-2">
                    <UpdateKey id={user.id} />
                    <DeleteUser id={user.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Username
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Rol
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Created At
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Updated At
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {users?.map((user) => (
                <tr
                  key={user.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/user.jpg"}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${user.name}'s profile picture`}
                      />
                      <p>{user.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.username}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {user.isAdmin == true ? "Admin" : "User"}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocalDate(user.createdAt)}
                  </td>

                  {/** <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocalTime(key.createdAt)}
                  </td>*/}
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocalDate(user.updatedAt as Date)}
                  </td>
                  {/*<td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocalTime(key.updatedAt as Date)}
                  </td> */}

                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex gap-3">
                      <UpdateKey id={user.id} />
                      <DeleteUser id={user.id} />
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
