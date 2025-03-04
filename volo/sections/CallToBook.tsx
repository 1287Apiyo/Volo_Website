"use client";

import { motion } from "framer-motion";

const CallToBook = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side: Get Moving with VOLO + Steps */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h2 className="text-4xl font-bold">Get Moving with VOLO</h2>
          <p className="text-gray-300 text-lg">
            No delays, no hassle. Book your ride instantly and reach your destination with ease.
          </p>

          {/* How It Works - Step-by-Step Guide */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {[
              ["Download the VOLO app from Google Play.", "Create your user account.", "Agree to the terms and conditions.", "Verify your phone number via OTP."],
              ["Request, complete, and pay for your ride.", "Earn points to redeem for free trips.", "Rate your experience and share feedback.", "Schedule your next ride hassle-free."]
            ].map((column, colIndex) => (
              <div key={colIndex} className="space-y-4">
                {column.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: colIndex === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                      {colIndex * 4 + index + 1}
                    </span>
                    <p className="text-gray-300">{step}</p>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vertical Divider */}
        <div className="hidden md:block border-l border-gray-600 h-auto mx-8"></div>

        {/* Right Side: The VOLO Difference */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-4xl font-bold text-yellow-400">The VOLO Difference!</h2>
          <p className="text-gray-300 text-lg">
            VOLO rewards its users through a point-based system, offering free rides and promotions.
            Drivers also earn based on their performance and user ratings, contributing to their share in the company’s profits.
          </p>

          <p className="text-gray-300 text-lg">
            Join our community by following us on socials and be a part of <span className="text-yellow-400 font-semibold">#TheVoloDifference</span>.
          </p>

          {/* Download Button */}
          <button
            onClick={() => window.open("https://play.google.com/store/apps/details?id=com.example.vo", "_blank")}
            className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg text-lg hover:bg-yellow-400 transition-all"
          >
            Download VOLO & Own the Ride!
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToBook;
