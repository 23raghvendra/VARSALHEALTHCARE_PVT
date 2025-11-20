'use client'

import { useState } from "react";
import Image from "next/image";
import { products } from "@/constants/productsData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function ProductsList() {
  const [openDialogProductId, setOpenDialogProductId] = useState(null);

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <p className="text-lg text-gray-700">
            At Varsal Healthcare, we develop and manufacture a wide range of innovative healthcare products designed to meet the evolving needs of patients and healthcare professionals. Our solutions combine cutting-edge technology with user-friendly designs to improve healthcare outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden relative">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  fill
                  className="object-cover"
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-varsal-blue font-medium">{product.category}</span>
                <h3 className="text-lg sm:text-xl font-bold text-varsal-darkblue my-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <h4 className="font-semibold text-gray-800 mb-2">Key Benefits:</h4>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  {product.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                
                <Dialog 
                  open={openDialogProductId === product.id} 
                  onOpenChange={(open) => {
                    setOpenDialogProductId(open ? product.id : null);
                  }}
                >
                  <DialogTrigger asChild>
                    <button
                      className="mt-2 px-3 sm:px-4 py-2 bg-varsal-darkblue text-white rounded hover:bg-varsal-blue transition-colors duration-300 w-full sm:w-auto flex items-center justify-center gap-2 group"
                    >
                      Learn More
                      <span className="inline-block transform transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="w-[95vw] sm:max-w-[425px] md:max-w-[600px] transition-all duration-300">
                    <DialogHeader>
                      <DialogTitle className="text-xl font-bold text-varsal-darkblue">{product.name} - Medicines</DialogTitle>
                      <DialogDescription className="text-sm text-gray-600 pt-2">
                        Available products in our {product.name} category
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-3 sm:mt-4">
                      <ul className="list-disc pl-5 text-gray-600 space-y-3">
                        {product.medicines.map((med, index) => (
                          <li key={index}>
                            <a
                              href={med.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-varsal-blue hover:text-varsal-darkblue transition-colors duration-200 hover:underline flex items-center gap-2"
                            >
                              {med.name}
                              <span className="text-sm opacity-75">→</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

