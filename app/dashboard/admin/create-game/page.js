import Link from "next/link";

function createGame() {
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
          <select name="" id="">
            <option value="Eagles">Manly Sea Eagles</option>
            <option value="Roosters">Sydney Roosters</option>
            <option value="Eels">Parramatta Eels</option>
            <option value="Panthers">Penrith Panthers</option>
          </select>
          <form action="">
            <label htmlFor="">Home Team Player Stats</label>
            {/* ability to add individual player stats: tries, try assists, tackles, metres run, tackle breaks, line breaks, missed tackles */}
          </form>
        </div>
        <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
          <label className="uppercase text-xs mb-2 text-sky-600">
            Away Team
          </label>
          <select name="" id="">
            <option value="Eagles">Manly Sea Eagles</option>
            <option value="Roosters">Sydney Roosters</option>
            <option value="Eels">Parramatta Eels</option>
            <option value="Panthers">Penrith Panthers</option>
          </select>
          <form action="">
            <label htmlFor="">Home Team Player Stats</label>
            {/* ability to add individual player stats: tries, try assists, tackles, metres run, tackle breaks, line breaks, missed tackles */}
          </form>
        </div>
        <div className="">
          <button
            type="submit"
            className="mb-4 bg-sky-600 w-full rounded py-2 text-sky-100 uppercase shadow-lg shadow-slate-400"
          >
            Create Team
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

export default createGame;
