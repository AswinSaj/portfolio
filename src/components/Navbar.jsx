import React from "react";
import { BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="left p-10 mb-12 flex justify-between bg-slate-200 px-10">
      <div>
        <h1>Developed by Aswin</h1>
      </div>
      <div className="right ">
        <ul className="flex gap-4 items-center">
          {/* <li>About</li>
          <li>Portfolio</li>
          <li>Projects</li>
          <li>Skills</li> */}
          <li>
            <BsMoonStarsFill className="cursor-pointer text-2xl" />
          </li>
          <li className=" cursor-pointer bg-gradient-to-r from-cyan-500  to-cyan-600 text-white px-4 py-2 rounded-md ">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
