import React, { useState } from "react";
import { products } from "../data/productsData";
import BestSellerCard from "../components/BestSellerCard";

const BestSellerPage = () => {
  const bestProducts = products.filter((p) => p.type === "best");

  const [page, setPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(bestProducts.length / itemsPerPage);

  const currentProducts = bestProducts.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div className="py-12 px-4">
      <h1 className="text-center text-3xl font-bold mb-10">Best Seller</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {currentProducts.map((p) => (
          <BestSellerCard key={p.id} {...p} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-3">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded-md border ${
              page === i + 1 ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BestSellerPage;
