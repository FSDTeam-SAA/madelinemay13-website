import { Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
  return (
    <div className="space-y-20">
      {/* madeline section */}
      <div className="container mx-auto mt-20 py-8 px-4">
        <div className="flex flex-col lg:flex-row lg:items-center ">
          {/* Left Side - Image with blue frame */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            {/* Main image */}
            <div className="relative w-full max-w-[550px] h-[600px] bg-white z-20">
              <Image
                src={
                  "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761440300/MadelineMay_mli3hc.png"
                }
                alt="about"
                fill
                className="object-cover rounded-sm"
              />
            </div>

            {/* Blue frame behind image */}
            <div className="absolute -bottom-6 left-18 w-full max-w-[80%] h-[400px] z-10">
              <Image
                src={
                  "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761440631/aboutbg_ntuc1f.png"
                }
                alt="background frame"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="md:w-1/2 py-8 md:py-12 flex flex-col justify-center">
            <div className=" mx-auto">
              <div className="flex items-center justify-between ">
                <h2
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-3xl font-bold mb-2"
                >
                  Madeline May
                </h2>
                <div className="flex gap-4 mt-6 ">
                  <a
                    href="https://www.facebook.com"
                    className="hover:text-blue-400 text-primary transition-colors"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://x.com"
                    className="hover:text-blue-400 text-primary transition-colors"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="hover:text-blue-400 text-primary transition-colors"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>
              <p className="text-sm text-gray-400 font-semibold mb-6 flex gap-2 items-center">
                <span>PT</span>
                <span>DPT</span>
                <span>CLT</span>
              </p>

              <div className="space-y-4 text-[#6C757D]  leading-relaxed">
                <p>
                  {" "}
                  Madeline is a Montana native and Doctor of Physical Therapy
                  who earned her degree from the University of Montana in 2017.
                  With over a decade of experience in the field, her practice
                  emphasizes manual therapy, exercise prescription, and
                  personalized, evidence-based care.
                </p>
                <p>
                  She has advanced training in oncology rehabilitation and
                  lymphedema management through the Norton School of Lymphatic
                  Therapy, pelvic floor rehabilitation through Herman & Wallace,
                  visceral manipulation through the Barral Institute and
                  orthopedic manual therapy through NAIOMT. Madeline also
                  incorporates dry needling into her treatments to address pain,
                  restore mobility, and enhance overall function.
                </p>
                <p>
                  Outside of the clinic, Madeline and her husband, Todd, enjoy
                  life in the Bitterroot Valley—spending time outdoors, skiing,
                  paddleboarding, and exploring Montana&apos;s beauty. She also
                  enjoys photography, gardening, travel, and reading.
                </p>
              </div>

              {/* <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-[#6C757D] italic">
                  Outside of the clinic, Madeline and her husband, Todd, enjoy
                  life in the Bitterroot Valley—spending time outdoors, sitting,
                  postdisboarding, and exploring Montana&apos;s beauty. She also
                  enjoys photography, gardening, travel, and meeting.
                </p>
              </div> */}

              {/* Social Icons */}
            </div>
          </div>
        </div>
      </div>

      {/* kevin section */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-10">
          {/* LEFT SIDE (TEXT CONTENT) */}
          <div className="w-full lg:w-1/2 p-6 md:p-10 flex flex-col justify-center">
            <div className="max-w-xl mx-auto">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <h2
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-3xl md:text-4xl font-bold mb-2"
                >
                  Kevin Holmes
                </h2>
                {/* Social Icons */}
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com"
                    className="hover:text-blue-400 text-primary transition-colors"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="https://x.com"
                    className="hover:text-blue-400 text-primary transition-colors"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="hover:text-blue-400 text-primary transition-colors"
                  >
                    <Linkedin />
                  </a>
                </div>
              </div>

              <p className="text-sm text-gray-400 font-semibold mb-6 flex gap-2 items-center">
                <span>PT</span>
                <span>DPT</span>
                <span>OCS</span>
              </p>

              <div className="space-y-4 text-[#6C757D] leading-relaxed">
                <p>
                  Kevin earned his Doctorate of Physical Therapy from the
                  University of Montana in 2011 and is a board-certified
                  Orthopedic Clinical Specialist. With extensive experience in
                  general orthopedics, he specializes in both pre- and
                  post-operative rehabilitation, sports injury management, and
                  individualized injury prevention programs.
                </p>
                <p>
                  Trained through the North American Institute of Orthopedic
                  Manual Therapy (NAIOMT), Kevin integrates manual therapy,
                  progressive exercise, and patient education to promote
                  recovery and lasting results. He has a particular interest in
                  working with baseball players and other overhead athletes,
                  focusing on performance optimization, injury prevention, and
                  safe return-to-sport strategies.
                </p>
                <p>
                  Outside of the clinic, Kevin enjoys life in Missoula with his
                  family. He&apos;s an avid mountain biker and outdoor
                  enthusiast who appreciates everything Montana&apos;s
                  mountains, rivers, and snowy trails have to offer.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="relative w-full lg:w-1/2 flex justify-center items-center">
            {/* Main image */}
            <div className="relative w-full max-w-[550px] h-[600px] bg-white z-20">
              <Image
                src="https://res.cloudinary.com/dzzhuumw9/image/upload/v1761440299/kevin_r57n6b.png"
                alt="Kevin Holmes"
                fill
                className="object-cover rounded-sm"
              />
            </div>
            {/* Blue frame */}
            <div className="absolute -bottom-6 left-18 w-full max-w-[80%] h-[400px] z-10 hidden lg:block">
              <Image
                src="https://res.cloudinary.com/dzzhuumw9/image/upload/v1761440474/riley-bg_lbi4kx.png"
                alt="background frame"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* riley section */}
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10">
          {/* Left Side - Image with blue frame */}
          <div className="relative md:w-1/2 flex justify-center items-center">
            {/* Main image */}
            <div className="relative w-full max-w-[550px] h-[600px] bg-white z-20">
              <Image
                src={
                  "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761440300/riley_lgc76e.jpg"
                }
                alt="about"
                fill
                className="object-cover rounded-sm"
              />
            </div>

            {/* Blue frame behind image */}
            <div className="absolute -bottom-6 left-18 w-full max-w-[80%] h-[400px] z-10">
              <Image
                src={
                  "https://res.cloudinary.com/dzzhuumw9/image/upload/v1761440474/riley-bg_lbi4kx.png"
                }
                alt="background frame"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Right Side - Text Content */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className=" mx-auto">
              <div className="flex items-center justify-between ">
                <h2
                  style={{ fontFamily: "var(--font-playfair)" }}
                  className="text-3xl font-bold mb-2"
                >
                  Reilly
                </h2>
                <div className="flex gap-4 mt-6 ">
                  {/* <a hrf="https://www.facebook.com" className="hover:text-blue-400 text-primary transition-colors">
                    <Facebook />
                  </a>
                  <a href="https://x.com" className="hover:text-blue-400 text-primary transition-colors">
                    <Twitter />
                  </a>
                  <a href="https://www.linkedin.com" className="hover:text-blue-400 text-primary transition-colors">
                    <Linkedin />
                  </a> */}
                </div>
              </div>
              <p className="text-lg text-gray-400 font-semibold mb-6 flex gap-2 items-center">
                {/* <span>PT</span>
                <span>DPT</span>
                <span>CAT</span> */}
                Clinic Greeter & Part-Time Therapist
              </p>

              <div className="space-y-4 text-[#6C757D]  leading-relaxed">
                <p>
                  {" "}
                  Reilly is a soft-coated Wheaten Terrier and an important part
                  of the Lolo Physical Therapy team. As a part-time clinic
                  greeter, he takes his job of welcoming patients very
                  seriously—often with a wagging tail and an enthusiastic hello
                </p>
                <p>
                  Known for his friendly personality, Reilly loves meeting
                  everyone who walks through the door and bringing a little
                  extra joy to each visit. While he may let out the occasional
                  bark to announce new arrivals, his warm demeanor and gentle
                  nature quickly win over patients and staff alike.
                </p>

                <p>
                  When he&apos;s not at the clinic, Reilly enjoys long walks,
                  treats, and plenty of belly rubs
                </p>
              </div>

              {/* <div className="mt-6 pt-6 border-t border-gray-700">
                <p className="text-[#6C757D] italic">
                  Outside of the clinic, Madeline and her husband, Todd, enjoy
                  life in the Bitterroot Valley—spending time outdoors, sitting,
                  postdisboarding, and exploring Montana&apos;s beauty. She also
                  enjoys photography, gardening, travel, and meeting.
                </p>
              </div> */}

              {/* Social Icons */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
