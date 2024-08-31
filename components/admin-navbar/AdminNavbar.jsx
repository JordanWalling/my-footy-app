"use client";
import Link from "next/link";
import { VscJersey } from "react-icons/vsc";
import { AiOutlineUserAdd } from "react-icons/ai";

import { IoAmericanFootballOutline } from "react-icons/io5";

function AdminNavbar() {
  return (
    <nav className="mb-2">
      <ul className="flex justify-around items-center p-2">
        <li className="py-4 px-4 bg-sky-600  flex flex-col items-center text-medium text-sky-50 rounded">
          <Link href="/dashboard/admin/create-team" className="px-3">
            <VscJersey />
          </Link>

          {/* Create a Team */}
        </li>
        <li className="py-4 px-4 bg-sky-600 flex flex-col items-center text-medium text-sky-50 rounded">
          <Link href="/dashboard/admin/create-player" className="px-3 ">
            <AiOutlineUserAdd />
          </Link>

          {/* Create a Player */}
        </li>
        <li className="py-4 px-4  bg-sky-600 flex flex-col items-center text-medium text-sky-50 rounded">
          <Link href="/dashboard/admin/create-game" className="px-3">
            <IoAmericanFootballOutline />
          </Link>

          {/* Create a Game */}
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
