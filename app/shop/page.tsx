"use client";

import ShopItem from "@/components/shop-item";
import { useState } from "react";

export default function ShopPage() {
  const items = [
    { name: "Shoes", price: 79.99, image: "shoes.svg" },
    { name: "Shirt", price: 29.99, image: "shirt.svg" },
    { name: "Pants", price: 49.99, image: "pants.svg" },
    { name: "Hoodie", price: 69.99, image: "hoodie.svg" },
    { name: "Bottle", price: 9.99, image: "bottle.svg" },
    { name: "Cap", price: 19.99, image: "cap.svg" },
  ];

  const [total, setTotal] = useState(0);

  return (
    <>
      <h1 className="text-[100px] lg:text-[200px] text-white modak text-center">
        Shop.
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {items.map((item, index) => (
          <ShopItem
            title={item.name}
            price={item.price}
            image={item.image}
            total={total}
            setTotal={setTotal}
            key={index}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <p className="text-3xl mb-10 text-white">Total: {total} EUR</p>
      </div>
    </>
  );
}
