import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HomeAboutUs() {
  return (
    <section className="relative py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Blue Content Card */}
          <div className="relative z-10 bg-[#3d5a80] text-white p-12 lg:p-16 rounded-lg shadow-2xl max-w-2xl lg:max-w-4xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 rounded-lg overflow-hidden">
              <Image
                src="/images/bg.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Large Background Text */}
            <div className="absolute top-8 left-8 text-[120px] lg:text-[160px] font-bold opacity-5 leading-none pointer-events-none">
              About Us
            </div>

            <div className="relative z-10">
              {/* Heading */}
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white/80">
                About Us
              </h2>

              {/* Subheading */}
              <h3 className="text-2xl lg:text-3xl font-serif mb-6 text-balance">
                A Holistic Path to Healing
              </h3>

              {/* Body Text */}
              <div className="space-y-4 text-sm lg:text-base leading-relaxed mb-8 w-full lg:w-5/6 text-white/90">
                <p>
                  At Halo Physical Therapy, we believe true healing goes beyond
                  addressing a single injury—it&apos;s about restoring harmony
                  throughout the entire body. Our philosophy centers on treating
                  the whole person by understanding the root cause of discomfort
                  and creating a path toward complete physical and emotional
                  well-being. Every patient receives individualized attention
                  through evidence-based methods, compassionate care, and
                  hands-on techniques designed to promote recovery and build
                  lasting strength.
                </p>
                <p>
                  We take the time to listen, assess, and craft personalized
                  treatment plans that align with your goals—whether it&apos;s
                  returning to your favorite activities, regaining confidence in
                  movement, or maintaining an active, pain-free lifestyle. By
                  combining manual therapy, movement retraining, and patient
                  education, we help you prevent future setbacks and empower you
                  to take charge of your long-term wellness.
                </p>
              </div>

              {/* Button */}
              <Link href="/contact-us">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-[#3d5a80] cursor-pointer hover:bg-white/90 font-semibold px-8"
                >
                  Contact Us
                </Button>
              </Link>

              {/* Signature */}
              <div className="mt-12 ml-96">
                <Image
                  src="/images/Madeline.png"
                  alt="Madeline signature"
                  width={200}
                  height={60}
                  className="opacity-40"
                />
              </div>
            </div>
          </div>

          {/* Professional Photo - Overlapping */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 z-20 w-full max-w-md lg:max-w-lg">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/MadelineMay.png"
                alt="Madeline May - Physical Therapist"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
