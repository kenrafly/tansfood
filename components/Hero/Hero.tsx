"use client";
import { Share_Tech } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const knewave = Share_Tech({
  weight: "400",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <section
      className={`${knewave.className} h-screen bg-[url('/assets/hero.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center mt-6`}
    >
      <div className="px-8">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-8xl text-[#fad345] font-extrabold mb-4"
        >
          Welcome to Your New Favorite Dining Experience
        </motion.h1>
        <p className="text-lg md:text-xl text-white mb-8">
          Discover a culinary journey that delights your senses. Join us for an
          unforgettable meal in a warm and inviting atmosphere.
        </p>
        <Link href="#_" className="relative inline-block text-lg group">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black hover:scale-110 ">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-300 group-hover:-rotate-180 ease"></span>
            <span className="relative">Order Now</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
