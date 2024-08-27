"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
function TeamDetails() {
  const router = useRouter();
  const [teamId, setTeamId] = useState(null);

  useEffect(() => {
    const url = new URL(window.location.href);
    const id = url.pathname.split("/").pop();
    setTeamId(id);
  }, []);
  if (!teamId) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <div>{teamId && <h1>Team Id: {teamId}</h1>}</div>
      <Link href="/teams" className="flex justify-center items-center">
        <button className="bg-cyan-600 py-1 px-2 rounded text-white">
          Go back to All Teams
        </button>
      </Link>
    </>
  );
}

export default TeamDetails;
