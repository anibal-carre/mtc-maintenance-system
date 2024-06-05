import Form from "@/components/keys/edit-form";
import { fetchKeyById } from "@/lib/data";
import { KeyForm } from "@/lib/definitions";
import Image from "next/image";
import { notFound } from "next/navigation";

type Key = {
  id: string;
  key: string;
  door: string;
  createdAt: Date;
  updatedAt: Date;
};
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(typeof id);
  const key1 = await fetchKeyById(id);

  if (!id) {
    notFound();
  }
  return (
    <main>
      <Form id={id} />
    </main>
  );
}
