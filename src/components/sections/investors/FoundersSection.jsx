'use client'

import Image from "next/image";
import { Award, Lightbulb, Target } from "lucide-react";
import placeholder from "@/Assets/Logo/placeholder.jpg"; 

const founderImage1 = "https://i.postimg.cc/nrbbWfPt/founder2.jpg";
const founderImage2 = "https://i.postimg.cc/VkGy8CVg/foundercopy.png";

export default function FoundersSection() {
  const founders = [
    {
      name: "Mr. Sandip Gangopadhyay",
      image: founderImage1,
      description: "Mr. Sandip Gangopadhyay is a visionary founder pharmaceutical leader with deep expertise in operations, business development, and global markets. As a founder, he brings strategic vision and a strong focus on innovation, sustainability, and ethical growth.",
      icon: Target
    },
    {
      name: "Mr. Ajay Singh",
      image: founderImage2,
      description: "As the visionary founder, Mr. Ajay Singh is deeply committed to embracing innovation and driving the organization toward cutting-edge advancements in research and technology. With a focus on developing new therapies and nurturing talent, he fosters a forward-thinking culture that continuously seeks to improve lives through scientific progress and creative solutions.",
      icon: Lightbulb,
      reverse: true
    },
    {
      name: "Mrs. Rajni Singh",
      image: placeholder,
      description: "As the co-founder, Mrs. Rajni Singh plays a key role in upholding the organization's ethical and social responsibilities. She ensures adherence to the highest standards while promoting sustainability, corporate citizenship, and global impact. Through a shared dedication to expanding access and leadership, Rajni Singh supports a mission that extends beyond business—to creating a positive, lasting difference worldwide.",
      icon: Award
    }
  ];

  return (
    <section id="shareholders" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-varsal-darkblue mb-4">Meet Our Founders</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-varsal-lightblue to-varsal-blue mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our leadership team brings decades of combined experience in pharmaceutical innovation, business strategy, and ethical healthcare delivery.
            </p>
          </div>
          
          <div className="space-y-16">
            {founders.map((founder, index) => {
              const IconComponent = founder.icon;
              return (
                <div 
                  key={index} 
                  className={`flex flex-col ${founder.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-12 bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100`}
                >
                  <div className="relative w-full md:w-[400px] h-[400px] flex-shrink-0 rounded-xl overflow-hidden shadow-xl group">
                    <Image 
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      quality={75}
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-varsal-darkblue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-varsal-lightblue to-varsal-blue">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-varsal-darkblue">
                        {founder.name}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {founder.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Vision Statement */}
          <div className="mt-16 bg-gradient-to-r from-varsal-darkblue via-varsal-blue to-varsal-darkblue p-8 md:p-12 rounded-2xl text-white shadow-xl">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Together, Building the Future of Healthcare</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Our founders' combined vision drives Varsal Healthcare to become a leader in pharmaceutical innovation, ethical business practices, and global healthcare accessibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

