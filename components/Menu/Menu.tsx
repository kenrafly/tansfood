import React from "react";

const Menu = () => {
  return (
    <div className="pt-40 px-20 flex flex-col ">
      <div className="w-full gap-10">
        {/* Heading column */}
        <div className="flex gap-2">
          <h1 className=" text-5xl md:text-6xl font-extrabold text-[#fad345] leading-tight">
            Experience Our Fresh,
          </h1>
          <p className="text-lg md:text-xl hidden md:block pt-10 text-white">
            Our newly updated branding reflects our commitment to quality and
            innovation. Discover a dining experience that combines style with
            exceptional flavors.
          </p>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#fad345] leading-tight ">
          Modern Look, and Delicious Culinary Offerings.
        </h1>
        <p className="text-lg md:text-xl md:hidden pt- text-white">
          Our newly updated branding reflects our commitment to quality and
          innovation. Discover a dining experience that combines style with
          exceptional flavors.
        </p>
      </div>
    </div>
  );
};

export default Menu;
