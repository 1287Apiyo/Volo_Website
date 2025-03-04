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
    <section id="about"className="w-full min-h-[40vh] bg-black text-white flex items-center justify-center py-6 md:py-10 px-4 md:px-6">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Volo</h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
          Volo is a revolutionary taxi-hailing app built by enterprising Kenyans to redefine the future of ride-sharing. Inspired by the rising cost of living and rapid technological advancements in Kenya, we developed a platform that ensures sustainable solutions for drivers and safer, more rewarding rides for passengers.

By prioritizing fairness, innovation, and shared success, VOLO is more than just a ride—it’s a movement toward a better future for both drivers and passengers.

          </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full max-w-[450px] h-[300px] mx-auto"
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
                className="rounded-lg shadow-xl object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
