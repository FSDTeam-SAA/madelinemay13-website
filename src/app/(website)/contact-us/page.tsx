import Hero from "@/components/Reusable/Hero";
import ContactInformation from "@/components/sections/AboutUs/ContactInformation";
import GetInTouch from "@/components/sections/AboutUs/GetInTouch";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero heading="Contact Us" subHeading="Have questions? Let’s talk!" />
      <GetInTouch />
      <ContactInformation />
    </div>
  );
}
