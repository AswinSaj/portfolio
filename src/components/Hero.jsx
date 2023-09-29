import React from "react";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="wrapper bg-[#14061E]">
      {/* <div className="name text-center p-10  ">
        <h1 className="text-5xl py-2 text-teal-300 ">Aswin Sajan</h1>

        <h1 className="text-xl py-5  leading-8 text-white md:max-w-lg mx-auto">
          I like to craft solid and scalable frontend products with great user
          experiences.
        </h1>
      </div> */}

      <div className="pt-5 px-5 md:flex flex-row-reverse  justify-around">
        <div>
          <h1 className="text-3xl font-medium pt-4 text-teal-300 text-center ">
            About
          </h1>
          <p className="leading-8 pt-2 px-5 text-lg text-white md:max-w-lg mx-auto pb-5 text-center">
            As a Junior Front-End Developer, I bring a diverse skill set to the
            table, including proficiency in HTML, CSS, JavaScript, React,
            Firebase and Tailwind. My strength lies in creating and sustaining
            responsive websites that prioritize user experience. I specialize in
            constructing interactive and captivating user interfaces by
            producing efficient, well-structured code and leveraging the latest
            development tools and methods. My ability to work effectively within
            cross-functional teams adds value by contributing to the creation of
            exceptional web applications.
          </p>
        </div>
        <div className=" md:flex-col md:flex md:items-center md:justify-center ">
          <div className="relative mx-auto rounded-full w-40 h-50 overflow-hidden ">
            <img
              className="w-full h-full object-cover "
              src="https://png.pngtree.com/png-clipart/20221207/ourmid/pngtree-3d-boy-head-portrait-png-image_6514617.png"
              alt=""
            />
          </div>
          <div className="icons px-10 pt-5 flex justify-center gap-16 text-3xl py-3 text-gray-600">
            <AiOutlineTwitter />
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
