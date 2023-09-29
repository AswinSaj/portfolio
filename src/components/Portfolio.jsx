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
      <h1 className="text-center text-3xl font-medium text-teal-300 pb-5">
        Portfolio
      </h1>
      <div className="text-center px-5 md:grid grid-cols-3 gap-3">
        <div className=" mb-5 border rounded-md shadow-lg overflow-hidden hover:scale-105 transition duration-500  bg-[#F3F2EF] ">
          <img src={Linkedin} alt="" className="object-fit " />
          <div className=" flex justify-around">
            <div>
              <a
                href="https://github.com/AswinSaj/linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-1 px-[15vw] border rounded-lg text-black hover:bg-black hover:text-white md:px-[5vw]">
                  <AiFillGithub className="" />
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://aswin-linkedin-clone.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" p-1 px-[15vw] border rounded-lg text-black hover:bg-black hover:text-white md:px-[5vw]">
                  <TbWorldWww />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mb-5 border rounded-md shadow-lg overflow-hidden hover:scale-105 transition duration-500 ">
          <img src={Movie} alt="" className="object-fit  " />
          <div className=" flex justify-around bg-[#F1F5F8] ">
            <div>
              <a
                href="https://github.com/AswinSaj/movieDB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-1 px-[15vw] border rounded-lg text-black hover:bg-black hover:text-white md:px-[5vw]">
                  <AiFillGithub />
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://movie-db-aswin.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" p-1 px-[15vw] border rounded-lg text-black hover:bg-black hover:text-white md:px-[5vw]">
                  <TbWorldWww />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mb-5 border rounded-md shadow-lg overflow-hidden hover:scale-105 transition duration-500 ">
          <img src={Shoe} alt="" className="object-fit " />
          <div className=" flex justify-around bg-[#FFFFFF]">
            <div>
              <a
                href="https://github.com/AswinSaj/ShoeBrand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-1 px-[15vw] border rounded-lg text-black  hover:bg-black hover:text-white md:px-[5vw]">
                  <AiFillGithub />
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://aswinsaj.github.io/ShoeBrand/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" p-1 px-[15vw] border rounded-lg text-black hover:bg-black hover:text-white md:px-[5vw]">
                  <TbWorldWww />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="mb-5 border rounded-md shadow-lg overflow-hidden hover:scale-105 transition duration-500 ">
          <img src={Weather} alt="" className="object-fit" />
          <div className=" flex justify-around bg-[#2A2828]">
            <div>
              <a
                href="https://github.com/AswinSaj/weatherApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-1 px-[15vw] border rounded-lg text-white hover:bg-white hover:text-black md:px-[5vw]">
                  <AiFillGithub className="" />
                </button>
              </a>
            </div>
            <div>
              <a
                href="https://aswinsaj.github.io/weatherApp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className=" p-1 px-[15vw] border rounded-lg text-white hover:bg-white hover:text-black md:px-[5vw]">
                  <TbWorldWww className="" />
                </button>
              </a>
            </div>
          </div>
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
