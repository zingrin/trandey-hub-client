import React, { useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useParams, useNavigate } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    // Fetch single product from API
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="text-center py-20 text-xl text-gray-600">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-20 text-xl text-gray-600">Product not found!</div>;
  }

  return (
    <div className="px-4 md:px-12 py-10">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 bg-[#447db3] text-white rounded-lg hover:bg-[#376691]"
      >
        ← Back Home
      </button>

      {/* MAIN */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* IMAGE */}
        <div className="rounded-xl border border-[#447db3]/30 p-4 bg-white">
          <img
            src={product.img}
            className="w-full h-[420px] object-cover rounded-xl"
            alt={product.title}
          />
        </div>

        {/* DETAILS */}
        <div className="text-gray-700">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="mt-1 text-gray-500">{product.category}</p>

          <div className="mt-4 flex items-center gap-4">
            <h2 className="text-4xl font-bold text-[#447db3]">${product.price}</h2>
            <span className="line-through text-gray-400 text-xl">${product.oldPrice}</span>
          </div>

          <div className="mt-4 flex items-center text-gray-600 gap-2">
            <span className="text-xl">🚚</span>
            <span className="text-[17px]">Shipping Within 2–5 Days</span>
          </div>

          <div className="mt-6">
            <label className="text-gray-700 font-medium">Color</label>
            <select className="w-full mt-2 p-3 border rounded-lg outline-[#447db3]">
              <option>Choose an option</option>
              <option>Black</option>
              <option>White</option>
              <option>Red</option>
            </select>
          </div>

          <div className="mt-6 flex gap-4">
            <input type="number" defaultValue={1} className="w-20 border p-3 rounded-lg" />
            <button className="flex-1 bg-[#447db3] text-white py-3 rounded-lg hover:bg-[#376691]">
              Add To Cart
            </button>
          </div>

          <p className="mt-4 text-gray-500">
            Category: <span className="text-gray-700">{product.category}</span>
          </p>

          {/* ⭐ SHARE SECTION */}
          <div className="mt-6">
            <p className="font-medium text-gray-700">Share Our Product:</p>
            <div className="flex gap-3 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#447db3] text-[#447db3] hover:bg-[#447db3] hover:text-white transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#447db3] text-[#447db3] hover:bg-[#447db3] hover:text-white transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#447db3] text-[#447db3] hover:bg-[#447db3] hover:text-white transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ⭐⭐ TABS ⭐⭐ */}
      <div className="mt-16 border-b pb-2 flex gap-6">
        <button
          onClick={() => setActiveTab("description")}
          className={`pb-2 text-lg ${
            activeTab === "description"
              ? "text-[#447db3] border-b-2 border-[#447db3]"
              : "text-gray-500"
          }`}
        >
          Description
        </button>

        <button
          onClick={() => setActiveTab("reviews")}
          className={`pb-2 text-lg ${
            activeTab === "reviews"
              ? "text-[#447db3] border-b-2 border-[#447db3]"
              : "text-gray-500"
          }`}
        >
          Reviews (0)
        </button>
      </div>

      {/* TAB CONTENT */}
      {activeTab === "description" && (
        <div className="mt-6 text-gray-700 text-lg">{product.description}</div>
      )}

      {activeTab === "reviews" && (
        <div id="reviews-section" className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Reviews (0)</h2>
          <p className="text-gray-600">There are no reviews yet.</p>
          {/* Review form could be added here */}
        </div>
      )}
    </div>
  );
}
