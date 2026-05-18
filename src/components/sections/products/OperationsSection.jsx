import { Beaker, FlaskConical, Shield, Globe2, Building2, Users } from "lucide-react";

export default function OperationsSection() {
  const operations = [
    {
      icon: FlaskConical,
      title: "Research & Development",
      description: "Our R&D centers house multidisciplinary teams working on next-generation healthcare technologies. We invest heavily in innovation to stay at the cutting edge of medical advancements.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Building2,
      title: "Manufacturing",
      description: "Our manufacturing facilities adhere to the highest industry standards, ensuring that every product is made with precision, reliability, and safety in mind.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "We maintain rigorous quality control processes throughout our operations, meeting and exceeding international regulatory requirements.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Globe2,
      title: "Global Distribution",
      description: "Our efficient distribution network ensures that our healthcare solutions reach medical facilities and patients worldwide in a timely manner.",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <section id="operations" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-varsal-darkblue mb-4">Our Operations</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-varsal-lightblue to-varsal-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Varsal Healthcare operates state-of-the-art facilities across multiple countries, bringing together talented professionals from diverse backgrounds to create innovative healthcare solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {operations.map((op, index) => {
              const IconComponent = op.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-varsal-lightblue hover:-translate-y-1"
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${op.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-varsal-darkblue mb-4 group-hover:text-varsal-blue transition-colors">
                    {op.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {op.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          <div className="bg-gradient-to-r from-varsal-darkblue to-varsal-blue p-8 md:p-10 rounded-2xl text-white shadow-xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-white/20 p-3 rounded-lg">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Integrated Excellence</h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  By integrating these operational aspects, we maintain a streamlined process from concept to delivery, ensuring that our healthcare solutions make a meaningful impact on healthcare providers and patients alike.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

