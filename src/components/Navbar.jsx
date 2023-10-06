import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="md:py-5 md:px-10 py-5  bg-[#040919] sticky z-10 top-0 bg-opacity-90 px-0">
      <div className="flex justify-between">
        <div>
          <h1 className="text-white text-2xl md:text-3xl font-bold pl-7 hover:animate-wiggle">
            Aswin.dev
          </h1>
        </div>

        <ul className="md:flex md:gap-7 md:items-center md:w-auto  flex items-center gap-3 text-sm md:text-base  text-white">
          <Link to="#about">
            <li className="hover:text-[#5EA5C1]">About</li>
          </Link>
          <Link to="#skills">
            <li className="hover:text-[#5EA5C1]">Skills</li>
          </Link>
          <Link to="#portfolio">
            <li className="hover:text-[#5EA5C1]">Portfolio</li>
          </Link>
          <Link to="#contact">
            <li className="cursor-pointer border text-white md:px-4 md:py-1 px-1 py-0 rounded-lg hover:bg-[#5EA5C1] hover:text-black">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
