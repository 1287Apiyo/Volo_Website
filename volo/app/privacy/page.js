// app/privacy/page.js
"use client";

import Link from "next/link";

const Privacy = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-yellow-500 text-center mb-8">
          VOLO Technologies privacy policy.
          </h1>
  
          {/* Terms & Conditions Section */}
          <div id="terms">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            VOLO Privacy Policy
            </h2>
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Effective Date: 01/March/2025
            </h3>
  
            <p className="text-lg text-gray-300 leading-relaxed">
            VOLO is committed to protecting your privacy and ensuring that your personal data is handled responsibly. 
            This Privacy Policy explains how we collect, use, store, and protect your information when you use our 
            taxi-hailing services in Kenya.
            </p>
            <hr className="border-gray-700 my-8" />
  
            {/* Terms Sections */}
            {[
              {
                title: "1. Information We Collect",
                content:
                  "We collect and process the following types of information:",
                  list: [
                    "Personal Information: Name, phone number, email address, profile picture, and payment details.",
                    "Location Data: Real-time GPS location to facilitate ride requests and navigation.",
                    "Ride Information: Trp history, route details, and fare amounts.",
                    "Device Information: IP address, operating system, and app usage data.",
                    "Communications: Any messages or support requests sent to VOLO."
                  ]
              },
              {
                title: "2. How We Use Your Information",
                content: "We use your data for the following purposes:",
                list: [
                  "To provide, operate, and improve VOLO services.",
                  "To match passengers with drivers and facilitate ride requests.",
                  "To process payments and issue receipts.",
                  "To enhance safety and detect fraudulent activities.",
                  "To provide customer support and resolve disputes.",
                  "To comply with legal requirements and law enforcement requests.",
                ],   
              },
              {
                title: "3. Data Sharing and Disclosure",
                content:
                  "We do not sell your personal data. However, we may share your information:",
                list: [
                    "With drivers to facilitate ride requests.",
                    "With payment processors for secure transactions.",
                    "With law enforcement or regulatory authorities when required by law.",
                    "With service providers who help us operate the platform.",
                    ],
              },
              {
                title: "4. Data Security",
                content:
                  "We implement strong security measures to protect your data, including encryption and access controls. However, no system is 100% secure, and users should also take precautions to safeguard their accounts.",
              },
              {
                title: "5. User Rights and Choices",
                content: "You have the right to:",
                list: [
                    "Access, update, or delete your personal data.",
                    "Opt out of marketing communications.",
                    "Restrict or object to certain data processing activities.",
                    "Request a copy of your personal information.",
                ],
              },
              {
                title: "6. Non-Discrimination Policy",
                content: "VOLO strictly prohibits any form of discrimination based on race, gender, religion, disability, sexual orientation, nationality, or any other protected characteristic. Users (both passengers and drivers) must treat each other with respect. Any reports of discriminatory behavior will be investigated, and appropriate action will be taken, including potential suspension or removal from the platform.",
              },
              {
                title: "7. Data Retention",
                content: "We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy. Once data is no longer needed, we securely delete or anonymize it.",
              },
              {
                title: "8. Third-Party Services",
                content: "Our app may contain links to third-party services or payment platforms. VOLO is not responsible for the privacy practices of these external services.",
              },
              {
                title: "9. Policy Updates",
                content:
                  "We may update this Privacy Policy periodically. Users will be notified of significant changes, and continued use of VOLO services implies acceptance of the updated policy.",
                
              },
            ].map((section, index) => (
              <div key={index} className="mt-6 text-gray-400">
                <h3 className="text-xl font-semibold">{section.title}</h3>
                {section.content && (
                  <p className="text-lg leading-relaxed mt-2">{section.content}</p>
                )}
                {section.list && (
                  <ul className="text-lg list-disc pl-6 mt-2">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <hr className="border-gray-700 my-8" />

              <p className="text-center text-gray-500 text-base">
                If you have any questions, please contact us at{" "}
                <Link href="@/sections/Contact" className="text-yellow-400 underline">
                  VOLO Support
                </Link>.
              </p>
        
          </div>
            </section>
            );
        };

export default Privacy;
