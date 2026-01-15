import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();

  // Example trendy products
  const [products, setProducts] = useState([]);

  // Simulate API fetch
  useEffect(() => {
    const trending = [
      {
        id: 1,
        title: "Minimal Wooden Chair",
        price: "$120",
        image: "https://cdn-icons-png.flaticon.com/512/290/290914.png",
      },
      {
        id: 2,
        title: "Luxury Smart Watch",
        price: "$250",
        image: "https://cdn-icons-png.flaticon.com/512/291/291207.png",
      },
      {
        id: 3,
        title: "Elegant Vase Set",
        price: "$80",
        image: "https://cdn-icons-png.flaticon.com/512/292/292626.png",
      },
      {
        id: 4,
        title: "Wireless Headphones",
        price: "$180",
        image: "https://cdn-icons-png.flaticon.com/512/293/293664.png",
      },
      {
        id: 5,
        title: "Modern Table Lamp",
        price: "$70",
        image: "https://cdn-icons-png.flaticon.com/512/294/294074.png",
      },
      {
        id: 6,
        title: "Decorative Plant",
        price: "$40",
        image: "https://cdn-icons-png.flaticon.com/512/295/295356.png",
      },
    ];

    setProducts(trending);
  }, []);

  return (
    <div className="w-full px-4 md:px-10 py-16">

      {/* ABOUT HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          About Our Store
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          We curate the trendiest products for your lifestyle. Quality, style, and uniqueness – all in one place.
        </p>
      </div>

      {/* TRENDY PRODUCTS */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Trendy Products</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Discover the most loved products this season. Hand-picked for you.
        </p>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer p-5 flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4 transition-transform duration-300 hover:scale-110"
            />
            <h3 className="text-lg font-semibold text-gray-800 text-center">
              {product.title}
            </h3>
            <p className="text-blue-600 font-bold mt-2">{product.price}</p>
            <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
              Shop Now
            </button>
          </div>
        ))}
      </div>

      {/* ABOUT INFO / STORY */}
      <div className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
        <p className="text-gray-600 leading-relaxed text-lg">
          We started our journey with a passion for unique, high-quality products.
          Every item is selected with care to ensure our customers enjoy style, comfort, and functionality.
          Join our community and explore a world of trendy products.
        </p>
      </div>

    </div>
  );
}
