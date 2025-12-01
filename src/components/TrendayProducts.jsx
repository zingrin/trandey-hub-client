import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TrendayProducts() {
  const products = [
    {
      id: 1,
      title: "INNIRZ SKIRT",
      price: 364,
      oldPrice: 375,
      img: "https://i.ibb.co/5M2fwHk/skirt-blue.png",
    },
    {
      id: 2,
      title: "AUAPERIARZ SKIRT",
      price: 364,
      oldPrice: 375,
      img: "https://i.ibb.co/k61tLfn/skirt-orange.png",
    },
    {
      id: 3,
      title: "CHRISTIAN DIOR",
      price: 106,
      oldPrice: 350,
      img: "https://i.ibb.co/pXGQmFz/bag-purple.png",
    },
    {
      id: 4,
      title: "AQUA MINI BAG",
      price: 89,
      oldPrice: 120,
      img: "https://i.ibb.co/k4rWcH4/bag-aqua.png",
    },
  ];

  return (
    <section className="w-full py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://i.ibb.co/3cLqv2Qp/fashion-bg.jpg')" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
        {/* Left Banner */}
        <div className="bg-pink-100 p-12 rounded-2xl shadow-lg h-full flex flex-col items-start justify-center text-left">
          <div className="text-5xl text-pink-500 mb-4">❤</div>
          <p className="text-gray-600 mb-2">Only the best</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Handpicked products
          </h2>
          <p className="text-gray-700 mb-6">Just for you</p>
          <button className="bg-pink-600 hover:bg-pink-700 transition text-white px-6 py-3 rounded-full font-medium shadow-md">
            VIEW ALL PRODUCTS
          </button>
        </div>

        {/* Product Slider */}
        <div className="col-span-2">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={30}
            navigation
            modules={[Navigation]}
            className="mySwiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white border rounded-xl shadow-md p-6 hover:shadow-xl transition cursor-pointer">
                  <span className="bg-lime-400 text-xs font-bold px-3 py-1 rounded-full">SALE</span>

                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-48 object-contain my-4"
                  />

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-3">
                    <p className="text-pink-600 text-xl font-bold">${product.price}.00</p>
                    <p className="text-gray-400 line-through">${product.oldPrice}.00</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
