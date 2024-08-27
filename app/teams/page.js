"use client";
import Link from "next/link";
import Image from "next/image";

function TeamsList() {
  const teams = [
    {
      id: 1,
      name: "Manly Sea Eagles",
      color: "maroon",
      image: "/assets/images/camera.jpeg",
    },
    {
      id: 2,
      name: "Melbourne Storm",
      color: "purple",
      image: "/assets/images/camera.jpeg",
    },
    {
      id: 3,
      name: "Sydney Roosters",
      color: "red",
      image: "/assets/images/camera.jpeg",
    },
    {
      id: 4,
      name: "Penrith Panthers",
      color: "black",
      image: "/assets/images/camera.jpeg",
    },
    {
      id: 5,
      name: "Canberra Raiders",
      color: "green",
      image: "/assets/images/camera.jpeg",
    },
    {
      id: 6,
      name: "Parramatta Eels",
      color: "yellowgreen",
      image: "/assets/images/camera.jpeg",
    },
  ];
  return (
    <div>
      <h1>Teams List</h1>
      {/* List all teams */}
      {teams.map((team) => {
        return (
          <main key={team.id} className="w-4/5 m-auto mt-5">
            <div className="p-2 border border-grey-600 rounded mb-2">
              <div className="">
                <Link href={`/teams/${team.id}`}>
                  <div>
                    <h1
                      className="text-center pb-2"
                      style={{ color: team.color }}
                    >
                      {team.name}
                    </h1>
                    <div className="flex justify-center items-center pb-2">
                      <Image
                        src={team.image}
                        alt={team.name}
                        width={100}
                        height={100}
                        priority
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </main>
        );
      })}
    </div>
  );
}

export default TeamsList;
