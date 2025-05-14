import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center bg-[#3a6ecf] shadow-md px-2 md:px-10 py-2 md:py-1 backdrop-blur-3xl">
      <Link href="/reservation">
        <Image
          src="/logo.png"
          width={80}
          height={80}
          alt="logo picture"
        ></Image>
      </Link>
      <IoMenu className="text-3xl block md:hidden text-white" />
      <div className="hidden md:flex items-center gap-4">
        <ul className="flex gap-4 text-white">
          <li className="hover:text-[#fad345] hover:scale-110 hover:font-bold  duration-300">
            <Link href="/about">about</Link>
          </li>
          <li className="hover:text-[#fad345] hover:scale-110 hover:font-bold  duration-300">
            <Link href="/menu">menu</Link>
          </li>
          <li className="hover:text-[#fad345] hover:scale-110 hover:font-bold  duration-300">
            <Link href="#reservation">reservation</Link>
          </li>
        </ul>
        <Link
          href="/"
          className="bg-[#ffbe0b] border-2 border-amber-300 text-white px-4 py-2 rounded-md hover:text-white hover:scale-110 duration-300"
        >
          order now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
