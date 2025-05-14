import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <form>
      <div className="flex flex-col items-center justify-center h-screen bg-[#3a6ecf]">
        <div className="bg-[#fad345] p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-4xl text-[#3a6ecf] mb-4">Get in Touch</h1>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 rounded-md border border-black"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 rounded-md border border-black"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-2 rounded-md border border-black"
          ></textarea>
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
      </div>
    </form>
  );
};

export default Form;
