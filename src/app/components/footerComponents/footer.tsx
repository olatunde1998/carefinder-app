import { RiFacebookCircleFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
// import { AltSchoolImage } from "../../../../assets/icons/altSchool";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#1F4D36] px-6  text-white py-10  md:px-10  max-w-[1400px] mx-auto">
      <section className="mb-2 md:flex justify-between pb-10 md:mb-20">
        <div className="">
          {/* logo */}
          <div className=" w-[100px] h-[100px]  md:mx-10">
            <Image
              src="/images/altschool_africa_1.png"
              width={70}
              height={70}
              alt="Ondo State brand logo"
              className="w-auto h-auto"
            />
          </div>

          {/* <AltSchoolImage className=" " color="red" width={86} height={93} /> */}
        </div>
        <div className="text-[20px]  md:flex md:justify-between  md:w-2/3 lg:w-1/2">
          <div>
            <p className="font-bold mb-4"> Quick Links</p>
            <ul className="cursor-pointer">
              <li>Home </li>
              <li>Pricing </li>
              <li>Testimonials </li>
              <li>Blogs </li>
              <li>Community </li>
            </ul>
          </div>
          <div className="my-10 md:my-0">
            <p className="font-bold mb-4"> The Academy</p>
            <ul className="cursor-pointer">
              <li>Courses </li>
              <li>Career Paths </li>
              <li>Quiz </li>
              <li>Free Resources</li>
              <li>Pricing </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 text-[20px]"> The Academy</p>
            <ul className="cursor-pointer">
              <li>Courses </li>
              <li>Career Paths </li>
              <li>Quiz </li>
              <li>Free Resources</li>
              <li>Pricing </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <div className="cursor-pointer lg:flex justify-between items-center border-t-[.23px] border-white pt-8">
          <div className="flex">
            <span className="w-[40px] h-[40px] rounded-full border-2 border-white flex items-center justify-center  md:w-[40px] md:h-[40px]">
              <BsGithub size={20} />
            </span>
            <span className="w-[40px] h-[40px]  rounded-full border-2 border-white flex items-center justify-center mx-2">
              <FaTwitter size={20} />
            </span>
            <span className="w-[40px] h-[40px]  rounded-full border-2 border-white flex items-center justify-center">
              <FaLinkedinIn size={20} />
            </span>
            <span className="w-[40px] h-[40px]  rounded-full border-2 border-white flex items-center justify-center mx-2">
              <RiFacebookCircleFill size={20} />
            </span>
            <span className="w-[40px] h-[40px]  rounded-full border-2 border-white flex items-center justify-center ">
              <BsInstagram size={20} />
            </span>
            <span className="w-[40px] h-[40px]  rounded-full border-2 border-white flex items-center justify-center mx-2">
              <BsYoutube size={20} />
            </span>
          </div>
          <div className="mt-6 lg:flex gap-2">
            <div className="flex gap-4">
              <p>Privacy</p>
              <p>Terms</p>
              <p>Cookies</p>
            </div>
            <p className="font-bold mt-4 lg:ml-8 lg:mt-0">
              Copyright © 2023, AltSchool Africa Inc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
