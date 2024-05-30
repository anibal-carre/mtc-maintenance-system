import Table from "@/components/keys/table";
import Pagination from "@/components/keys/pagination";
import { Suspense } from "react";
import { CreateKey } from "@/components/keys/buttons";
import { fetchKeysPages } from "@/lib/data";
export default async function KeyPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";

  const totalPages = await fetchKeysPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={` text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8"></div>

      <Table query={query} currentPage={currentPage} />

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
