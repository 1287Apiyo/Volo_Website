"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full bg-black text-white py-32 px-12 relative min-h-[800px]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-lg md:w-1/2"
        >
          <h2 className="text-5xl font-bold mb-6">About Volo</h2>
          <p className="text-gray-200 leading-relaxed text-xl">
            Volo is redefining urban mobility with fast, safe, and affordable rides. 
            Whether you're commuting to work or heading out for an adventure, 
            we ensure a seamless experience with professional drivers and innovative technology.
          </p>
        </motion.div>

        {/* Floating Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:w-1/2 relative"
        >
          <Image
            src="/assets/about.png" // Replace with actual image
            alt="About Volo"
            width={600}
            height={400}
            className="rounded-lg shadow-2xl object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;