"use client";
import Link from "next/link";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function CreateGame() {
  const [homePlayers, setHomePlayers] = useState([]);
  const [homePlayerName, setHomePlayerName] = useState("");
  const [homePlayerTries, setHomePlayerTries] = useState("");
  const [homePlayerTryAssists, setHomePlayerTryAssists] = useState("");
  const [homePlayerTackles, setHomePlayerTackles] = useState("");
  const [homePlayerMetresRun, setHomePlayerMetresRun] = useState("");
  const [homePlayerTackleBreaks, setHomePlayerTackleBreaks] = useState("");
  const [homePlayerLineBreaks, setHomePlayerLineBreaks] = useState("");
  const [homePlayerMissedTackles, setHomePlayerMissedTackles] = useState("");

  // away team
  {
    /* name, tries, tryAssists, tackles, metresRun, tackleBreaks, lineBreaks, missedTackles */
  }
  const [awayTeamPlayers, setAwayTeamPlayers] = useState([]);
  const [awayPlayerName, setAwayPlayerName] = useState("");
  const [awayPlayerTries, setAwayPlayerTries] = useState("");
  const [awayPlayerTryAssists, setAwayPlayerTryAssists] = useState("");
  const [awayPlayerTackles, setAwayPlayerTackles] = useState("");
  const [awayPlayerMetresRun, setAwayPlayerMetresRun] = useState("");
  const [awayPlayerTackleBreaks, setAwayPlayerTackleBreaks] = useState("");
  const [awayPlayerLineBreaks, setAwayPlayerLineBreaks] = useState("");
  const [awayPlayerMissedTackles, setAwayPlayerMissedTackles] = useState("");

  const addHomePlayerStats = (e) => {
    e.preventDefault();
    const newPlayer = {
      name: homePlayerName,
      tries: homePlayerTries,
      tryAssists: homePlayerTryAssists,
      tackles: homePlayerTackles,
      metresRun: homePlayerMetresRun,
      tackleBreaks: homePlayerTackleBreaks,
      lineBreaks: homePlayerLineBreaks,
      missedTackles: homePlayerMissedTackles,
    };
    setHomePlayers([...homePlayers, newPlayer]);

    // Clear input fields after submission
    setHomePlayerName("");
    setHomePlayerTries("");
    setHomePlayerTryAssists("");
    setHomePlayerTackles("");
    setHomePlayerMetresRun("");
    setHomePlayerTackleBreaks("");
    setHomePlayerLineBreaks("");
    setHomePlayerMissedTackles("");
  };

  const addAwayPlayer = (e) => {
    e.preventDefault();
    const newPlayer = {
      name: awayPlayerName,
      tries: awayPlayerTries,
      tryAssists: awayPlayerTryAssists,
      tackles: awayPlayerTackles,
      metresRun: awayPlayerMetresRun,
      tackleBreaks: awayPlayerTackleBreaks,
      lineBreaks: awayPlayerLineBreaks,
    };
    setAwayTeamPlayers([...awayTeamPlayers, newPlayer]);
    setAwayPlayerName("");
    setAwayPlayerTries("");
    setAwayPlayerTryAssists("");
    setAwayPlayerTackles("");
    setAwayPlayerMetresRun("");
    setAwayPlayerTackleBreaks("");
    setAwayPlayerLineBreaks("");
    setAwayPlayerMissedTackles("");
  };

  const handleDeletePlayer = (player) => {
    const updatedPlayers = awayTeamPlayers.filter(
      (p) => p.name !== player.name
    );
    setAwayTeamPlayers(updatedPlayers);
  };

  const handleEditPlayer = (e, player) => {
    e.preventDefault();
    console.log(player.name);
  };
  return (
    <div className="h-screen w-[100%] p-2 m-auto">
      {/* Form to create a new game */}
      <form
        className="bg-white p-4 border-2 border-slate-50 m-2 m-auto rounded-md flex flex-col cols-1 shadow-slate-400 
        shadow-xl"
      >
        <div>
          <h1 className="font-thin text-lg mb-2 uppercase border-b-2 border-slate-100">
            Create a Game
          </h1>
        </div>
        <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
          <label className="uppercase text-xs mb-2 text-sky-600">
            Game Year
          </label>
          <select name="" id="">
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
          <label className="uppercase text-xs mb-2 text-sky-600">Round</label>
          <select name="" id="">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
          <label className="uppercase text-xs mb-2 text-sky-600">
            Home Team
          </label>
          <select className="mb-4" name="" id="">
            <option value="Eagles">Manly Sea Eagles</option>
            <option value="Roosters">Sydney Roosters</option>
            <option value="Eels">Parramatta Eels</option>
            <option value="Panthers">Penrith Panthers</option>
          </select>
          <div>
            <label>Home Team Player Stats</label>

            <div className="mt-4 border-slate-50 border-2 p-2 rounded-md">
              <div className=" grid grid-cols-1 mb-3">
                <label className="uppercase text-xs mb-1 text-sky-600">
                  Player Name
                </label>
                <input
                  type="text"
                  value={homePlayerName}
                  onChange={(e) => setHomePlayerName(e.target.value)}
                  placeholder="Enter Player Name"
                  className="focus:outline-none"
                />
              </div>
              <div className=" grid grid-cols-1 mb-3">
                <label className="uppercase text-xs mb-1 text-sky-600">
                  Tries
                </label>
                <input
                  type="number"
                  value={homePlayerTries}
                  onChange={(e) => setHomePlayerTries(e.target.value)}
                  placeholder="Enter Tries"
                  className="focus:outline-none"
                />
              </div>
              <div className=" grid grid-cols-1 mb-3">
                <label className="uppercase text-xs mb-1 text-sky-600">
                  Try Assists
                </label>
                <input
                  type="number"
                  value={homePlayerTryAssists}
                  onChange={(e) => setHomePlayerTryAssists(e.target.value)}
                  placeholder="Enter Try Assists"
                  className="focus:outline-none"
                />
              </div>
              <div className=" grid grid-cols-1 mb-3">
                <label className="uppercase text-xs mb-1 text-sky-600">
                  Tackles
                </label>
                <input
                  type="number"
                  value={homePlayerTackles}
                  onChange={(e) => setHomePlayerTackles(e.target.value)}
                  placeholder="Enter Tackles"
                  className="focus:outline-none"
                />
              </div>
              <div className=" grid grid-cols-1 mb-3">
                <label className="uppercase text-xs mb-1 text-sky-600">
                  Metres Run
                </label>
                <input
                  type="number"
                  value={homePlayerMetresRun}
                  onChange={(e) => setHomePlayerMetresRun(e.target.value)}
                  placeholder="Enter Metres Run"
                  className="focus:outline-none"
                />
              </div>
              <div className=" grid grid-cols-1 mb-3">
                <label className="uppercase text-xs mb-1 text-sky-600">
                  Tackle Breaks
                </label>
                <input
                  type="number"
                  value={homePlayerTackleBreaks}
                  onChange={(e) => setHomePlayerTackleBreaks(e.target.value)}
                  placeholder="Enter Tackle Breaks"
                  className="focus:outline-none"
                />
              </div>
              <div className=" grid grid-cols-1 mb-3">
                <label className="uppercase text-xs mb-1 text-sky-600">
                  Line Breaks
                </label>
                <input
                  type="number"
                  value={homePlayerLineBreaks}
                  onChange={(e) => setHomePlayerLineBreaks(e.target.value)}
                  placeholder="Enter Line Breaks"
                  className="focus:outline-none"
                />
              </div>
              <div className=" grid grid-cols-1 mb-3">
                <label className="uppercase text-xs mb-1 text-sky-600">
                  Missed Tackles
                </label>
                <input
                  type="number"
                  value={homePlayerMissedTackles}
                  onChange={(e) => setHomePlayerMissedTackles(e.target.value)}
                  placeholder="Enter Missed Tackles"
                  className="focus:outline-none"
                />
              </div>
              <button
                onClick={addHomePlayerStats}
                className="mb-4 mt-2 bg-sky-600 text-white px-4 py-2 rounded"
              >
                Add Player Stats
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-[200%] table-fixed border-collapse">
                <thead className="">
                  <tr className="">
                    <th className="p-2">Player Name</th>
                    <th>Tries</th>
                    <th>Try Assists</th>
                    <th>Tackles</th>
                    <th>Metres Run</th>
                    <th>Tackle Breaks</th>
                    <th>Line Breaks</th>
                    <th>Missed Tackles</th>
                  </tr>
                </thead>
                <tbody className="">
                  {homePlayers.map((player, index) => {
                    return (
                      <tr key={index} className="">
                        <td className="border px-2  py-1 text-center">
                          {player.name}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.tries}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.tryAssists}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.tackles}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.metresRun}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.tackleBreaks}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.lineBreaks}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.missedTackles}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
          <label className="uppercase text-xs mb-2 text-sky-600">
            Away Team
          </label>
          <select name="" id="" className="mb-3">
            <option value="Eagles">Manly Sea Eagles</option>
            <option value="Roosters">Sydney Roosters</option>
            <option value="Eels">Parramatta Eels</option>
            <option value="Panthers">Penrith Panthers</option>
          </select>
          <label>Away Team Player Stats</label>
          <div className="mt-4 border-slate-50 border-2 p-2 rounded-md">
            {/* name, tries, tryAssists, tackles, metresRun, tackleBreaks, lineBreaks, missedTackles */}
            <div className="grid grid-cols-1 mb-3">
              <label className="uppercase text-xs mb-1 text-sky-600">
                Player Name
              </label>
              <input
                type="text"
                placeholder="Tom Trbojevic"
                value={awayPlayerName}
                onChange={(e) => setAwayPlayerName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mb-3">
              <label className="uppercase text-xs mb-1 text-sky-600">
                Tries
              </label>
              <input
                type="number"
                placeholder="2"
                value={awayPlayerTries}
                onChange={(e) => setAwayPlayerTries(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mb-3">
              <label className="uppercase text-xs mb-1 text-sky-600">
                Try Assists
              </label>
              <input
                type="number"
                placeholder="0"
                value={awayPlayerTryAssists}
                onChange={(e) => setAwayPlayerTryAssists(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mb-3">
              <label className="uppercase text-xs mb-1 text-sky-600">
                Tackles
              </label>
              <input
                type="number"
                placeholder="0"
                value={awayPlayerTackles}
                onChange={(e) => setAwayPlayerTackles(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mb-3">
              <label className="uppercase text-xs mb-1 text-sky-600">
                Metres Run
              </label>
              <input
                type="number"
                placeholder="0"
                value={awayPlayerMetresRun}
                onChange={(e) => setAwayPlayerMetresRun(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mb-3">
              <label className="uppercase text-xs mb-1 text-sky-600">
                Tackle Breaks
              </label>
              <input
                type="number"
                placeholder="0"
                value={awayPlayerTackleBreaks}
                onChange={(e) => setAwayPlayerTackleBreaks(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mb-3">
              <label className="uppercase text-xs mb-1 text-sky-600">
                Line Breaks
              </label>
              <input
                type="number"
                placeholder="0"
                value={awayPlayerLineBreaks}
                onChange={(e) => setAwayPlayerLineBreaks(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 mb-3">
              <label className="uppercase text-xs mb-1 text-sky-600">
                Missed Tackles
              </label>
              <input
                type="number"
                placeholder="0"
                value={awayPlayerMissedTackles}
                onChange={(e) => setAwayPlayerMissedTackles(e.target.value)}
              />
            </div>
            <button
              className="mb-4 mt-2 bg-sky-600 text-white px-4 py-2 rounded"
              onClick={addAwayPlayer}
            >
              Add Player
            </button>
            <h3 className="mb-3">Away Player Stats</h3>
            <div className="overflow-x-auto">
              <table className="w-[200%] table-fixed border-collapse">
                <thead>
                  <tr>
                    <th>Player Name</th>
                    <th>Tries</th>
                    <th>Try Assists</th>
                    <th>Tackles</th>
                    <th>Metres Run</th>
                    <th>Tackle Breaks</th>
                    <th>Line Breaks</th>
                    <th>Missed Tackles</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {awayTeamPlayers.map((player, index) => {
                    return (
                      <tr key={index}>
                        <td className="border px-2 py-1 text-center">
                          {player.name}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.tries}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.tryAssists}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.tackles}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.metresRun}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.tackleBreaks}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.lineBreaks}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          {player.missedTackles}
                        </td>
                        <td className="border px-2 py-1 text-center">
                          <div className="flex justify-around">
                            <button
                              className="bg-red-500 text-white p-1"
                              onClick={() => handleDeletePlayer(player)}
                            >
                              <MdDeleteOutline />
                            </button>
                            <button
                              className="bg-orange-500 text-white p-1"
                              onClick={(e) => handleEditPlayer(e, player)}
                            >
                              <MdEdit />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="">
          <button
            type="submit"
            className="mb-4 bg-sky-600 w-full rounded py-2 text-sky-100 uppercase shadow-lg shadow-slate-400"
          >
            Create Game
          </button>
        </div>
      </form>
      <Link
        href="/dashboard/admin"
        className="underline underline-offset-2 decoration-2"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default CreateGame;
