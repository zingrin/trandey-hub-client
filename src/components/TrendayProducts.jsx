import React, { useState, useEffect } from "react";

export default function TrendyProducts() {
  // ------------------------------
  // 🔹 STATES
  // ------------------------------
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [price, setPrice] = useState(3000);
  const [wishlist, setWishlist] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // PRODUCTS PER PAGE
  const productsPerPage = 6;

  // ------------------------------
  // 🔹 DUMMY PRODUCTS
  //------------------------------
  const products = [
    { id: 1, name: "Women Stylish Handbag", price: 1200, cat: "Collection", img: "https://i.ibb.co/j8ZB0Rw/handbag.png" },
    { id: 2, name: "Minimal Sneakers", price: 2200, cat: "Collection", img: "https://i.ibb.co/fYh2g9n/sneakers.png" },
    { id: 3, name: "Casual Sunglasses", price: 850, cat: "Jewellery", img: "https://i.ibb.co/Hxj0sCg/sunglass.png" },
    { id: 4, name: "Smart Watch", price: 2800, cat: "Gadget", img: "https://i.ibb.co/NrcQ6hM/purse.png" },
    { id: 5, name: "Baby Toy Pack", price: 650, cat: "Collection", img: "https://i.ibb.co/2FxW0jz/toys.png" },
    { id: 6, name: "Ladies Skirt", price: 1400, cat: "Collection", img: "https://i.ibb.co/VWZjFjY/skirt.png" },
    { id: 7, name: "Trendy Backpack", price: 1700, cat: "Jewellery", img: "https://i.ibb.co/j8ZB0Rw/handbag.png" },
    { id: 8, name: "Kids Cap", price: 450, cat: "Collection", img: "https://i.ibb.co/2FxW0jz/toys.png" },
    { id: 9, name: "Wireless Earbuds", price: 2600, cat: "Gadget", img: "https://i.ibb.co/NrcQ6hM/purse.png" },
  ];

  // ------------------------------
  // 🔹 LOADING SIMULATION
  // ------------------------------
  useEffect(() => {
    setTimeout(() => setLoading(false), 1200);
  }, []);

  // ------------------------------
  // 🔹 FILTER + SEARCH + PRICE
  // ------------------------------
  const filtered = products.filter((item) => {
    return (
      (category === "All" || item.cat === category) &&
      item.price <= price &&
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  // ------------------------------
  // 🔹 PAGINATION LOGIC
  // ------------------------------
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filtered.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filtered.length / productsPerPage);

  // ------------------------------
  // 🔹 WISHLIST TOGGLE
  // ------------------------------
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id]
    );
  };

  // ------------------------------
  // 🔹 SKELETON COMPONENT
  // ------------------------------
  const SkeletonCard = () => (
    <div className="animate-pulse border rounded-lg p-4 space-y-4">
      <div className="h-40 bg-gray-300 rounded"></div>
      <div className="h-4 bg-gray-300 w-3/4"></div>
      <div className="h-4 bg-gray-300 w-1/2"></div>
      <div className="h-8 bg-gray-300 rounded"></div>
    </div>
  );

  return (
    <div className="w-full px-4 md:px-10 py-10">

      {/* -------------------------------------- */}
      {/* 🔥 PAGE HEADER */}
      {/* -------------------------------------- */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Trendy Products
        </h1>

        {/* 🔍 SEARCH BOX */}
        <input
          type="text"
          placeholder="Search products..."
          className="border px-4 py-2 rounded-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* -------------------------------------- */}
      {/* 🔥 FILTER SECTION */}
      {/* -------------------------------------- */}
      <div className="flex flex-wrap gap-6 mb-10">

        {/* CATEGORY FILTER */}
        <select
          className="border px-4 py-2 rounded-md"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All</option>
          <option>Collection</option>
          <option>Jewellery</option>
          <option>Gadget</option>
        </select>

        {/* PRICE SLIDER */}
        <div className="flex items-center gap-3">
          <span className="font-medium">Max Price:</span>
          <input
            type="range"
            min="200"
            max="3000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <span className="font-semibold text-pink-600">৳ {price}</span>
        </div>
      </div>

      {/* -------------------------------------- */}
      {/* 🔥 PRODUCTS GRID */}
      {/* -------------------------------------- */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

        {/* LOADING SKELETONS */}
        {loading &&
          [...Array(6)].map((_, i) => <SkeletonCard key={i} />)}

        {!loading &&
          currentProducts.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow hover:shadow-lg transition relative"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              {/* ❤️ WISHLIST BUTTON */}
              <button
                className="absolute top-3 right-3 text-xl"
                onClick={() => toggleWishlist(item.id)}
              >
                {wishlist.includes(item.id) ? "❤️" : "🤍"}
              </button>

              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-pink-600 text-xl font-bold">৳ {item.price}</p>

                <button className="w-full mt-4 bg-gray-900 hover:bg-black text-white py-2 rounded-lg transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* -------------------------------------- */}
      {/* 🔥 PAGINATION */}
      {/* -------------------------------------- */}
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded border ${
              currentPage === i + 1
                ? "bg-pink-500 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
