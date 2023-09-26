import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="left p-5   bg-[#040919] px-10">
      {/* <div><h1>Developed by Aswin</h1></div> */}
      <div className="right flex justify-end ">
        <ul className="flex gap-10 items-center text-white">
          <li>About</li>
          <li>Portfolio</li>
          <li>Projects</li>
          <li>Skills</li>
          {/* <li>
            <BsMoonStarsFill className="cursor-pointer text-2xl" />
          </li> */}
          <li className=" cursor-pointer border text-white px-4 py-1 rounded-lg hover:bg-white hover:text-black ">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
