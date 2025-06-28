// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PostList from "../components/PostList";
import AOS from "aos";
import "aos/dist/aos.css";

const bgImages = [
  "url('/images/daniel-sessler-I4YjrybA_1Q-unsplash.jpg')",
  "url('/images/tobias-rademacher-r1LiDUXcp5Q-unsplash.jpg')",
  "url('/images/zach-heiberg-xhBxjDriXnY-unsplash.jpg')",
  "url('/images/axp-photography-oOUYvTAsWqU-unsplash.jpg')",
  "url('/images/clayton-cardinalli-LpCnRYK6U_k-unsplash.jpg')",
  "url('/images/hatem-ramadan-ZS4p7zLAT3A-unsplash.jpg')",
  "url('/images/istockphoto-171450925-612x612.jpg')",
  "url('/images/will-goodman-1EikowqH9fs-unsplash.jpg')",
  "url('/images/istockphoto-2152790625-612x612.jpg')",
  "url('/images/royce-fonseca-Zch-aimk7JE-unsplash.jpg')",
];

const featuredCountries = [
  { name: "France", image: "/images/french.jpg" },
  { name: "Japan", image: "/images/Japan.jpg" },
  { name: "Egypt", image: "/images/Egypt.jpg" },
  { name: "Thailand", image: "/images/Thailand.jpg" },
  { name: "New York", image: "/images/New York.jpg" },
  { name: "Brazil", image: "/images/Brazil.jpg" },
  { name: "Dubai", image: "/images/Dubai.jpg" },
  { name: "Germany", image: "/images/Germany.jpg" },
  { name: "Spain", image: "/images/Spain.jpg" },
  { name: "Australia", image: "/images/Australia.jpg" },
];

const Home = () => {
  const [bgIndex, setBgIndex] = useState(0);
  const [firstLoad, setFirstLoad] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    const timeout = setTimeout(() => setFirstLoad(false), 100);
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 7000);
    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative text-white z-50 overflow-hidden min-h-[600px] w-full" id="home">
        {bgImages.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center w-full ${
              bgIndex === index ? "opacity-100" : "opacity-0"
            } ${firstLoad ? "" : "transition-opacity duration-[1500ms] ease-in-out"}`}
            style={{ backgroundImage: bg }}
          />
        ))}
        <div className="absolute inset-0 bg-blue-950/70 z-10" />
        <div className="relative z-20 w-full">
          <Header />
          <div className="w-full max-w-4xl mx-auto text-center py-28 px-4 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-widest text-white/80">Blog</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2 uppercase leading-snug">
              Inspiration For Travel By Real People
            </h1>
            <p className="text-sm uppercase tracking-widest text-white/80 mt-2">
              Book Smart , Travel Simple.
            </p>
            <div className="flex flex-col items-center mt-6">
              <div className="w-full max-w-md overflow-hidden rounded-xl bg-transparent p-5 shadow-sm">
                <div className="flex flex-col sm:flex-row overflow-hidden rounded-md bg-white focus:outline focus:outline-blue-500">
                  <input
                    type="text"
                    placeholder="Search Tag"
                    className="w-full bg-white px-4 py-2.5 text-gray-700 focus:outline-blue-500 rounded-t-md sm:rounded-tl-md sm:rounded-bl-md sm:rounded-tr-none"
                  />
                  <button className="bg-blue-500 text-white duration-150 hover:bg-blue-600 w-full sm:w-1/3 py-2.5">
                    <p>Explore Now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Section */}
      <section id="destinations" className="container mx-auto px-4 mt-12">
        <PostList />
      </section>

      {/* Featured Countries */}
      <section id="featured" className="bg-gray-100 pt-16 pb-20 mt-20 overflow-hidden">
        <h2 className="text-3xl sm:text-4xl md:text-5xl mb-8 text-center font-semibold">
          <span className="text-blue-700 tracking-wide">Popular </span>
          <span>Countries</span>
        </h2>

        <div className="w-full">
          <div className="flex gap-4 md:gap-6 w-max animate-scroll px-4">
            {[...featuredCountries, ...featuredCountries].map((country, idx) => (
              <div
                key={idx}
                className="relative rounded-lg shadow-md w-[180px] sm:w-[200px] md:w-[240px] h-[120px] sm:h-[140px] md:h-[160px] group cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(country.image)}
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <p className="text-white text-base sm:text-lg font-semibold">
                    {country.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999]">
          <div className="relative bg-transparent rounded-lg shadow-lg max-w-xl w-[90%]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-xl hover:bg-red-600"
              title="Close"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-[300px] object-cover rounded-md"
            />
          </div>
        </div>
      )}


      {/* Plans Section (زي ما هو بدون تغيير) */}
      <section id="packages" className="container mx-auto px-4 mb-12">
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-full">
            <div className="text-center font-semibold max-md:mt-8">
              <h1 className="text-5xl">
                <span className="text-blue-700 tracking-wide">Travel </span>
                <span>Packages</span>
              </h1>
              <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full capitalize">
                Explore destinations that suit your adventure spirit
                <br /> and your budget.
              </p>
            </div>

            {/* الكروت بتتجاوب هنا */}
            <div className="pt-24 max-md:pt-14 flex flex-col lg:flex-row flex-wrap items-center justify-center gap-8">
              {/* Beach Getaway */}
              <div className="w-11/12 sm:w-96 p-8 bg-white text-center rounded-3xl shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Beach Getaway</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">299</span>
                  <span className="text-gray-400 font-medium">/ person</span>
                </p>
                <hr className="mt-4 border-1" />
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">5 Days at Maldives Island</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">4-Star Beach Resort</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">Round-trip flights included</span>
                  </p>
                  <a href="#">
                    <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                      <span className="font-medium">Explore Trip</span>
                    </p>
                  </a>
                </div>
              </div>

              {/* European Escape */}
              <div className="w-11/12 sm:w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-110 relative">
                <h1 className="text-white font-semibold text-2xl">European Escape</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">799</span>
                  <span className="text-gray-400 font-medium">/ person</span>
                </p>
                <hr className="mt-4 border-1 border-gray-600" />
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">10 Days in Italy & France</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">Train & flight transfers</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">Food tasting tours included</span>
                  </p>
                  <a href="#">
                    <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                      <span className="font-medium">Explore Trip</span>
                    </p>
                  </a>
                </div>
                <div className="absolute top-4 right-4">
                  <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                    Popular
                  </p>
                </div>
              </div>

              {/* Safari Adventure */}
              <div className="w-11/12 sm:w-96 p-8 bg-white text-center rounded-3xl shadow-xl">
                <h1 className="text-black font-semibold text-2xl">Safari Adventure</h1>
                <p className="pt-2 tracking-wide">
                  <span className="text-gray-400 align-top">$ </span>
                  <span className="text-3xl font-semibold">1299</span>
                  <span className="text-gray-400 font-medium">/ person</span>
                </p>
                <hr className="mt-4 border-1" />
                <div className="pt-8">
                  <p className="font-semibold text-gray-400 text-left">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">7-Day Kenya Safari</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">Stay in luxury lodges</span>
                  </p>
                  <p className="font-semibold text-gray-400 text-left pt-5">
                    <span className="material-icons align-middle">done</span>
                    <span className="pl-2">Wildlife photography package</span>
                  </p>
                  <a href="#">
                    <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                      <span className="font-medium">Explore Trip</span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
