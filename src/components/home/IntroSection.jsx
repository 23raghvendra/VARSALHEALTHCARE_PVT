import { ArrowRight, Eye, Lightbulb, Heart } from "lucide-react";
import Link from "next/link";

const IntroSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-varsal-darkblue">
            Empowering Healthcare Through Excellence
          </h2>
          <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            With a commitment to innovation and quality, Varsal Healthcare provides 
            cutting-edge pharmaceutical solutions that improve patient outcomes 
            and enhance quality of life across diverse medical specialties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Link 
            href="/about#vision"
            className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-gray-200 hover:border-varsal-lightblue hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-varsal-lightblue/10 flex items-center justify-center rounded-full mb-6 group-hover:bg-varsal-lightblue transition-colors">
              <Eye className="w-8 h-8 text-varsal-darkblue group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-varsal-darkblue group-hover:text-varsal-blue transition-colors">
              Our Vision
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Emerging as a leading pharmaceutical company meeting global healthcare needs through innovation and specialization.
            </p>
            <div className="inline-flex items-center text-varsal-blue font-medium group-hover:text-varsal-darkblue">
              Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            href="/products"
            className="group bg-gradient-to-br from-indigo-50 to-white p-8 rounded-xl border border-gray-200 hover:border-varsal-lightblue hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-varsal-lightblue/10 flex items-center justify-center rounded-full mb-6 group-hover:bg-varsal-lightblue transition-colors">
              <Lightbulb className="w-8 h-8 text-varsal-darkblue group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-varsal-darkblue group-hover:text-varsal-blue transition-colors">
              Our Innovation
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Comprehensive pharmaceutical solutions designed with cutting-edge technology for diverse medical needs.
            </p>
            <div className="inline-flex items-center text-varsal-blue font-medium group-hover:text-varsal-darkblue">
              View Products <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link 
            href="/about#values"
            className="group bg-gradient-to-br from-cyan-50 to-white p-8 rounded-xl border border-gray-200 hover:border-varsal-lightblue hover:shadow-xl transition-all duration-300"
          >
            <div className="w-16 h-16 bg-varsal-lightblue/10 flex items-center justify-center rounded-full mb-6 group-hover:bg-varsal-lightblue transition-colors">
              <Heart className="w-8 h-8 text-varsal-darkblue group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-varsal-darkblue group-hover:text-varsal-blue transition-colors">
              Our Values
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Integrity, innovation, compassion, and excellence guide our approach to pharmaceutical care.
            </p>
            <div className="inline-flex items-center text-varsal-blue font-medium group-hover:text-varsal-darkblue">
              Discover More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

