// components/contact-information-with-map.tsx
import { MapPin, Phone, Mail, Printer } from "lucide-react";

export default function ContactInformationWithMap() {
  return (
    <div className="container mx-auto p-4 my-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg-[48px]">
        {/* Left Side - Google Map */}
        <div className="bg-muted rounded-lg overflow-hidden h-96 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.177614857628!2d-74.00594908459418!3d40.71274977933085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316e12bcd9%3A0x5f0e8b7a8f0f8b0!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

        {/* Right Side - Contact Information */}
        <div className="">
          {/* Header */}

          {/* Contact Information Section */}
          <div className="">
            <h2 className="text-xl lg:text-[32px] leading-[128%]  mb-2 font-bold text-gray-900">
              Contact Information
            </h2>
            <p className="text-[#6C757D] leading-relaxed mb-10 ">
              Find all the ways to reach us, including email, phone, and our
              office address, so you can get the support and answers you need
              quickly and easily.
            </p>

            {/* Contact Details */}
            <div className="">
              {/* Email */}
              <div className="flex items-start space-x-3  gap-1.5 rounded-lg my-6 transition-colors">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                info@luburbwalorthemogy.com
              </div>

              {/* Phone 1 */}
              <div className="flex items-start space-x-3  gap-1.5 rounded-lg my-6 transition-colors">
                <Phone className="w-5 h-5 text-[#1256A9] mt-0.5" />
                409-273-5096
              </div>

              {/* Phone 2 */}
              <div className="flex items-start space-x-3  gap-1.5 rounded-lg my-6 transition-colors">
                <Printer className="w-5 h-5 text-[#1256A9] mt-0.5" />
                409-273-3730
              </div>

              {/* Address */}
              <div className="flex items-start  gap-1.5 rounded-lg my-6 ">
                <MapPin className="w-5 h-5 text-[#1256A9] mt-0.5" />
                <span className="text-gray-700">
                  Labo Physical Therapy, 198 Tyler Way Lab., MT 69947
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
