"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-8 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-5xl font-bold">About Volo</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Volo is redefining urban mobility with fast, safe, and affordable rides. 
            Whether you're commuting to work or heading out for an adventure, 
            we ensure a seamless experience with professional drivers and innovative technology.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <Image
            src="/assets/about.png"
            alt="About Volo"
            width={700}
            height={500}
            className="rounded-lg shadow-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
