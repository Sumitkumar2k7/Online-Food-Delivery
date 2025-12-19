import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-3xl font-bold text-white mb-3">FreshDish</h2>
          <p className="text-gray-400 leading-relaxed">
            FreshDish brings you delicious, healthy meals freshly prepared for you.
            Order now and taste the freshness!
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>📍 New Delhi, India</li>
            <li>📞 +91 8873841132</li>
            <li>📧 support@freshdish.com</li>
          </ul>

          <div className="flex space-x-5 mt-4 text-2xl">
            <a href="#" className="hover:text-white"><FaFacebook /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
          </div>
        </div>

      </div>

      <div className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} FreshDish. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
