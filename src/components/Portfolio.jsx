import React from "react";
import cryptoProject from "../assets/portfolio/crypto-project.png";
import fitnessProject from "../assets/portfolio/fitness-app.png";
import hookProject from "../assets/portfolio/hooks-project.png";
import usabilityHub from "../assets/portfolio/usabilityhub-clone.png";
import videoHub from "../assets/portfolio/videoHub.png";
import youtubeProject from "../assets/portfolio/youtube-clone.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fitnessProject,
      name:'Fitness Application',
      to:'https://fitnessappbyabhi.netlify.app',
      toGithub: 'https://github.com/Abhisheklodha01/Fitness-WebApp'
      
      
    },
    {
      id: 2,
      src: youtubeProject,
      name:'Youtube clone',
      to:'https://youtubeclonebyabhi.netlify.app',
      toGithub:'https://github.com/Abhisheklodha01/youtube-clone'
    },
    {
      id: 3,
      src: cryptoProject,
      name:'Crypto Currency',
      to:'https://abhicryptocurrency.netlify.app',
      toGithub:'https://github.com/Abhisheklodha01/react-crypto-app'
    },
    {
      id: 4,
      src: usabilityHub,
      name:'clone of usaabilityHub',
      to:'https://usabilityhubclonebyabhi.netlify.app',
      toGithub:'#'
    },
    {
      id: 5,
      src: videoHub,
      name:'Video Hub',
      to:'https://abhilodha01videohub.netlify.app',
      toGithub:'https://github.com/Abhisheklodha01/react-video-hub'
    },
    {
      id: 6,
      src: hookProject,
      name:'React Project',
      to:'https://abhisheklodha01.netlify.app',
      toGithub:'https://github.com/Abhisheklodha01/Hooks-and-State-Management-Project'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-900 to-gray-700 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Protfolio
          </p>
          <p className="py-6">Check out some of my work right here </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 px-12 ">
          {portfolios.map(({ id, src, to, toGithub, name }) => (
            <div
            key={id}
            className="shadow-md shadow-gray-600 rounded-lg">
               <p className=" text-xl font-bold text-center mb-2 text-gray-400">{name}</p>
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
             
                <a
                href={to}
                target="_blank"
                
                className="w-1/2 px-6 m-4 duration-200 hover:scale-105 ">
                  Demo
                </a>
                <a
                href={toGithub}
                target="_blank"
                className="w-1/2 px-6 m-4 duration-200 hover:scale-105 ">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
