"use client";

import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="text-yellow-500 text-3xl font-bold uppercase">
          VOLO
        </a>
        <div className="hidden md:flex gap-6">
          <button
            onClick={() => scrollToSection("about")}
            className="text-white transition-colors duration-300 hover:text-[#FFC107]"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-white transition-colors duration-300 hover:text-[#FFC107]"
          >
          Services
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-white transition-colors duration-300 hover:text-[#FFC107]"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
