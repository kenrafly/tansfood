import Menu from "@/components/Menu/Menu";
import MenuGrid from "@/components/MenuGrid/MenuGrid";
import MenuCarousel from "@/components/MenusCarousel/MenusCarousel";
import React from "react";

const page = () => {
  return (
    <div className="w-screen min-h-screen bg-[#3a6ecf]">
      <Menu />
      <MenuCarousel />
    </div>
  );
};

export default page;
