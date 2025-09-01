"use client";
import { useState } from "react";

interface CounterProps {
  name: string;
}

export default function Counter({ name }: CounterProps) {
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  return (
    <div className="text-white text-center mx-8">
      <h2 className="text-3xl">{name}</h2>
      <p>{counter}</p>
      <button
        className="m-2 p-1 bg-white text-black cursor-pointer"
        onClick={increase}
      >
        +
      </button>

      <button
        className="m-2 p-1 bg-white text-black cursor-pointer"
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
}
