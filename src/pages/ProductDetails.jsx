import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("description");

  const products = {
    1: {
      title: "Kitchen Storage Box",
      price: 49.99,
      oldPrice: 69.99,
      img: "https://i.ibb.co/0M5vChj/skater-girl.png",
      category: "Kitchen Items",
      description:
        "This kitchen storage box helps you organize spices, utensils, jars, and more. Premium material & long-lasting build.",
    },
    2: {
      title: "Baby Sneakers",
      price: 29.99,
      oldPrice: 49.99,
      img: "https://i.ibb.co/fYh2g9n/sneakers.png",
      category: "Mother & Baby",
      description:
        "Soft, comfortable, and durable baby sneakers perfect for daily use.",
    },
    3: {
      title: "Beauty Skirt",
      price: 19.99,
      oldPrice: 29.99,
      img: "https://i.ibb.co/VWZjFjY/skirt.png",
      category: "Beauty & Fashion",
      description:
        "A stylish skirt made with premium cotton, breathable and perfect for all seasons.",
    },
    4: {
      title: "Luxury Jewellery Bag",
      price: 39.99,
      oldPrice: 59.99,
      img: "https://i.ibb.co/NrcQ6hM/purse.png",
      category: "Jewellery",
      description:
        "Beautiful jewellery bag perfect for gifting and personal use.",
    },
    5: {
      title: "Smart Gadget Sunglass",
      price: 79.99,
      oldPrice: 99.99,
      img: "https://i.ibb.co/Hxj0sCg/sunglass.png",
      category: "Gadget",
      description:
        "A modern smart sunglass with UV protection and stylish finish.",
    },
    6: {
      title: "Toys & Games Set",
      price: 24.99,
      oldPrice: 39.99,
      img: "https://i.ibb.co/2FxW0jz/toys.png",
      category: "Kids & Toys",
      description:
        "Fun learning toys that help develop creativity and imagination.",
    },
  };

  const product = products[id];

  if (!product) {
    return (
      <div className="text-center py-20 text-xl text-gray-600">
        Product not found!
      </div>
    );
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
            alt=""
          />
        </div>

        {/* DETAILS */}
        <div className="text-gray-700">
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="mt-1 text-gray-500">{product.category}</p>

          <div className="mt-4 flex items-center gap-4">
            <h2 className="text-4xl font-bold text-[#447db3]">
              ${product.price}
            </h2>
            <span className="line-through text-gray-400 text-xl">
              ${product.oldPrice}
            </span>
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
            <input
              type="number"
              defaultValue={1}
              className="w-20 border p-3 rounded-lg"
            />

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
                className="p-2 rounded border border-[#447db3] text-[#447db3] hover:bg-[#447db3] hover:text-white transition"
              >
                f
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                className="p-2 rounded border border-[#447db3] text-[#447db3] hover:bg-[#447db3] hover:text-white transition"
              >
                🐦
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="p-2 rounded border border-[#447db3] text-[#447db3] hover:bg-[#447db3] hover:text-white transition"
              >
                in
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
          onClick={() => {
            setActiveTab("reviews");
            document.getElementById("reviews-section")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
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
        <div className="mt-6 text-gray-700 text-lg">
          {product.description}
        </div>
      )}

      {activeTab === "reviews" && (
        <div id="reviews-section" className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Reviews (0)
          </h2>

          <p className="text-gray-600">There are no reviews yet.</p>

          <div className="mt-8 border p-6 rounded-lg bg-white">
            <h3 className="text-xl font-semibold text-gray-700">
              Be the first to review "{product.title}"
            </h3>

            <p className="text-gray-500 mt-1">
              Your email address will not be published.
            </p>

            <div className="mt-4">
              <p className="font-medium text-gray-700">Your Rating *</p>
              <div className="flex gap-2 text-2xl mt-2 text-[#447db3]">
                ★ ★ ★ ★ ★
              </div>
            </div>

            <div className="mt-6">
              <p className="font-medium text-gray-700">Your Review *</p>
              <textarea
                className="w-full border p-3 rounded-lg h-32"
                placeholder="Write your review..."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <p className="font-medium text-gray-700">Name *</p>
                <input className="w-full border p-3 rounded-lg" />
              </div>

              <div>
                <p className="font-medium text-gray-700">Email *</p>
                <input className="w-full border p-3 rounded-lg" />
              </div>
            </div>

            <button className="mt-6 px-6 py-3 bg-[#447db3] text-white rounded-lg hover:bg-[#376691]">
              Submit
            </button>
          </div>
        </div>
      )}

      {/* RELATED */}
      <div className="mt-20">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Related Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.values(products)
            .filter((p) => p.title !== product.title)
            .slice(0, 4)
            .map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/product/${index + 1}`)}
                className="cursor-pointer bg-white rounded-lg shadow border border-[#447db3]/10 hover:border-[#447db3] hover:shadow-lg transition p-3"
              >
                <img
                  src={item.img}
                  alt=""
                  className="rounded-lg h-40 w-full object-cover"
                />
                <h3 className="mt-3 text-lg font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-bold">${item.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
