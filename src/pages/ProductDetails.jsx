import React from "react";
import { useParams, useNavigate } from "react-router";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Temporary Fake Data (Replace with API later)
  const products = {
    1: {
      title: "Kitchen Storage Box",
      price: 49.99,
      img: "https://i.ibb.co/0M5vChj/skater-girl.png",
      category: "Kitchen Items",
      description:
        "This kitchen storage box helps you organize spices, utensils, jars, and more. Premium material & long-lasting build.",
    },
    2: {
      title: "Baby Sneakers",
      price: 29.99,
      img: "https://i.ibb.co/fYh2g9n/sneakers.png",
      category: "Mother & Baby",
      description:
        "Soft, comfortable, and durable baby sneakers perfect for daily use.",
    },
    3: {
      title: "Beauty Skirt",
      price: 19.99,
      img: "https://i.ibb.co/VWZjFjY/skirt.png",
      category: "Beauty & Fashion",
      description:
        "A stylish skirt made with premium cotton, breathable and perfect for all seasons.",
    },
    4: {
      title: "Luxury Jewellery Bag",
      price: 39.99,
      img: "https://i.ibb.co/NrcQ6hM/purse.png",
      category: "Jewellery",
      description:
        "Beautiful jewellery bag perfect for gifting and personal use.",
    },
    5: {
      title: "Smart Gadget Sunglass",
      price: 79.99,
      img: "https://i.ibb.co/Hxj0sCg/sunglass.png",
      category: "Gadget",
      description:
        "A modern smart sunglass with UV protection and stylish finish.",
    },
    6: {
      title: "Toys & Games Set",
      price: 24.99,
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
    <div className="px-4 md:px-10 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
      >
        ← Back Home
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* PRODUCT IMAGE */}
        <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
          <img src={product.img} className="w-full rounded-xl" alt="" />
        </div>

        {/* PRODUCT CONTENT */}
        <div>
          <h1 className="text-3xl font-semibold">{product.title}</h1>
          <p className="text-gray-500 mt-1">{product.category}</p>

          <h2 className="text-4xl font-bold text-pink-500 mt-4">
            ${product.price}
          </h2>

          <p className="mt-5 text-gray-700 leading-relaxed">
            {product.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              Add to Cart
            </button>
            <button className="px-6 py-3 border rounded-lg hover:bg-gray-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">Related Products</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.values(products)
            .filter((p) => p.title !== product.title)
            .slice(0, 4)
            .map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/product/${index + 1}`)}
                className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition p-3"
              >
                <img
                  src={item.img}
                  alt=""
                  className="rounded-lg h-40 w-full object-cover"
                />
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="text-pink-500 font-bold">${item.price}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
