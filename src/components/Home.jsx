import React from "react";
import { ReactTyped } from "react-typed";
import { FaArrowRightLong } from "react-icons/fa6";
import HeroImage from "../assets/HeroImage.jpg";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-gray-900 to-gray-700"
    >
      <div
        className="max-w-screen-lg mx-auto
           flex flex-col items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a{" "}
            <span style={{color:'blue'}}>
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Backend Doveloper",
                  "Frontend Doveloper",
                ]}
                typeSpeed={50}
                backSpeed={50}
               
              ></ReactTyped>
              </span>
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            I love to building and desgining software. Currently, I love to work
            on web application usnig technologies like React, Tailwind, Node JS
            and MongoDB
          </p>
          <div>
            <Link to="portfolio" smooth duration={500}
              className="group text-white w-fit px-6 py-3 my-2  flex items-center rounded-md
                    bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className=" group-hover:rotate-90 duration-300">
                <FaArrowRightLong size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
        <img
            className="rounded-2xl mx-auto w-2/3 md:h-full"
            src={HeroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
