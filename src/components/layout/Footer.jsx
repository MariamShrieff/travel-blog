// src/components/layout/Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-100 to-blue-200">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Logo & Description */}
          <div>
            <p className="text-black text-2xl font-bold">WanderScape</p>
            <p className="max-w-xs mt-4 text-sm text-gray-600">
              Discover your next unforgettable journey with our curated travel
              experiences and expert guides.
            </p>
            {/* Social Icons */}
            <div className="flex mt-6 space-x-4 text-black">
              <a
                className="hover:opacity-75 transition"
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                className="hover:opacity-75 transition"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                className="hover:opacity-75 transition"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                className="hover:opacity-75 transition"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                className="hover:opacity-75 transition"
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 sm:grid-cols-3 lg:grid-cols-4 text-sm text-gray-600">
            <div>
              <p className="font-medium text-black">Destinations</p>
              <nav className="flex flex-col mt-4 space-y-2">
                <a href="#" className="hover:opacity-75">Europe</a>
                <a href="#" className="hover:opacity-75">Asia</a>
                <a href="#" className="hover:opacity-75">Africa</a>
                <a href="#" className="hover:opacity-75">Middle East</a>
                <a href="#" className="hover:opacity-75">Americas</a>
              </nav>
            </div>

            <div>
              <p className="font-medium text-black">Tours</p>
              <nav className="flex flex-col mt-4 space-y-2">
                <a href="#" className="hover:opacity-75">Beach Holidays</a>
                <a href="#" className="hover:opacity-75">Adventure Tours</a>
                <a href="#" className="hover:opacity-75">Cultural Trips</a>
              </nav>
            </div>

            <div>
              <p className="font-medium text-black">Packages</p>
              <nav className="flex flex-col mt-4 space-y-2">
                <a href="#" className="hover:opacity-75">All-Inclusive</a>
                <a href="#" className="hover:opacity-75">Budget Travel</a>
                <a href="#" className="hover:opacity-75">Luxury Travel</a>
              </nav>
            </div>

            <div>
              <p className="font-medium text-black">Company</p>
              <nav className="flex flex-col mt-4 space-y-2">
                <a href="#" className="hover:opacity-75">About Us</a>
                <a href="#" className="hover:opacity-75">Meet Our Team</a>
                <a href="#" className="hover:opacity-75">Testimonials</a>
                <a href="#" className="hover:opacity-75">Careers</a>
              </nav>
            </div>
          </div>
        </div>

        <p className="mt-12 text-center text-xs text-gray-800">
          © 2025 WanderScape. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
