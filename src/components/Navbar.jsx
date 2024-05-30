import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
import LogoImage from '../assets/Logo.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className="flex justify-between items-center 
                    w-full h-20 text-white  bg-[#0D4754] px-4"
    >
      <div>
        <img
          className="h-16 w-16 rounded-full bg-transparent"
          src={LogoImage}
          alt="logo"
        />
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
            hover:scale-105 duration-200 text-gray-300"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="md:hidden cursor-pointer pr-4 z-20 text-gray-300"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center
       items-center absolute top-0 left-0 w-full h-screen bg-slate-800 text-gray-200"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
