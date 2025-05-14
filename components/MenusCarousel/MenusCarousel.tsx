"use client";
import Image from "next/image";
import React, { useState } from "react";

const MenuCarousel = () => {
  const [current, setCurrent] = useState(0);

  const burgers = [
    {
      title: "FANCY",
      image: "/assets/food1.jpg",
      label: "/images/fancy-label.png",
      ingredients:
        "POTATO BUN, SMASHED SWISS BEEF PATTY, SALAD LEAVES, TOMATOES, ONION SLICE, CHEDDAR CHEESE, SECRET SAUCE.",
      prices: ["SINGLE CHF 12", "DOUBLE CHF 16", "TRIPLE CHF 20"],
    },
    {
      title: "OKLAHOMA",
      image: "/assets/food2.jpg",
      label: "/images/oklahoma-label.png",
      ingredients:
        "POTATO BUN, THINLY SLICED ONIONS SMASHED INTO SWISS BEEF PATTY, CHEDDAR CHEESE, MAYONNAISE.",
      prices: ["SINGLE CHF 11", "DOUBLE CHF 15", "TRIPLE CHF 19"],
    },
    {
      title: "VEGGIE",
      image: "/assets/food3.jpg",
      label: "/images/vegan-label.png",
      ingredients:
        "POTATO BUN, SMASHED VEGAN PATTY, CHEDDAR CHEESE, SALAD LEAVES, TOMATO, ONION SLICE, SECRET SAUCE.",
      prices: ["ONE SIZE CHF 16"],
    },
  ];

  const prev = () =>
    setCurrent((prev) => (prev - 1 + burgers.length) % burgers.length);
  const next = () => setCurrent((prev) => (prev + 1) % burgers.length);

  const getBurger = (offset: number) => {
    const index = (current + offset + burgers.length) % burgers.length;
    return burgers[index];
  };

  const displayed = [getBurger(-1), getBurger(0), getBurger(1)];

  return (
    <div className="w-full bg-[#3a6ecf] text-white py-20 relative overflow-hidden">
      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-10"
      >
        <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white text-xl hover:bg-white hover:text-[#3a6ecf]">
          &larr;
        </div>
      </button>

      {/* Desktop / Tablet: 3 Cards */}
      <div className="hidden md:flex justify-center items-center gap-6 transition-transform duration-700 ease-in-out">
        {displayed.map((burger, index) => {
          const isCenter = index === 1;
          return (
            <div
              key={index}
              className={`w-72 transition-all duration-500 transform ${
                isCenter ? "scale-110" : "scale-95 opacity-70"
              } flex flex-col items-center text-center`}
            >
              <div className="relative">
                <Image
                  src={burger.image}
                  alt={burger.title}
                  width={300}
                  height={300}
                  className="w-72 h-60 object-contain"
                />
              </div>
              <h2 className="text-xl font-extrabold mt-4">{burger.title}</h2>
              <p className="text-sm mt-2">
                <span className="font-bold">INGREDIENTS:</span>{" "}
                {burger.ingredients}
              </p>
              <div className="mt-2 font-bold text-[#fad345]">
                {burger.prices.map((p, idx) => (
                  <div key={idx}>{p}</div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: 1 Card */}
      <div className="block md:hidden px-6 transition-all duration-700 ease-in-out">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <Image
              src={burgers[current].image}
              alt={burgers[current].title}
              width={288}
              height={240}
              className="w-72 h-60 object-contain"
            />
          </div>
          <h2 className="text-xl font-extrabold mt-4">
            {burgers[current].title}
          </h2>
          <p className="text-sm mt-2">
            <span className="font-bold">INGREDIENTS:</span>{" "}
            {burgers[current].ingredients}
          </p>
          <div className="mt-2 font-bold text-[#fad345]">
            {burgers[current].prices.map((p, idx) => (
              <div key={idx}>{p}</div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-10"
      >
        <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center text-white text-xl hover:bg-white hover:text-[#3a6ecf]">
          &rarr;
        </div>
      </button>
    </div>
  );
};

export default MenuCarousel;
