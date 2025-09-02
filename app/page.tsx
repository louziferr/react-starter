"use client";

export default function Home() {
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
    </div>
  );
}
