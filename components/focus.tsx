"use client";

import { useState } from "react";

export default function Focus() {
  const [isEditing, setIsEditing] = useState(false);
  const [focus, setFocus] = useState("Learn programming.");

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key == "Enter") {
      setIsEditing(false);
    }
  }

  return (
    <div className="bg-white border-2 border-black p-4 rounded-xl">
      <h2 className="text-rose-700 text-2xl">Focus.</h2>
      {isEditing ? (
        <div>
          <input
            className="border-2 border-black rounded-xl py-1 px-2 shadow-inner shadow-gray-200 font-thin"
            onChange={(e) => setFocus(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <div className="flex justify-between">
          <div className="text-xl">{focus}</div>
          <button
            className="bg-sky-700 text-white px-2 rounded border-2 border-black cursor-pointer"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
