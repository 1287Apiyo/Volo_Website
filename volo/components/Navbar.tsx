"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-all ${
        isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold uppercase">
          VOLO
        </Link>
        <div className="hidden md:flex gap-6">
          <Link href="#about" className="text-white hover:underline">About</Link>
          <Link href="#services" className="text-white hover:underline">Services</Link>
          <Link href="#contact" className="text-white hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
