import { Shield, FlaskConical, HeartPulse, ClipboardCheck, Users2, Leaf } from "lucide-react";
import Image from "next/image";

const FeaturesSection = () => {
  const features = [
    {
      icon: FlaskConical,
      title: "Research & Innovation",
      description: "State-of-the-art research facilities developing breakthrough pharmaceutical solutions for modern healthcare challenges."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001 certified manufacturing processes ensuring the highest standards of safety and efficacy in every product."
    },
    {
      icon: HeartPulse,
      title: "Patient-Centric Care",
      description: "Healthcare solutions designed with patient well-being at the forefront, improving quality of life and outcomes."
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory Compliance",
      description: "Strict adherence to national and international pharmaceutical regulations and quality control standards."
    },
    {
      icon: Users2,
      title: "Expert Team",
      description: "Experienced healthcare professionals, researchers, and pharmacists dedicated to excellence in pharmaceutical care."
    },
    {
      icon: Leaf,
      title: "Sustainable Practices",
      description: "Environmentally responsible manufacturing processes that prioritize sustainability and ecological balance."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-varsal-darkblue">
            Why Choose Varsal Healthcare?
          </h2>
          <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We combine cutting-edge research, stringent quality controls, and compassionate care 
            to deliver pharmaceutical solutions that make a real difference in people's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-varsal-lightblue"
              >
                <div className="w-16 h-16 bg-varsal-light rounded-lg flex items-center justify-center mb-6 group-hover:bg-varsal-lightblue transition-colors">
                  <Icon className="w-8 h-8 text-varsal-darkblue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-varsal-darkblue group-hover:text-varsal-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
