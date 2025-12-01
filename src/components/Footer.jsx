import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Youtube
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#07172F] text-white pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ----------- LOGO + ABOUT ----------- */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://i.ibb.co/Y8bJ0bD/logo.png"
              alt="logo"
              className="w-20"
            />
            <h2 className="text-2xl font-semibold">
              Trendy Product HUB
            </h2>
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
            <li>Kitchen Storage & Accessories</li>
            <li>Mother & Baby</li>
            <li>Health & Beauty</li>
            <li>Jewellery</li>
            <li>Gadget</li>
            <li>Toys & Games</li>
          </ul>
        </div>

        {/* ----------- USER LINKS ----------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">User Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>My Account</li>
            <li>Orders History</li>
            <li>Track Your Order</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return & Refund Policy</li>
          </ul>
        </div>

        {/* ----------- CONTACT INFO ----------- */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <Phone size={18} /> +880 1710-000 000
          </div>

          <div className="flex items-center gap-3 mb-3 text-gray-300">
            <Mail size={18} /> info@trendyproducthub.com
          </div>

          <div className="flex items-start gap-3 text-gray-300">
            <MapPin size={18} />  
            <span>Notun Bazar, Baridhara, Dhaka-1212</span>
          </div>

          <h4 className="mt-6 mb-3 font-semibold">Follow Us:</h4>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-black transition cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-black transition cursor-pointer">
              <Instagram size={18} />
            </div>
            
            <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 hover:bg-white hover:text-black transition cursor-pointer">
              <Youtube size={18} />
            </div>
          </div>
        </div>
      </div>

      {/* -------- PAYMENT SECTION --------
      <div className="mt-10 border-t border-gray-800 pt-6">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-300 mb-3 text-sm">Pay With</p>

          <img
            src="https://i.ibb.co/7WwP70n/payment-methods.png"
            alt="payment methods"
            className="w-full max-w-5xl"
          />
        </div>
      </div> */}

      {/* -------- BOTTOM COPYRIGHT -------- */}
      <div className="mt-10 text-center text-sm text-gray-300 bg-[#0A2344] py-4">
        © 2025 All rights reserved by Trendy Product HUB.
      </div>
    </footer>
  );
}
