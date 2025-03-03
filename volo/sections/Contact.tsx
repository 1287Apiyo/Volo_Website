"use client";

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full text-white py-24 px-8"
      style={{
        backgroundImage: "url('assets/background.jpeg')", // Replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left - Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold text-yellow-500">Contact Us</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Have questions? Reach out to us anytime. Our team is available 24/7 to assist you.
          </p>
          <div className="space-y-4 text-gray-200">
            <p className="text-lg">
               <span className="font-semibold">Nairobi, Kenya</span>
            </p>
            <p className="text-lg">
               <span className="font-semibold">support@volo.com</span>
            </p>
            <p className="text-lg">
               <span className="font-semibold">+254 712 345 678</span>
            </p>
          </div>
          <div className="mt-6">
            <a href="#" className="text-yellow-400 underline">Terms & Conditions</a> &nbsp; | &nbsp;
            <a href="#" className="text-yellow-400 underline">Privacy Policy</a>
          </div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-black/80 backdrop-blur-md p-8 rounded-xl shadow-xl space-y-6"
        >
          <div>
            <label className="block text-white-700 text-sm mb-2">Full Name</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-100 rounded-md text-black outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-white-700 text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full p-3 bg-gray-100 rounded-md text-black outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-white-700 text-sm mb-2">Message</label>
            <textarea
              className="w-full p-3 bg-gray-100 rounded-md text-black outline-none focus:ring-2 focus:ring-yellow-500 h-32"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-yellow-500 text-black font-semibold py-3 rounded-md hover:bg-yellow-400 transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};




export default Contact;
