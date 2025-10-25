"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { div } from "framer-motion/client";

export default function Review() {
  const testimonials: {
    name: string;
    location?: string;
    image?: string;
    text: string;
    rating: number;
  }[] = [
    {
      name: "P.S.",
      // location: "Portland, OR",
      // image: "/images/pic-img.jpg",
      text: `“What a joy it’s been working with Madeline! She’s absolutely wonderful! She’s super kind, patient, and really knows what she’s doing. From the first day, she made me feel comfortable and cared for. I never felt silly just supported! Madeline not only listens to me but has actively helped me to feel great while always smiling with gentle words of encouragement!
I would recommend Dr. May to anyone looking for a wonderful physical therapist!”
`,
      rating: 4,
    },
    {
      name: "L.S.",
      // location: "New York, NY",
      // image: "/images/pic-img.jpg",
      text: `“I met with Kevin after I broke my ankle. He was kind, conscientious, and very helpful.
His breadth of knowledge and experience is evident in the way He explains any exercises, the need for specific movements, and why long-term they are important.I highly recommend him to others, and credit Lolo Physical Therapy with their attention to detail.
Because of them, I've regained my mobility and strength.”

`,
      rating: 5,
    },
    {
      name: "K.M.",
      // location: "Austin, TX",
      // image: "/images/pic-img.jpg",
      text: `“They truly care about each patient. The care is always very kind and compassionate. I've been to a lot of PT and this has been my best experience.”`,
      rating: 4,
    },
    {
      name: "M.G.",
      location: "Los Angeles, CA",
      // image: "/images/pic-img.jpg",
      text: `“Went in for a few visits with Madeline to fix my plantar faciitis. In the first ten minutes, she identified the root cause for the injury which I never would have thought as a contributor. During the consults she took the time to understand my needs, capabilities and time constraints and gave me excersises which made the injury feel better within days and clear it up completely over the long term. She described and wrote down the home excersises in a way I could understand which helped me ensure I was doing them correctly. Its always worth the travel time to see Madeline. Its nice to feel like youre working with a pt who's goal is to treat patients not increase profits.”`,
      rating: 5,
    },

    // {
    //   name: "Healthy Choices",
    //   location: "New York, NY",
    //   // image: "/images/pic-img.jpg",
    //   text: `Fresh, fast, and delicious! TABLEFRESH has changed how I think about meal planning. Highly recommend their organic boxes.`,
    //   rating: 5,
    // },
    // {
    //   name: "Green Living",
    //   location: "Los Angeles, CA",
    //   // image: "/images/pic-img.jpg",
    //   text: `Amazing service! The freshness and variety are unbeatable. My kids even love the veggies now!`,
    //   rating: 5,
    // },
    // {
    //   name: "Healthy Choices",
    //   location: "New York, NY",
    //   // image: "/images/pic-img.jpg",
    //   text: `Fresh, fast, and delicious! TABLEFRESH has changed how I think about meal planning. Highly recommend their organic boxes.`,
    //   rating: 5,
    // },
    // {
    //   name: "Green Living",
    //   location: "Los Angeles, CA",
    //   // image: "/images/pic-img.jpg",
    //   text: `Amazing service! The freshness and variety are unbeatable. My kids even love the veggies now!`,
    //   rating: 5,
    // },
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
              className="shrink-0 rounded-2xl shadow-md border  border-gray-100 hover:shadow-xl transition-all duration-300"
              style={{ width: cardWidth }}
            >
              <CardContent className="p-6 text-left flex flex-col h-full justify-start">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center  gap-3">
                    {t.image && typeof t.image === "string" ? (
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full font-medium text-sm">
                        {t.name?.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <div>
                      <p className="font-semibold text-gray-800">{t.name}</p>
                      {/* <p className="text-sm text-gray-500">{t.location}</p> */}
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
