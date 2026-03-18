import React, { useState } from "react";

const PRODUCTS = [
  { id: 1, title: "Smart Earbuds", category: "Gadget", price: 1590, img: "https://i.ibb.co/8x7h9m8/earbuds.jpg" },
  { id: 2, title: "Fitness Band", category: "Gadget", price: 1690, img: "https://i.ibb.co/bvQNK1M/fitnessband.jpg" },
  { id: 3, title: "Face Serum", category: "Beauty", price: 1250, img: "https://i.ibb.co/8XW3pW2/serum.jpg" },
  { id: 4, title: "Gold Bracelet", category: "Jewellery", price: 2190, img: "https://i.ibb.co/8NyQXwv/bracelet.jpg" },
  { id: 5, title: "Blender", category: "Kitchen", price: 2490, img: "https://i.ibb.co/MVwVvgp/blender.jpg" },
  { id: 6, title: "Blood Pressure Monitor", category: "Health", price: 1890, img: "https://i.ibb.co/Jt5XcDK/bp.jpg" },
];

const categories = ["All", "Gadget", "Beauty", "Jewellery", "Kitchen", "Health"];

export default function Catalog() {
  const [products, setProducts] = useState(PRODUCTS);
  const [category, setCategory] = useState("All");
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);
  const [activeCard, setActiveCard] = useState(null);

  const perPage = 4;

  // Filter
  const filtered =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  // Pagination
  const totalPages = Math.ceil(filtered.length / perPage);
  const visible = filtered.slice((page - 1) * perPage, page * perPage);

  // Sorting
  const sortProducts = (type) => {
    let sorted = [...products];
    if (type === "low") sorted.sort((a, b) => a.price - b.price);
    if (type === "high") sorted.sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };

  return (
    <div className="w-full px-6 md:px-12 py-10">

      {/* HEADER */}
      <h1 className="text-3xl font-semibold mb-8">Product Catalog</h1>

      <div className="flex gap-10">

        {/* SIDEBAR */}
        <aside className="hidden md:block w-[22%]">
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-3">
            {categories.map((c) => (
              <li
                key={c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className={`cursor-pointer ${
                  category === c
                    ? "text-red-500 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {c}
              </li>
            ))}
          </ul>
        </aside>

        {/* CONTENT */}
        <section className="w-full md:w-[78%]">

          {/* TOP CONTROLS */}
          <div className="flex justify-between items-center mb-6">

            {/* VIEW */}
            <div className="flex gap-3">
              <button
                onClick={() => setView("grid")}
                className={`w-9 h-9 rounded-full flex items-center justify-center ${
                  view === "grid" ? "bg-red-500 text-white" : "bg-white text-black"
                }`}
              >
                ▦
              </button>
              <button
                onClick={() => setView("list")}
                className={`w-9 h-9 rounded-full flex items-center justify-center  ${
                  view === "list" ? "bg-red-500 text-white" : "bg-white text-black"
                }`}
              >
                ☰
              </button>
            </div>

            {/* SORT */}
            <select
              onChange={(e) => sortProducts(e.target.value)}
              className="border px-3 py-2 rounded-md"
            >
              <option>Sort</option>
              <option value="low">Price: Low → High</option>
              <option value="high">Price: High → Low</option>
            </select>
          </div>

          {/* PRODUCTS */}
          <div
            className={
              view === "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
                : "flex flex-col gap-4"
            }
          >
            {visible.map((p) => (
              <div
                key={p.id}
                onClick={() => setActiveCard(p.id)}
                className={`border rounded-xl p-4 cursor-pointer transition
                  ${
                    activeCard === p.id
                      ? "border-red-500"
                      : "border-none"
                  }
                  ${view === "list" ? "flex gap-4 items-center" : ""}
                  bg-white
                `}
              >
                <img
                  src={p.img}
                  alt=""
                  className={`${
                    view === "list" ? "w-28 h-28" : "w-full h-48"
                  } object-cover rounded-lg`}
                />
                <div>
                  <h3 className="mt-2 font-semibold">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.category}</p>
                  <p className="text-red-500 font-bold mt-1">৳ {p.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-4 mt-10 mb-20">
            <button
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
              className="px-4 py-2 rounded-full border disabled:opacity-40"
            >
              Prev
            </button>

            <span className="flex items-center text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>

            <button
              disabled={page === totalPages}
              onClick={() => setPage(page + 1)}
              className="px-4 py-2 rounded-full border disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
