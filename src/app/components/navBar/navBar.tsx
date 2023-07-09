"use client";
import { FaBars, FaTimes } from "react-icons/fa";
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
      <div onClick={handleClick} className="md:hidden z-10" data-testid="hamburger-icon">
        {!nav ? <FaBars size={28} /> : <FaTimes size={28} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute z-100 top-0 left-0 w-full h-screen bg-[#1F4D36] flex flex-col pt-24 items-center"
        }
        data-testid="mobile-menu"
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
    </div>
  );
};

export default Navbar;
