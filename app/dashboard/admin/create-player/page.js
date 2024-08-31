"use client";
import Link from "next/link";

function createPlayer() {
  return (
    <div className="h-screen w-screen">
      {/* Form to create a new player */}
      <form
        className="bg-white p-4 border-2 border-slate-50 w-11/12 m-auto rounded-md flex flex-col cols-1 mb-2 shadow-slate-400 
        shadow-xl"
      >
        <div>
          <h1 className="font-thin text-lg mb-2 uppercase border-b-2 border-slate-100">
            Create a Player
          </h1>
        </div>
        <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
          <label className="uppercase text-xs mb-2 text-sky-600">
            Player Name
          </label>
          <input
            type="text"
            placeholder="Tom Trbojevic"
            className="text-sm placeholder:pl-px"
          />
        </div>
        <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
          <label className="uppercase text-xs mb-2 text-sky-600">
            Team Name
          </label>
          <select name="" id="">
            <option disabled value="">
              Please Choose a team
            </option>
            <option value="Manly Sea Eagles">Manly Sea Eagles</option>
            <option value="Sydney Roosters">Sydney Roosters</option>
          </select>
        </div>
        <div className="">
          <button
            type="submit"
            className="mb-4 bg-sky-600 w-full rounded py-2 text-sky-100 uppercase shadow-lg shadow-slate-400"
          >
            Create A Player
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

export default createPlayer;
