import React from "react";

const Banner = () => {
  return (
    <section
      className="relative flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/homehero.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative text-center text-white px-6 max-w-5xl">
        <h2
          style={{ fontFamily: "var(--font-playfair)" }}
          className="text-3xl md:text-5xl lg:text-[60px]  font-bold leading-[120%] font-playfair mb-6"
        >
          Holistic Physical Therapy for Total Well-Being
        </h2>
        <p className="text-lg md:text-xl mb-6 lg:mb-20 leading-relaxed">
          Personalized one-on-one care focused on restoring balance, building
          strength, and improving confidence in every movement—helping you
          recover, stay active, and live life to the fullest.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-14 cursor-pointer rounded-md transition">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Banner;
