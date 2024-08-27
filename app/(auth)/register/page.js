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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-12 mt-5 p-2">
          <div className="border border-cyan-600 px-2 py-1 rounded">
            <h1 className="text-xl font-bold mb-2 text-cyan-600">
              Personal Details
            </h1>
            <div>
              <div className="grid grid-cols-1 mb-2">
                <label className="text-base font-medium text-cyan-600">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="placeholder:text-sm text-cyan-600 placeholder:text-cyan-600 placeholder:opacity-50 pl-1"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
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
      {success && <p className="text-green-500 text-sm">{success}</p>}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default Register;
