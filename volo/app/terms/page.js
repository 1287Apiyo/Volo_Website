"use client";

import Link from "next/link";

const TermsAndPrivacy = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-16">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-8">Terms & Conditions & Privacy Policy</h1>
        
        {/* Terms & Conditions Section */}
        <div id="terms">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Terms & Conditions</h2>
          <p className="text-gray-300 leading-relaxed">
            Welcome to Volo. These terms and conditions outline the rules and regulations for the use of our platform.
            By accessing this website, you accept these terms in full. Do not continue to use Volo if you do not agree to all of the terms and conditions.
          </p>
          <p className="mt-4 text-gray-400">
            (You can add detailed terms here...)
          </p>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Privacy Policy Section */}
        <div id="privacy">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Privacy Policy</h2>
          <p className="text-gray-300 leading-relaxed">
            At Volo, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect
            and how we use, store, and protect that information.
          </p>
          <p className="mt-4 text-gray-400">
            (You can add the full privacy policy details here...)
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="text-yellow-400 underline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TermsAndPrivacy;
