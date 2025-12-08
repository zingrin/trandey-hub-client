import React, { useState } from "react";

export default function CollectionsPage() {
  const allProducts = [
    {
      id: 1,
      title: "Smart Wireless Earbuds",
      category: "Gadget",
      price: 1590,
      img: "https://i.ibb.co/8x7h9m8/earbuds.jpg",
      desc: "Experience crystal-clear sound with high-quality bass.",
    },
    {
      id: 2,
      title: "Luxury Skincare Serum",
      category: "Beauty",
      price: 1250,
      img: "https://i.ibb.co/8XW3pW2/serum.jpg",
      desc: "Nourish your skin with deep hydration and glow boost.",
    },
    {
      id: 3,
      title: "Elegant Gold Bracelet",
      category: "Jewellery",
      price: 2190,
      img: "https://i.ibb.co/8NyQXwv/bracelet.jpg",
      desc: "Minimal, classy and perfect for any outfit.",
    },
    {
      id: 4,
      title: "Digital Blood Pressure Monitor",
      category: "Health",
      price: 1890,
      img: "https://i.ibb.co/Jt5XcDK/bp.jpg",
      desc: "Keep track of your daily health with accurate readings.",
    },
    {
      id: 5,
      title: "Kitchen Multipurpose Blender",
      category: "Kitchen",
      price: 2490,
      img: "https://i.ibb.co/MVwVvgp/blender.jpg",
      desc: "Blend everything—juice, smoothies, spices, whatever you want.",
    },
    {
      id: 6,
      title: "Smart Fitness Band",
      category: "Gadget",
      price: 1690,
      img: "https://i.ibb.co/bvQNK1M/fitnessband.jpg",
      desc: "Track your steps, calories, heart rate and more.",
    },
    {
      id: 7,
      title: "Organic Face Cleanser",
      category: "Beauty",
      price: 990,
      img: "https://i.ibb.co/1sW0sX5/cleanser.jpg",
      desc: "Smooth, gentle and refreshing for all skin types.",
    },
    {
      id: 8,
      title: "Premium Non-stick Frypan",
      category: "Kitchen",
      price: 1290,
      img: "https://i.ibb.co/5hsmH4c/frypan.jpg",
      desc: "Cook like a pro with high-heat safe non-stick coating.",
    },
  ];

  // STATES
  const [products, setProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewType, setViewType] = useState("grid");

  const productsPerPage = 6;

  // Pagination
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = products.slice(indexOfFirst, indexOfLast);

  const pages = Math.ceil(products.length / productsPerPage);

  // Sorting
  const sortProducts = (type) => {
    let sorted = [...products];

    if (type === "az") sorted.sort((a, b) => a.title.localeCompare(b.title));
    if (type === "za") sorted.sort((a, b) => b.title.localeCompare(a.title));
    if (type === "priceLow") sorted.sort((a, b) => a.price - b.price);
    if (type === "priceHigh") sorted.sort((a, b) => b.price - a.price);

    setProducts(sorted);
  };

  // CLEAR ALL BUTTON
  const clearAll = () => {
    setProducts(allProducts);
    setCurrentPage(1);
    setViewType("grid");
  };

  return (
    <div className="w-full">

      {/* ---------------------------------------------------------------- */}
      {/* ✔ TOP HERO SECTION WITH BACKGROUND IMAGE */}
      {/* ---------------------------------------------------------------- */}
      <div className="w-full h-[250px] md:h-[350px] lg:h-[420px] relative">
        <img
          src="https://i.ibb.co/pB7fx0jf/businesspeople-floating-with-suitcase-23-2148186803.jpg"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold drop-shadow-lg">
            Trendy Products Collection
          </h1>
        </div>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* ✔ MAIN CONTENT */}
      {/* ---------------------------------------------------------------- */}
      <div className="w-full flex gap-10 px-6 md:px-12 mt-10">

        {/* ---------------- LEFT SIDEBAR ---------------- */}
        <div className="w-[25%] hidden md:block">
          <h2 className="text-xl font-semibold mb-4">Category</h2>

          <ul className="space-y-3 text-gray-700">
            <li>Gadget</li>
            <li>Beauty</li>
            <li>Jewellery</li>
            <li>Health</li>
            <li>Kitchen</li>
          </ul>

          <button
            onClick={clearAll}
            className="mt-6 w-full py-2 bg-pink-400 text-white"
          >
            Clear All
          </button>
        </div>

        {/* ---------------- RIGHT PRODUCTS ---------------- */}
        <div className="w-full md:w-[75%]">

          {/* Header Controls */}
          <div className="flex justify-between items-center mb-6">
            {/* VIEW BUTTONS */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewType("grid")}
                className={`p-2 border-amber-200 ${
                  viewType === "grid" ? "bg-pink-300" : ""
                }`}
              >
                ▦
              </button>

              <button
                onClick={() => setViewType("list")}
                className={`p-2 border-b-amber-200 ${
                  viewType === "list" ? "bg-pink-300" : ""
                }`}
              >
                ☰
              </button>
            </div>

            {/* SORTING */}
            <div className="flex items-center gap-3">
              <span className="text-gray-700">Sort By</span>
              <select
                onChange={(e) => sortProducts(e.target.value)}
                className="border p-2"
              >
                <option value="featured">Featured</option>
                <option value="az">Alphabetically, A-Z</option>
                <option value="za">Alphabetically, Z-A</option>
                <option value="priceLow">Price, low to high</option>
                <option value="priceHigh">Price, high to low</option>
              </select>
            </div>
          </div>

          {/* PRODUCTS GRID / LIST */}
          <div
            className={
              viewType === "grid"
                ? "grid grid-cols-1 md:grid-cols-3 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {currentProducts.map((p) => (
              <div
                key={p.id}
                className={`border-none p-3 shadow hover:shadow-lg transition ${
                  viewType === "list" ? "flex gap-4 items-center" : ""
                }`}
              >
                <img
                  src={p.img}
                  alt=""
                  className={`object-cover ${
                    viewType === "list"
                      ? "w-32 h-32 rounded"
                      : "w-full h-48"
                  }`}
                />

                <div>
                  <h3 className="mt-3 font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                  <p className="mt-2 font-bold text-pink-500">৳ {p.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: pages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border ${
                  currentPage === i + 1 ? "bg-pink-400 text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
