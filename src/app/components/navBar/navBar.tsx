"use client";
// import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import RasheedLogo from "../assets/rasheed_logo.png";

// import { Link } from "react-scroll";
// import Resume from "../assets/ rasheed_olatunde_cv.pdf";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AltSchoolImage } from "../../../../assets/icons/altSchool";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px]  flex justify-between items-center px-4 bg-[#1F4D36] text-gray-300 md:hidden">
      <div>
        <AltSchoolImage className="" color="" width={76} height={83} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link href="home">Home</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="skills">Skills</Link>
        </li>
        <li>
          <Link href="work">Work</Link>
        </li>
        <li>
          <Link href="contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={28} /> : <FaTimes size={28} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute z-100 top-0 left-0 w-full h-screen bg-[#1F4D36] flex flex-col pt-24 items-center"
        }
      >
        <li className="p-2 text-2xl">
          <Link onClick={handleClick} href="home">
            Home
          </Link>
        </li>
        <li className="p-2 text-2xl">
          {" "}
          <Link onClick={handleClick} href="about">
            About
          </Link>
        </li>
        <li className="p-2 text-2xl">
          {" "}
          <Link onClick={handleClick} href="skills">
            Skills
          </Link>
        </li>
        <li className="p-2 text-2xl">
          {" "}
          <Link onClick={handleClick} href="work">
            Work
          </Link>
        </li>
        <li className="p-2 text-2xl">
          {" "}
          <Link
            onClick={handleClick}
            href="contact"
            // smooth={true}
            // duration={1000}
          >
            Contact
          </Link>
        </li>
        {/* <div className=" mt-4"> */}
        <Link href="/login">
          <button className="px-8 py-2 cursor-pointer transition duration-700 ease-in-out mt-4 bg-[#1F4D36] text-[20px] text-white rounded-lg  hover:bg-white hover:text-[#1F4D36] hover:border-[#1F4D36] border-[.01rem]">
            Log in
          </button>
        </Link>
      </ul>

      {/* Social icons */}
      {/* <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/olatunde-rasheed-44b356218"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.github.com/olatunde1998"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://olatunde336@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href={Resume}
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
