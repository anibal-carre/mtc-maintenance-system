import { PencilIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { deleteKey } from "@/lib/actions";

export function CreateKey() {
  return (
    <Link
      href="/dashboard/keys/create"
      className="flex h-10 items-center rounded-lg bg-green-800 px-4 text-sm font-medium text-white transition-colors hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateKey({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/keys/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeleteKey({ id }: { id: string }) {
  const deleteKeyWithId = deleteKey.bind(null, id);
  return (
    <form action={deleteKeyWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
