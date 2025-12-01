import React from "react";

export default function TrendyHero() {
  return (
    <section
      className="relative w-full h-[98vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/fc6z79B/closeup-view-female-online-store-600nw-1832128345.jpg')",
      }}
    >
      {/* White Transparent Circle */}
      <div className="backdrop-blur-sm bg-white/40 rounded-full w-[650px] h-[650px] flex flex-col items-center justify-center text-center px-10 shadow-2xl">
        <p className="tracking-[6px] text-gray-600 text-sm mb-4">THE BEST OF</p>

        <h1 className="text-5xl font-bold tracking-wide text-gray-900 mb-4">
          TRENDAY COLLECTION
        </h1>

        <p className="text-gray-700 text-base max-w-lg leading-relaxed mb-8">
          Here’s the refined, meaningful text only: **Explore Trenday’s
          hand-picked range of stylish, high-quality products — crafted to
          elevate your look with modern trends, premium comfort, and everyday
          versatility.
        </p>

        <button className="bg-pink-600 hover:bg-pink-700 transition text-white py-3 px-8 rounded-full text-lg font-semibold shadow-lg">
          Explore Now
        </button>
      </div>

      {/* Scroll Up Button */}
      {/* <div className="absolute bottom-8 right-8">
        <button className="bg-pink-500 text-white w-12 h-12 rounded-full shadow-xl grid place-items-center text-2xl hover:bg-pink-600 transition">
          ↑
        </button>
      </div> */}
    </section>
  );
}
