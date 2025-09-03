/* eslint-disable @next/next/no-img-element */
export default function ShopItem() {
  return (
    <>
      <div className="bg-white p-4 rounded-xl border-2 border-black w-80">
        <h2 className="text-xl text-gray-600">Shop Item</h2>
        <div className="flex justify-center">
          <img
            className="my-8 w-60 h-60"
            src="shopping-store.svg"
            alt="ShopItem"
          ></img>
        </div>
        <h2 className="text-xl text-gray-600 text-right">79.99 EUR</h2>

        <div className="flex justify-center">
          <button className="mt-4 bg-sky-700 text-white py-1 px-14 rounded-xl border-2 border-black">
            Buy
          </button>
        </div>
      </div>
    </>
  );
}
