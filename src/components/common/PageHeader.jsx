'use client'

import React from "react";
import Image from "next/image";

const PageHeader = ({ title, subtitle, bgImage, style }) => {
  return (
    <div className="relative py-20 px-4">
      {bgImage && (
        <Image
          src={bgImage}
          alt={title}
          fill
          className="object-cover"
          quality={85}
          priority
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto relative z-10 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;

