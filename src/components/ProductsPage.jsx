import React from "react";

const products = [
  {
    id: 1,
    image: "https://i.ibb.co/5x8WQpR/product1.jpg",
    name: "Silicone Foldable Bottle",
    oldPrice: 999,
    newPrice: 799,
  },
  {
    id: 2,
    image: "https://i.ibb.co/TYGjz8b/product2.jpg",
    name: "Vintage Typewriter",
    oldPrice: 190,
    newPrice: 160,
  },
  {
    id: 3,
    image: "https://i.ibb.co/t8xSkxV/product3.jpg",
    name: "Leather-Clad Leisure Chair",
    oldPrice: 279,
    newPrice: 249,
  },
  {
    id: 4,
    image: "https://i.ibb.co/7Q1ZfST/slide2.jpg",
    name: "Hi-Fi Headphones",
    oldPrice: 140,
    newPrice: 120,
  },
  {
    id: 5,
    image: "https://i.ibb.co/bK6LQhq/slide3.jpg",
    name: "Retro Glass Jug",
    oldPrice: 145,
    newPrice: 125,
  },
  {
    id: 6,
    image: "https://i.ibb.co/9VxQrCK/kitchen.png",
    name: "Cattpillar Doodle Roll",
    oldPrice: 990,
    newPrice: 550,
  },
];

const ProductCard = ({ image, name, oldPrice, newPrice }) => {
  return (
    <div className="rounded-xl p-4 bg-transparent border border-gray-200 hover:shadow-md duration-300">

      {/* Image */}
      <div className="relative w-full h-60 bg-gray-50 rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />

        <span className="absolute top-3 left-3 bg-lime-300 text-black text-xs px-3 py-1 rounded font-semibold tracking-wider">
          SALE
        </span>
      </div>

      {/* Info */}
      <div className="pt-4">
        <h2 className="text-sm md:text-base font-semibold text-gray-700 uppercase tracking-wide">
          {name}
        </h2>

        <div className="mt-1 flex items-center gap-2">
          <p className="text-gray-400 line-through text-sm">${oldPrice}.00</p>
          <p className="text-pink-600 font-bold text-lg">${newPrice}.00</p>
        </div>

        <button className="btn btn-error w-full mt-4 text-white normal-case">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div className="py-12 px-4">

      {/* Title */}
      <div className="text-center mb-10">
        <h3 className="text-sm text-gray-500 tracking-widest">Just in now</h3>

        <h1 className="text-3xl md:text-4xl font-bold mt-2 tracking-wide">
          BEST SELLERS
        </h1>

        {/* Title Underline */}
        <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3"></div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mt-6 text-gray-600 font-semibold">
          <button className="text-pink-600 border-b-4 border-pink-600 pb-1">
            ALL
          </button>
          <button className="hover:text-pink-600">BEST SELLER</button>
          <button className="hover:text-pink-600">SALE</button>
        </div>
      </div>

      {/* Full Section White Background */}
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-2xl shadow-2xl">

        {/* Product Grid */}
        <div
          className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3 
          lg:grid-cols-3 
          gap-8
        "
        >
          {products.map((p) => (
            <ProductCard
              key={p.id}
              image={p.image}
              name={p.name}
              oldPrice={p.oldPrice}
              newPrice={p.newPrice}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
