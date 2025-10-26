"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FAQ() {
  const faqData = [
    {
      question: "Do I need a doctor’s referral to start physical therapy?",
      answer:
        "No! In Montana, you have Direct Access to physical therapy, which means you can see a physical therapist without a doctor’s referral. However, some insurance plans may still require a referral for coverage, so it’s always a good idea to check with your insurance provider or call our office for assistance.",
    },
    {
      question: "What should I expect at my first appointment?",
      answer:
        "Your first visit includes a thorough evaluation by a licensed physical therapist, discussion of your medical history, and a personalized treatment plan tailored to your goals. You’ll also receive education and, in most cases, start treatment the same day.",
    },
    {
      question: "What should I wear to my appointments?",
      answer:
        "Wear comfortable, loose-fitting clothing that allows easy movement. Athletic wear or clothes that let your therapist access the area being treated (such as shorts for a knee injury) are best.",
    },
    {
      question: "How long are physical therapy sessions?",
      answer:
        "Most sessions last about 45–60 minutes, depending on your specific treatment plan and progress.",
    },
    {
      question: "How often will I need to come in for therapy?",
      answer:
        "Frequency depends on your condition and goals. Many patients attend 2–3 times per week initially, with frequency tapering as you improve.",
    },
    {
      question: "Do you accept my insurance?",
      answer:
        "We work with most major insurance providers and will verify your benefits before your first visit. We will do our best to help explain your coverage, co-pays, and any out-of-pocket costs to mitigate any surprises. Be sure to contact your insurance company for understanding of your coverage.",
    },
    {
      question: "What if I don’t have insurance?",
      answer:
        "We offer self-pay options and flexible payment plans for patients without insurance. Our goal is to make high-quality care accessible to everyone.",
    },
    {
      question: "Can physical therapy help if I’ve already had surgery?",
      answer:
        "Absolutely. Post-surgical rehabilitation is one of the most common reasons patients see us. We’ll help you safely restore strength, mobility, and confidence in your movement.",
    },
    {
      question: "What conditions do you treat?",
      answer:
        "We treat a wide range of orthopedic and musculoskeletal issues including back and neck pain, joint injuries, post-surgical recovery, sports injuries, balance problems, and chronic pain conditions.",
    },
    {
      question: "How do I schedule an appointment?",
      answer:
        "You can schedule by calling our office, send us an email, or have your physician send us a referral and we will follow up with you as soon as we can. If you don’t hear from us, please call to get on our schedule!",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2
            style={{ fontFamily: "var(--font-playfair)" }}
            className="text-3xl md:text-4xl font-bold text-[#343a40] mb-3"
          >
            Frequently asked questions
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
            Everything you need to know about the product and billing.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="bg-white border rounded-xl shadow-sm max-w-5xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`px-6 py-5 cursor-pointer transition-all duration-200 ${
                index !== faqData.length - 1 ? "border-b border-gray-200" : ""
              }`}
              onClick={() => toggleFaq(index)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-base md:text-lg font-medium text-[#343a40]">
                  {faq.question}
                </h3>

                <span className="flex items-center justify-center w-6 h-6 border border-gray-300 rounded-full text-primary transition-all duration-300">
                  {activeIndex === index ? (
                    <Minus className="w-3.5 h-3.5" />
                  ) : (
                    <Plus className="w-3.5 h-3.5" />
                  )}
                </span>
              </div>

              {activeIndex === index && (
                <p className="mt-3 text-[#68706A] leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CONTACT SECTION */}
        <div className="bg-[#F8F9FA] rounded-xl mt-16 p-8 md:p-10 text-center max-w-5xl mx-auto">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/Avatar group.png"
              alt="Support Team"
              width={90}
              height={90}
            />
          </div>
          <h2
            className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Still have questions?
          </h2>
          <p className="text-gray-500 mb-6 text-sm md:text-base max-w-lg mx-auto">
            Can&apos;t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <Link href="/contact-us">
            <button
              type="button"
              className="bg-primary text-white px-6 py-3 rounded-md cursor-pointer font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Get In Touch
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
