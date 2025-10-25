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
      image: "/images/pic-img.jpg",
      text: `I’ve been ordering from TABLEFRESH for over a year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.`,
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
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Responsive setup
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerSlide(1);
      else if (window.innerWidth < 1024) setItemsPerSlide(2);
      else setItemsPerSlide(3);
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
    <section className="w-full max-w-7xl mx-auto py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-2">
        What Our Customers Say
      </h2>
      <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
        Real stories from customers who love TABLEFRESH’s organic produce and
        fast delivery service.
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
              className="shrink-0 w-full sm:w-[48%] lg:w-[31.5%] rounded-2xl shadow-md border border-gray-100"
            >
              <CardContent className="p-6 text-left flex flex-col h-full justify-between">
                {/* Top Section */}
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
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Text */}
                <p className="text-gray-600 italic text-sm leading-relaxed">
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
          className="rounded-full w-10 h-10 hover:bg-gray-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        <div className="flex gap-2">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                idx === currentIndex ? "bg-gray-900" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

        <Button
          onClick={handleNext}
          size="icon"
          variant="ghost"
          className="rounded-full w-10 h-10 hover:bg-gray-100"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}

// "use client";

// import React, { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import Image from "next/image";

// export default function Review() {
//   const testimonials = [
//     {
//       name: "Connect Directly",
//       location: "Portland, OR",
//       image: "/images/pic-img.jpg",
//       text: `I’ve been ordering from TABLEFRESH for over a year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.`,
//       rating: 4,
//     },
//     {
//       name: "Healthy Choices",
//       location: "New York, NY",
//       image: "/images/pic-img.jpg",
//       text: `Fresh, fast, and delicious! TABLEFRESH has changed how I think about meal planning. Highly recommend their organic boxes.`,
//       rating: 5,
//     },
//     {
//       name: "Green Living",
//       location: "Los Angeles, CA",
//       image: "/images/pic-img.jpg",
//       text: `Amazing service! The freshness and variety are unbeatable. My kids even love the veggies now!`,
//       rating: 5,
//     },
//     {
//       name: "Daily Fresh",
//       location: "Austin, TX",
//       image: "/images/pic-img.jpg",
//       text: `TABLEFRESH always delivers on time with perfect packaging. Organic and trustworthy — exactly what we needed.`,
//       rating: 4,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerSlide, setItemsPerSlide] = useState(3);

//   // Responsive setup: 1 / 2 / 3
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setItemsPerSlide(1);
//       else if (window.innerWidth < 1024) setItemsPerSlide(2);
//       else setItemsPerSlide(3);
//       // reset index if out-of-range after resize
//       setCurrentIndex((prev) => {
//         const totalSlidesNow = Math.ceil(testimonials.length / (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3));
//         return Math.min(prev, Math.max(0, totalSlidesNow - 1));
//       });
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [testimonials.length]);

//   const totalSlides = Math.max(1, Math.ceil(testimonials.length / itemsPerSlide));

//   // clamp helpers
//   const handleNext = () =>
//     setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
//   const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

//   // compute slide shift percent based on totalSlides (each group = 100%)
//   const slideShiftPercent = (100 / totalSlides) * currentIndex;

//   return (
//     <section className="w-full max-w-7xl mx-auto py-16 px-4 text-center">
//       <h2 className="text-3xl font-semibold text-gray-900 mb-2">
//         What Our Customers Say
//       </h2>
//       <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
//         Real stories from customers who love TABLEFRESH’s organic produce and
//         fast delivery service.
//       </p>

//       {/* Slider Container */}
//       <div className="relative overflow-hidden">
//         <motion.div
//           className="flex gap-6"
//           animate={{ x: `-${slideShiftPercent}%` }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           style={{
//             width: `${(testimonials.length / itemsPerSlide) * 100}%`,
//           }}
//         >
//           {testimonials.map((t, i) => (
//             <Card
//               key={i}
//               className="
//                 shrink-0
//                 w-full                /* mobile: full width (1 card) */
//                 sm:w-[48%]            /* tablet: ~2 per row */
//                 lg:w-[31.5%]          /* desktop: ~3 per row */
//                 rounded-2xl shadow-md border border-gray-100
//               "
//             >
//               {/* Smaller padding & text on mobile so full card fits on small screens */}
//               <CardContent className="p-4 sm:p-6 text-left flex flex-col h-full justify-between">
//                 {/* Top Section */}
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="flex items-center gap-3">
//                     <Image
//                       src={t.image}
//                       alt={t.name}
//                       width={44}
//                       height={44}
//                       className="rounded-full object-cover"
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-800 text-sm sm:text-base">
//                         {t.name}
//                       </p>
//                       <p className="text-xs sm:text-sm text-gray-500">{t.location}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, idx) => (
//                       <Star
//                         key={idx}
//                         size={16}
//                         className={`${
//                           idx < t.rating
//                             ? "text-yellow-400 fill-yellow-400"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Text */}
//                 <p className="text-gray-600 italic text-sm sm:text-sm leading-relaxed">
//                   {t.text}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </motion.div>
//       </div>

//       {/* Navigation */}
//       <div className="flex items-center justify-center gap-4 mt-8">
//         <Button
//           onClick={handlePrev}
//           size="icon"
//           variant="ghost"
//           className="rounded-full w-10 h-10 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
//           disabled={currentIndex === 0}
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </Button>

//         <div className="flex gap-2">
//           {[...Array(totalSlides)].map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-2.5 h-2.5 rounded-full transition-all ${
//                 idx === currentIndex ? "bg-gray-900" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>

//         <Button
//           onClick={handleNext}
//           size="icon"
//           variant="ghost"
//           className="rounded-full w-10 h-10 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
//           disabled={currentIndex === totalSlides - 1}
//         >
//           <ChevronRight className="w-5 h-5" />
//         </Button>
//       </div>
//     </section>
//   );
// }

// "use client";

// import React, { useState, useEffect } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight, Star } from "lucide-react";
// import Image from "next/image";

// export default function Review() {
//   const testimonials = [
//     {
//       name: "Connect Directly",
//       location: "Portland, OR",
//       image: "/images/pic-img.jpg",
//       text: `I've been ordering from TABLEFRESH for over a year now, and the quality of their organic produce is consistently excellent. The convenience of having fresh, organic food delivered to my door has made healthy eating so much easier for my family.`,
//       rating: 4,
//     },
//     {
//       name: "Healthy Choices",
//       location: "New York, NY",
//       image: "/images/pic-img.jpg",
//       text: `Fresh, fast, and delicious! TABLEFRESH has changed how I think about meal planning. Highly recommend their organic boxes.`,
//       rating: 5,
//     },
//     {
//       name: "Green Living",
//       location: "Los Angeles, CA",
//       image: "/images/pic-img.jpg",
//       text: `Amazing service! The freshness and variety are unbeatable. My kids even love the veggies now!`,
//       rating: 5,
//     },
//     {
//       name: "Daily Fresh",
//       location: "Austin, TX",
//       image: "/images/pic-img.jpg",
//       text: `TABLEFRESH always delivers on time with perfect packaging. Organic and trustworthy — exactly what we needed.`,
//       rating: 4,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerSlide, setItemsPerSlide] = useState(3);

//   // Responsive setup: 1 / 2 / 3
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) setItemsPerSlide(1);
//       else if (window.innerWidth < 1024) setItemsPerSlide(2);
//       else setItemsPerSlide(3);
//       // reset index if out-of-range after resize
//       setCurrentIndex((prev) => {
//         const totalSlidesNow = Math.ceil(testimonials.length / (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3));
//         return Math.min(prev, Math.max(0, totalSlidesNow - 1));
//       });
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [testimonials.length]);

//   const totalSlides = Math.max(1, Math.ceil(testimonials.length / itemsPerSlide));

//   // clamp helpers
//   const handleNext = () =>
//     setCurrentIndex((prev) => Math.min(prev + 1, totalSlides - 1));
//   const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

//   // compute slide shift percent based on totalSlides (each group = 100%)
//   const slideShiftPercent = (100 / totalSlides) * currentIndex;

//   return (
//     <section className="w-full max-w-7xl mx-auto py-16 px-4 text-center">
//       <h2 className="text-3xl font-semibold text-gray-900 mb-2">
//         What Our Customers Say
//       </h2>
//       <p className="text-gray-500 mb-10 max-w-2xl mx-auto">
//         Real stories from customers who love TABLEFRESH's organic produce and
//         fast delivery service.
//       </p>

//       {/* Slider Container */}
//       <div className="relative overflow-hidden">
//         <motion.div
//           className="flex gap-6"
//           animate={{ x: `-${slideShiftPercent}%` }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//           style={{
//             width: `${(testimonials.length / itemsPerSlide) * 100}%`,
//           }}
//         >
//           {testimonials.map((t, i) => (
//             <Card
//               key={i}
//               className="
//                 shrink-0
//                 w-[85%]               /* mobile: 85% width for better sizing */
//                 sm:w-[48%]            /* tablet: ~2 per row */
//                 lg:w-[31.5%]          /* desktop: ~3 per row */
//                 rounded-2xl shadow-md border border-gray-100
//                 mx-auto               /* center the card on mobile */
//               "
//             >
//               {/* Adjusted padding for mobile */}
//               <CardContent className="p-5 sm:p-6 text-left flex flex-col h-full justify-between">
//                 {/* Top Section */}
//                 <div className="flex items-center justify-between mb-3">
//                   <div className="flex items-center gap-3">
//                     <Image
//                       src={t.image}
//                       alt={t.name}
//                       width={44}
//                       height={44}
//                       className="rounded-full object-cover"
//                     />
//                     <div>
//                       <p className="font-semibold text-gray-800 text-sm sm:text-base">
//                         {t.name}
//                       </p>
//                       <p className="text-xs sm:text-sm text-gray-500">{t.location}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-1">
//                     {[...Array(5)].map((_, idx) => (
//                       <Star
//                         key={idx}
//                         size={16}
//                         className={`${
//                           idx < t.rating
//                             ? "text-yellow-400 fill-yellow-400"
//                             : "text-gray-300"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* Text */}
//                 <p className="text-gray-600 italic text-sm sm:text-sm leading-relaxed">
//                   {t.text}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </motion.div>
//       </div>

//       {/* Navigation */}
//       <div className="flex items-center justify-center gap-4 mt-8">
//         <Button
//           onClick={handlePrev}
//           size="icon"
//           variant="ghost"
//           className="rounded-full w-10 h-10 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
//           disabled={currentIndex === 0}
//         >
//           <ChevronLeft className="w-5 h-5" />
//         </Button>

//         <div className="flex gap-2">
//           {[...Array(totalSlides)].map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx)}
//               className={`w-2.5 h-2.5 rounded-full transition-all ${
//                 idx === currentIndex ? "bg-gray-900" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>

//         <Button
//           onClick={handleNext}
//           size="icon"
//           variant="ghost"
//           className="rounded-full w-10 h-10 hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed"
//           disabled={currentIndex === totalSlides - 1}
//         >
//           <ChevronRight className="w-5 h-5" />
//         </Button>
//       </div>
//     </section>
//   );
// }
