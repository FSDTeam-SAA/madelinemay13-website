import Hero from "@/components/Reusable/Hero";
import FAQ from "@/components/sections/ServicesPage/FAQ";
import Treatments from "@/components/sections/ServicesPage/Treatments";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero
        heading="Our Signature Services"
        subHeading="Discover expertly crafted experiences designed to delight your senses from artisanal flavors to unforgettable ambiance, we bring excellence to every moment."
      />
      <Treatments />
      <FAQ />
    </div>
  );
}
