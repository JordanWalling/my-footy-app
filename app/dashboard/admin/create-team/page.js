"use client";
import Link from "next/link";
function createTeam() {
  return (
    <div>
      <h1>Create Team</h1>
      {/* Form to create a new team */}
      <Link href="/dashboard/admin">Back to Dashboard</Link>
    </div>
  );
}

export default createTeam;
