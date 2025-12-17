import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    img: "https://i.ibb.co.com/4wXk6Pz5/online-trends-53876-167072.jpg",
    title: (
      <>
        Trendy Picks Crafted <br /> Just for <span className="text-yellow-400 font-bold">YOU</span>
      </>
    ),
    text: "Style that speaks—every piece tells a meaningful story.",
    position: "left",
    bg: "bg-white/80",
  },
  {
    id: 2,
    img: "https://i.ibb.co/zdmCHRw/closeup-view-female-online-store-600nw-1832128345.jpg",
    title: (
      <>
        Meaningful <span className="text-blue-400">Accessories</span>
        <br /> For Every Moment
      </>
    ),
    text: "Express your personality with pieces that truly feel special.",
    position: "left",
    bg: "bg-white/80",
  },
  {
    id: 3,
    img: "https://i.ibb.co.com/sdNcxF4H/image3-3c068988-58a0-43c0-bd18-350378de5641.png",
    title: <>Your Favourite Fashion</>,
    text: "Redefining style with meaningful, trendy products.",
    position: "right",
    bg: "bg-[#d9ff78]/90",
  },
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  /** Auto Slide Every 3s **/
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <div className="w-full relative mt-0">
      {/* Wrapper Height Fixed */}
      <div className="w-full h-[65vh] md:h-[80vh] lg:h-[95vh] relative overflow-hidden">

        <AnimatePresence>
          {/* IMAGE SLIDE */}
          <motion.img
            key={current.id}
            src={current.img}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* TEXT BOX */}
        <motion.div
          key={current.id + "-text"}
          initial={{ x: current.position === "left" ? -80 : 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute top-1/2 -translate-y-1/2 
              ${current.position === "left" ? "left-4 md:left-12 lg:left-20" : "right-4 md:right-12 lg:right-20"}
              ${current.bg} p-4 md:p-8 lg:p-10 
              max-w-xs md:max-w-md lg:max-w-lg shadow rounded`}
        >
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light leading-tight">
            {current.title}
          </h1>

          <p className="mt-3 md:mt-4 text-sm md:text-base text-gray-700">
            {current.text}
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => (window.location.href = "/collections")}
            className="mt-4 md:mt-6 px-4 md:px-6 py-2 md:py-3 
            border border-black hover:bg-black hover:text-white 
            transition flex items-center gap-2 text-sm md:text-base"
          >
            View Collection →
          </motion.button>
        </motion.div>

        {/* ARROWS */}
        <button
          onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-4xl"
        >
          ❮
        </button>

        <button
          onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-4xl"
        >
          ❯
        </button>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <motion.div
            key={i}
            onClick={() => setIndex(i)}
            whileHover={{ scale: 1.2 }}
            className={`w-3 h-3 rounded-full cursor-pointer 
              ${i === index ? "bg-blue-500" : "bg-blue-300"}`}
          ></motion.div>
        ))}
      </div>
    </div>
  );
}
