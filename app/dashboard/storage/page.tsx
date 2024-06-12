import Table from "@/components/storage/table";
import Pagination from "@/components/keys/pagination";
import { Suspense } from "react";
import { fetchKeysPages } from "@/lib/data";
import { ProductTableSkeleton } from "@/components/skeletons";
import Search from "@/components/keys/search";
import { CreateProduct } from "@/components/storage/buttons";
export default async function StoragePage({
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
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search keys..." />
        <CreateProduct />
      </div>

      <Suspense key={query + currentPage} fallback={<ProductTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
