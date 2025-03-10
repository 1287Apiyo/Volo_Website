"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  { title: "Rides", description: "Request in seconds, ride in minutes." },
  { title: "Delivery", description: "Your favorite food, delivered fast." },
  { title: "Car-sharing", description: "High-quality car rental made easy." },
  { title: "Groceries", description: "All the essentials whenever you need them." },
  { title: "Business", description: "Manage business travel for your team and clients." },
  { title: "Micromobility", description: "2-wheel ride rental at your fingertips." }
];

const Services = () => {
  return (
    <section id="services" className="services-section py-20 px-6 bg-gray-900 text-white">
      <motion.h2 
        className="text-center text-4xl font-bold mb-10 text-yellow-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-yellow-500/30 transition-all"
            initial={{ opacity: 0, scale: 0.9 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-3 text-yellow-400">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
