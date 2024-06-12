import { auth } from "@/auth";
import { getUserById } from "@/lib/data";

const DashboardPage = async () => {
  const session = await auth();
  const user = await getUserById(session?.user?.id as string);

  return (
    <div className="flex flex-col items-center gap-20">
      <div className="bg-green-800 rounded-md w-[90%] md:w-[80%] h-[100px] flex justify-center items-center text-white p-3">
        <h1 className="font-bold text-[20px]">
          Welcome to MTC Brazil System {user?.name}!!!
        </h1>
      </div>
    </div>
  );
};

export default DashboardPage;
