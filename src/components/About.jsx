import React from "react";
import img1 from "../images/animated.png";
import img2 from "../images/code.png";
import img3 from "../images/design.png";
import react from "../images/React-icon.svg.png";

const About = () => {
  return (
    <div className="wrapper bg-[#14061E]">
      <h1 className="text-teal-300 text-3xl font-medium text-center pt-2">
        Skills
      </h1>
      <div className="text-center">
        <div className=" p-10 px-10 md:grid grid-cols-3 gap-3 ">
          <div className="p-5 border rounded-xl shadow-lg mb-10 text-white text-center flex flex-col items-center">
            <img
              src={img2}
              width={100}
              height={100}
              alt=""
              className="mx-auto"
            />
            <h1 className="text-2xl mt-3 ">Web Development</h1>
            <p className="mt-3 text-lg">
              As a proficient web developer, I have extensive experience in
              creating responsive and visually appealing websites. My expertise
              includes HTML, CSS, JavaScript, and various web development
              frameworks to deliver engaging online experiences.
            </p>
          </div>
          <div className="p-5 border rounded-xl shadow-lg mb-10 text-white text-center flex flex-col items-center">
            <img className="" src={img3} width={100} height={100} alt="" />
            <h1 className="text-2xl mt-3">UI/UX Design</h1>
            <h1 className="mt-3 text-lg">
              With a focus on user-centered design, I create intuitive and
              visually appealing user interfaces using Figma. My expertise
              includes collaboration with UI/UX developers to deliver
              exceptional user experiences.
            </h1>
          </div>
          <div className="p-5 border rounded-xl  shadow-lg mb-10 text-white text-center flex flex-col items-center">
            <img className="" src={react} width={100} height={100} alt="" />
            <h1 className="text-2xl mt-6">Frontend Frameworks</h1>
            <h1 className="mt-3 text-lg">
              Proficient in frontend frameworks such as React and Vue.js, I
              develop dynamic and interactive web applications. My skills
              include building responsive and performant interfaces, handling
              state management, and integrating APIs for seamless user
              interactions.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
