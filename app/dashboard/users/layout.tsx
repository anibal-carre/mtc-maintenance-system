import { auth } from "@/auth";
import { getUserById } from "@/lib/data";
import { redirect } from "next/navigation";
export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = await getUserById(session?.user?.id as string);

  if (!user?.isAdmin) {
    redirect("/dashboard");
  }
  return <div>{children}</div>;
}
