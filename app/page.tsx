"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState("Loading...");

  // example for useEffect
  // useEffect: do something AFTER rendering or in dependency of something else
  useEffect(() => {
    fetch("https://wttr.in/bremen?format=3")
      .then((res) => res.text())
      .then((data) => setWeather(data));
  }, []); // emtpy: run once, when the component is mounted

  return (
    <div>
      <h2 className="text-center text-3xl text-white">Do it all.</h2>
      <div className="mt-8 flex items-center">
        <div className="p-8 bg-white border-black rounded-[0px_30px_30px_0px] border-2 w-[70%]">
          <h4 className="text-red-700 text-[40px]">Manage.</h4>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
        <div className="w-[10%] h-1 bg-white"></div>
        <div className="w-40 h-40 bg-white rounded-xl"></div>
      </div>

      <div className="flex justify-center">
        <div className="bg-white rounded-xl p-2 border-2 border-black mt-8 w-40">
          <div className="text-center text-2xl text-rose-700">Weather</div>
          <div className="text-xl text-center">{weather}</div>
        </div>
      </div>
    </div>
  );
}
