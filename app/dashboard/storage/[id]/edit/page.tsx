import Form from "@/components/storage/edit-form";
import { fetchKeyById } from "@/lib/data";
import { KeyForm } from "@/lib/definitions";
import Image from "next/image";
import { notFound } from "next/navigation";

type Product = {
  id: string;
  name: string;
  quantity: number;
  buyQuantity: number;
  stockQuantity: number;
  createdAt: Date;
  updatedAt: Date;
};
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  console.log(typeof id);

  if (!id) {
    notFound();
  }
  return (
    <main>
      <Form id={id} />
    </main>
  );
}
