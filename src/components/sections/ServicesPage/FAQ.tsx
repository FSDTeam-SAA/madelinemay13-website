"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FAQ() {
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "You can easily change your plan anytime from your account settings. Just choose the plan that suits your needs.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription at any time without additional charges. Billing stops immediately after cancellation.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can include custom details or notes on invoices for your records or accounting purposes.",
    },
    {
      question: "How does billing work?",
      answer:
        "Billing is handled on a monthly basis, and you can view your invoices anytime in your account.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Simply go to account settings → profile → change email, and follow the verification step.",
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
