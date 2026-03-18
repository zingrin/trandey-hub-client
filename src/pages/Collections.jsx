import React, { useState, useEffect } from "react";

export default function CollectionsPage() {
  // STATES
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewType, setViewType] = useState("grid");

  const productsPerPage = 6;

  // 🔥 API CALL
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setAllProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      {/* ✔ TOP HERO SECTION WITH BACKGROUND IMAGE */}
      <div className="w-full h-[250px] md:h-[350px] lg:h-[420px] relative">
        <img
          src="https://i.ibb.co.com/4wXk6Pz5/online-trends-53876-167072.jpg"
          className="w-full h-full object-cover"
          alt=""
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-semibold drop-shadow-lg">
            Trendy Products Collection
          </h1>
        </div>
      </div>

      {/* ✔ MAIN CONTENT */}
      <div className="w-full flex gap-10 px-6 md:px-12 mt-10">
        {/* ---------------- LEFT SIDEBAR ---------------- */}
        <div className="w-[25%] hidden md:block">
          <h2 className="text-xl font-semibold mb-4">Category</h2>

          <ul className="space-y-3 text-gray-700">
            {["Gadget", "Beauty", "Jewellery", "Health", "Kitchen"].map(
              (cat) => (
                <li
                  key={cat}
                  className="cursor-pointer transition hover:text-red-500 hover:translate-x-1"
                  onClick={() => {
                    setProducts(allProducts.filter((p) => p.category === cat));
                    setCurrentPage(1);
                  }}
                >
                  {cat}
                </li>
              ),
            )}
          </ul>

          <button
            onClick={clearAll}
            className="mt-6 w-full py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
          >
            Clear All
          </button>
        </div>

        {/* ---------------- RIGHT PRODUCTS ---------------- */}
        <div className="w-full md:w-[75%]">
          {/* Header Controls */}
          <div className="flex justify-between items-center mb-4">
            {/* VIEW BUTTONS */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewType("grid")}
                className={`w-11 h-11 flex items-center justify-center rounded-lg border border-amber-200 text-xl transition ${
                  viewType === "grid"
                    ? "bg-amber-200 text-white"
                    : "bg-white hover:bg-red-100"
                }`}
              >
                ▦
              </button>

              <button
                onClick={() => setViewType("list")}
                className={`w-11 h-11 flex items-center justify-center rounded-lg border border-amber-200 text-xl transition ${
                  viewType === "list"
                    ? "bg-amber-200 text-white"
                    : "bg-white hover:bg-red-100"
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
                className="border border-amber-200 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
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
                    viewType === "list" ? "w-32 h-32 rounded" : "w-full h-48"
                  }`}
                />

                <div>
                  <h3 className="mt-3 font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.desc}</p>
                  <p className="mt-2 font-bold text-red-500">৳ {p.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-16 mb-20 gap-3">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-1.5 text-sm rounded-full border transition ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-600 hover:bg-red-500 hover:text-white"
              }`}
            >
              Prev
            </button>

            <span className="flex items-center text-sm text-gray-500">
              {currentPage} / {pages}
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, pages))}
              disabled={currentPage === pages}
              className={`px-4 py-1.5 text-sm rounded-full border transition ${
                currentPage === pages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-600 hover:bg-red-500 hover:text-white"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
