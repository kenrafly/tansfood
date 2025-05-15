"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 90, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 100, scale: 0.8, rotate: -5 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 1,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const Menu = () => {
  const heading1 = "Experience Our Fresh,";
  const heading2 = "Modern Look, and Delicious Culinary Offerings.";

  return (
    <motion.div
      className="pt-40 px-6 md:px-20 flex flex-col"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={container}
    >
      <div className="w-full flex flex-col gap-10">
        {/* Heading line 1 with per-letter animation */}
        <motion.div className="flex flex-wrap gap-2 text-5xl md:text-6xl font-extrabold text-[#fad345] leading-tight">
          {[...heading1].map((char, index) => (
            <motion.span key={index} variants={wordVariants}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>

        {/* Description text line 1 (Desktop) */}
        <motion.p
          className="text-lg md:text-xl hidden md:block pt-4 text-white max-w-3xl"
          variants={fadeInUp}
        >
          Our newly updated branding reflects our commitment to quality and
          innovation. Discover a dining experience that combines style with
          exceptional flavors.
        </motion.p>

        {/* Heading line 2 */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold text-[#fad345] leading-tight"
          variants={fadeInUp}
        >
          {heading2}
        </motion.h2>

        {/* Description text line 2 (Mobile) */}
        <motion.p
          className="text-lg md:text-xl md:hidden pt-2 text-white"
          variants={fadeInUp}
        >
          Our newly updated branding reflects our commitment to quality and
          innovation. Discover a dining experience that combines style with
          exceptional flavors.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Menu;
