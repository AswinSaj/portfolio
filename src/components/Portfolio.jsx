import React from "react";
import Linkedin from "../images/Linkedin.png";
import Movie from "../images/Movie.png";
import Shoe from "../images/Shoe.png";
import Weather from "../images/Weather.png";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";

const Portfolio = () => {
  return (
    <div className="bg-[#14061E]">
      <h1 className="text-center text-3xl font-medium text-white">Portfolio</h1>
      <div className="grid grid-cols-1 text-center px-5 pt-5 gap-5">
        <div className=" border rounded-md shadow-lg overflow-hidden hover:scale-105 transition duration-500  bg-[#F3F2EF] pb-2">
          <img src={Linkedin} alt="" className="object-fit " />
          <div className=" flex justify-around">
            <div>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-1 px-[15vw] border rounded-lg text-black  ">
                  <AiFillGithub />
                </button>
              </a>
            </div>
            <div>
              <button className=" p-1 px-[15vw] border rounded-lg text-black">
                <TbWorldWww />
              </button>
            </div>
          </div>
        </div>
        <div className=" border rounded-md shadow-lg overflow-hidden hover:scale-105 transition duration-500 ">
          <img src={Movie} alt="" className="object-fit  " />
        </div>
        <div className=" border rounded-md shadow-lg overflow-hidden hover:scale-105 transition duration-500 ">
          <img src={Shoe} alt="" className="object-fit " />
        </div>
        <div className=" border rounded-md shadow-lg overflow-hidden hover:scale-105 transition duration-500 ">
          <img src={Weather} alt="" className="object-fit" />
        </div>
        <div className=" border rounded-md shadow-lg ">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            consequuntur doloribus a, recusandae explicabo ad perferendis facere
            ducimus porro! Hic harum officiis nisi debitis reiciendis quibusdam
            exercitationem ab magni laboriosam?
          </h1>
        </div>
        <div className=" border rounded-md shadow-lg ">
          <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quam minima dolores nihil ratione, similique veritatis qui officia
            consequuntur eum atque incidunt ullam recusandae eius, laboriosam
            eos architecto necessitatibus optio.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
