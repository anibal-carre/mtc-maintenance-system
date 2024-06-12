import { KeyIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Button } from "@/components/button";
import { fetchKeyById } from "@/lib/data";
import { updateKey } from "@/lib/actions";
import { notFound } from "next/navigation";

interface EditKeyFormProps {
  id: string;
}

const EditKeyForm: React.FC<EditKeyFormProps> = async ({ id }) => {
  console.log(id);

  const key = await fetchKeyById(id);

  if (!key) {
    notFound();
  }

  const updateKeyWithId = updateKey.bind(null, id);
  return (
    <form action={updateKeyWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
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
                defaultValue={key?.key}
                placeholder="Enter key name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
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
                defaultValue={key?.door}
                placeholder="Enter door"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/keys"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Edit Invoice</Button>
      </div>
    </form>
  );
};

export default EditKeyForm;
