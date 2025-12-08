import React from "react";
import { useParams, Link } from "react-router";
import blogData from "../data/blogData";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === Number(id));

  if (!blog) {
    return <h2 className="text-center py-20 text-xl">Blog not found</h2>;
  }

  // Older & Newer Posts
  const olderPost = blogData.find((b) => b.id === blog.id - 1);
  const newerPost = blogData.find((b) => b.id === blog.id + 1);

  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <div
        className="w-full h-[380px] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          {blog.title}
        </h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto py-16 px-6">

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-gray-600 mb-8 text-sm">
          <span>📅 {blog.date}</span>
          <span>💬 {blog.comments}</span>
          <span>👤 {blog.author}</span>
        </div>

        {/* MAIN TEXT */}
        <div className="space-y-6 text-gray-800 leading-8 text-[17px]">

          <p>
            Aouvida In oiupis. Weklentesque pos qweseent wnipis. ferean posuere...
          </p>

          <p className="font-semibold italic border-l-4 border-black pl-4 py-2">
            “Ridiculus mus mauris vitae ultricies leo vel fringilla...”
          </p>

          <p>Sapien faucibus et molestie ac feugiat sed lectus...</p>
          <p>Id semper risus in hendrerit gravida rutrum quisque non tellus...</p>
          <p>Massa vitae tortor condimentum lacinia quis vel eros donec ac...</p>

        </div>

        {/* SHARE SECTION */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold">Share with us:</h3>

          <div className="flex gap-5 text-gray-700 mt-3">
            <Facebook className="cursor-pointer hover:text-pink-500 duration-200" />
            <Twitter className="cursor-pointer hover:text-pink-500 duration-200" />
            <Linkedin className="cursor-pointer hover:text-pink-500 duration-200" />
            <Instagram className="cursor-pointer hover:text-pink-500 duration-200" />
          </div>
        </div>

        {/* OLDER / NEWER POSTS */}
        <div className="flex justify-between py-14 border-y mt-14">

          {/* Older */}
          {olderPost ? (
            <Link
              to={`/blog/${olderPost.id}`}
              className="text-gray-700 hover:text-black"
            >
              ← Older Post
            </Link>
          ) : (
            <span className="text-gray-400">No Older Post</span>
          )}

          {/* Newer */}
          {newerPost ? (
            <Link
              to={`/blog/${newerPost.id}`}
              className="text-gray-700 hover:text-black"
            >
              Newer Post →
            </Link>
          ) : (
            <span className="text-gray-400">No Newer Post</span>
          )}

        </div>


        {/* COMMENTS SECTION */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            💬 1 Comment
          </h3>

          <div className="border p-6 mt-6">
            <div className="flex items-center gap-4 text-gray-600 text-sm mb-4">
              <span>📅 May 12, 2017</span>
              <span>👤 Joceph Fernando</span>
            </div>

            <p className="text-gray-700 leading-7">
              Laborum et dolorum fuga. Et harum quidem rerum facilis est...
            </p>
          </div>
        </div>

        {/* LEAVE COMMENT */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6">Leave a comment</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input type="text" placeholder="Name" className="border p-3 w-full" />
            <input type="email" placeholder="Email" className="border p-3 w-full" />
          </div>

          <textarea
            rows="5"
            placeholder="Message"
            className="border p-3 w-full"
          />

          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 mt-4 float-right rounded">
            Post comment
          </button>
        </div>

      </div>
    </div>
  );
}
