import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import gynoimg from "@/Assets/Product/gyno.jpeg";
import orthoimg from "@/Assets/Product/orthopedic.jpeg";
import surimg from "@/Assets/Product/surgical.jpeg";

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: "Gynecology",
      description: "Comprehensive women's health solutions with advanced diagnostic and therapeutic products.",
      image: gynoimg,
      link: "/products#gynecology"
    },
    {
      id: 2,
      name: "Orthopedic",
      description: "Innovative solutions for bone and joint health, supporting mobility and recovery.",
      image: orthoimg,
      link: "/products#orthopedic"
    },
    {
      id: 3,
      name: "Surgical",
      description: "High-quality surgical products ensuring safety and efficacy in medical procedures.",
      image: surimg,
      link: "/products#surgical"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-varsal-darkblue">
            Our Product Categories
          </h2>
          <div className="w-20 h-1 bg-varsal-lightblue mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Explore our diverse range of pharmaceutical products, each designed to meet 
            specific healthcare needs with the highest quality standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={product.link}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-varsal-lightblue">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    quality={70}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-varsal-darkblue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-varsal-darkblue group-hover:text-varsal-blue transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="inline-flex items-center text-varsal-blue font-medium group-hover:text-varsal-darkblue">
                    Learn More 
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/products">
            <Button size="lg" className="bg-varsal-darkblue hover:bg-varsal-blue text-white font-semibold px-8 py-6 text-lg group">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
