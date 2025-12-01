import { useState, useEffect } from "react";
import { Link } from "react-router";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full">
      
      {/* ----------- TOP PINK BAR ----------- */}
      {!isScrolled && (
        <div className="w-full bg-[#f5738a] text-white py-3 px-4 md:px-10 flex flex-wrap justify-between text-xs md:text-sm">
          
          {/* Left Email + Phone */}
          <div className="flex items-center gap-6 w-full md:w-auto justify-center">
            <span className="flex items-center gap-1">📧 info@example.com</span>
            <span className="flex items-center gap-1">📞 0000 - 123 - 456789</span>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-6 w-full md:w-auto justify-center mt-2 md:mt-0">
            <span className="hidden md:block cursor-pointer">Store Location</span>
            <span className="hidden md:block cursor-pointer">Track Your Order</span>
            <span className="flex items-center gap-1 cursor-pointer">USD ▾</span>
          </div>
        </div>
      )}

      {/* ----------- SEARCH + LOGO + ICONS ----------- */}
      {!isScrolled && (
        <div className="w-full bg-white py-6 md:py-8 flex flex-wrap justify-between items-center px-4 md:px-10 border-b border-gray-200">

          {/* Search (center on mobile) */}
          <div className="w-full md:w-1/3 order-3 md:order-1 mt-4 md:mt-0">
            <div className="border border-pink-300 rounded-md flex items-center px-4 py-3">
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-gray-600"
              />
              <span className="text-lg">🔍</span>
            </div>
          </div>

          {/* Logo */}
          <div className="w-full md:w-auto order-1 text-center mb-4 md:mb-0">
            <h1 className="text-3xl font-light text-pink-500 tracking-wide">The Trending Hub</h1>
          </div>

          {/* Icons */}
          <div className="w-full md:w-auto order-2 md:order-3 flex justify-center md:justify-end items-center gap-6 text-xl md:text-2xl">
            <span>👤</span>

            <span className="relative">
              🛒
              <span className="absolute -top-2 -right-3 text-xs bg-black text-white rounded-full px-1">0</span>
            </span>

            <span className="relative">
              ❤️
              <span className="absolute -top-2 -right-3 text-xs border border-black rounded-full px-1">0</span>
            </span>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </button>
          </div>
        </div>
      )}

      {/* ----------- MAIN NAVBAR ----------- */}
      <nav
        className={`w-full bg-white shadow-sm fixed left-0 z-50 transition-all duration-300 border-b border-gray-200 ${
          isScrolled ? "top-0 py-4" : "top-[250px] md:top-[180px] py-4 border-b border-gray-200"
        }`}
      >
        <div className="hidden md:flex justify-center gap-12 text-lg font-light">
          <Link to="/" className="text-pink-500">Home</Link>
          <Link to="/shop" >  Shop ▾</Link>
          <Link to="/collection">Collection ▾</Link>
          <Link to="/gadget">Gadget</Link>
          <Link to="/jewellery">Jewellery</Link>
          <Link to="/beauty">Health & Beauty</Link>
          <Link to="/pages">Pages ▾</Link>
        </div>
      </nav>

      {/* ----------- MOBILE MENU ----------- */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b shadow px-6 py-4 fixed top-[250px] w-full z-40">
          <div className="flex flex-col gap-4 text-lg">
            <Link to="/" className="text-pink-500">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/pants">Pants</Link>
            <Link to="/skirts">Skirts</Link>
            <Link to="/tops">Tops</Link>
            <Link to="/pages">Pages</Link>
          </div>
        </div>
      )}

      {/* Spacer */}
      <div className={isScrolled ? "h-8" : "h-[100px]"}></div>
    </div>
  );
}
