"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Smarter Rides & Scheduling",
    description:
      "Plan ahead with scheduled rides, seamless airport transfers, and corporate transport solutions tailored to your business needs.",
    image: "/assets/ride-image.jpeg",
  },
  {
    title: "Solution-oriented.",
    description:
      "Created to give Kenyans value for their money while affording onboarded drivers more rewards for their time and effort.",
    image: "/assets/price-image.jpeg",
  },
  {
    title: "Safe & Secure",
    description:
      "Your safety is our priority. With an inbuilt SOS feature that shares your location with emergency teams, we ensure help is always within reach.",
    image: "/assets/safety-image.jpeg",
  },
  // {
  //   title: "Innovation at its Core",
  //   description:
  //     "Built by a team led by an MIT-trained principal engineer and futuristic coders, Volo is designed to redefine urban mobility in Kenya.",
  //   image: "/assets/background.jpeg",
  // },
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
            className={`flex flex-col md:flex-row items-center gap-10 md:gap-14 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }} // Runs once, stops shakiness
          >
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true, amount: 0.3 }} // Runs once
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-full md:w-[500px] h-[300px] md:h-[400px]">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.4 }}
              viewport={{ once: true, amount: 0.3 }} // Runs once
              className="w-full md:w-1/2 text-center md:text-left px-4"
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-5 text-white">{feature.title}</h3>
              <p className="text-white text-lg leading-relaxed">{feature.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
