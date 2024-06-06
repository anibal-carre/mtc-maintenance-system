import Table from "@/components/users/table";
import Pagination from "@/components/keys/pagination";
import { Suspense } from "react";
import { fetchUsersPages } from "@/lib/data";
import { UsersTableSkeleton } from "@/components/skeletons";
import Search from "@/components/keys/search";
import { CreateUser } from "@/components/users/buttons";
export default async function UsersPage({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;
  const query = searchParams?.query || "";

  const totalPages = await fetchUsersPages(query);

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={` text-2xl`}>Invoices</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search keys..." />
        <CreateUser />
      </div>

      <Suspense key={query + currentPage} fallback={<UsersTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense>

      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
