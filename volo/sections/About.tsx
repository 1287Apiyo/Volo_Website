"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="w-full bg-black text-white py-20 px-8 flex items-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }} 
            viewport={{ once: true }}
            className="text-5xl font-bold"
          >
            About Volo
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} 
            viewport={{ once: true }}
            className="text-gray-300 text-lg leading-relaxed"
          >
            Volo is redefining urban mobility with fast, safe, and affordable rides. 
            Whether you're commuting to work or heading out for an adventure, 
            we ensure a seamless experience with professional drivers and innovative technology.
          </motion.p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
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
