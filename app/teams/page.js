"use client";
import Link from "next/link";

function TeamsList() {
  const teams = [
    { id: 1, name: "Manly Sea Eagles", color: "maroon" },
    { id: 2, name: "Melbourne Storm", color: "purple" },
    { id: 3, name: "Sydney Roosters", color: "red" },
    { id: 4, name: "Penrith Panthers", color: "black" },
    { id: 5, name: "Canberra Raiders", color: "green" },
    { id: 6, name: "Parramatta Eels", color: "yellow" },
  ];
  return (
    <div>
      <h1>Teams List</h1>
      {/* List all teams */}
      {teams.map((team) => {
        return (
          <div key={team.id}>
            <Link href={`/teams/${team.id}`}>
              <div>
                <h1 style={{ color: team.color }}>{team.name}</h1>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default TeamsList;
