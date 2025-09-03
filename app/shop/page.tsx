import ShopItem from "@/components/shop-item";

export default function ShopPage() {
  const items = [
    { name: "Shoes", price: 79.99 },
    { name: "Shirt", price: 29.99 },
    { name: "Pants", price: 49.99 },
    { name: "Hoodie", price: 69.99 },
    { name: "Bottle", price: 9.99 },
    { name: "Cap", price: 19.99 },
  ];

  return (
    <>
      <h1 className="text-[100px] lg:text-[200px] text-white modak text-center">
        Shop.
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        {items.map((item, index) => (
          <ShopItem title={item.name} price={item.price} key={index} />
        ))}
      </div>
    </>
  );
}
