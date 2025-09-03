"use client";

import { useState } from "react";

export default function ToDo() {
  const [todo, setTodo] = useState<string[]>([
    "Make Breakfast",
    "Count Ducks",
    "Count Frogs",
  ]);

  // to add a new element use:
  // setTodo([...todo, newElement])
  return (
    <div className="mt-8 p-4 bg-white rounded-xl border-2 border-black">
      <h2 className="text-rose-700 text-3xl mb-4">ToDo</h2>
      {todo.map((item, index) => (
        <div key={index} className="flex gap-4 my-2 items-center">
          <button className="bg-gray-500 w-4 h-4 rounded-full border-2 border-black cursor-pointer"></button>
          <div>{item}</div>
        </div>
      ))}
    </div>
  );
}
