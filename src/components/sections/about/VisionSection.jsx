import Image from "next/image";
import { Target, Globe, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";
import IndiaImage from "@/Assets/Mission/india-j97a3613-1440x536.jpg";

export default function VisionSection() {
  return (
    <div className="relative min-h-[100vh] flex items-center overflow-hidden">
      <Image
        src={IndiaImage}
        alt="India landscape representing our vision"
        fill
        className="object-cover"
        priority
        quality={70}
        sizes="100vw"
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10 py-16 mt-10">
        <div className="max-w-3xl">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
              Our Vision
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-varsal-darkblue mb-6 leading-tight">
            Leading the Future of <span className="text-orange-500">Healthcare Innovation</span>
          </h1>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              We want to emerge as a <strong>leading Indian Pharmaceutical company</strong> meeting global 
              healthcare needs by providing superior research-driven value to our customers through 
              innovation, focus & specialization.
            </p>
            <p>
              We envision a world where advanced healthcare is accessible to all, where patients receive 
              personalized care, and where medical professionals have the tools they need to provide the 
              best possible treatment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <Target className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="font-bold text-varsal-darkblue mb-2">Patient-Centric</h3>
              <p className="text-sm text-gray-600">Delivering personalized healthcare solutions</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <Globe className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="font-bold text-varsal-darkblue mb-2">Global Reach</h3>
              <p className="text-sm text-gray-600">Serving healthcare needs worldwide</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all">
              <Lightbulb className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="font-bold text-varsal-darkblue mb-2">Innovation</h3>
              <p className="text-sm text-gray-600">Research-driven pharmaceutical excellence</p>
            </div>
          </div>
          
          <div className="mt-8">
            <Link 
              href="#values"
              className="inline-flex items-center px-6 py-3 bg-varsal-darkblue text-white font-semibold rounded-lg hover:bg-varsal-blue transition-colors group"
            >
              Explore Our Values
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

