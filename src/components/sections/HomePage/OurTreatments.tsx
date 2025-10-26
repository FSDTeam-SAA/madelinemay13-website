import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const treatments = [
  {
    title: "Orthopedic & Sports Injuries",
    description:
      "Personalized care for joint, muscle, and tendon injuries—helping you recover fully and prevent future setbacks.",
    image:
      "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761437325/image14_y1zk2g.png",
  },
  {
    title: "Pre- & Post-Surgical Rehabilitation",
    description:
      "Guided recovery programs to restore strength, mobility, and confidence after surgery.",
    image:
      "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761437329/image14-1_ri3i6n.png",
  },
  {
    title: "Spine & Nerve Conditions",
    description:
      "Expert treatment for back, neck, and nerve pain to restore balance, alignment, and comfort.",
    image:
      "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761437325/image3-1_qqstwx.png",
  },
  {
    title: "Pelvic Health & Lumbopelvic Pain",
    description:
      "Comprehensive care for pelvic floor dysfunction, pain, and stability to improve daily comfort and function.",
    image:
      "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761437326/image3_hqv4gz.png",
  },
  {
    title: "Lymphedema & Oncology Rehabilitation",
    description:
      "Specialized therapy for swelling and recovery following cancer treatment, surgery, or injury.",
    image:
      "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761437328/image15_lybbz3.png",
  },
  {
    title: "Visceral Manipulation",
    description:
      "Gentle manual therapy to improve organ mobility, reduce tension, and enhance overall body function.",
    image:
      "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761437331/image15-1_olul2w.png",
  },
  {
    title: "Performance & Injury Prevention",
    description:
      "Customized movement and strength programs designed to enhance performance, build resilience, and prevent injury.",
    image:
      "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761437327/image6_sy6kxn.png",
  },
  {
    title: "Chronic Pain & Movement Dysfunction",
    description:
      "Holistic care for long-term pain—helping you regain mobility, strength, and confidence in movement.",
    image:
      "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761437327/image6-1_hetjvz.png",
  },
];

export default function TreatmentsSection() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-gray-800">
          Our Treatments
        </h2>

        {/* Grid Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* 🖼️ Image Full Top */}
              <div className="relative w-full h-48 md:h-56 lg:h-60">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 📄 Text Section */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {treatment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 cursor-pointer"
            >
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
