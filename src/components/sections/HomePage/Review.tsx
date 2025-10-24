"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function Review() {
  const testimonials = [
    {
      name: "Connect Directly",
      location: "Portland, OR",
      image: "/avatars/user1.jpg", // Replace with actual image
      text: `I’ve been ordering from TABLEFRESH for over year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.`,
      rating: 4,
    },
    {
      name: "Connect Directly",
      location: "Portland, OR",
      image: "/avatars/user1.jpg",
      text: `I’ve been ordering from TABLEFRESH for over year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.`,
      rating: 4,
    },
    {
      name: "Connect Directly",
      location: "Portland, OR",
      image: "/avatars/user1.jpg",
      text: `I’ve been ordering from TABLEFRESH for over year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.`,
      rating: 4,
    },
    {
      name: "Connect Directly",
      location: "Portland, OR",
      image: "/avatars/user1.jpg",
      text: `I’ve been ordering from TABLEFRESH for over year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.`,
      rating: 4,
    },
    {
      name: "Connect Directly",
      location: "Portland, OR",
      image: "/avatars/user1.jpg",
      text: `I’ve been ordering from TABLEFRESH for over year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.`,
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(4);

  // Responsive card count
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640)
        setItemsPerSlide(1); // Mobile
      else if (window.innerWidth < 1024)
        setItemsPerSlide(2); // Tablet
      else setItemsPerSlide(4); // Desktop
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="w-full max-w-7xl mx-auto py-16 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">
        What Our Patients Say
      </h2>
      <p className="text-gray-500 mb-10">
        Real stories from patients who’ve regained strength, confidence, and a
        better quality of life through our personalized therapy and holistic
        care.
      </p>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            width: `${(testimonials.length / itemsPerSlide) * 100}%`,
          }}
        >
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="flex-shrink-0 w-full sm:w-[48%] lg:w-[23%] rounded-xl shadow-sm border border-gray-100"
            >
              <CardContent className="p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className={`${
                        idx < t.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {t.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <Button
          onClick={handlePrev}
          size="icon"
          variant="ghost"
          className="rounded-full w-10 h-10"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full ${
                idx === currentIndex ? "bg-gray-900" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        <Button
          onClick={handleNext}
          size="icon"
          variant="ghost"
          className="rounded-full w-10 h-10"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
