"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-screen h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/Nairobi.jpeg" // Ensure this image exists in /public/assets/
        alt="City Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Hero Content */}
      <motion.div
        className="relative text-center text-white"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold">Volo - The Future of Mobility</h1>
        <p className="mt-4 text-lg">Seamless Rides. Unmatched Convenience.</p>
       
      </motion.div>
    </section>
  );
};

export default Hero;