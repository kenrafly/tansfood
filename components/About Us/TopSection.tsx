"use client";

import React from "react";
import { motion } from "framer-motion";

// Container variant for staggering
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Each word in heading
const wordVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    rotateX: 90,
    skewY: 10,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    skewY: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
    },
  },
};

// Welcome and paragraph animation
const zoomFade = {
  hidden: { opacity: 0, scale: 0.9, y: 60 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
  },
};

const TopSection = () => {
  const heading = "Discover Our Story";

  return (
    <div className="h-screen bg-[#3a6ecf] bg-[url('/assets/about1.jpg')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col py-32 px-10 md:px-20 h-full justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={container}
      >
        {/* Glowing Welcome */}
        <motion.p
          className="text-4xl md:text-5xl text-white font-semibold drop-shadow-[0_0_10px_#fad345]"
          variants={zoomFade}
        >
          Welcome
        </motion.p>

        {/* Wild Animated Heading */}
        <motion.h1 className="text-6xl md:text-8xl font-bold text-[#fad345] flex flex-wrap gap-3 pt-2 leading-tight">
          {heading.split(" ").map((word, i) => (
            <motion.span key={i} variants={wordVariant}>
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-lg md:text-xl mt-6 max-w-2xl text-white"
          variants={zoomFade}
        >
          Join us for a culinary journey that celebrates fresh ingredients and
          unforgettable flavors.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default TopSection;
