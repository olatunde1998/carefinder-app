import React from "react";
import PlaceLocation from "../components/places/place";
import { AltSchoolImage } from "../../../assets/icons/altSchool";
import Image from "next/image";
import Link from "next/link";

const CareFinder = () => {
  return (
    <div className="text-[#1F4D36]  ">
      <div className="bg-[#1F4D36] ">
        <div className="text-gray-200 bg-[#1F4D36] py-3 text-center flex items-center justify-between max-w-[1500px] mx-auto">
          <Link href="/" className="cursor-pointer pl-2 md:pl-5 lg:pl-10">
            <AltSchoolImage className="" color="" width={76} height={83} />
          </Link>
          <h1 className="text-[14px] hidden md:text-[32px] md:block">
            Welcome to CareFinder App
          </h1>
          <div className="mr-4 rounded-full h-[60px] w-[60px] md:mr-5 md:h-[40px] md:w-[40px] lg:h-[60px] lg:w-[60px] lg:mr-10">
            <Image
              className="rounded-full h-[60px] w-[60px] md:h-[40px] md:w-[40px] lg:h-[60px] lg:w-[60px]"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGGT_X83CRh2jFX9iojbv3ByMRcm4TDDAnIA&usqp=CAU"
              alt="Picture of the author"
              width={76}
              height={83}
            />
          </div>
        </div>
      </div>
      <div className=" max-w-[1400px] mx-auto">
        <PlaceLocation />
      </div>
    </div>
  );
};

export default CareFinder;
