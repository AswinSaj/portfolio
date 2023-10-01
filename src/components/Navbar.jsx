import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  return (
    <div className="py-10   bg-[#040919] px-10">
      <div className="flex justify-between ">
        <div className="flex justify-between ">
          <h1 className="text-white text-2xl font-bold pl-7">Aswin.dev</h1>
        </div>

        <ul className="md:flex md:gap-7 md:items-center  md:z-auto md:static  w-40 md:w-auto md:opacity-100 opacity-0 bg-black text-white top-[-400px] transition-all ease-in duration-500">
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
            <li className=" cursor-pointer border text-white px-4 py-1 rounded-lg hover:bg-[#5EA5C1] hover:text-black ">
              Contact
            </li>
          </Link>
        </ul>
        <span className="text-white md:hidden block cursor-pointer mt-[10px]">
          <GiHamburgerMenu className="" name="menu" onclick="Menu(this)" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
