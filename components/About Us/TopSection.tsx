import React from "react";

const TopSection = () => {
  return (
    <div className="h-full bg-[#3a6ecf] text-white bg-[url(/assets/about1.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col py-24 px-10">
        <p className="text-4xl">Welcome</p>
        <h1 className="text-7xl font-bold">Discover Our Story</h1>
        <p className="text-lg max-w-2xl">
          Join us for a culinary journey that celebrates fresh ingredients and
          unforgettable flavors.
        </p>
      </div>
    </div>
  );
};

export default TopSection;
