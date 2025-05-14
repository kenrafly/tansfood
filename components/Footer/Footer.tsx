import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3a6ecf] p-8 border-t-2 border-[#fad345] w-screen">
      <div className="flex flex-col md:flex-row justify-between items-center max-[#fad345] bg-[#fad345] p-4 rounded-lg shadow-lg">
        <div className="">
          <Image src={"/logo.png"} width={80} height={80} alt="logo" />
          <h1 className="text-black">Stay Connected with Us</h1>
          <p className="text-black">
            Join us for delicious meals and unforgettable experiences. We look
            forward to serving you soon!
          </p>
          <Link
            href="/reservation"
            className="relative inline-block text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black hover:scale-110 ">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-yellow-300 group-hover:-rotate-180 ease"></span>
              <span className="relative">Learn More</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
        </div>
        <div>
          <div className="flex flex-row md:flex-col gap-4 mt-4 md:mt-0">
            <Link href="/">Contact Us</Link>
            <Link href="/">Link One</Link>
            <Link href="/">About Us</Link>
            <Link href="/">Menu items</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
