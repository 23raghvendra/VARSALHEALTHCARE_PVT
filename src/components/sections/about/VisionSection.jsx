import Image from "next/image";
import IndiaImage from "@/Assets/Mission/india-j97a3613-1440x536.jpg";

export default function VisionSection() {
  return (
    <div className="relative min-h-[100vh] bg-cover bg-center flex items-center">
      <Image
        src={IndiaImage}
        alt="India landscape"
        fill
        className="object-cover"
        priority
        quality={85}
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="md:max-w-xl lg:max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8">
            Our Vision
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            At Varsal Healthcare, our vision is to revolutionize healthcare through innovation, accessibility, and patient-centered approaches. We aim to create a healthier global community by providing cutting-edge medical solutions that enhance the quality of life for patients worldwide.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We envision a world where advanced healthcare is accessible to all, where patients receive personalized care, and where medical professionals have the tools they need to provide the best possible treatment. Our commitment to research and development ensures that we remain at the forefront of healthcare innovation.
          </p>
          <p className="text-lg text-gray-700">
            Through strategic partnerships, continuous learning, and a dedication to excellence, we strive to be the global leader in healthcare solutions, setting new standards for the industry and inspiring positive change in healthcare delivery systems around the world.
          </p>
        </div>
      </div>
    </div>
  );
}

