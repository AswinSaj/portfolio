import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div className="py-10   bg-[#040919] px-10">
      <div className="flex justify-between ">
        <div className="flex justify-between ">
          <h1 className="text-white text-2xl font-bold pl-7">Aswin.dev</h1>
          <span>
            <GiHamburgerMenu className="text-white md:hidden block cursor-pointer" />
          </span>
        </div>

        <ul className="md:flex md:gap-7   md:items-center md:static w-40 md:w-auto md:opacity-100 opacity-100 bg-black text-white ">
          <li className="hover:text-[#5EA5C1]">About</li>
          <li className="hover:text-[#5EA5C1]">Skills</li>
          <li className="hover:text-[#5EA5C1]">Portfolio</li>

          <li className=" cursor-pointer border text-white px-4 py-1 rounded-lg hover:bg-[#5EA5C1] hover:text-black ">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
