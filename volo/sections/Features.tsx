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
      className="w-full text-white py-24 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/assets/background.jpeg')", // Replace with your actual background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blurry Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>

      <div className="relative max-w-6xl mx-auto space-y-24">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-14 ${
              index % 2 === 0 ? "justify-start" : "justify-end md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="w-full md:w-[60%] flex relative">
              <div
                className={`w-[750px] h-[450px] relative ${
                  index === 1 ? "ml-auto -mr-64 max-w-none" : "mr-auto -ml-64 max-w-none"
                }`} // More push! 🚀
              >
                <Image
                  src={feature.image}
                  alt={feature.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl shadow-xl"
                />
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left px-4 relative">
              <h3 className="text-4xl font-bold mb-5">{feature.title}</h3>
              <p className="text-black-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
