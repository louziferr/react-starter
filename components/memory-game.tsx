/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";

interface Card {
  id: number;
  img: number;
}

export default function MemoryGame() {
  // create array of cards
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    const cards: Card[] = [];
    // fill array
    for (let i = 1; i <= 24; i++) {
      cards.push({
        id: i, // id for card (numbers 1-24)
        img: (i % 12) + 1, // img references (numbers 1-12, twice)
      });
    }
    // shuffle array
    cards.sort(() => Math.random() - 0.5);
    setCards(cards);
  }, []); // useEffect runs once when the component is rendered

  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-center text-rose-700 font-bold">Memory Game</h2>
      <div className="grid grid-cols-6 m-4 gap-4">
        {cards.map((item, index) => (
          <div
            key={index}
            className="w-12 h-12 border-2 border-sky-700 rounded cursor-pointer"
          >
            <img
              className="hidden"
              src={`memory/${item.img}.svg`}
              alt={`Card-Item`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
