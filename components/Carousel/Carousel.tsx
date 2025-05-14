"use client";

import React, { useState } from "react";
import Image from "next/image";

const images = [
  "/assets/colase1.jpg",
  "/assets/colase2.jpg",
  "/assets/colase3.jpg",
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-96 md:w-[800px] overflow-hidden rounded-lg">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="min-w-full relative">
            <Image
              src={src}
              alt={`Slide ${index}`}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover"
            />

            {/* Overlay controls & dots inside each image */}
            {index === current && (
              <>
                {/* Left button */}
                <button
                  onClick={prevSlide}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full z-10"
                >
                  ❮
                </button>

                {/* Right button */}
                <button
                  onClick={nextSlide}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full z-10"
                >
                  ❯
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full ${
                        i === current ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
