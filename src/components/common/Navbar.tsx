"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about-us", label: "About" },
    { href: "/contact-us", label: "Contact Us" },
  ];

  return (
    <nav className="bg-transparent sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-8 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo1.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu Items */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary bg-transparent hover:underline hover:font-semibold transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {open ? <X size={28} /> : <Menu size={28} />}
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-6 mt-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-gray-700 font-medium text-lg hover:text-primary hover:font-semibold transition-all duration-200 py-2"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// export default function Navbar() {
//   return (
//     <nav className="bg-transparent sticky top-0 z-50 backdrop-blur-md">
//       <div className="container mx-auto px-8 flex justify-between items-center py-4">
//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/">
//             <Image
//               src="/images/logo1.png"
//               alt="logo"
//               width={50}
//               height={50}
//               className="cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Menu Items */}
//         <div className="flex space-x-8 text-gray-700 font-medium">
//           <Link
//             href="/"
//             className="hover:text-primary bg-transparent hover:underline hover:font-semibold transition-all duration-200"
//           >
//             Home
//           </Link>
//           <Link
//             href="/services"
//             className="hover:text-primary bg-transparent hover:underline hover:font-semibold transition-all duration-200"
//           >
//             Services
//           </Link>
//           <Link
//             href="/about-us"
//             className="hover:text-primary bg-transparent hover:underline hover:font-semibold transition-all duration-200"
//           >
//             About
//           </Link>
//           <Link
//             href="/contact-us"
//             className="hover:text-primary bg-transparent hover:underline hover:font-semibold transition-all duration-200"
//           >
//             Contact Us
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }
