import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import Logo from "../pages/Logo";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#07172F] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ----------- LOGO + ABOUT ----------- */}
        <div>
          <div className="flex items-center gap-3">
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <p className="mt-6 text-sm leading-6 text-gray-300 w-64">
            AN ONLINE SHOPPING MALL
            <br />
            All kinds of online items are sold wholesale and retail here.
          </p>
        </div>

        {/* ----------- CATEGORIES ----------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#42b0f5] cursor-pointer">
              Kitchen Storage & Accessories
            </li>
            <li className="hover:text-[#42b0f5] cursor-pointer">
              Mother & Baby
            </li>
            <li className="hover:text-[#42b0f5] cursor-pointer">
              Health & Beauty
            </li>
            <li className="hover:text-[#42b0f5] cursor-pointer">Jewellery</li>
            <li className="hover:text-[#42b0f5] cursor-pointer">Gadget</li>
            <li className="hover:text-[#42b0f5] cursor-pointer">
              Toys & Games
            </li>
          </ul>
        </div>

        {/* ----------- USER LINKS ----------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">User Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-[#42b0f5] cursor-pointer">My Account</li>
            <li className="hover:text-[#42b0f5] cursor-pointer">
              Orders History
            </li>
            <li className="hover:text-[#42b0f5] cursor-pointer">
              Track Your Order
            </li>
            <li className="hover:text-[#42b0f5] cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-[#42b0f5] cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-[#42b0f5] cursor-pointer">
              Return & Refund Policy
            </li>
          </ul>
        </div>

        {/* ----------- CONTACT INFO ----------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="flex items-center gap-3 mb-3 text-gray-300 hover:text-[#42b0f5] cursor-pointer">
            <Phone size={18} /> +880 1710-000 000
          </div>

          <div className="flex items-center gap-3 mb-3 text-gray-300 hover:text-[#42b0f5] cursor-pointer">
            <Mail size={18} /> info@trendyproducthub.com
          </div>

          <div className="flex items-start gap-3 text-gray-300 hover:text-[#42b0f5] cursor-pointer">
            <MapPin size={18} />
            <span>Notun Bazar, Baridhara, Dhaka-1212</span>
          </div>

          <h4 className="mt-6 mb-3 font-semibold">Follow Us:</h4>

          <div className="flex items-center gap-4">
            {/* Facebook */}
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 
              hover:bg-white transition cursor-pointer hover:text-[#42b0f5]"
            >
              <Facebook size={18} />
            </div>

            {/* Instagram */}
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 
              hover:bg-white transition cursor-pointer hover:text-[#42b0f5]"
            >
              <Instagram size={18} />
            </div>

            {/* Youtube */}
            <div
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 
              hover:bg-white transition cursor-pointer hover:text-[#42b0f5]"
            >
              <Youtube size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* -------- BOTTOM COPYRIGHT -------- */}
      <div className="mt-10 text-center text-sm text-gray-300 bg-[#42b0f5] py-4">
        © 2025 All rights reserved by Trendy Product HUB.
      </div>
    </footer>
  );
}
