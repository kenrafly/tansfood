import Image from "next/image";
import React from "react";
import StarRating from "../StarRating/StarRating";

const Reviews = () => {
  return (
    <div className="h-vh bg-[#3a6ecf] flex flex-col items-center justify-center pt-14 px-4">
      <StarRating rating={4} />
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="w-24 md:w-16">
          <Image
            src="/assets/profile.png"
            width={0}
            height={0}
            alt="profile"
            sizes="100vw"
            className="w-full h-auto rounded-full object-cover"
          />
        </div>
        <p className="text-white text-center md:text-left">
          Amazing food, cozy atmosphere, and great service. Will definitely come
          back!
        </p>
      </div>
    </div>
  );
};

export default Reviews;
