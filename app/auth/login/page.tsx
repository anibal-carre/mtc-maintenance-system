import LoginForm from "@/components/auth/login-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-30 w-full justify-end items-center rounded-lg bg-green-800 p-2 md:h-36">
          <div className="w-auto text-white md:w-auto px-1 md:px-3">
            <Image
              className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-md"
              src={"/mtc-logo.png"}
              alt="MTC Logo"
              width={100}
              height={100}
            />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;
