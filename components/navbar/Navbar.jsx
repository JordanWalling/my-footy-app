"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
// import { getServerSession } from "next-auth";
// import { options } from "@/app/api/auth/[...nextauth]/options";

function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();

  console.log("session: ", session);

  const handleSignOut = async (e) => {
    e.preventDefault();
    await signOut({ callbackUrl: "/login" });
  };
  return (
    <div>
      <nav className="h-14">
        <ul className="flex justify-center items-center h-full">
          <Link href="/">
            <h3 className="text-lg font-black text-sky-600 flex-1 pl-2">
              My Footy App
            </h3>
          </Link>

          {session?.user ? (
            <div className="flex justify-end w-full flex-1 w-64">
              <li className="mr-2 bg-sky-600 px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-sky-700">
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li className="mr-2 bg-sky-600 font-black px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-sky-700">
                {/* <Link href="/api/auth/signout?callbackUrl=/">Logout</Link> */}
                <button onClick={handleSignOut}>Sign Out</button>
                {/* <Link href="/api/auth/signout">Logout</Link> */}
              </li>
            </div>
          ) : (
            <div className="flex justify-end w-full flex-1 w-64">
              <li className="mr-3 bg-sky-600 px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-sky-700">
                <Link href="/login">Login</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
