"use client";

import { useState } from "react";

export default function ToDo() {
  const currentDate = new Date();

  const [todo, setTodo] = useState<string[]>([
    "Make Breakfast",
    "Count Ducks",
    "Count Frogs",
  ]);

  const [newTodo, setNewTodo] = useState("");

  function handleDone(item: string) {
    const updatedTodos = todo.filter((todoItem) => item !== todoItem);
    setTodo(updatedTodos);
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key == "Enter") {
      setTodo([...todo, newTodo]);
      setNewTodo("");
    }
  }

  // to add a new element use:
  // setTodo([...todo, newElement])
  return (
    <div className="mt-8 p-4 bg-white rounded-xl border-2 border-black">
      <h2 className="text-rose-700 text-3xl mb-4">ToDo</h2>
      {todo.map((item, index) => (
        <div key={index} className="flex gap-4 my-2 items-center">
          <button
            className="bg-gray-300 w-4 h-4 rounded-full border-2 border-black cursor-pointer"
            onClick={() => handleDone(item)}
          ></button>
          <div>{item}</div>
        </div>
      ))}
      <input
        className="px-2 py-1 border border-black rounded-xl font-light"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
