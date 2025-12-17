import React from "react";

export default function TrendingProducts({ products = [] }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="font-semibold mb-3 text-gray-800">Trending Now</div>

      <div className="space-y-3">
        {products.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-12 h-12 object-cover rounded"
            />
            <div className="text-sm text-gray-800 leading-tight">
              <div className="font-medium">{p.name.slice(0, 28)}</div>
              <div className="text-xs text-gray-500">৳{p.newPrice}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
