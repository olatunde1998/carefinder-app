"use client";
// import React, { useState } from "react";
// import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";
// import RasheedLogo from "../assets/rasheed_logo.png";

// import { Link } from "react-scroll";
// import Resume from "../assets/ rasheed_olatunde_cv.pdf";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px]  flex justify-between items-center px-4 bg-[#1F4D36] text-gray-300 md:hidden">
      <div>
        <Image
          src="/images/Altschool-logo.png"
          width={100}
          height={100}
          alt="altSchool logo"
        />
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
        {/* {!nav ? <FaBars /> : <FaTimes />} */}
        {!nav ? <p>Open</p> : <p>Close</p>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen  bg-[#1F4D36] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} href="home">
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} href="about">
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} href="skills">
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} href="work">
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
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
