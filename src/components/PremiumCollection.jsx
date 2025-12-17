import React from "react";
import { useNavigate } from "react-router";

export default function PremiumCollection() {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: "Kitchen Storage & Accessories",
      icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
    },
    {
      id: 2,
      title: "Mother & Baby",
      icon: "https://cdn-icons-png.flaticon.com/512/4326/4326930.png",
    },
    {
      id: 3,
      title: "Health & Beauty",
      icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
    },
    {
      id: 4,
      title: "Jewellery",
      icon: "https://cdn-icons-png.flaticon.com/512/9472/9472598.png",
    },
    {
      id: 5,
      title: "Gadget",
      icon: "https://cdn-icons-png.flaticon.com/512/8659/8659373.png",
    },
    {
      id: 6,
      title: "Toys & Games",
      icon: "https://cdn-icons-png.flaticon.com/512/9716/9716926.png",
    },
  ];

  return (
    <div className="w-full px-4 md:px-10 py-10">

      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Premium Collection
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Discover top categories carefully curated for your lifestyle.
        </p>
      </div>

      {/* CATEGORY GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">

        {categories.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            className="
              bg-[#e9f5ff] rounded-3xl shadow cursor-pointer
              hover:scale-105 hover:shadow-xl transition-all duration-300
              flex flex-col items-center justify-center py-8 border border-transparent
              hover:border-[#447db3]
            "
          >
            <img
              src={item.icon}
              alt={item.title}
              className="w-14 h-14 object-contain mb-4 transition-all duration-300 
                         group-hover:scale-110"
            />

            <h3
              className="
                text-base font-semibold text-gray-800 text-center px-2
                transition-colors duration-300 hover:text-[#447db3]
              "
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
