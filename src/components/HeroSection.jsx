import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full relative -mt-10 md:-mt-14 lg:-mt-16">
      {/* MAIN WRAPPER */}
      <div className="w-full h-[65vh] md:h-[80vh] lg:h-[95vh] overflow-hidden carousel">
        {/* ---------------- SLIDE 1 ---------------- */}
        <div id="slide1" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/pB7fx0jf/businesspeople-floating-with-suitcase-23-2148186803.jpg"
            className="w-full h-full object-cover"
            alt=""
          />

          {/* TEXT BOX */}
          <div
            className="absolute left-4 md:left-12 lg:left-20 
                       top-1/2 -translate-y-1/2 
                       bg-white/80 p-4 md:p-8 lg:p-10 
                       max-w-xs md:max-w-md lg:max-w-lg 
                       shadow rounded"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
              Trendy Picks Crafted <br />
              Just for <span className="text-yellow-400 font-bold">YOU</span>
            </h1>

            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
              Style that speaks—every piece tells a meaningful story.
            </p>

            <button
              onClick={() => (window.location.href = "/collections")}
              className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 
             border border-black hover:bg-black hover:text-white 
             transition flex items-center gap-2 text-sm md:text-base"
            >
              Browse Collection →
            </button>
          </div>

          {/* ARROWS */}
          <a
            href="#slide3"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-3xl md:text-4xl"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 text-3xl md:text-4xl"
          >
            ❯
          </a>
        </div>

        {/* ---------------- SLIDE 2 ---------------- */}
        <div id="slide2" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/zdmCHRw/closeup-view-female-online-store-600nw-1832128345.jpg"
            className="w-full h-full object-cover"
            alt=""
          />

          {/* TEXT BOX */}
          <div
            className="absolute left-4 md:left-12 lg:left-20 
                       top-1/2 -translate-y-1/2 
                       bg-white/80 p-4 md:p-8 lg:p-10 
                       max-w-xs md:max-w-md lg:max-w-lg 
                       shadow rounded"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
              Meaningful <span className="text-blue-400">Accessories</span>
              <br /> For Every Moment
            </h1>

            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-600">
              Express your personality with pieces that truly feel special.
            </p>

            <button
              onClick={() => (window.location.href = "/collections")}
              className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 
             border border-black hover:bg-black hover:text-white 
             transition flex items-center gap-2 text-sm md:text-base"
            >
              View Collection →
            </button>
          </div>

          <a
            href="#slide1"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-3xl md:text-4xl"
          >
            ❮
          </a>
          <a
            href="#slide3"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 text-3xl md:text-4xl"
          >
            ❯
          </a>
        </div>

        {/* ---------------- SLIDE 3 ---------------- */}
        <div id="slide3" className="carousel-item relative w-full h-full">
          <img
            src="https://i.ibb.co/zdmCHRw/closeup-view-female-online-store-600nw-1832128345.jpg"
            className="w-full h-full object-cover"
            alt=""
          />

          {/* TEXT BOX */}
          <div
            className="absolute right-4 md:right-12 lg:right-20 
                       top-1/2 -translate-y-1/2 
                       bg-[#d9ff78]/90 p-4 md:p-8 lg:p-10 
                       max-w-xs md:max-w-md lg:max-w-lg 
                       shadow rounded"
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-light">
              Your Favourite Fashion
            </h1>

            <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-700">
              Redefining style with meaningful, trendy products.
            </p>

            <button
              onClick={() => (window.location.href = "/collections")}
              className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 
             border border-black hover:bg-black hover:text-white 
             transition flex items-center gap-2 text-sm md:text-base"
            >
              View Collection →
            </button>
          </div>

          <a
            href="#slide2"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400 text-3xl md:text-4xl"
          >
            ❮
          </a>
          <a
            href="#slide1"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 text-3xl md:text-4xl"
          >
            ❯
          </a>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        <a href="#slide1" className="w-3 h-3 rounded-full bg-blue-300"></a>
        <a href="#slide2" className="w-3 h-3 rounded-full bg-blue-400"></a>
        <a href="#slide3" className="w-3 h-3 rounded-full bg-blue-300"></a>
      </div>
    </div>
  );
}
