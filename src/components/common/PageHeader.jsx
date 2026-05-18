'use client'

import React from "react";
import Image from "next/image";

const PageHeader = ({ title, subtitle, bgImage, style }) => {
  return (
    <div className="relative flex min-h-screen items-center px-4 overflow-hidden">
      {bgImage && (
        <>
          <Image
            src={bgImage}
            alt={title}
            fill
            className="object-cover"
            quality={70}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-varsal-darkblue/90 via-varsal-darkblue/70 to-varsal-darkblue/50" />
        </>
      )}
      {!bgImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-varsal-darkblue via-varsal-blue to-varsal-darkblue" />
      )}
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full translate-y-1/2 -translate-x-1/2"></div>
      </div>
      
      <div className="container mx-auto relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-200">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

