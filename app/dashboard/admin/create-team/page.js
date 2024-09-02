"use client";
import Link from "next/link";
function createTeam() {
  return (
    <>
      <div className="h-screen w-[100%] p-2 ">
        {/* Form to create a new team */}
        <form
          className="bg-white p-4 border-2 border-slate-50 m-2 m-auto rounded-md flex flex-col cols-1 mb-2 shadow-slate-400 
        shadow-xl"
        >
          <div>
            <h1 className="font-thin text-lg mb-2 uppercase border-b-2 border-slate-100">
              Create a Team
            </h1>
          </div>
          <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
            <label className="uppercase text-xs mb-2 text-sky-600">
              Team Name
            </label>
            <input
              type="text"
              placeholder="Sydney Roosters"
              className="text-sm placeholder:pl-px"
            />
          </div>
          <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
            <label className="uppercase text-xs mb-2 text-sky-600">
              Team Primary Color
            </label>
            <input
              type="text"
              placeholder="Red"
              className="text-sm placeholder:pl-px"
            />
          </div>
          <div className="flex flex-col cols-1 mb-4 border-0 ring-2 ring-slate-100 rounded px-2 py-2 focus:ring-3">
            <label className="uppercase text-xs mb-2 text-sky-600">
              Team Image Location
            </label>
            <input
              type="text"
              placeholder="/public/images/manly.jpeg"
              className="text-sm placeholder:pl-px"
            />
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
    </>
  );
}

export default createTeam;
