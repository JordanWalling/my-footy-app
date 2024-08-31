"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function Navbar() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [signedOut, setSignedOut] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      if (session?.user.role === "admin") {
        router.push("/dashboard/admin");
      } else {
        router.push("/dashboard/user");
      }
    } else {
      router.push("/login");
    }
  }, [status, router]);

  function handleSignOut() {
    signOut();
    setSignedOut("Signed Out Successfully");
    router.push("/login");
  }
  return (
    <div>
      <nav className="h-14">
        <ul className="flex justify-center items-center h-full">
          <Link href="/">
            <h3 className="text-lg font-black text-sky-600 flex-1 pl-2">
              My Footy App
            </h3>
          </Link>

          {status === "authenticated" ? (
            <div className="flex justify-end w-full flex-1 w-64">
              <li className="mr-2 bg-sky-600 px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-sky-700">
                <Link
                  href={`/dashboard/${
                    session?.user?.role === "admin" ? "admin" : "user"
                  }`}
                >
                  Dashboard
                </Link>
              </li>
              <li className="mr-2 bg-sky-600 font-black px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-sky-700">
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
              {signedOut && <p>{signedOut}</p>}
            </div>
          ) : (
            <div className="flex justify-end w-full flex-1 w-64">
              <li className="mr-3 bg-sky-600 px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-sky-700">
                <Link href="/login">Login</Link>
              </li>
              <li className="mr-3 bg-sky-600 px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-sky-700">
                <Link href="/register">Register</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
