import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-transparent ">
      <div className="container mx-auto px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo1.png"
              alt="logo"
              width={150}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex space-x-8 text-gray-700 font-medium">
          <Link
            href="/"
            className="hover:text-white hover:underline hover:font-semibold transition-all duration-200"
          >
            Home
          </Link>
          <Link
            href="/service"
            className="hover:text-white hover:underlined hover:font-semibold transition-all duration-200"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="hover:text-white hover:underlined hover:font-semibold transition-all duration-200"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-white hover:underlined hover:font-semibold transition-all duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
