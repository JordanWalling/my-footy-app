"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
function Register() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, email, password }),
      });
      if (!res.ok) {
        const error = await res.json();
        setError(error.message);
        return;
      } else {
        setSuccess("User created successfully.");
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
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
            <h1 className="font-thin text-lg mb-2 uppercase border-b-2 border-slate-100">
              Personal Details
            </h1>
            <div>
              <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
                <label className="uppercase text-xs mb-2 text-sky-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="text-sm placeholder:pl-px"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
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
      {success && <p className="text-green-500 text-sm">{success}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default Register;
