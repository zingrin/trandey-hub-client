import React from "react";
import { Truck, Globe, Plus } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Truck size={55} />,
      title: "Unique Design",
      text: "Nec sagittis aliquam malesuada bibendum arcu vitae elementum.",
    },
    {
      icon: <Globe size={55} />,
      title: "Free Returns",
      text: "Consectetur purus ut faucibus pulvinar elementum integer enim.",
    },
    {
      icon: <Plus size={55} />,
      title: "Clean & Hand Coded",
      text: "Eget mauris pharetra et ultrices. Viverra suspendisse potenti.",
    },
  ];

  return (
    <section className="w-full py-16 flex items-center justify-center gap-10">
      {features.map((f, i) => (
        <div
          key={i}
          className="group w-[350px] bg-white shadow-md rounded-xl p-10 text-center transition hover:shadow-xl"
        >
          {/* ICON */}
          <div className="mx-auto w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center 
            text-gray-700 transition group-hover:bg-black group-hover:text-white">
            {f.icon}
          </div>

          {/* TITLE */}
          <h3 className="text-xl font-semibold mt-6">{f.title}</h3>

          {/* TEXT */}
          <p className="text-gray-500 mt-3 leading-relaxed">{f.text}</p>
        </div>
      ))}
    </section>
  );
}
