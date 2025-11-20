'use client'

import Image from "next/image";
import placeholder from "@/Assets/Logo/placeholder.jpg"; 

const founderImage1 = "https://i.postimg.cc/nrbbWfPt/founder2.jpg";
const founderImage2 = "https://i.postimg.cc/VkGy8CVg/foundercopy.png";

export default function FoundersSection() {
  return (
    <section id="shareholders" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-varsal-darkblue mb-6">Meet Our Founders</h2>
          <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div>
          <div className="flex flex-col gap-10 items-center justify-between mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl mx-auto mb-4">
              <div className="relative w-full md:w-[400px] h-[400px] mb-4 md:mb-0 md:mr-6">
                <Image 
                  src={founderImage1}
                  alt="Mr. Sandip Gangopadhyay"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                  quality={85}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className="text-lg text-gray-700 md:flex-1 p-4">
                <span className="font-bold">Mr. Sandip Gangopadhyay </span>
                Mr. Sandip Gangopadhyay is a visionary founder pharmaceutical leader with deep expertise in operations, business development, and global markets. As a founder, he brings strategic vision and a strong focus on innovation, sustainability, and ethical growth.
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl mx-auto mb-4">
              <div className="text-lg text-gray-700 md:flex-1 p-4">
                As the visionary founder,<span className="font-bold"> Mr. Ajay Singh </span> is deeply committed to embracing innovation and driving the organization toward cutting-edge advancements in research and technology. With a focus on developing new therapies and nurturing talent, he fosters a forward-thinking culture that continuously seeks to improve lives through scientific progress and creative solutions.
              </div>
              <div className="relative w-full md:w-[400px] h-[400px] mb-4 md:mb-0 md:ml-6">
                <Image 
                  src={founderImage2}
                  alt="Mr. Ajay Singh"
                  fill
                  className="object-cover shadow-lg rounded-lg"
                  quality={85}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="w-20 h-1 bg-varsal-lightblue mb-8"></div> 
          <div className="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl mx-auto mb-4">
            <div className="relative w-full md:w-[400px] h-[400px] mb-4 md:mb-0 md:mr-6">
              <Image 
                src={placeholder}
                alt="Mrs. Rajni Singh"
                fill
                className="object-cover shadow-lg rounded-lg"
                quality={85}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
            <div className="text-lg text-gray-700 md:flex-1 p-4">
              As the co-founder, <span className="font-bold">Mrs. Rajni Singh </span>  plays a key role in upholding the organization&apos;s ethical and social responsibilities. She ensures adherence to the highest standards while promoting sustainability, corporate citizenship, and global impact. Through a shared dedication to expanding access and leadership, Rajni Singh supports a mission that extends beyond business—to creating a positive, lasting difference worldwide.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

