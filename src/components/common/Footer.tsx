import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full text-white py-12 overflow-hidden">
      {/* 🔹 Background Layer (blurred & darkened) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm brightness-50"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dzzhuumw9/image/upload/v1761441168/footer-bg_nfgah7.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-white/40"></div>

      {/* 🔹 Optional dark overlay for extra contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 Content Layer */}
      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <Link href="/" className="w-24 h-20">
            <Image
              src="/images/footerlogo.png"
              alt="Footer Logo"
              width={90}
              height={80}
              className="mb-2 w-24 h-20  object-cover"
            />
          </Link>
          <p className="text-gray-200">
            Our goal is to treat the whole person, not just an isolated injury.
            We offer personalized, one-on-one treatments to promote each
            patient&apos;s long-term health and to ensure wellness and activity
            goals are met.
          </p>
          <div className="flex gap-4 mt-6">
            <Link href="https://www.facebook.com" aria-label="Facebook">
              <Facebook className="text-[#1256A9] transition hover:scale-110" />
            </Link>
            <Link href="https://www.x.com" aria-label="Twitter">
              <Twitter className="text-[#1256A9] transition hover:scale-110" />
            </Link>
            <Link href="https://www.linkedin.com" aria-label="LinkedIn">
              <Linkedin className="text-[#1256A9] transition hover:scale-110" />
            </Link>
          </div>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li>
              <Link
                href="/"
                className="hover:text-white hover:underline transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-white hover:underline transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about-us"
                className="hover:text-white hover:underline transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="hover:text-white hover:underline transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-200">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-300" />{" "}
              <a
                href="mailto:info@lolophysicaltherapy.com"
                className="hover:underline sm:text-xs md:text-sm"
              >
                info@lolophysicaltherapy.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Printer className="w-4 h-4 text-gray-300" /> 406-273-9088
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-300" /> 406-273-3730
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gray-300" />
              <span>Lolo Physical Therapy 106 Tyler Way Lolo, MT 59847</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative mt-12 border-t border-gray-600 pt-6 text-center text-gray-300 text-sm">
        © 2025 LOLO Physical Therapy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
