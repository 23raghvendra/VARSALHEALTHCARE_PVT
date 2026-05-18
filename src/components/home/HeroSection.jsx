import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import HomepicImage from "@/Assets/Homepic/doc.png";

const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden" style={{ minHeight: "calc(100dvh - 4rem)" }}>
      <Image
        src={HomepicImage}
        alt="Healthcare professionals providing quality medical care"
        fill
        className="object-cover"
        priority
        quality={75}
        sizes="100vw"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-varsal-darkblue/90 via-varsal-darkblue/70 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            Innovative Healthcare for a{" "}
            <span className="text-varsal-lightblue bg-clip-text">Better Tomorrow</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl animate-slide-up animation-delay-200">
            Enhancing quality of life through breakthrough medical solutions, research-driven innovations, and compassionate patient-centered care.
          </p>

 
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;

