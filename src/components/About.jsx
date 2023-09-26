import React from "react";
import img1 from "../images/animated.png";

const About = () => {
  return (
    <div className="wrapper bg-[#14061E]">
      <div className="text-center">
        <h1 className="text-3xl font-medium pt-4 text-teal-300">About</h1>
        <p className="leading-8 pt-2 px-5 text-xl text-white">
          Skilled in JS, HTML, CSS and React ⚛ . I took a break from my IT job
          💻, exploring various techs like AI, and Blockchain. Passionate in
          Frontend development 👨‍💻
        </p>
        <div className="text-center p-10 ">
          <div className="p-5  border rounded-md shadow-lg mb-10 text-white">
            <img src={img1} alt="" />
            <h1 className="text-xl">Web Development</h1>
            <h1>
              As a proficient web developer, I have extensive experience in
              creating responsive and visually appealing websites. My expertise
              includes HTML, CSS, JavaScript, and various web development
              frameworks to deliver engaging online experiences.
            </h1>
          </div>
          <div className="p-5 border rounded-md shadow-lg mb-10 text-white">
            <h1 className="text-xl">UI/UX Design</h1>
            <h1>
              With a focus on user-centered design, I create intuitive and
              visually appealing user interfaces using Figma. My expertise
              includes collaboration with UI/UX developers to deliver
              exceptional user experiences.
            </h1>
          </div>
          <div className="p-5 border rounded-md shadow-lg mb-10 text-white ">
            <img src="" alt="" />
            <h1 className="text-xl">Frontend Frameworks</h1>
            <h1>
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
