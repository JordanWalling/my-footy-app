"use client";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <nav className="h-10">
        <ul className="flex justify-center items-center h-full">
          <Link href="/">
            <h3 className="text-base font-black text-cyan-600 flex-1 w-32 pl-2">
              My Footy App
            </h3>
          </Link>

          {isLoggedIn ? (
            <div className="flex justify-end w-full flex-1 w-64">
              <li className="mr-2 bg-cyan-600 px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-cyan-700">
                <Link href="/dashboard">Dashboard</Link>
              </li>
              <li className="mr-2 bg-cyan-600 font-black px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-cyan-700">
                <button>Sign Out</button>
              </li>
            </div>
          ) : (
            <div className="flex justify-end w-full flex-1 w-64">
              <li className="mr-3 bg-cyan-600 px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-cyan-700">
                <Link href="/login">Login</Link>
              </li>
              <li className="mr-3 bg-cyan-600 px-2 py-1 rounded-md text-slate-50 text-sm hover:bg-cyan-700">
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
