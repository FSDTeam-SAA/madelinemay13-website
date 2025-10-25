"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function Review() {
  const testimonials = [
    {
      name: "Connect Directly",
      location: "Portland, OR",
      image: "/images/pic-img.jpg",
      text: `I've been ordering from TABLEFRESH for over a year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.`,
      rating: 4,
    },
    {
      name: "Healthy Choices",
      location: "New York, NY",
      image: "/images/pic-img.jpg",
      text: `Fresh, fast, and delicious! TABLEFRESH has changed how I think about meal planning. Highly recommend their organic boxes.`,
      rating: 5,
    },
    {
      name: "Green Living",
      location: "Los Angeles, CA",
      image: "/images/pic-img.jpg",
      text: `Amazing service! The freshness and variety are unbeatable. My kids even love the veggies now!`,
      rating: 5,
    },
    {
      name: "Daily Fresh",
      location: "Austin, TX",
      image: "/images/pic-img.jpg",
      text: `TABLEFRESH always delivers on time with perfect packaging. Organic and trustworthy — exactly what we needed.`,
      rating: 4,
    },
    {
      name: "Healthy Choices",
      location: "New York, NY",
      image: "/images/pic-img.jpg",
      text: `Fresh, fast, and delicious! TABLEFRESH has changed how I think about meal planning. Highly recommend their organic boxes.`,
      rating: 5,
    },
    {
      name: "Green Living",
      location: "Los Angeles, CA",
      image: "/images/pic-img.jpg",
      text: `Amazing service! The freshness and variety are unbeatable. My kids even love the veggies now!`,
      rating: 5,
    },
    {
      name: "Healthy Choices",
      location: "New York, NY",
      image: "/images/pic-img.jpg",
      text: `Fresh, fast, and delicious! TABLEFRESH has changed how I think about meal planning. Highly recommend their organic boxes.`,
      rating: 5,
    },
    {
      name: "Green Living",
      location: "Los Angeles, CA",
      image: "/images/pic-img.jpg",
      text: `Amazing service! The freshness and variety are unbeatable. My kids even love the veggies now!`,
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // ✅ Responsive setup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = testimonials.length - itemsPerView;

  // ✅ Next/Prev button disable logic
  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Calculate card width based on items per view
  const cardWidth = `calc((100% - ${(itemsPerView - 1) * 24}px) / ${itemsPerView})`;

  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">
        What Our Customers Say
      </h2>
      <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
        Real stories from customers who love TABLEFRESH&apos;s organic produce
        and fast delivery service.
      </p>

      {/* Slider Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex gap-6"
          style={{
            transform: `translateX(calc(-${
              (currentIndex * 100) / itemsPerView
            }% - ${currentIndex * 24}px))`,
            transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {testimonials.map((t, i) => (
            <Card
              key={i}
              className="shrink-0 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{ width: cardWidth }}
            >
              <CardContent className="p-6 text-left flex flex-col h-full justify-between">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className={`${
                          idx < t.rating
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        } transition-all duration-200`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 italic text-sm leading-relaxed">
                  &quot;{t.text}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* ✅ Navigation */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <Button
          onClick={handlePrev}
          size="icon"
          variant="ghost"
          disabled={currentIndex === 0}
          className={`rounded-full w-10 h-10 transition-all duration-200 hover:scale-110 ${
            currentIndex === 0
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, idx) => {
            const isActive =
              idx >= currentIndex && idx < currentIndex + itemsPerView;
            return (
              <button
                key={idx}
                onClick={() => setCurrentIndex(Math.min(idx, maxIndex))}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  isActive ? "bg-gray-900 w-8" : "bg-gray-300 w-2.5"
                }`}
              ></button>
            );
          })}
        </div>

        <Button
          onClick={handleNext}
          size="icon"
          variant="ghost"
          disabled={currentIndex === maxIndex}
          className={`rounded-full w-10 h-10 transition-all duration-200 hover:scale-110 ${
            currentIndex === maxIndex
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-gray-100 cursor-pointer"
          }`}
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
