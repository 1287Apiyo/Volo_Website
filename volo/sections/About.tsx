"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const About = () => {
  const images = [
    "/assets/about.png",
    "/assets/about.png",
    "/assets/about.png",
    "/assets/about.png",
    "/assets/about.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change every 10 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const imageVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <section className="w-full min-h-[80vh] bg-black text-white flex items-center justify-center py-6 sm:py-8 md:py-12 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="w-full max-w-[90rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            About Volo
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 leading-relaxed">
            Volo is redefining urban mobility with fast, safe, and affordable rides. 
            Whether you're commuting to work or heading out for an adventure, 
            we ensure a seamless experience with professional drivers and innovative technology.
          </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full aspect-[7/5] max-h-[80vh]"
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex]}
                alt={`About Volo ${currentIndex + 1}`}
                fill
                className="rounded-lg shadow-xl object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default About;