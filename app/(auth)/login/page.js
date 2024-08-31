"use client";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      console.log(session.user); // This should now include the role
      if (session.user.role === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard/user");
      }
    }
  }, [session, status, router]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError(res.error.message);
        console.error(res.error);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="translate-y-8">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 border-2 border-slate-50 w-11/12 m-auto rounded-md flex flex-col cols-1 mb-2 shadow-slate-400 
      shadow-xl"
      >
        <div className="space-y-12 mt-5 p-2">
          <div className="">
            <h1 className="font-thin text-md mb-2 uppercase border-b-2 border-slate-100">
              Please enter your credentials
            </h1>
            <div>
              <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
                <label className="uppercase text-xs mb-2 text-sky-600">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  className="text-sm placeholder:pl-px"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
                <label className="uppercase text-xs mb-2 text-sky-600">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="*********"
                  className="text-sm placeholder:pl-px"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center mb-2">
                <button
                  type="submit"
                  className="mb-4 bg-sky-600 w-full rounded py-2 text-sky-100 uppercase shadow-lg shadow-slate-400"
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
