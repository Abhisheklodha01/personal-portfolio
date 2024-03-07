import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-700 to-gray-900 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Hi i Abhishek lodha and i am currently pursuing my Bachelor of
          Technology in Information Technology batch(2021-2025) from oreintal
          college of technology bhopal (M.P.)
        </p>
        <br />
        <p className="text-xl">
          I am computer science student with experties in C++, JavaScript, HTML,
          CSS. Data Structures and Algorithams MongoDB and MySQL. Passionate
          about learning new technology. I am always ready to contribute to
          innovative projects and drive success through technical success
        </p>
      </div>
    </div>
  );
};

export default About;
