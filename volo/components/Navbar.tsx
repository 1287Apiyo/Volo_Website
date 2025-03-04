"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Detect current page

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get current route

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function (Only for Home Page)
  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      // If not on home page, go to home first
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80, // Adjust for navbar height
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-yellow-500 text-3xl font-bold uppercase">
          VOLO
        </Link>
        <div className="hidden md:flex gap-6">
          {/* Detect if on home page, then use smooth scroll; otherwise, navigate */}
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
          <Link
            href="/terms"
            className="text-white transition-colors duration-300 hover:text-[#FFC107]"
          >
            Terms & Privacy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
