import React from "react";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="wrapper bg-[#14061E]">
      <div className="name text-center p-10  ">
        <h1 className="text-5xl py-2 text-teal-300 ">Aswin Sajan</h1>
        {/* <h1 className="text-2xl py-2">Frontend Developer</h1> */}
        <h1 className="text-xl py-5  leading-8 text-white">
          I like to craft solid and scalable frontend products with great user
          experiences.
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
