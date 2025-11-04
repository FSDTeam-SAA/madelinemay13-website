import Hero from "@/components/Reusable/Hero";
import FAQ from "@/components/sections/ServicesPage/FAQ";
import Treatments from "@/components/sections/ServicesPage/Treatments";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero
        heading="Our Services"
        subHeading="We provide personalized physical therapy to restore mobility, alleviate pain, and enhance overall well-being, from injury recovery to performance optimization."
      />
      <Treatments />
      <FAQ />
    </div>
  );
}
