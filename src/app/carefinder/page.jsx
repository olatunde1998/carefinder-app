import React from "react";
import PlaceLocation from "../components/places/place";

const CareFinder = () => {
  return (
    <div className="text-[#1F4D36]">
      <div className="text-red-800 text-center py-10">
        Welcome to CareFinder App
      </div>
      <div className=" max-w-[1400px] mx-auto">
        <PlaceLocation />
      </div>
    </div>
  );
};

export default CareFinder;
