import React from "react";

const Hero = React.memo(() => {
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Build Modern UI with Tailwind
        </h2>

        <p className="text-lg sm:text-xl mb-8">
          Utility-first CSS framework for rapid UI development.
        </p>

        <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
          Get Started
        </button>

      </div>
    </section>
  );
});

export default Hero;