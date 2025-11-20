'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Building, Users } from "lucide-react";
import lappyImage from "@/Assets/Contactus/lappy.jpg";

export default function PartnerSection() {
  return (
    <section
      id="partner"
      className="py-16 bg-cover bg-center text-white relative"
    >
      <Image
        src={lappyImage}
        alt="Partner with us"
        fill
        className="object-cover"
        quality={75}
        loading="lazy"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-lg mb-10">
            At Varsal Healthcare, we believe in the power of collaboration. We&apos;re always looking for strategic partnerships that can help us enhance our offerings and reach more patients worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-12">
            <div className="bg-white/80 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-varsal-light p-3 rounded-full mr-4">
                  <Building className="h-6 w-6 text-varsal-darkblue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-2">Business Partnerships</h3>
                  <p className="text-gray-600">
                    Interested in distribution, co-development, or strategic alliances? We&apos;re open to exploring mutually beneficial business relationships.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/80 p-6 rounded-lg">
              <div className="flex items-start">
                <div className="bg-varsal-light p-3 rounded-full mr-4">
                  <Users className="h-6 w-6 text-varsal-darkblue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-varsal-darkblue mb-2">Research Collaborations</h3>
                  <p className="text-gray-600">
                    We partner with academic institutions, research organizations, and healthcare providers to advance medical innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Button
            className="bg-varsal-darkblue hover:bg-varsal-blue px-8 py-6 text-lg"
            onClick={() => {
              document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Discuss Partnership Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}

