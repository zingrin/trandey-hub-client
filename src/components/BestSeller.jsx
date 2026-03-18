import React, { useState } from "react";

const products = [
  {
    id: 1,
    image: "https://i.ibb.co/5x8WQpR/product1.jpg",
    name: "Silicone Foldable Bottle",
    oldPrice: 999,
    newPrice: 799,
    type: "best",
  },
  {
    id: 2,
    image: "https://i.ibb.co/TYGjz8b/product2.jpg",
    name: "Vintage Typewriter",
    oldPrice: 190,
    newPrice: 160,
    type: "sale",
  },
  {
    id: 3,
    image: "https://i.ibb.co/t8xSkxV/product3.jpg",
    name: "Leather-Clad Leisure Chair",
    oldPrice: 279,
    newPrice: 249,
    type: "best",
  },
  {
    id: 4,
    image: "https://i.ibb.co/7Q1ZfST/slide2.jpg",
    name: "Hi-Fi Headphones",
    oldPrice: 140,
    newPrice: 120,
    type: "sale",
  },
  {
    id: 5,
    image: "https://i.ibb.co/bK6LQhq/slide3.jpg",
    name: "Retro Glass Jug",
    oldPrice: 145,
    newPrice: 125,
    type: "sale",
  },
  {
    id: 6,
    image: "https://i.ibb.co/9VxQrCK/kitchen.png",
    name: "Cattpillar Doodle Roll",
    oldPrice: 990,
    newPrice: 550,
    type: "best",
  },
  {
    id: 7,
    image: "https://i.ibb.co/7Q1ZfST/slide2.jpg",
    name: "Premium Speaker",
    oldPrice: 160,
    newPrice: 130,
    type: "best",
  },
  {
    id: 8,
    image: "https://i.ibb.co/bK6LQhq/slide3.jpg",
    name: "Classic Lamp",
    oldPrice: 180,
    newPrice: 140,
    type: "sale",
  },
  {
    id: 9,
    image: "https://i.ibb.co/t8xSkxV/product3.jpg",
    name: "Office Chair",
    oldPrice: 300,
    newPrice: 260,
    type: "best",
  },
  {
    id: 10,
    image: "https://i.ibb.co/5x8WQpR/product1.jpg",
    name: "Water Bottle",
    oldPrice: 400,
    newPrice: 350,
    type: "sale",
  },
];

// ==================== CARD COMPONENT ==================== //
const BestSellerCard = ({ image, name, oldPrice, newPrice }) => {
  return (
    <div className="rounded-xl p-4 bg-transparent border border-gray-200 hover:shadow-md duration-300">
      {/* Image */}
      <div className="relative w-full h-60 bg-gray-50 rounded-lg overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-red-300 text-black text-xs px-3 py-1 rounded font-semibold tracking-wider">
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
          <p className="text-red-600 font-bold text-lg">${newPrice}.00</p>
        </div>

        <button className="btn w-full mt-4 border border-red-500 bg-white text-red-500 hover:bg-red-500 hover:text-white normal-case">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

// ==================== MAIN PAGE ==================== //
const BestSeller = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(1);

  const filteredProducts =
    activeTab === "all"
      ? products
      : products.filter((item) => item.type === activeTab);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleTab = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  return (
    <div className="py-12 px-4">
      {/* Title */}
      <div className="text-center mb-10">
        <h3 className="text-sm text-gray-500 tracking-widest">Just in now</h3>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 tracking-wide">
          BEST SELLERS
        </h1>
        <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-3"></div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mt-6 text-gray-600 font-semibold">
          <button
            onClick={() => handleTab("all")}
            className={`${
              activeTab === "all"
                ? "text-red-600 border-b-4 border-red-600 pb-1 cursor-pointer"
                : "hover:text-red-600  cursor-pointer"
            }`}
          >
            ALL
          </button>

          <button
            onClick={() => handleTab("best")}
            className={`${
              activeTab === "best"
                ? "text-red-600 border-b-4 border-red-600 pb-1 cursor-pointer"
                : "hover:text-red-600  cursor-pointer"
            }`}
          >
            BEST SELLER
          </button>

          <button
            onClick={() => handleTab("sale")}
            className={`${
              activeTab === "sale"
                ? "text-red-600 border-b-4 border-red-600 pb-1 cursor-pointer"
                : "hover:text-red-600 cursor-pointer"
            }`}
          >
            SALE
          </button>
        </div>
      </div>

      {/* Wrapper bg-base */}
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentProducts.map((p) => (
            <BestSellerCard key={p.id} {...p} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {/* Prev */}
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full border text-lg
               bg-white text-gray-600 border-gray-300
               hover:bg-gray-200 disabled:opacity-40"
          >
            &lt;
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => {
            const pageNumber = i + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => setPage(pageNumber)}
                className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm font-semibold transition ${
                  page === pageNumber
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-gray-600 border-gray-300 hover:bg-red-100 hover:text-red-600"
                }`}
              >
                {pageNumber}
              </button>
            );
          })}

          {/* Next */}
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full border text-lg
               bg-white text-gray-600 border-gray-300
               hover:bg-gray-200 disabled:opacity-40"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
