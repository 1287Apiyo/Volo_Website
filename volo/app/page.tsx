import Hero from "@/sections/Hero";
import CallToBook from "@/sections/CallToBook"; // Small break section
import About from "@/sections/About";
import Features from "@/sections/Features";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* Hero Section */}
      <Hero />

      {/* Call to Book Section (or Get the App) */}
      <CallToBook />

      {/* About Us Section */}
      <About />

      {/* Features Section */}
      <Features />
    </div>
  );
}
