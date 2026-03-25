import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentData, setCommentData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setLoading(true);

    // Fetch blog
    fetch(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch(console.error);

    // Fetch comments
    fetch(`http://localhost:5000/api/blogs/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch(console.error);
  }, [id]);

  const handleCommentChange = (e) =>
    setCommentData({ ...commentData, [e.target.name]: e.target.value });

  const handleCommentSubmit = async () => {
    if (!commentData.name || !commentData.email || !commentData.message) return;

    await fetch(`http://localhost:5000/api/blogs/${id}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    });

    setCommentData({ name: "", email: "", message: "" });
    const updated = await fetch(
      `http://localhost:5000/api/blogs/${id}/comments`,
    );
    setComments(await updated.json());
  };

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center">
        <p className="text-xl font-bold">Loading...</p>
      </div>
    );

  if (!blog)
    return <p className="text-center py-20 text-red-500">Blog not found</p>;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full h-[380px] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold text-center px-4">
          {blog.title}
        </h1>
      </div>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto py-16 px-6">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 text-sm">
          <span>📅 {new Date(blog.createdAt).toLocaleDateString()}</span>
          <span>💬 {comments.length} Comments</span>
          <span>👤 {blog.author}</span>
        </div>

        {/* Main Text */}
        <div className="space-y-6 text-gray-800 leading-8 text-[17px]">
          <p>{blog.desc}</p>
        </div>

        {/* Share */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Share this post:</h3>
          <div className="flex gap-5 text-gray-700 mt-3">
            <Facebook className="cursor-pointer hover:text-blue-600 duration-200" />
            <Twitter className="cursor-pointer hover:text-blue-600 duration-200" />
            <Linkedin className="cursor-pointer hover:text-blue-600 duration-200" />
            <Instagram className="cursor-pointer hover:text-blue-600 duration-200" />
          </div>
        </div>

        {/* Older/Newer */}
        <div className="flex justify-between py-14 border-y mt-14">
          <Link
            to={blog.prevId ? `/blog/${blog.prevId}` : "#"}
            className={
              blog.prevId ? "text-gray-700 hover:text-black" : "text-gray-400"
            }
          >
            ← Older Post
          </Link>

          <Link
            to={blog.nextId ? `/blog/${blog.nextId}` : "#"}
            className={
              blog.nextId ? "text-gray-700 hover:text-black" : "text-gray-400"
            }
          >
            Newer Post →
          </Link>
        </div>

        {/* Comments */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-6">
            Comments ({comments.length})
          </h3>
          {comments.map((c) => (
            <div key={c._id} className="border p-6 mb-4 rounded">
              <div className="flex items-center gap-4 text-gray-600 text-sm mb-2">
                <span>📅 {new Date(c.date).toLocaleDateString()}</span>
                <span>👤 {c.name}</span>
              </div>
              <p className="text-gray-700">{c.message}</p>
            </div>
          ))}
        </div>

        {/* Leave Comment */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold mb-6">Leave a comment</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              name="name"
              value={commentData.name}
              onChange={handleCommentChange}
              placeholder="Name"
              className="border p-3 w-full"
            />
            <input
              name="email"
              value={commentData.email}
              onChange={handleCommentChange}
              placeholder="Email"
              className="border p-3 w-full"
            />
          </div>
          <textarea
            name="message"
            value={commentData.message}
            onChange={handleCommentChange}
            rows="5"
            placeholder="Message"
            className="border p-3 w-full"
          />
          <button
            onClick={handleCommentSubmit}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 mt-4 float-right rounded cursor-pointer ml-10"
          >
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
}
