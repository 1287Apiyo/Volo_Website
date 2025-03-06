"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  const pathname = usePathname(); // Get current page

  // Smooth Scroll Function (Only if on the /terms page)
  const scrollToSection = (id: string) => {
    if (pathname !== "/terms") {
      // If not on the Terms page, navigate there first
      window.location.href = `/terms#${id}`;
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
    <footer className="w-full bg-black text-white py-12 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left - Brand Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl font-bold text-yellow-500">VOLO</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Your trusted partner in seamless and reliable urban mobility.
          </p>
        </motion.div>

        {/* Center - Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <h3 className="text-lg font-semibold text-yellow-500">Quick Links</h3>
          <ul className="text-gray-400 space-y-2">
            <li>
              <Link href="/#about" className="hover:text-yellow-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#services" className="hover:text-yellow-400 transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-yellow-400 transition">
                Contact Us
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("privacy")}
                className="hover:text-yellow-400 transition"
              >
                Privacy Policy
              </button>
            </li>
            <li>
              <Link href="/FAQS" className="hover:text-yellow-400 transition">
                FAQs
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Right - Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-yellow-500">Contact Us</h3>
          <p className="text-gray-400"> Nairobi, Kenya</p>
          <p className="text-gray-400"> Info@volo.africa</p>
          <p className="text-gray-400">+254 713 637 551</p>

          {/* Social Icons */}
          <div className="flex space-x-4 text-gray-400 text-xl">
            <a href="https://www.facebook.com/profile.php?id=61573844342475" className="hover:text-yellow-400 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaX />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/volo-africa/" className="hover:text-yellow-400 transition">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Volo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
