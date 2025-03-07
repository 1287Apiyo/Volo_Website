"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Car, Phone, UserPlus, ChevronLeft } from "lucide-react"; // Icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showRegisterOptions, setShowRegisterOptions] = useState(false);
  const pathname = usePathname();
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const section = document.getElementById(id);
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 80,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 p-4 transition-all ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-yellow-500 text-3xl font-bold uppercase">
          VOLO
        </Link>

        {/* Centered Menu */}
        <div className="hidden md:flex items-center gap-6 bg-black/60 p-2 px-6 rounded-full border border-gray-600 shadow-lg">
          <button onClick={() => scrollToSection("about")} className="flex items-center gap-2 text-white hover:text-yellow-400">
            <Info size={18} /> About
          </button>
          <button onClick={() => scrollToSection("services")} className="flex items-center gap-2 text-white hover:text-yellow-400">
            <Car size={18} /> Services
          </button>
          <button onClick={() => scrollToSection("features")} className="flex items-center gap-2 text-white hover:text-yellow-400">
            <Home size={18} /> Features
          </button>
          <button onClick={() => scrollToSection("contact")} className="flex items-center gap-2 text-white hover:text-yellow-400">
            <Phone size={18} /> Contact
          </button>
        </div>

        {/* Register Button with Flip Animation */}
        <RegisterButton />
      </div>
    </nav>
  );
};

const RegisterButton = () => {
  const [showRegisterOptions, setShowRegisterOptions] = useState(false);

  return (
    <div className="relative">
      <motion.button
        className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full shadow-md transition-all hover:bg-yellow-500"
        onClick={() => setShowRegisterOptions((prev) => !prev)}
        whileTap={{ scale: 0.95 }}
      >
        {showRegisterOptions ? "Back" : "Register"}
      </motion.button>

      {/* Flip Transition for Registration Options */}
      <AnimatePresence>
        {showRegisterOptions && (
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.5 }}
            className="absolute right-0 mt-2 w-56 bg-black text-white shadow-lg rounded-lg overflow-hidden"
          >
            <Link href="/register?type=driver">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                <UserPlus size={18} /> Register as Driver
              </button>
            </Link>
            <Link href="/register?type=fleet-owner">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                <UserPlus size={18} /> Register as Fleet Owner
              </button>
            </Link>
            <Link href="/register?type=rider">
              <button className="w-full text-left px-4 py-2 hover:bg-gray-700 flex items-center gap-2">
                <UserPlus size={18} /> Register as Rider
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
