// src/components/layout/Header.jsx
import React, { useEffect, useState } from "react";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navItems = [
  { name: "Home", subItems: null, href: "#home" },
  {
    name: "Destinations",
    href: "#destinations",
    subItems: ["Europe", "Asia", "Africa", "Middle East", "Americas"],
  },
  {
    name: "Tours",
    subItems: ["Beach Holidays", "Adventure Tours", "Cultural Trips"],
  },
  {
    name: "Packages",
    href: "#packages",
    subItems: ["All-Inclusive", "Budget Travel", "Luxury Travel"],
  },
  {
    name: "Resources",
    subItems: ["Travel Blog", "Travel Tips", "Visa Info", "FAQs"],
  },
  {
    name: "Company",
    subItems: ["About Us", "Meet Our Team", "Testimonials"],
  },
  {
    name: "Contact",
    href: "#footer",
    subItems: ["Support", "Partner with Us", "Careers"],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white relative z-50">
      <div className="text-xl font-bold">WanderScape</div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 text-sm relative">
        {navItems.map((item, idx) => (
          <li key={idx} className="relative group">
            {item.href ? (
              <a
                href={item.href}
                className="flex items-center gap-1 hover:text-gray-300"
              >
                {item.name}
                {item.subItems && <ChevronDownIcon className="w-4 h-4" />}
              </a>
            ) : (
              <button className="flex items-center gap-1 hover:text-gray-300">
                {item.name}
                {item.subItems && <ChevronDownIcon className="w-4 h-4" />}
              </button>
            )}

            {item.subItems && (
              <ul className="absolute top-8 left-0 bg-gray-300 text-black rounded-md shadow-md py-2 px-4 min-w-[150px] space-y-1 z-50 hidden group-hover:block">
                {item.subItems.map((sub, sidx) => (
                  <li key={sidx}>
                    <a
                      href="#"
                      className="block px-2 py-1 hover:bg-gray-100 rounded"
                    >
                      {sub}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Get Started Button (Desktop only) */}
      <button className="hidden md:block bg-white text-blue-500 px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-100">
        Get started
      </button>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white text-black shadow-lg rounded-md mt-2 py-4 px-6 z-40 md:hidden">
          <ul className="space-y-3 text-sm">
            {navItems.map((item, idx) => (
              <li key={idx}>
                <div className="font-semibold">{item.name}</div>
                {item.subItems && (
                  <ul className="pl-4 mt-1 space-y-1 text-gray-700 text-sm">
                    {item.subItems.map((sub, sidx) => (
                      <li key={sidx}>
                        <a href="#" className="block hover:text-blue-500">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-600">
            Get started
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
