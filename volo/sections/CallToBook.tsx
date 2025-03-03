"use client";

import { motion } from "framer-motion";

const CallToBook = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Call to Book */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">Ride Instantly, Anytime</h2>
          <p className="text-gray-300 mb-6">
            No waiting, no hassle. Book your ride effortlessly and get moving in seconds.
          </p>
        </motion.div>

        {/* Right Side - Get the App */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-4xl font-bold mb-4">Get the Volo App</h2>
          <p className="text-gray-300 mb-6 text-center md:text-left">
            Experience seamless ride booking, live tracking, and a hassle-free commute at your fingertips.
          </p>
          <button
            onClick={() =>
              window.open("https://play.google.com/store/apps/details?id=com.example.vo", "_blank")
            }
            className="bg-[#FFC107] text-black font-semibold px-6 py-3 rounded-lg text-lg hover:bg-yellow-500 transition-all"
          >
            Download on Google Play
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToBook;
