import Image from "next/image";
import { UpdateProduct, DeleteProduct } from "./buttons";
import { fetchFilteredProducts } from "@/lib/data";

export default async function KeysTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const products = await fetchFilteredProducts(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {products?.map((product) => (
              <div
                key={product.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <Image
                        src={"/stock.png"}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${product.name}'s profile picture`}
                      />
                      <p>
                        <span className="font-[500]">Product: </span>
                        {product.name}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">
                      <span className="font-[500]">Quantity: </span>
                      {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div className="flex flex-col">
                    <span className="text-[12px]">Buy Quantity</span>
                    <p>{product.buyQuantity}</p>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[12px]">Stock Quantity</span>
                    <p>{product.stockQuantity}</p>
                  </div>

                  <div className="flex justify-end gap-2">
                    <UpdateProduct id={product.id} />
                    <DeleteProduct id={product.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Product
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Quantity
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Buy Quantity
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Stock Quantity
                </th>

                <th scope="col" className="px-3 py-5 font-medium">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products?.map((product) => (
                <tr
                  key={product.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/stock.png"}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${product.name}'s profile picture`}
                      />
                      <p>{product.name}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.quantity}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.buyQuantity}
                  </td>

                  {/** <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocalTime(key.createdAt)}
                  </td>*/}
                  <td className="whitespace-nowrap px-3 py-3">
                    {product.stockQuantity}
                  </td>
                  {/*<td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocalTime(key.updatedAt as Date)}
                  </td> */}

                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex gap-3">
                      <UpdateProduct id={product.id} />
                      <DeleteProduct id={product.id} />
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
