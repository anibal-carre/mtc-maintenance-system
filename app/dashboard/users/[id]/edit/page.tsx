import Form from "@/components/users/edit-form";
import { notFound } from "next/navigation";

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
