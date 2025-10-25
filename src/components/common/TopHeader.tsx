import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  X,
} from "lucide-react";
import Link from "next/link";

export default function TopHeader() {
  return (
    <div>
      <section className="bg-primary relative w-full font-poppins">
        <div className="container mx-auto">
          {/* <button className="absolute md:right-2 md:top-4 right-4 top-5 sm:right-2 sm:top-5 text-white flex items-center hover:text-red-500 transition">
            <X className="cursor-pointer hover:text-white" size={20} />
          </button> */}

          <div className="flex flex-col md:flex-row justify-between items-center py-2 md:py-4 gap-2 md:gap-0 text-sm md:text-base">
            {/* Left Section */}
            <div className="message flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left gap-2 sm:gap-6 px-2">
              <div className="flex items-center text-white gap-2 sm:gap-3">
                <Phone className="text-white w-4 h-4 sm:w-4 sm:h-4" />
                <a
                  href="tel:4092735096"
                  className="text-[10px] sm:text-xs md:text-sm  transition-colors"
                >
                  409-273-5096
                </a>
              </div>
              <div className="flex items-center text-white gap-2 sm:gap-3 sm:text-xs md:text-sm">
                <Mail className="text-white w-4 h-4 sm:w-4 sm:h-4" />
                <a
                  href="mailto:info@lolophysicaltherapy.com"
                  className="hover:underline sm:text-xs md:text-sm"
                >
                  info@lolophysicaltherapy.com
                </a>
              </div>
              {/* <div className="flex items-center text-white gap-2 sm:gap-3 sm:text-xs md:text-sm">
                <MapPin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[10px] sm:text-xs md:text-sm">
                  vgbhnjmklkjhbnjm
                </p>
              </div> */}
            </div>

            {/* Right Section */}
            <div className="phone-number flex flex-row items-center gap-3 sm:gap-4 mt-2 md:mt-0 text-[10px] sm:text-xs md:text-sm">
              {/* <p className="text-white">Follow Us:</p> */}
              <div className="flex gap-2 text-white sm:gap-3 sm:text-xs md:text-sm">
                <Link href="https://www.facebook.com" target="_blank">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
                </Link>
                <Link href="https://www.x.com" target="_blank">
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
