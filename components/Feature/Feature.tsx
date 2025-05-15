"use client";
import React from "react";
import Carousel from "../Carousel/Carousel";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <section className="h-vw bg-[#3a6ecf] flex flex-col items-center lg:flex-row">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="dislay-flex flex-col mt-6 px-10 md:px-28"
      >
        <h1 className="text-5xl md:text-6xl text-[#fad345] font-extrabold mb-4">
          Experience Our Fresh, Modern Look and Delicious Culinary Offerings
        </h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Our newly updated branding reflects our commitment to quality and
          innovation. Discover a dining experience that combines style with
          exceptional flavors.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl text-[#fad345]">Fresh Design</h2>
            <p className="md:text-lg  text-white">
              A modern aesthetic that invites you to enjoy every moment with us.
            </p>
          </div>
          <div className="flex flex-col ">
            <h2 className="font-bold text-2xl text-[#fad345]">
              Culinary Excellence
            </h2>
            <p className="md:text-lg  text-white">
              Savor our diverse menu crafted with fresh ingredients and
              innovative techniques.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        animate={{}}
        className="flex justify-center items-center w-96 pr-8 "
      >
        <Carousel />
      </motion.div>
    </section>
  );
};

export default Feature;
