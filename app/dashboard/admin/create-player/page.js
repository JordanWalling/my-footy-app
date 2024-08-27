"use client";
import Link from "next/link";

function createPlayer() {
  return (
    <div>
      <h1>Create Player</h1>
      {/* Form to create a new player */}
      <Link href="/dashboard/admin">Back to Dashboard</Link>
    </div>
  );
}

export default createPlayer;
