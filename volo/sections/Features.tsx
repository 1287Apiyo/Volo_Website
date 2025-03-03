"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Seamless Rides",
    description: "Book a ride instantly with just a few taps on your phone.",
    image: "/assets/ride-image.jpeg",
  },
  {
    title: "Affordable Pricing",
    description: "Enjoy cost-effective rides with transparent pricing.",
    image: "/assets/price-image.jpeg",
  },
  {
    title: "Safe & Reliable",
    description: "Our drivers are trained and verified for your safety.",
    image: "/assets/safety-image.jpeg",
  },
];

const Features = () => {
  return (
    <section
      id="services"
      className="w-full text-white py-24 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurry Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-lg"></div>

      <div className="relative max-w-6xl mx-auto space-y-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-14 ${
              index % 2 === 0 ? "justify-start" : "justify-end md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.3 }} // Animation triggers every time section is visible
          >
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: false, amount: 0.3 }} // Repeats animation on scroll
              className="w-full md:w-[60%] flex relative"
            >
              <div
                className={`w-[750px] h-[450px] relative overflow-hidden ${
                  index === 0 || index === 2 ? "mr-auto -ml-52 max-w-none" : ""
                }`}
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.4 }}
              viewport={{ once: false, amount: 0.3 }} // Repeats animation on scroll
              className="w-full md:w-1/2 text-center md:text-left px-4 relative"
            >
              <h3 className="text-4xl font-bold mb-5 text-white">{feature.title}</h3>
              <p className="text-white text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
