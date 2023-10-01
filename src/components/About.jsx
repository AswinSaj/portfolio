import React from "react";
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import pic from "../images/pic.jpg";

const About = () => {
  return (
    <div className="wrapper bg-[#14061E] pt-10 pb-20" id="about">
      <div className="pt-5 px-5 md:flex justify-around md:pb-10 ">
        <div className="">
          <h1 className="text-3xl pb-5 font-medium pt-4 text-teal-300 text-center ">
            About
          </h1>
          <div className=" md:flex items-center justify-around">
            <div>
              <div className="relative mx-auto rounded-full w-40 h-50 overflow-hidden ">
                <img
                  className="w-full h-full object-cover scale-125 "
                  src={pic}
                  alt=""
                />
              </div>
              <div className="icons px-10 pt-5 flex justify-center gap-16 text-3xl py-3 text-gray-600">
                <a
                  href="https://twitter.com/immensitysquare"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter className="hover:text-[#1DA1F2]" />
                </a>
                <a
                  href="https://github.com/AswinSaj"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub className="hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/aswin-sajan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillLinkedin className="hover:text-[#0077b5]" />
                </a>
              </div>
            </div>
            <p className="leading-8 pt-2 px-5 text-lg text-white md:max-w-lg mx-auto pb-5 text-center">
              As a Junior Front-End Developer, I bring a diverse skill set to
              the table, including proficiency in HTML, CSS, JavaScript, React,
              Firebase and Tailwind. My strength lies in creating and sustaining
              responsive websites that prioritize user experience. I specialize
              in constructing interactive and captivating user interfaces by
              producing efficient, well-structured code and leveraging the
              latest development tools and methods. My ability to work
              effectively within cross-functional teams adds value by
              contributing to the creation of exceptional web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
