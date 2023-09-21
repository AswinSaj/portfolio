import React from "react";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="wrapper mt-0">
      <div className="name text-center p-10">
        <h1 className="text-5xl py-2 text-teal-300">Aswin Sajan</h1>
        <h1 className="text-2xl py-2">Frontend Developer</h1>
        <h1 className="text-md py-5 text-gray-800 leading-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tenetur
          ex eius mollitia, dolores ullam rem architecto libero corporis sint?
        </h1>
      </div>
      <div className="icons px-10 flex justify-center gap-16 text-3xl py-3 text-gray-600">
        <AiOutlineTwitter />
        <AiFillGithub />
        <AiFillLinkedin />
      </div>
      <div className="pt-5">
        <div className="relative mx-auto rounded-full w-40 h-50 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-3d-boy-head-portrait-png-image_6514617.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
