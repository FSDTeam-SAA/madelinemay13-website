import React from "react";

const Hero = ({
  imageSrc = "/images/hero.png",
  heading = "Our Signature Services",
  subHeading = "Discover expertly crafted experiences designed to delight your senses. From artisanal flavors to unforgettable ambiance, we bring excellence to every moment.",
}) => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8">
      <div
        className="relative w-full max-w-[1536px] mx-auto h-[280px] sm:h-80 md:h-[300px] rounded-md bg-cover bg-center"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[rgba(50,50,51,0.6)]  rounded-md"></div>

        {/* Content */}
        <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-12">
          <h1
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold leading-tight mb-3 sm:mb-4 font-playfair"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {heading}
          </h1>
          <p
            className="text-sm sm:text-base md:text-[16px] lg:text-[16px] xl:text-[16px] w-full sm:w-[90%] md:w-[80%] lg:w-[70%] leading-normal tracking-wide font-poppins"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {subHeading}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
