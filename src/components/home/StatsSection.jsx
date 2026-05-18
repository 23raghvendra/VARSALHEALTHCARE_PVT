import { Award, Users, Microscope, Package } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Package,
      number: "15+",
      label: "Product Categories",
      description: "Comprehensive healthcare solutions"
    },
    {
      icon: Users,
      number: "500+",
      label: "Healthcare Partners",
      description: "Trusted by medical professionals"
    },
    {
      icon: Microscope,
      number: "100%",
      label: "Quality Assured",
      description: "Rigorous testing standards"
    },
    {
      icon: Award,
      number: "ISO 9001",
      label: "Certified",
      description: "International quality certification"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-varsal-darkblue to-varsal-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-10 h-10 text-varsal-lightblue" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-varsal-lightblue mb-1">{stat.label}</div>
                <div className="text-sm text-white/80">{stat.description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
