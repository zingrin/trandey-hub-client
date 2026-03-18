import React, { useState } from "react";
import { Link } from "react-router";

const blogData = [
  {
    id: 1,
    category: "Gadget",
    image: "https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg",
    author: "Tech Vision",
    date: "June 12, 2024",
    comments: "8 Comments",
    title: "Top 10 Smart Gadgets You Must Have in 2024",
    desc: "From smartwatches to AI home assistants, these trending gadgets can make your daily life more efficient.",
  },
  {
    id: 2,
    category: "Beauty",
    image: "https://images.pexels.com/photos/853427/pexels-photo-853427.jpeg",
    author: "Glow Studio",
    date: "June 5, 2024",
    comments: "4 Comments",
    title: "Simple Beauty Hacks for a Naturally Glowing Skin",
    desc: "Try these easy skincare hacks to maintain smooth, glowing skin without expensive products.",
  },
  {
    id: 3,
    category: "Jewellery",
    image: "https://images.pexels.com/photos/1453005/pexels-photo-1453005.jpeg",
    author: "Royal Gems",
    date: "May 29, 2024",
    comments: "3 Comments",
    title: "Latest Jewellery Trends: Shine with Style",
    desc: "Minimal gold chains, statement earrings, and diamond accents are taking over this year’s jewellery trends.",
  },
  {
    id: 4,
    category: "Health",
    image: "https://images.pexels.com/photos/1029896/pexels-photo-1029896.jpeg",
    author: "Fit Living",
    date: "May 20, 2024",
    comments: "6 Comments",
    title: "Daily Health Habits for a Strong Immune System",
    desc: "A strong immune system starts with proper sleep, hydration, and nutrient-rich foods. Here's how to do it.",
  },
  {
    id: 5,
    category: "Kitchen Items",
    image: "https://images.pexels.com/photos/3768165/pexels-photo-3768165.jpeg",
    author: "Kitchen Pro",
    date: "May 12, 2024",
    comments: "2 Comments",
    title: "Top Kitchen Tools Every Home Cook Should Own",
    desc: "These essential kitchen items will help you save time and cook delicious meals more easily.",
  },
  {
    id: 6,
    category: "Beauty",
    image: "https://images.pexels.com/photos/3762876/pexels-photo-3762876.jpeg",
    author: "Soft Skin",
    date: "April 30, 2024",
    comments: "1 Comment",
    title: "Best Skincare Routine for All Skin Types",
    desc: "A simple and effective skincare routine that works for dry, oily, and combination skin types.",
  },
  {
    id: 7,
    category: "Home Decor",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    author: "Cozy Home",
    date: "April 18, 2024",
    comments: "5 Comments",
    title: "Modern Home Decor Ideas for Stylish Living",
    desc: "Upgrade your room with minimalistic decor, warm lighting, and aesthetic accessories.",
  },
  {
    id: 8,
    category: "Gadget",
    image: "https://images.pexels.com/photos/845434/pexels-photo-845434.jpeg",
    author: "Digital Hub",
    date: "April 3, 2024",
    comments: "3 Comments",
    title: "Why Bluetooth Earbuds Are Replacing Wired Headphones",
    desc: "Wireless earbuds offer convenience, noise cancellation, and improved audio—making them a top choice.",
  },
];

export default function Blog() {
  const itemsPerPage = 6;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const pageItems = blogData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full py-16 bg-white">
      {/* Header */}
      <h2 className="text-4xl font-bold text-center mb-2">THE BLOG</h2>
      <div className="w-16 h-1 bg-black mx-auto mb-10"></div>

      {/* Blog Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {pageItems.map((blog) => (
          <div
            key={blog.id}
            className="
              border
              rounded-lg
              shadow-sm
              bg-white
              relative
              overflow-hidden
            "
          >
            {/* Category Badge */}
            <span className="absolute top-3 left-3 bg-pink-500 text-white text-sm px-3 py-1 rounded-full z-10">
              {blog.category}
            </span>

            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="
                w-full 
                h-64 
                object-cover 
                transition-all 
                duration-300 
                hover:scale-105 
                hover:animate-vibe
              "
            />

            {/* Content */}
            <div className="p-5 text-center">
              <p className="text-gray-500 text-sm mb-2">
                By {blog.author} | {blog.date} | {blog.comments}
              </p>
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">{blog.desc}</p>
              <Link to={`/blog/${blog.id}`}>
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 border rounded ${
              page === i + 1
                ? "bg-pink-500 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
