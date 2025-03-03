"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold mb-6">About Volo</h2>
          <p className="text-gray-400 leading-relaxed">
            Volo is redefining urban mobility with fast, safe, and affordable rides. 
            Whether you're commuting to work or heading out for an adventure, 
            we ensure a seamless experience with professional drivers and innovative technology.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <Image
            src="/assets/vollo.png" // Replace with actual image
            alt="About Volo"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
