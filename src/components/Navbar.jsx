import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { NavLink, Link } from "react-router";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import Logo from "../pages/Logo";

// NavLink Style
const navLinkClass = ({ isActive }) =>
  `
  relative pb-1 uppercase font-bold tracking-wide transition-colors duration-300
  ${isActive ? "text-red-600" : "text-gray-700 hover:text-red-600"}
  after:content-[''] after:absolute after:left-0 after:bottom-0
  after:w-full after:h-[2px] after:bg-red-600
  after:scale-x-0 after:origin-left after:transition-transform after:duration-300
  hover:after:scale-x-100
  ${isActive ? "after:scale-x-100" : ""}
  `;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">

      {/* MARQUEE */}
      {!scrolled && (
        <div className="bg-[#3498db] overflow-hidden">
          <div className="relative w-full">
            <div className="flex w-max animate-marquee">
              <span className="flex items-center gap-6 text-white text-sm md:text-base font-medium px-8 whitespace-nowrap">
                ✨ 20% OFF on Your First Order! ⚡ Free Shipping Over $100 🚀 New Arrivals Are Here 🌟 24/7 Support
              </span>
              <span className="flex items-center gap-6 text-white text-sm md:text-base font-medium px-8 whitespace-nowrap">
                ✨ 20% OFF on Your First Order! ⚡ Free Shipping Over $100 🚀 New Arrivals Are Here 🌟 24/7 Support
              </span>
            </div>
          </div>
        </div>
      )}

      {/* NAVBAR */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-10 h-[70px] flex items-center justify-between relative">

          {/* LOGO */}
          <Link to="/">
            <Logo className="h-10 md:h-14 w-auto" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-10 text-sm">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/shop" className={navLinkClass}>Shop</NavLink>
            <NavLink to="/catalog" className={navLinkClass}>Catalog</NavLink>
            <NavLink to="/about" className={navLinkClass}>About</NavLink>
            <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          </nav>

          {/* ICONS */}
          <div className="flex items-center gap-4 relative">

            {/* SEARCH ICON */}
            <button
              onClick={() => setSearchOpen(true)}
              className="text-2xl text-[#3498db] p-2 rounded-full hover:bg-blue-50 transition"
            >
              <IoSearchOutline />
            </button>

            {/* CART BUTTON */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative text-3xl text-[#3498db] p-2 rounded-full hover:bg-blue-50"
            >
              <HiOutlineShoppingBag />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </button>

            {/* MOBILE MENU TOGGLE */}
            <button
              className="md:hidden text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/shop" className={navLinkClass} onClick={() => setOpen(false)}>Shop</NavLink>
            <NavLink to="/catalog" className={navLinkClass} onClick={() => setOpen(false)}>Best Selling</NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/blog" className={navLinkClass} onClick={() => setOpen(false)}>Contact</NavLink>
          </nav>
        </div>
      )}

      {/* CART OVERLAY */}
      {cartOpen && (
        <div
          onClick={() => setCartOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* CART SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[360px] bg-white z-50 shadow-xl
        transform transition-transform duration-300
        ${cartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg">Your Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="text-2xl hover:text-red-500"
          >
            ✕
          </button>
        </div>
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
          <p className="text-gray-400 text-center mt-10">Your cart is empty</p>
        </div>
        <div className="border-t p-4">
          <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
            Checkout
          </button>
        </div>
      </div>

      {/* SEARCH SIDEBAR */}
      {searchOpen && (
        <>
          <div
            onClick={() => setSearchOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
          <div
            className={`fixed top-0 right-0 h-full w-[85%] sm:w-[360px] bg-white z-50 shadow-xl
            transform transition-transform duration-300`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="font-bold text-lg">Search Products</h2>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-2xl hover:text-red-500"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <form className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
