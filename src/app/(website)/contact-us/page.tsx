import Hero from "@/components/Reusable/Hero";
import ContactInformation from "@/components/sections/AboutUs/ContactInformation";
import GetInTouch from "@/components/sections/AboutUs/GetInTouch";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero
        heading="Our Specialized Treatments"
        subHeading="Comprehensive, evidence-based therapies designed to restore mobility, relieve pain, and help you move with confidence and freedom."
      />
      <GetInTouch />
      <ContactInformation />
    </div>
  );
}
