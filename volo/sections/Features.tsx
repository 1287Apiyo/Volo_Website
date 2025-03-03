"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Seamless Rides",
    description: "Book a ride instantly with just a few taps on your phone.",
    image: "/assets/ride-image.jpeg", // Replace with actual image
  },
  {
    title: "Affordable Pricing",
    description: "Enjoy cost-effective rides with transparent pricing.",
    image: "/assets/price-image.jpeg", // Replace with actual image
  },
  {
    title: "Safe & Reliable",
    description: "Our drivers are trained and verified for your safety.",
    image: "/assets/safety-image.jpeg", // Replace with actual image
  },
];

const Features = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-8">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className={`flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto mb-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={feature.image}
              alt={feature.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
            <p className="text-gray-400 text-lg">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Features;
