import React, { useMemo, useState } from "react";

export default function Shop() {
  // ---------- Helpers ----------
  const applyDiscount = (priceBDT) => Math.floor(priceBDT - priceBDT * 0.055); // 5.5% off
  const fmt = (n) => `৳${n.toLocaleString()}`;

  // ---------- FAKE PRODUCTS ----------
  // Each product has id, name, category, brand, price (BDT), image, reviews (count), rating
  const allProducts = useMemo(() => {
    const categories = [
      "Men’s Fashion",
      "Women’s Fashion",
      "Gadgets",
      "Accessories",
      "Beauty",
      "Home",
    ];

    return Array.from({ length: 50 }).map((_, i) => {
      const base = 120 + (i % 12) * 45; // varied base price in BDT
      const price = base + (i % 5) * 10;
      const newPrice = applyDiscount(price);
      const cat = categories[i % categories.length];
      return {
        id: i + 1,
        name: (i % 7 === 0
          ? "Retro Glass Jug"
          : `TrendyHub Product ${i + 1}`
        ).toUpperCase(),
        brand: ["TrendyHub", "LocalBrand", "StyleCo"][i % 3],
        category: cat,
        price,
        newPrice,
        // use picsum for varied placeholder images (no internet guarantee in offline env)
        image: `https://picsum.photos/seed/product${i + 1}/600/600`,
        reviews: 800 + i * 12,
        rating: 3 + (i % 3) + (i % 2) * 0.0, // 3-5-ish
      };
    });
  }, []);

  // ---------- UI State ----------
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);
  const [priceRange, setPriceRange] = useState([0, 5000]); // min, max BDT
  const perPage = 9;

  // Derive categories for sidebar
  const categories = useMemo(() => {
    const set = new Set(allProducts.map((p) => p.category));
    return ["All", ...Array.from(set)];
  }, [allProducts]);

  // ---------- Filtering ----------
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return allProducts.filter((p) => {
      if (selectedCategory !== "All" && p.category !== selectedCategory)
        return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [allProducts, search, selectedCategory, priceRange]);

  // Pagination calculations
  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const start = (page - 1) * perPage;
  const currentProducts = filtered.slice(start, start + perPage);

  // Ensure page resets when filters change
  React.useEffect(() => {
    setPage(1);
  }, [search, selectedCategory, priceRange]);

  // Trending: top 6 by reviews
  const trendingProducts = useMemo(() => {
    return [...allProducts].sort((a, b) => b.reviews - a.reviews).slice(0, 6);
  }, [allProducts]);

  // Add to cart placeholder
  const handleAddToCart = (p) => {
    // Replace with real cart logic later
    alert(`${p.name} added to cart — ${fmt(p.newPrice)}`);
  };

  // Price range slider helpers (two inputs for simplicity)
  const handleMinPriceChange = (val) =>
    setPriceRange((r) => [Math.min(val, r[1]), r[1]]);
  const handleMaxPriceChange = (val) =>
    setPriceRange((r) => [r[0], Math.max(val, r[0])]);

  return (
    <div className="w-full bg-gray-50 py-10 flex justify-center">
      <div className="max-w-[1400px] w-full px-4 flex gap-10">
        {/* LEFT SIDEBAR */}
        <aside className="w-[280px] space-y-8">
          {/* SEARCH */}
          <div>
            <div className="font-semibold mb-2 text-gray-800">
              Search products
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-white">
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 outline-none text-sm"
                placeholder="Search by name, brand or category"
              />
              <button
                onClick={() => setSearch("")}
                aria-label="clear"
                className="text-gray-400 text-lg ml-2"
                title="Clear"
              >
                ✖
              </button>
            </div>
          </div>

         
          {/* PRICE FILTER */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-gray-800 text-lg">Price</span>
              <span className="text-yellow-700 text-xl">🧪</span>
            </div>

            {/* Range line */}
            <div className="flex items-center">
              <input
                type="range"
                min="200"
                max="5000"
                value={priceRange[0]}
                onChange={(e) => handleMinPriceChange(Number(e.target.value))}
                className="w-full h-[3px] bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <input
                type="range"
                min="200"
                max="5000"
                value={priceRange[1]}
                onChange={(e) => handleMaxPriceChange(Number(e.target.value))}
                className="w-full h-[3px] bg-gray-200 rounded-lg appearance-none cursor-pointer hidden"
              />
            </div>

            <div className="flex items-center justify-between mt-3 text-sm text-gray-800">
              <span className="text-gray-700 font-medium">Range</span>
              <span className="text-gray-900 font-semibold">
                {`৳${priceRange[0]}–৳${priceRange[1]}`}
              </span>
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-semibold mb-3 text-gray-800">
              Shop by Category
            </div>
            <ul className="space-y-2 text-gray-700">
              {categories.map((c) => {
                const active = selectedCategory === c;
                return (
                  <li
                    key={c}
                    onClick={() => setSelectedCategory(c)}
                    className={`flex justify-between items-center cursor-pointer px-3 py-2 rounded ${
                      active
                        ? "bg-yellow-50 text-yellow-700 font-medium"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span>{c}</span>
                    <span className="text-gray-400">›</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* TRENDING */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="font-semibold mb-3 text-gray-800">Trending Now</div>

            <div className="space-y-3">
              {trendingProducts.map((t) => (
                <div
                  key={t.id}
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="text-sm text-gray-800 leading-tight">
                    <div className="font-medium">{t.name.slice(0, 28)}</div>
                    <div className="text-xs text-gray-500">
                      {fmt(t.newPrice)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* MAIN / PRODUCTS */}
        <main className="flex-1">
          {/* Top bar: result count + sort placeholder */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filtered.length}</span>{" "}
                results
                {selectedCategory !== "All" && (
                  <>
                    {" "}
                    for <span className="font-medium">{selectedCategory}</span>
                  </>
                )}
              </div>
            </div>

            <div className="text-sm text-gray-500">
              {/* placeholder: you can add sort dropdown here */}
              Sort: <span className="font-medium">Popular</span>
            </div>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.length === 0 && (
              <div className="col-span-full bg-white p-8 rounded shadow text-center text-gray-600">
                No products found — try a different filter.
              </div>
            )}

            {currentProducts.map((p) => (
              <article
                key={p.id}
                className="w-full bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition flex flex-col"
                role="article"
              >
                {/* IMAGE WRAPPER */}
                <div className="relative w-full h-[220px] rounded-xl overflow-hidden bg-gray-100">
                  {/* SALE BADGE only when discounted */}
                  {p.newPrice < p.price && (
                    <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                      SALE
                    </span>
                  )}

                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {/* HEART ICON (placeholder) */}
                  <button
                    className="absolute right-3 top-3 text-white text-lg opacity-80"
                    aria-label="wishlist"
                    title="Add to wishlist"
                  >
                    🤍
                  </button>
                </div>

                {/* DETAILS */}
                <div className="mt-4 flex-1 flex flex-col">
                  <h3 className="text-[15px] font-semibold text-gray-800 uppercase tracking-wide">
                    {p.name}
                  </h3>
                  <div className="text-sm text-gray-500">By {p.brand}</div>

                  <div className="mt-2 flex items-center gap-2">
                    <div className="text-lg font-bold text-red-600">
                      {fmt(p.newPrice)}
                    </div>
                    <div className="text-sm line-through text-gray-400">
                      {fmt(p.price)}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
                    <div className="text-yellow-500">
                      {/* Simple star representation */}
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-xs">
                          {i < Math.round(p.rating) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <div>{(p.reviews || 0).toLocaleString()} reviews</div>
                  </div>

                  {/* Add to cart button bottom-aligned */}
                  <div className="mt-4">
                    <button
                      onClick={() => handleAddToCart(p)}
                      className="w-full border border-red-500 text-red-500 py-2 rounded-xl hover:bg-red-500 hover:text-white transition font-medium"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="flex justify-center gap-4 items-center mt-8 text-gray-600">
            <button
              onClick={() => setPage((cur) => Math.max(1, cur - 1))}
              className={`px-3 py-1 rounded ${
                page === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={page === 1}
            >
              ‹
            </button>

            {/* page numbers (show up to 5 nearby pages) */}
            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                // show condensed pages if many
                if (
                  totalPages > 7 &&
                  pageNum !== 1 &&
                  pageNum !== totalPages &&
                  Math.abs(pageNum - page) > 2
                ) {
                  // show dots only once for left and right gaps
                  if (pageNum < page && pageNum > 2) {
                    // left gap handled by first dots
                    return pageNum === page - 3 ? (
                      <span key={pageNum} className="px-2">
                        ...
                      </span>
                    ) : null;
                  }
                  if (pageNum > page && pageNum < totalPages - 1) {
                    return pageNum === page + 3 ? (
                      <span key={pageNum} className="px-2">
                        ...
                      </span>
                    ) : null;
                  }
                  return null;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`px-3 py-1 rounded-full ${
                      pageNum === page
                        ? "bg-white border shadow font-medium"
                        : "bg-transparent"
                    }`}
                    aria-current={pageNum === page ? "page" : undefined}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setPage((cur) => Math.min(totalPages, cur + 1))}
              className={`px-3 py-1 rounded ${
                page === totalPages ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={page === totalPages}
            >
              ›
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
