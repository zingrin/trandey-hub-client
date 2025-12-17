import React, { useState } from "react";
import { FaPhoneAlt, FaBars, FaRegHeart, FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import Logo from "../pages/Logo";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full shadow-md sticky top-0 z-50 bg-white">
      {/* TOP BAR */}
      <div className="w-full bg-[#447db3] border-b py-3 px-4 md:px-6 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(true)}>
          <FaBars />
        </button>

        {/* Left Contact */}
        <div className="hidden md:flex items-center gap-2 text-white font-medium ml-30">
          <FaPhoneAlt className="text-red-600" />
          <span>+022 319 821 967</span>
        </div>

        {/* marque */}
        <div className="overflow-hidden whitespace-nowrap">
          <h1 className="text-xl md:text-3xl font-bold text-white inline-block animate-marquee">
            ✨ Discover Our Best Deals & New Arrivals ✨
          </h1>
        </div>

        {/* Right Icons */}

        <div className="flex items-center gap-4 md:gap-6 text-white text-xl mr-30">
          <FaRegHeart />

          <div className="relative">
            <FiShoppingCart />
            <span className="absolute -top-2 -right-2 bg-[#447db3] text-white text-xs px-1 rounded-full">
              3
            </span>
          </div>

          <FaRegUser />
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="w-full  h-[60px] md:h-[70px] bg-base-200 text-gray-600 py-4 px-4 md:px-6 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center ml-30">
          <Link to="/">
            <Logo className="w-8 h-8 md:w-20 cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#447db3] border-b-2 border-[#447db3] pb-1"
                : "hover:text-gray-200"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "text-[#447db3] border-b-2 border-[#447db3] pb-1"
                : "hover:text-gray-200"
            }
          >
            Shop
          </NavLink>

          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive
                ? "text-[#447db3] border-b-2 border-[#447db3] pb-1"
                : "hover:text-gray-200"
            }
          >
            Catalog
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-[#447db3] border-b-2 border-[#447db3] pb-1"
                : "hover:text-gray-200"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-[#447db3] border-b-2 border-[#447db3] pb-1"
                : "hover:text-gray-200"
            }
          >
            Blog
          </NavLink>
        </div>

        {/* Search */}
        <div className="hidden md:flex items-center bg-white rounded-lg px-3 py-2 text-black w-72">
          <input
            type="text"
            placeholder="Search product"
            className="w-full outline-none bg-transparent"
          />
          <IoSearch className="text-xl" />
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="absolute left-0 top-0 h-full w-64 bg-[#447db3] text-white p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-semibold mb-6">Menu</h2>

            <nav className="flex flex-col gap-4 text-lg">
              <NavLink
                to="/"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#447db3] font-semibold"
                    : "hover:text-gray-200"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#447db3] font-semibold"
                    : "hover:text-gray-200"
                }
              >
                Shop
              </NavLink>

              <NavLink
                to="/catalog"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#447db3] font-semibold"
                    : "hover:text-gray-200"
                }
              >
                Catalog
              </NavLink>

              <NavLink
                to="/about"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#447db3] font-semibold"
                    : "hover:text-gray-200"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/blog"
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#447db3] font-semibold"
                    : "hover:text-gray-200"
                }
              >
                Blog
              </NavLink>
            </nav>

            <div className="mt-6">
              <input
                type="text"
                placeholder="Search..."
                className=" p-2 rounded bg-white border-b-blue-500 text-black"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
