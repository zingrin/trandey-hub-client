import React from "react";
import { Link } from "react-router";

export default function CollectionSection() {
  return (
    <div className="w-full px-4 md:px-10 py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT BIG BANNER */}
        <Link
          to="/trendy-products"
          className="relative bg-white rounded-lg overflow-hidden shadow block"
        >
          <img
            src="https://i.ibb.co/0M5vChj/skater-girl.png"
            alt="Category Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-6 left-6 md:top-10 md:left-10">
            <h2 className="text-lg md:text-xl text-gray-600 font-light">
              Category Highlight
            </h2>

            <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mt-1">
              Kitchen Storage & Accessories
            </h1>

            <button className="mt-4 btn bg-pink-500 hover:bg-pink-600 border-none text-white px-6">
              SHOP NOW
            </button>
          </div>
        </Link>

        {/* RIGHT SMALL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* ITEM 1 */}
          <Link
            to="/trendy-products"
            className="relative bg-pink-100 rounded-lg shadow overflow-hidden block"
          >
            <img src="https://i.ibb.co/fYh2g9n/sneakers.png" className="w-full object-cover" />

            <div className="absolute left-4 top-4 md:left-6 md:top-8">
              <h3 className="text-lg text-gray-700 font-medium">Mother & Baby</h3>
              <p className="text-xl md:text-2xl font-semibold text-gray-800">Shop Now</p>

              <button className="mt-3 btn bg-pink-500 hover:bg-pink-600 text-white border-none px-5">
                EXPLORE
              </button>
            </div>
          </Link>

          {/* ITEM 2 */}
          <Link
            to="/trendy-products"
            className="relative bg-blue-100 rounded-lg shadow overflow-hidden block"
          >
            <img src="https://i.ibb.co/VWZjFjY/skirt.png" className="w-full object-cover" />

            <div className="absolute left-4 top-4 md:left-6 md:top-8">
              <h3 className="text-lg text-gray-700 font-medium">Health & Beauty</h3>
              <p className="text-xl md:text-2xl font-semibold text-gray-800">Shop Now</p>

              <button className="mt-3 btn bg-pink-500 hover:bg-pink-600 text-white border-none px-5">
                EXPLORE
              </button>
            </div>
          </Link>

          {/* ITEM 3 */}
          <Link
            to="/trendy-products"
            className="relative bg-yellow-100 rounded-lg shadow overflow-hidden block"
          >
            <img src="https://i.ibb.co/NrcQ6hM/purse.png" className="w-full object-cover" />

            <div className="absolute left-4 top-4 md:left-6 md:top-8">
              <h3 className="text-lg text-gray-700 font-medium">Jewellery</h3>
              <p className="text-xl md:text-2xl font-semibold text-gray-800">Shop Now</p>

              <button className="mt-3 btn bg-pink-500 hover:bg-pink-600 text-white border-none px-5">
                EXPLORE
              </button>
            </div>
          </Link>

          {/* ITEM 4 */}
          <Link
            to="/trendy-products"
            className="relative bg-purple-100 rounded-lg shadow overflow-hidden block"
          >
            <img src="https://i.ibb.co/Hxj0sCg/sunglass.png" className="w-full object-cover" />

            <div className="absolute left-4 top-4 md:left-6 md:top-8">
              <h3 className="text-lg text-gray-700 font-medium">Gadget</h3>
              <p className="text-xl md:text-2xl font-semibold text-gray-800">Shop Now</p>

              <button className="mt-3 btn bg-pink-500 hover:bg-pink-600 text-white border-none px-5">
                EXPLORE
              </button>
            </div>
          </Link>

          {/* ITEM 5 FULL WIDTH */}
          <Link
            to="/trendy-products"
            className="relative bg-green-100 rounded-lg shadow overflow-hidden col-span-2 block"
          >
            <img src="https://i.ibb.co/2FxW0jz/toys.png" className="w-full object-cover" />

            <div className="absolute left-4 top-4 md:left-6 md:top-10">
              <h3 className="text-lg md:text-xl text-gray-700 font-medium">Toys & Games</h3>
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">Shop Now</p>

              <button className="mt-3 btn bg-pink-500 hover:bg-pink-600 text-white border-none px-5">
                EXPLORE
              </button>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
}
