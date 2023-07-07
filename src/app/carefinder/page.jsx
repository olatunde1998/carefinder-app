import React from "react";
import PlaceLocation from "../components/places/place";

const CareFinder = () => {
  return (
    <div className="text-[#1F4D36] ">
      <h1 className="text-gray-200 bg-[#1F4D36] text-center py-10 text-[32px]">
        Welcome to CareFinder App
      </h1>
      <div className=" max-w-[1400px] mx-auto">
        <PlaceLocation />
      </div>
    </div>
  );
};

export default CareFinder;
