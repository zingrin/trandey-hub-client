import React, { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Blog() {
  const itemsPerPage = 6;
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Fetch blogs
  useEffect(() => {
    fetch("http://localhost:5000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setBlogs(data);
        else setBlogs([]);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setBlogs([]);
        setLoading(false);
      });
  }, []);

  const safeBlogs = Array.isArray(blogs) ? blogs : [];
  const totalPages = Math.ceil(safeBlogs.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const pageItems = safeBlogs.slice(startIndex, startIndex + itemsPerPage);

  if (loading) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="w-full py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-2">THE BLOG</h2>
      <div className="w-16 h-1 bg-black mx-auto mb-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {pageItems.map((blog) => (
          <div
            key={blog._id}
            className="border rounded-lg shadow-sm bg-white relative overflow-hidden"
          >
            <span className="absolute top-3 left-3 bg-red-500 text-white text-sm px-3 py-1 rounded-full z-10">
              {blog.category}
            </span>

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover transition-all duration-300 hover:scale-105"
            />

            <div className="p-5 text-center">
              <p className="text-gray-500 text-sm mb-2">
                By {blog.author} | {blog.date} | {blog.comments} Comments
              </p>
              <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
              <p className="text-gray-600 mb-4">
                {blog.desc ? blog.desc.slice(0, 80) : ""}...
              </p>
              <Link to={`/blog/${blog._id}`}>
                <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {safeBlogs.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No blogs found 😢</p>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 border rounded ${
              page === i + 1
                ? "bg-red-500 text-white"
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
