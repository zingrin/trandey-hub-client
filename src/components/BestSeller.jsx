import React, { useState, useEffect } from "react";
import BestSellerCard from "./BestSellerCard";

const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // FETCH PRODUCTS  //
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:5000/api/bestSellers");
        const data = await res.json();

        // ensure it's an array
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // FILTER & PAGINATION //
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

  // RENDER  //
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
          {["all", "best", "sale"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTab(tab)}
              className={`${
                activeTab === tab
                  ? "text-red-600 border-b-4 border-red-600 pb-1 cursor-pointer"
                  : "hover:text-red-600 cursor-pointer"
              }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : currentProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {currentProducts.map((p) => (
              <BestSellerCard key={p._id || p.id} product={p} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="w-10 h-10 flex items-center justify-center rounded-full border text-lg
                 bg-white text-gray-600 border-gray-300
                 hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              &lt;
            </button>

            {Array.from({ length: totalPages }, (_, i) => {
              const pageNumber = i + 1;
              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`w-10 h-10 flex items-center justify-center rounded-full border text-sm font-semibold transition ${
                    page === pageNumber
                      ? "bg-red-500 text-white border-red-500 cursor-pointer"
                      : "bg-white text-gray-600 border-gray-300 hover:bg-red-100 hover:text-red-600 cursor-pointer"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            })}

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-full border text-lg
                 bg-white text-gray-600 border-gray-300
                 hover:bg-gray-200 disabled:opacity-40 cursor-pointer"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
