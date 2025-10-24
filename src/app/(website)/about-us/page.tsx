import Hero from "@/components/Reusable/Hero";
import AboutSection from "@/components/sections/AboutUs/AboutSection";
import ContactInformation from "@/components/sections/AboutUs/ContactInformation";
import GetInTouch from "@/components/sections/AboutUs/GetInTouch";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero
        heading="Dedicated to Your Recovery and Lifelong Wellness"
        subHeading="At Lolo Physical Therapy, our mission is to provide compassionate, personalized care that empowers every patient to heal, move, and thrive through expert guidance and holistic treatment."
      />
      <AboutSection />
      <GetInTouch />
      <ContactInformation />
    </div>
  );
}
