import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
      flex 
      flex-col 
      justify-center 
      py-12
      min-h-full 
      sm:px-6
      lg:px-8
      bg-gray-100      
      "
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          src="/images/logo.png"
          alt="Logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
        />
        <h2 className="mt-6 text-center font-bold text-3xl text-gray-900 tracking-tight">
          Sign In to your account
        </h2>
      </div>
      {/* Auth Form */}
      <AuthForm />
    </div>
  );
}
