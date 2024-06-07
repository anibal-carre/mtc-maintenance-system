import { auth } from "@/auth";
import { getUserById } from "@/lib/data";

const DashboardPage = async () => {
  const session = await auth();
  const user = await getUserById(session?.user?.id as string);
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Name: {user?.name}</p>
      <p>Username: {user?.username}</p>
      <p>IsAdmin: {String(user?.isAdmin)}</p>
    </div>
  );
};

export default DashboardPage;
