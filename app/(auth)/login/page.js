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
    <form onSubmit={handleSubmit}>
      <div className="space-y-12 mt-5 p-2">
        <div className="border border-cyan-600 px-2 py-1 rounded">
          <h1 className="text-xl font-bold mb-2 text-cyan-600">
            Please enter your credentials
          </h1>
          <div>
            <div className="grid grid-cols-1 mb-2">
              <label className="text-base font-medium text-cyan-600">
                Email
              </label>
              <input
                type="email"
                placeholder="johnsmith@gmail.com"
                className="placeholder:text-sm text-cyan-600 placeholder:text-cyan-600 placeholder:opacity-50 pl-1"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mb-2">
              <label className="text-base font-medium text-cyan-600">
                Password
              </label>
              <input
                type="password"
                placeholder="*********"
                className="placeholder:text-sm text-cyan-600 placeholder:text-cyan-600 placeholder:opacity-50 pl-1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-center mb-2">
              <button
                type="submit"
                className="ring-1 ring-cyan-600 rounded px-2 py-1 text-cyan-600 text-sm font-medium hover:bg-cyan-600 hover:text-white"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
