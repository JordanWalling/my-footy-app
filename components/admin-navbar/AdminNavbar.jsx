"use client";
import Link from "next/link";

function AdminNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard/admin/create-team">Create a Team</Link>
        </li>
        <li>
          <Link href="/dashboard/admin/create-player">Create a Player</Link>
        </li>
        <li>
          <Link href="/dashboard/admin/create-game">Create a Game</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
