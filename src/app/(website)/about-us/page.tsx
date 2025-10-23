import AboutSection from "@/components/sections/AboutUs/AboutSection";
import ContactInformation from "@/components/sections/AboutUs/ContactInformation";
import GetInTouch from "@/components/sections/AboutUs/GetInTouch";
import React from "react";

export default function page() {
  return (
    <div>
      <AboutSection />
      <GetInTouch />
      <ContactInformation />
    </div>
  );
}
