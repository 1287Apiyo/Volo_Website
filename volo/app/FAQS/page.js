"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  { question: "What is VOLO?", answer: "VOLO is a taxi-hailing app that connects passengers with drivers for safe, reliable, and affordable transportation in Kenya." },
  { question: "How do I sign up for VOLO?", answer: "Passengers and drivers can sign up by downloading the VOLO app from the App Store or Google Play, registering their details, and following the verification steps." },
  { question: "How do I request a ride?", answer: "Open the VOLO app, enter your destination, select your preferred ride option, and confirm your request. A nearby driver will be assigned to pick you up." },
  { question: "How are fares calculated?", answer: "Fares are based on factors such as distance, travel time, demand, and any applicable service charges. The estimated fare is displayed before confirming the ride." },
  { question: "What payment methods are accepted?", answer: "VOLO accepts mobile money (M-Pesa), credit/debit cards, and cash payments." },
  { question: "Is VOLO available in my area?", answer: "VOLO operates in major cities and towns across Kenya. Check the app for availability in your location." },
  { question: "Can I schedule a ride in advance?", answer: "Yes, VOLO allows users to schedule rides ahead of time through the app." },
  { question: "What safety measures does VOLO have?", answer: "Drivers undergo background checks and vehicle inspections. Live GPS tracking, in-app emergency assistance, and a rating system ensure safety." },
  { question: "What should I do if I leave an item in a VOLO vehicle?", answer: "Use the 'Lost & Found' feature in the app or contact VOLO customer support to report lost items." },
  { question: "Can I cancel a ride?", answer: "Yes, passengers can cancel a ride before pickup. However, cancellation fees may apply for last-minute cancellations." },
  { question: "What happens if my driver cancels the ride?", answer: "If a driver cancels your ride, VOLO will automatically assign another driver. If no drivers are available, you may need to request a new ride." },
  { question: "Can drivers refuse service?", answer: "Drivers have the right to refuse service if they feel unsafe or if passengers violate VOLO’s terms (e.g., carrying prohibited items)." },
  { question: "Is discrimination allowed on VOLO?", answer: "No, VOLO has a strict non-discrimination policy. Drivers and passengers must respect each other regardless of race, gender, religion, disability, or other protected characteristics." },
  { question: "How do I report a complaint or issue?", answer: "You can report issues through the app’s support section or contact VOLO customer service for assistance." },
  { question: "How do I become a VOLO driver?", answer: "To become a VOLO driver, sign up on the app, submit the required documents, and complete the verification process." },
  { question: "How are drivers paid?", answer: "Drivers receive payments through mobile money or bank transfers based on completed rides. Performance-based points contribute to their share in company profits." },
  { question: "Can I rate my driver or passenger?", answer: "Yes, both drivers and passengers can rate each other after each ride to help maintain service quality." },
  { question: "How do I contact VOLO support?", answer: "For any assistance, contact VOLO customer support through the app or via info@volo.africa." },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-32 py-10 px-6">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[400px] flex items-center justify-center">
      <Image
        src="/assets/Nairobi.jpeg" // Ensure this image exists in /public/assets/
        alt="City Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
        className="w-full h-full object-cover"
      />
        <div className="absolute text-center">
          <h1 className="text-5xl font-bold text-white-500">Got Questions?</h1>
          <p className="text-white-300 mt-4 text-lg">We've got answers! Find everything you need to know about VOLO below.</p>
        </div>
      </div>
      
      {/* Quick Access Buttons */}
      <div className="flex justify-center gap-4 mt-10">
        <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg shadow-md hover:bg-yellow-600">Contact Support</button>
        <button className="px-6 py-3 bg-gray-700 text-white font-bold rounded-lg shadow-md hover:bg-gray-600">Live Chat</button>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-gray-800 p-5 rounded-lg shadow-md"
            >
              <button
                className="w-full text-left font-semibold text-lg flex justify-between text-yellow-400"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <p className="mt-2 text-gray-300">{faq.answer}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
