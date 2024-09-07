"use client";
import { useState, useEffect } from "react";

const EditPlayerModal = ({ player, onClose, onUpdate }) => {
  const [name, setName] = useState(player.name);
  const [tries, setTries] = useState(player.tries);
  const [tryAssists, setTryAssists] = useState(player.tryAssists);
  const [tackles, setTackles] = useState(player.tackles);
  const [metresRun, setMetresRun] = useState(player.metresRun);
  const [tackleBreaks, setTackleBreaks] = useState(player.tackleBreaks);
  const [lineBreaks, setLineBreaks] = useState(player.lineBreaks);
  const [missedTackles, setMissedTackles] = useState(player.missedTackles);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedPlayer = {
      id: player.id,
      name,
      tries,
      tryAssists,
      tackles,
      metresRun,
      tackleBreaks,
      lineBreaks,
      missedTackles,
    };
    onUpdate(updatedPlayer);
    onClose();
  };
  return (
    // <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 pr-1 h-[80vh] rounded-lg w-full max-w-lg overflow-hidden">
        <h2 className="text-lg uppercase text-sky-600 font-light mb-4">
          Edit Player
        </h2>
        <div className="overflow-y-auto h-[70vh]">
          <form className="overflow-y-auto" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Player Name
              </label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tries
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={tries}
                onChange={(e) => setTries(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Try Assists
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={tryAssists}
                onChange={(e) => setTryAssists(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Player Tackles
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={tackles}
                onChange={(e) => setTackles(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Metres Run
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={metresRun}
                onChange={(e) => setMetresRun(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Tackle Breaks
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={tackleBreaks}
                onChange={(e) => setTackleBreaks(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Line Breaks
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={lineBreaks}
                onChange={(e) => setLineBreaks(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Missed Tackles
              </label>
              <input
                type="number"
                className="w-full border p-2 rounded"
                value={missedTackles}
                onChange={(e) => setMissedTackles(e.target.value)}
              />
            </div>
            <div className="mb-10">
              <button
                onClick={() => onClose()}
                className="p-2 bg-gray-500 text-white rounded mr-2 pointer"
              >
                Cancel
              </button>
              <button
                className="p-2 bg-sky-600 text-white rounded"
                type="submit"
              >
                Update Player
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPlayerModal;
