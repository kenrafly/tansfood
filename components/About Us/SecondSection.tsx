import Image from "next/image";
import React from "react";
import { GiPlantRoots } from "react-icons/gi";
import { GiNightVision } from "react-icons/gi";

const SecondSection = () => {
  return (
    <div className="h-full bg-[#3a6ecf] p-20 flex flex-col md:flex-row justify-between ">
      <div className="w-1/2">
        <h1 className="text-4xl text-[#fad345] font-bold  mb-4">
          Discover Our Journey: From Humble Beginnings to Culinary Excellence
        </h1>
        <p className="text-lg text-white mb-4">
          Founded in 2005, our restaurant has been a beloved local gem. Our
          mission is to provide delicious, high-quality meals made from fresh,
          locally sourced ingredients.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mb-4 text-white">
          <div className="flex flex-col">
            <GiPlantRoots className="text-4xl font-bold text-[#fad345] " />
            <h1 className="font-bold">Our Roots</h1>
            <p>
              We started with a passion for food and a commitment to our
              community.
            </p>
          </div>
          <div>
            <GiNightVision className="text-4xl font-bold text-[#fad345] " />
            <h1 className="font-bold">Our Vision</h1>
            <p>
              To create memorable dining experiences that bring people together
              over great food.
            </p>
          </div>
        </div>
      </div>
      <div className="rounded-lg overflow-hidden self-center">
        <Image src="/assets/about2.jpg" alt="about2" width={300} height={300} />
      </div>
    </div>
  );
};

export default SecondSection;
