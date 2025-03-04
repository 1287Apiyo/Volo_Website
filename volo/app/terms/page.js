"use client";

import Link from "next/link";

const TermsAndPrivacy = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-8">
          VOLO TECHNOLOGIES TERMS AND CONDITIONS
        </h1>

        {/* Terms & Conditions Section */}
        <div id="terms">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            VOLO Passenger Terms and Conditions of Use
          </h2>
          <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
            Effective Date: 01/March/2025
          </h3>

          <p className="text-lg text-gray-300 leading-relaxed">
            Welcome to VOLO, a taxi-hailing application that connects passengers
            with drivers for safe and reliable transportation services in Kenya.
            By using the VOLO app, you agree to comply with the following terms
            and conditions. Please read them carefully.
          </p>
          <hr className="border-gray-700 my-8" />

          {/* Terms Sections */}
          {[
            {
              title: "1. Acceptance of Terms",
              content:
                "By accessing or using the VOLO app, you confirm that you have read, understood, and agreed to these Terms and Conditions. If you do not agree, please refrain from using the service.",
            },
            {
              title: "2. User Eligibility",
              list: [
                "You must be at least 18 years old to use the VOLO app.",
                "You must provide accurate personal details when registering an account.",
                "You agree to use the service for lawful purposes only.",
              ],
            },
            {
              title: "3. Respectful Conduct",
              content:
                "All users are required to behave respectfully towards drivers, other passengers, and VOLO support staff. The following behaviors are strictly prohibited:",
              list: [
                "Use of abusive, discriminatory, or offensive language.",
                "Harassment, intimidation, or violence towards drivers or other users.",
                "Damage to vehicles or any VOLO property.",
              ],
            },
            {
              title: "4. No Firearms or Dangerous Items",
              content:
                "Passengers are strictly prohibited from carrying firearms, explosives, hazardous materials, or any other dangerous objects while using VOLO services.",
            },
            {
              title: "5. Booking and Cancellation",
              list: [
                "Passengers can request a ride through the VOLO app and will be matched with an available driver.",
                "Cancellations should be made promptly to avoid unnecessary driver inconvenience.",
                "VOLO reserves the right to charge cancellation fees for last-minute ride cancellations.",
              ],
            },
            {
              title: "6. Fares and Payments",
              list: [
                "Fares are determined based on distance, time, and demand.",
                "Payments can be made via mobile money, debit/credit cards, or other available payment methods in the app.",
                "VOLO is not responsible for any payment disputes between users and drivers.",
              ],
            },
            {
              title: "7. User Account and Security",
              list: [
                "Users must keep their account details confidential and not share login credentials with others.",
                "Any unauthorized use of your account should be reported to VOLO immediately.",
                "VOLO reserves the right to suspend or terminate accounts suspected of fraudulent activity.",
              ],
            },
            {
              title: "8. Safety and Compliance",
              list: [
                "Users must wear seat belts at all times during the ride.",
                "Passengers should not request drivers to violate traffic laws or take unsafe routes.",
                "Drivers have the right to refuse service if they feel unsafe.",
              ],
            },
            {
              title: "9. Termination of Use",
              content:
                "VOLO reserves the right to suspend or terminate a user’s access to the platform if they:",
              list: [
                "Violate any of these Terms and Conditions.",
                "Commit sexual harassment and/or misconduct.",
                "Engage in fraudulent or unsafe behavior.",
                "Consistently receive complaints from drivers or other users.",
              ],
            },
            {
              title: "10. Limitation of Liability",
              content:
                "VOLO acts as a platform connecting passengers with drivers and is not responsible for any incidents, damages, or losses occurring during rides. Users acknowledge that they assume all risks associated with the service.",
            },
            {
              title: "11. Modifications to Terms",
              content:
                "VOLO may update these Terms and Conditions from time to time. Users will be notified of any significant changes, and continued use of the app after changes constitutes acceptance of the updated terms.",
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
        <div id="terms">
  <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
    VOLO Driver Terms and Conditions of Use
  </h2>
  <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
    Effective Date: 01/March/2025
  </h3>

  <p className="text-lg text-gray-300 leading-relaxed">
    Welcome to VOLO, a taxi-hailing platform connecting drivers with passengers in Kenya. By registering as a VOLO driver, you agree to adhere to the following terms and conditions. Please read them carefully.
  </p>
  <hr className="border-gray-700 my-8" />

  {/* Terms Sections */}
  {[    
    {
      title: "1. Acceptance of Terms",
      content:
        "By signing up and using the VOLO app, you acknowledge that you have read, understood, and agreed to these Terms and Conditions. Failure to comply may result in account suspension, termination, or legal action.",
    },
    {
      title: "2. Driver Eligibility",
      list: [
        "You must be at least 21 years old and hold a valid Kenyan driver’s license.",
        "Your vehicle must meet VOLO’s safety and quality standards.",
        "You must have valid insurance coverage and all required permits.",
        "You must pass a background check conducted by VOLO.",
        "You must have a valid PSV badge from NTSA.",
        "You must have a valid bank account.",
      ],
    },
    {
      title: "3. Hygiene and Vehicle Cleanliness",
      list: [
        "Drivers must maintain a high standard of personal hygiene.",
        "Vehicles should be kept clean, odor-free, and well-maintained.",
        "Passengers should be provided with a comfortable and sanitary ride experience.",
        "Smoking, strong fragrances, and cluttered vehicles are prohibited while operating on the platform.",
      ],
    },
    {
      title: "4. Safety and Responsible Driving",
      list: [
        "Drivers must obey all traffic laws and prioritize passenger safety at all times.",
        "Seat belts must be worn by both the driver and passengers throughout the trip.",
        "Use of mobile phones while driving is strictly prohibited.",
        "Drivers should not operate a vehicle under the influence of alcohol, drugs, or any impairing substances.",
        "In case of emergencies, drivers must follow VOLO’s safety protocols and report incidents immediately.",
      ],
    },
    {
      title: "5. Professional Conduct and Passenger Interaction",
      list: [
        "Drivers must treat all passengers with respect and courtesy.",
        "Any form of discrimination, harassment, or violence is strictly prohibited.",
        "Drivers should avoid engaging in arguments or disputes with passengers.",
        "Physical or verbal threats, intimidation, or aggressive behavior will result in immediate account suspension.",
      ],
    },
    {
      title: "6. Sexual Conduct and Harassment Policy",
      list: [
        "VOLO enforces a strict zero-tolerance policy on sexual harassment.",
        "Any inappropriate physical contact, suggestive comments, or advances towards passengers are strictly forbidden.",
        "Drivers must maintain professional boundaries and avoid any behavior that could make passengers uncomfortable.",
        "Passengers have the right to report any misconduct, which may result in immediate termination from the VOLO platform.",
      ],
    },
    {
      title: "7. Fare Collection and Payments",
      list: [
        "All fares are determined by the VOLO platform and should be charged as displayed in the app.",
        "Drivers should not request additional payments or negotiate fares outside the app.",
        "Payment disputes should be reported to VOLO customer support for resolution.",
      ],
    },
    {
      title: "8. Account Security and Compliance",
      list: [
        "Drivers must not share their VOLO account details with anyone.",
        "The registered driver must be the only person operating the vehicle under the VOLO platform.",
        "Fraudulent activities, including false ride completions, will lead to immediate account deactivation.",
      ],
    },
    {
      title: "9. Reporting and Dispute Resolution",
      list: [
        "Any incidents involving passengers should be reported to VOLO through the designated support channels.",
        "VOLO reserves the right to investigate any complaints or concerns raised by passengers or authorities.",
        "Drivers found in violation of these terms may face suspension or permanent removal from the platform.",
      ],
    },
    {
      title: "10. Modifications to Terms",
      content:
        "VOLO reserves the right to update these Terms and Conditions at any time. Continued use of the platform after changes are made constitutes acceptance of the updated terms.",
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

export default TermsAndPrivacy;
