import React from "react";
import cpp from "../assets/c++.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import GitHub from "../assets/github.png";
import JavaScript from "../assets/javascript.png";
import node from "../assets/node.png";
import reactImage from "../assets/react.png";
import nextImage from "../assets/nextjs.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png";

const Experience = () => {
  const technologies = [
    {
      id: 1,
      src: cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: reactImage,
      title: "React JS",
      style: "shadow-sky-500",
    },
    {
      id: 4,
      src: nextImage,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 5,
      src: node,
      title: "Node JS",
      style: "shadow-green-500",
    },
    {
      id: 6,
      src: HTML,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 7,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 9,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
    {
      id: 10,
      src: GitHub,
      title: "GitHub",
      style: "shadow-black",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-700 to-gray-900 w-full h-full pt-5 md:pt-40"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
            Experience
          </p>
          <p className="py-6">These are the technologies i have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src, title, style }) => (
            <div
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img className="w-20 mx-auto" src={src} alt="" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
