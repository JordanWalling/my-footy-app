"use client";
import Link from "next/link";
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import EditPlayerModal from "@/components/edit-player-modal/EditPlayerModal";
function CreateGame() {
  // home player states
  const [homePlayers, setHomePlayers] = useState([]);
  const [homePlayerName, setHomePlayerName] = useState("");
  const [homePlayerTries, setHomePlayerTries] = useState("");
  const [homePlayerTryAssists, setHomePlayerTryAssists] = useState("");
  const [homePlayerTackles, setHomePlayerTackles] = useState("");
  const [homePlayerMetresRun, setHomePlayerMetresRun] = useState("");
  const [homePlayerTackleBreaks, setHomePlayerTackleBreaks] = useState("");
  const [homePlayerLineBreaks, setHomePlayerLineBreaks] = useState("");
  const [homePlayerMissedTackles, setHomePlayerMissedTackles] = useState("");

  // away team states

  const [awayTeamPlayers, setAwayTeamPlayers] = useState([]);
  const [awayPlayerName, setAwayPlayerName] = useState("");
  const [awayPlayerTries, setAwayPlayerTries] = useState("");
  const [awayPlayerTryAssists, setAwayPlayerTryAssists] = useState("");
  const [awayPlayerTackles, setAwayPlayerTackles] = useState("");
  const [awayPlayerMetresRun, setAwayPlayerMetresRun] = useState("");
  const [awayPlayerTackleBreaks, setAwayPlayerTackleBreaks] = useState("");
  const [awayPlayerLineBreaks, setAwayPlayerLineBreaks] = useState("");
  const [awayPlayerMissedTackles, setAwayPlayerMissedTackles] = useState("");

  //   edit player states
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [isHomeTeam, setIsHomeTeam] = useState(true);

  //
  const [selectedHomeTeam, setSelectedHomeTeam] = useState("");
  const [selectedAwayTeam, setSelectedAwayTeam] = useState("");
  const [round, setRound] = useState("");
  const [year, setYear] = useState("");

  // handleFormSubmittion

  const handleSubmit = (e) => {
    e.preventDefault();
    const game = {
      round,
      year,
      homeTeam: selectedHomeTeam,
      homeTeamPlayers: homePlayers,
      awayTeam: selectedAwayTeam,
      awayTeamPlayers: awayTeamPlayers,
    };
    console.log(game);
  };
  const addHomePlayerStats = (e) => {
    e.preventDefault();
    const newPlayer = {
      id: Math.floor(Math.random() * 9999).toString(),
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
      id: Math.floor(Math.random() * 9999).toString(),
      name: awayPlayerName,
      tries: awayPlayerTries,
      tryAssists: awayPlayerTryAssists,
      tackles: awayPlayerTackles,
      metresRun: awayPlayerMetresRun,
      tackleBreaks: awayPlayerTackleBreaks,
      lineBreaks: awayPlayerLineBreaks,
      missedTackles: awayPlayerMissedTackles,
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

  const handleDeletePlayer = (e, player, isHomeTeam = true) => {
    e.preventDefault();
    if (!isHomeTeam) {
      const updatedPlayers = awayTeamPlayers.filter((p) => p.id !== player.id);
      setAwayTeamPlayers(updatedPlayers);
    } else {
      const updatedPlayers = homePlayers.filter((p) => p.id !== player.id);
      setHomePlayers(updatedPlayers);
    }
  };

  const handleEditPlayer = (e, player, isHomeTeam = true) => {
    e.preventDefault();
    setCurrentPlayer(player);
    setEditIsOpen(true);
    console.log(player, editIsOpen);
    setIsHomeTeam(isHomeTeam);
  };

  const handlePlayerUpdate = (updatedPlayer) => {
    if (isHomeTeam === true) {
      const updatedPlayers = homePlayers.map((player) =>
        player.id === updatedPlayer.id ? updatedPlayer : player
      );
      setHomePlayers(updatedPlayers);
    } else {
      const updatedPlayers = awayTeamPlayers.map((player) =>
        player.id === updatedPlayer.id ? updatedPlayer : player
      );
      setAwayTeamPlayers(updatedPlayers);
    }
    setEditIsOpen(false);
  };
  return (
    <div className="h-screen w-[100%] p-2 m-auto">
      {/* Form to create a new game */}
      <form
        className="bg-white p-4 border-2 border-slate-50 m-2 m-auto rounded-md flex flex-col cols-1 shadow-slate-400 
        shadow-xl max-w-xl"
        onSubmit={handleSubmit}
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
          <select
            name=""
            id=""
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
          <label className="uppercase text-xs mb-2 text-sky-600">Round</label>
          <select
            name=""
            id=""
            value={round}
            onChange={(e) => setRound(e.target.value)}
          >
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
          <select
            className="mb-4 text-md font-semibold outline-none pl-0 text-left"
            name=""
            id=""
            value={selectedHomeTeam}
            onChange={(e) => setSelectedHomeTeam(e.target.value)}
          >
            <option value="Eagles" className="">
              Manly Sea Eagles
            </option>
            <option value="Roosters">Sydney Roosters</option>
            <option value="Eels">Parramatta Eels</option>
            <option value="Panthers">Penrith Panthers</option>
          </select>
          <div>
            <h3 className="text-md font-semibold text-gray-500">
              Home Team Player Stats
            </h3>

            <div className="mt-4 ">
              <div className=" grid grid-cols-1 mb-3">
                <label className="uppercase text-xs mb-1 text-sky-600">
                  Player Name
                </label>
                <input
                  type="text"
                  value={homePlayerName}
                  onChange={(e) => setHomePlayerName(e.target.value)}
                  placeholder="Enter Player Name"
                  className="focus:outline-none ml-2"
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
                  className="focus:outline-none ml-2"
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
                  className="focus:outline-none ml-2"
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
                  className="focus:outline-none ml-2"
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
                  className="focus:outline-none ml-2"
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
                  className="focus:outline-none ml-2"
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
                  className="focus:outline-none ml-2"
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
                  className="focus:outline-none ml-2"
                />
              </div>
              <button
                onClick={addHomePlayerStats}
                className="mb-4 mt-2 bg-sky-600 text-white px-4 py-2 rounded"
              >
                Add Player Stats
              </button>
            </div>
            <div className="overflow-x-auto p-1">
              <table className="w-[200%] table-fixed border-collapse border-slate-50 border-2">
                <thead>
                  <tr className="">
                    <th className="p-4 text-sm w-[150px]">Player Name</th>
                    <th className="p-4 text-sm w-[100px]">Tries</th>
                    <th className="p-4 text-sm w-[150px]">Try Assists</th>
                    <th className="p-4 text-sm w-[120px]">Tackles</th>
                    <th className="p-4 text-sm w-[120px]">Metres Run</th>
                    <th className="p-4 text-sm w-[150px]">Tackle Breaks</th>
                    <th className="p-4 text-sm w-[120px]">Line Breaks</th>
                    <th className="p-4 text-sm w-[150px]">Missed Tackles</th>
                    <th className="p-4 text-sm w-[120px]">Actions</th>
                  </tr>
                </thead>
                <tbody className="">
                  {homePlayers.map((player) => {
                    return (
                      <tr key={player.id} className="">
                        <td className="border py-2 text-center">
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
                        <td>
                          <div className="flex justify-around">
                            <button
                              className="bg-red-500 text-white p-2 rounded"
                              onClick={(e) =>
                                handleDeletePlayer(e, player, true)
                              }
                            >
                              <MdDeleteOutline />
                            </button>
                            <button
                              className="bg-orange-500 text-white p-2 rounded"
                              onClick={(e) => handleEditPlayer(e, player, true)}
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

        <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
          <label className="uppercase text-xs mb-2 text-sky-600">
            Away Team
          </label>

          <select
            name=""
            id=""
            className="mb-4 text-md font-semibold outline-none"
            value={selectedHomeTeam}
            onChange={(e) => setSelectedAwayTeam(e.target.value)}
          >
            <option value="Eagles">Manly Sea Eagles</option>
            <option value="Roosters">Sydney Roosters</option>
            <option value="Eels">Parramatta Eels</option>
            <option value="Panthers">Penrith Panthers</option>
          </select>
          <h3 className="text-md font-semibold text-gray-500">
            Away Team Player Stats
          </h3>
          <div className="mt-4">
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
                className="focus:outline-none ml-2"
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
                className="focus:outline-none ml-2"
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
                className="focus:outline-none ml-2"
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
                className="focus:outline-none ml-2"
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
                className="focus:outline-none ml-2"
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
                className="focus:outline-none ml-2"
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
                className="focus:outline-none ml-2"
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
                className="focus:outline-none ml-2"
              />
            </div>
            <button
              className="mb-4 mt-2 bg-sky-600 text-white px-4 py-2 rounded"
              onClick={addAwayPlayer}
            >
              Add Player
            </button>

            <div className="overflow-x-auto p-1 ">
              <table className="w-[200%] table-fixed border-collapse">
                <thead>
                  <tr className="">
                    <th className="p-4 text-sm w-[150px]">Player Name</th>
                    <th className="p-4 text-sm w-[100px]">Tries</th>
                    <th className="p-4 text-sm w-[120px]">Try Assists</th>
                    <th className="p-4 text-sm w-[120px]">Tackles</th>
                    <th className="p-4 text-sm w-[120px]">Metres Run</th>
                    <th className="p-4 text-sm w-[120px]">Tackle Breaks</th>
                    <th className="p-4 text-sm w-[120px]">Line Breaks</th>
                    <th className="p-4 text-sm w-[120px]">Missed Tackles</th>
                    <th className="p-4 text-sm w-[120px]">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {awayTeamPlayers.map((player) => {
                    return (
                      <tr key={player.id}>
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
                              className="bg-red-500 text-white p-2 rounded"
                              onClick={(e) =>
                                handleDeletePlayer(e, player, false)
                              }
                            >
                              <MdDeleteOutline />
                            </button>
                            <button
                              className="bg-orange-500 text-white p-2 rounded"
                              onClick={(e) =>
                                handleEditPlayer(e, player, false)
                              }
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

      {/* Edit Player Modal section */}
      {editIsOpen && currentPlayer && (
        <EditPlayerModal
          player={currentPlayer}
          onClose={() => setEditIsOpen(false)}
          onUpdate={handlePlayerUpdate}
        />
      )}
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
