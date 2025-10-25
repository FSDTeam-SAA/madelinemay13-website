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
          backgroundImage: "url('/images/footer-bg.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-white/40"></div>

      {/* 🔹 Optional dark overlay for extra contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* 🔹 Content Layer */}
      <div className="relative container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <Link href="/">
            <Image
              src="/images/footerlogo.png"
              alt="Footer Logo"
              width={200}
              height={200}
              className="mb-2  object-center"
            />
          </Link>
          <p className="text-gray-200">
            Connecting families with trusted assisted living facilities
            nationwide.
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

// import {
//   Facebook,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Printer,
//   Twitter,
// } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const Footer = () => {
//   return (
//     <footer
//       className=" object-cover w-full bg-no-repeat  text-white py-12"
//       style={{
//         backgroundImage: "url('/images/footer-bg.jpg')",
//       }}
//     >
//       <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
//         {/* Left Section */}
//         <div>
//           <Link href="/">
//             <Image
//               src="/images/footerlogo.png"
//               alt="Footer Logo"
//               width={120}
//               height={90}
//               className="mb-2 object-center"
//             />
//           </Link>
//           <p className="text-[#343A40]">
//             Connecting families with trusted assisted living facilities
//             nationwide.
//           </p>
//           <div className="flex gap-4 mt-6">
//             <Link href="https://www.facebook.com" aria-label="Facebook">
//               <Facebook className="text-[#1256A9] transition" />
//             </Link>
//             <Link href="https://www.x.com" aria-label="Twitter">
//               <Twitter className="text-[#1256A9] transition" />
//             </Link>
//             <Link href="https://www.linkedin.com" aria-label="LinkedIn">
//               <Linkedin className="text-[#1256A9] transition" />
//             </Link>
//           </div>
//         </div>

//         {/* Middle Section */}
//         <div>
//           <h3 className="text-[#343A40] font-medium mb-4">Quick Links</h3>
//           <ul className="space-y-2 text-[#343A40]">
//             <li className="cursor-pointer">
//               <Link href="/" className=" transition cursor-pointer">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link href="/services" className="transition">
//                 Services
//               </Link>
//             </li>
//             <li>
//               <Link href="/about-us" className=" transition">
//                 About Us
//               </Link>
//             </li>
//             <li>
//               <Link href="/contact-us" className=" transition">
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Right Section */}
//         <div>
//           <h3 className=" font-medium text-[#343A40] mb-4">Contact Us</h3>
//           <ul className="space-y-2 text-[#343A40]">
//             <li className="flex items-center gap-2">
//               <Mail className="text-[#343A40] w-4 h-4" />{" "}
//               info@lolophysicaltherapy.com
//             </li>
//             <li className="flex items-center gap-2">
//               <Printer className="text-[#343A40] w-4 h-4" /> 406-273-9088
//             </li>
//             <li className="flex items-center gap-2">
//               <Phone className="text-[#343A40] w-4 h-4" /> 406-273-3730
//             </li>
//             <li>
//               <p className="flex items-center gap-2">
//                 <MapPin className="text-[#343A40] w-4 h-4" /> 106 Tyler Way,
//                 Lolo, MT 59847
//               </p>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="mt-12 border-t border-gray-700 pt-6 text-center text-[#343A40] text-sm">
//         © 2025 LOLO Physical Therapy. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;
