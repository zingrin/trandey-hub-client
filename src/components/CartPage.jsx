import React, { useState, useEffect } from "react";
import { FaTrash, FaHeart, FaMinus, FaPlus } from "react-icons/fa";

const CartPage = () => {
  const [items, setItems] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setItems(storedCart);
  }, []);

  // Sync localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  // Quantity update
  const updateQty = (id, type) => {
    const updated = items.map((item) =>
      item._id === id
        ? {
            ...item,
            quantity:
              type === "inc"
                ? item.quantity + 1
                : Math.max(1, item.quantity - 1),
          }
        : item,
    );
    setItems(updated);
  };

  // Remove item
  const removeItem = (id) => {
    const filtered = items.filter((item) => item._id !== id);
    setItems(filtered);
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 font-sans text-[#2D3436]">
      {/* Cart Steps */}
      <div className="flex gap-6 text-[12px] uppercase tracking-widest mb-10 text-gray-400 font-semibold">
        <span className="text-black border-b-2 border-black pb-1">
          1. Shopping Cart
        </span>
        <span>2. Checkout</span>
        <span>3. Order Successed</span>
      </div>

      <h1 className="text-4xl font-serif font-bold mb-12">My Cart</h1>

      <div className="flex flex-col lg:flex-row gap-16">
        {/* LEFT SIDE: Items */}
        <div className="flex-1 space-y-10">
          {items.length > 0 ? (
            items.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row gap-8 pb-10 border-b border-gray-100 items-start"
              >
                {/* Image */}
                <div className="w-40 h-40 bg-[#F0F0F0] rounded flex-shrink-0 flex items-center justify-center p-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain mix-blend-multiply"
                  />
                </div>

                {/* Info */}
                <div className="flex-grow w-full">
                  <h3 className="text-2xl font-serif font-bold mb-5">
                    {item.name}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-500 mb-6">
                    <div className="flex gap-12">
                      <span className="w-16">Size</span>
                      <span className="font-bold text-black">: M</span>
                    </div>
                    <div className="flex gap-12 items-center">
                      <span className="w-16">Quantity</span>
                      <div className="flex items-center gap-4 font-bold text-black">
                        :{" "}
                        <FaMinus
                          className="cursor-pointer hover:text-[#7A6A1D]"
                          onClick={() => updateQty(item._id, "dec")}
                        />
                        <span className="text-lg">{item.quantity}</span>
                        <FaPlus
                          className="cursor-pointer hover:text-[#7A6A1D]"
                          onClick={() => updateQty(item._id, "inc")}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-4xl font-serif font-bold text-[#A48E33]">
                      ${item.price * item.quantity}
                    </span>

                    <div className="flex gap-4">
                      <button
                        className="p-3 border border-gray-200 rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors"
                        onClick={() => removeItem(item._id)}
                      >
                        <FaTrash size={20} />
                      </button>
                      <button className="flex items-center gap-2 px-6 py-2.5 border border-[#A48E33] rounded-lg text-[#A48E33] font-bold text-sm hover:bg-[#A48E33] hover:text-white transition-all">
                        Wishlist <FaHeart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* RIGHT SIDE: Summary */}
        <div className="w-full lg:w-[400px] space-y-10">
          {/* Coupon Box */}
          <div className="bg-[#FBF9F4] p-10 rounded-sm">
            <h4 className="text-xl font-serif font-bold mb-5">
              Have a Coupon?
            </h4>
            <div className="relative">
              <input
                type="text"
                placeholder="Input your email here"
                className="w-full p-4 bg-white border border-[#E8E1D1] rounded-md mb-6 focus:ring-1 focus:ring-[#7A6A1D] outline-none"
              />
              <button className="w-full py-4 bg-[#74661A] text-white font-bold rounded-md hover:bg-black transition-colors uppercase tracking-widest text-sm">
                Apply Coupon
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="px-2">
            <h4 className="text-2xl font-bold mb-8">Cart Totals</h4>
            <div className="space-y-5">
              <div className="flex justify-between font-bold">
                <span className="text-gray-600">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-gray-600">Shipping</span>
                <div className="text-right">
                  <p>Free Shipping</p>
                  <p className="text-gray-400 text-xs mt-1 font-normal">
                    Shipping to Sidney
                  </p>
                  <button className="text-[#A48E33] text-xs font-bold underline mt-1">
                    Change
                  </button>
                </div>
              </div>
              <hr className="border-gray-100 my-6" />
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold">${subtotal}</span>
              </div>
              <button className="w-full py-5 bg-[#74661A] text-white font-bold rounded-md mt-6 hover:shadow-xl transition-all uppercase tracking-[0.2em]">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
