"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result.error) {
      switch (result.error) {
        case "CredentialsSignIn":
          console.error("Invalid email or password", result.error);
          break;
        default:
          console.error("Unexpected error", result.error);
          break;
      }
    } else {
      router.push("/dashboard");
    }
  };
  return (
    <div className="translate-y-8 md:translate-y-16">
      <form
        className="bg-white p-4 border-2 border-slate-50 m-3 max-w-80 m-auto rounded-md flex flex-col cols-1 mb-2 shadow-slate-400 shadow-xl"
        onSubmit={handleSubmit}
      >
        <div className="space-y-12 mt-5 p-2">
          <h1 className="font-thin text-md mb-2 uppercase border-b-2 border-slate-100">
            Please enter your credentials
          </h1>

          <div className="flex flex-col mb-4">
            <label className="uppercase text-xs mb-2 text-sky-600">Email</label>
            <input
              type="email"
              placeholder="johnsmith@gmail.com"
              className="text-sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="uppercase text-xs mb-2 text-sky-600">
              Password
            </label>
            <input
              type="password"
              placeholder="*********"
              className="text-sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-sky-600 w-full rounded py-2 text-sky-100 uppercase shadow-lg"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
