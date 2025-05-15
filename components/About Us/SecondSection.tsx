"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { GiPlantRoots, GiNightVision } from "react-icons/gi";

// Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 100 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const iconPop = {
  hidden: { scale: 0.5, opacity: 0, rotate: -90 },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};

const SecondSection = () => {
  return (
    <motion.div
      className="h-full bg-[#3a6ecf] p-10 md:p-20 flex flex-col md:flex-row justify-between items-center gap-10"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={container}
    >
      {/* Left Side */}
      <motion.div className="md:w-1/2" variants={fadeLeft}>
        <h1 className="text-4xl text-[#fad345] font-bold mb-4">
          Discover Our Journey: From Humble Beginnings to Culinary Excellence
        </h1>
        <p className="text-lg text-white mb-6">
          Founded in 2005, our restaurant has been a beloved local gem. Our
          mission is to provide delicious, high-quality meals made from fresh,
          locally sourced ingredients.
        </p>

        <div className="flex flex-col md:flex-row gap-6 text-white">
          {/* Our Roots */}
          <motion.div className="flex flex-col" variants={iconPop}>
            <GiPlantRoots className="text-4xl text-[#fad345]" />
            <h2 className="font-bold mt-2">Our Roots</h2>
            <p className="text-sm">
              We started with a passion for food and a commitment to our
              community.
            </p>
          </motion.div>

          {/* Our Vision */}
          <motion.div className="flex flex-col" variants={iconPop}>
            <GiNightVision className="text-4xl text-[#fad345]" />
            <h2 className="font-bold mt-2">Our Vision</h2>
            <p className="text-sm">
              To create memorable dining experiences that bring people together
              over great food.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div className="rounded-lg overflow-hidden" variants={fadeRight}>
        <Image
          src="/assets/about2.jpg"
          alt="about2"
          width={400}
          height={400}
          className="rounded-lg object-cover w-full h-auto"
        />
      </motion.div>
    </motion.div>
  );
};

export default SecondSection;
