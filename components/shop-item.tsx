/* eslint-disable @next/next/no-img-element */
interface ShopItemProps {
  title: string;
  price: number;
}

export default function ShopItem({ title, price }: ShopItemProps) {
  return (
    <>
      <div className="bg-white p-4 rounded-xl border-2 border-black w-80">
        <h2 className="text-xl text-gray-600">{title}</h2>
        <div className="flex justify-center">
          <img
            className="my-8 w-60 h-60"
            src="shopping-store.svg"
            alt="ShopItem"
          ></img>
        </div>
        <h2 className="text-xl text-gray-600 text-right">{price} EUR</h2>

        <div className="flex justify-center">
          <button className="mt-4 bg-sky-700 text-white py-1 px-14 rounded-xl border-2 border-black">
            Buy
          </button>
        </div>
      </div>
    </>
  );
}
